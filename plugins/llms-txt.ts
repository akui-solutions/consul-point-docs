import fs from 'fs/promises';
import path from 'path';
import type { LoadContext, Plugin } from '@docusaurus/types';

/**
 * Genera /llms.txt y /llms-full.txt al compilar (formato de https://llmstxt.org).
 *
 * - llms.txt: índice para asistentes de IA. Una línea por página, con su título,
 *   su URL y su descripción, en el orden de los menús.
 * - llms-full.txt: el texto de todas las páginas en un solo archivo, sin los
 *   componentes visuales (capturas, tarjetas), para quien quiera leerlo entero.
 *
 * Sale de los mismos documentos y menús que el sitio: no hay que mantenerlo a mano.
 */

type Doc = { id: string; title: string; description: string; permalink: string; source: string };
type SidebarItem =
  | { type: 'doc' | 'ref'; id: string }
  | { type: 'category'; label: string; link?: { type: string; id?: string }; items: SidebarItem[] }
  | { type: string };

const SECTIONS: [string, string][] = [
  ['usoSidebar', 'Guía de uso'],
  ['administracionSidebar', 'Administración'],
  ['desarrolladoresSidebar', 'Desarrolladores'],
];

const SUMMARY =
  'ConsulPoint es una plataforma de agentes de IA para empresas: conversaciones con agentes que ' +
  'responden con los documentos de la organización, un centro de conocimiento, canales como WhatsApp ' +
  'y Telegram, aplicaciones integradas y herramientas de administración. Esta es su documentación oficial, en español.';

/** Ids de documento de un menú, en orden, agrupados por su categoría de primer nivel. */
function walk(items: SidebarItem[], group: string, out: [string, string][]): void {
  for (const item of items) {
    if ((item.type === 'doc' || item.type === 'ref') && 'id' in item) out.push([group, item.id]);
    if (item.type === 'category' && 'items' in item) {
      if (item.link?.type === 'doc' && item.link.id) out.push([group, item.link.id]);
      walk(item.items, group, out);
    }
  }
}

/** Markdown legible sin frontmatter, imports ni componentes MDX. */
function toPlain(raw: string): string {
  return raw
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/^import .*$/gm, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<PageMeta route="([^"]*)"\s*\/>/g, 'Ruta en la plataforma: `$1`.')
    .replace(/<PageMeta route="([^"]*)">([\s\S]*?)<\/PageMeta>/g, 'Ruta en la plataforma: `$1`. Permiso: $2.')
    .replace(/<Screenshot[^>]*alt="([^"]*)"[^>]*\/>/g, '')
    .replace(/<\/?[A-Z][A-Za-z]*(\s[^>]*)?\/?>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export default function llmsTxtPlugin(context: LoadContext): Plugin {
  let docs: Doc[] = [];
  let order: [string, string][] = [];
  return {
    name: 'llms-txt',
    async allContentLoaded({ allContent }) {
      const docsContent = (allContent['docusaurus-plugin-content-docs'] as Record<string, any>)?.default;
      const version = docsContent?.loadedVersions?.[0];
      if (!version) return;
      docs = version.docs;
      order = [];
      for (const [sidebarId, section] of SECTIONS) {
        const items: SidebarItem[] = version.sidebars?.[sidebarId] ?? [];
        for (const item of items) {
          const group = item.type === 'category' && 'label' in item ? `${section} · ${item.label}` : section;
          walk([item], group, order);
        }
      }
    },
    async postBuild({ outDir }) {
      const site = context.siteConfig.url.replace(/\/$/, '');
      const byId = new Map(docs.map((d) => [d.id, d]));
      const seen = new Set<string>();
      const groups = new Map<string, Doc[]>();
      for (const [group, id] of order) {
        const doc = byId.get(id);
        if (!doc || seen.has(id)) continue;
        seen.add(id);
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group)!.push(doc);
      }

      const index = [`# ${context.siteConfig.title}`, '', `> ${SUMMARY}`, ''];
      const full = [`# ${context.siteConfig.title}`, '', `> ${SUMMARY}`, ''];
      for (const [group, list] of groups) {
        index.push(`## ${group}`, '');
        for (const doc of list) {
          const url = site + doc.permalink;
          index.push(`- [${doc.title}](${url})${doc.description ? `: ${doc.description}` : ''}`);
          const file = path.join(context.siteDir, doc.source.replace(/^@site\//, ''));
          const body = toPlain(await fs.readFile(file, 'utf8'));
          full.push('---', '', `Fuente: ${url}`, '', body, '');
        }
        index.push('');
      }

      await fs.writeFile(path.join(outDir, 'llms.txt'), index.join('\n'));
      await fs.writeFile(path.join(outDir, 'llms-full.txt'), full.join('\n'));
    },
  };
}
