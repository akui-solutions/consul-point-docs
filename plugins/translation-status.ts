import type { LoadContext, Plugin } from '@docusaurus/types';
// Módulo JavaScript compartido con el script de la línea de comandos.
import { report } from '../scripts/translation-status.mjs';

/**
 * Traducciones:
 * - En los idiomas que no son el español, publica la lista de páginas que aún no
 *   están traducidas (se muestran en español), para que la página avise de ello.
 * - Al compilar en español, avisa de las páginas traducidas que se han quedado
 *   atrás de su original. Ver scripts/translation-status.mjs.
 */
export type TranslationStatusData = { untranslated: string[] };

export default function translationStatusPlugin(context: LoadContext): Plugin {
  const { currentLocale, defaultLocale } = context.i18n;
  return {
    name: 'translation-status',
    async loadContent() {
      if (currentLocale === defaultLocale) report();
    },
    async allContentLoaded({ allContent, actions }) {
      const docsContent = (allContent['docusaurus-plugin-content-docs'] as Record<string, any>)?.default;
      const docs: { source: string; permalink: string }[] = docsContent?.loadedVersions?.[0]?.docs ?? [];
      const untranslated =
        currentLocale === defaultLocale
          ? []
          : docs.filter((d) => d.source.startsWith('@site/docs/')).map((d) => d.permalink);
      actions.setGlobalData({ untranslated } satisfies TranslationStatusData);
    },
  };
}
