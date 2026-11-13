import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';

/**
 * Las páginas están repartidas en tres pestañas (Guía de uso, Desarrolladores,
 * Administración), cada una con su propio menú. Un enlace que lleva a otra pestaña
 * cambia el menú lateral entero; esta etiqueta lo avisa antes de pulsar.
 */

type GlobalDoc = { path: string; sidebar?: string };
export type DocsGlobalData = Record<
  string,
  { versions: { docs: GlobalDoc[]; sidebars?: Record<string, { link?: { path: string } }> }[] }
>;
export type NavbarItem = { type?: string; sidebarId?: string; label?: string };

function normalize(path: string): string {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

/** Menú lateral (pestaña) al que pertenece una ruta del sitio. */
export function sidebarOf(path: string, docsData: DocsGlobalData): string | undefined {
  const target = normalize(path);
  for (const plugin of Object.values(docsData)) {
    for (const version of plugin.versions) {
      const doc = version.docs.find((d) => normalize(d.path) === target);
      if (doc) return doc.sidebar;
    }
  }
  return undefined;
}

/** Nombre de la pestaña a la que lleva `href`, solo si no es la pestaña de la página actual. */
export function useOtherTab(href: string | undefined): string | null {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const docsData = (useGlobalData()['docusaurus-plugin-content-docs'] ?? {}) as DocsGlobalData;
  const { withBaseUrl } = useBaseUrlUtils();

  if (!href || !href.startsWith('/')) return null;
  const current = sidebarOf(pathname, docsData);
  // En otro idioma las rutas llevan su prefijo (/en/…); los enlaces de las páginas, no.
  const target = sidebarOf(withBaseUrl(href), docsData);
  if (!current || !target || current === target) return null;

  const items = ((siteConfig.themeConfig.navbar as { items?: NavbarItem[] })?.items ?? []);
  const tab = items.find((item) => item.type === 'docSidebar' && item.sidebarId === target);
  return tab?.label ?? null;
}

/** Etiqueta pequeña con el nombre de la otra pestaña. */
export function TabHint({ label }: { label: string }): React.JSX.Element {
  return (
    <span className="tab-hint" title={translate(
        { id: 'cp.tabHint.title', message: 'Esta página está en la pestaña {label}' },
        { label },
      )}>
      {label}
    </span>
  );
}

export default TabHint;
