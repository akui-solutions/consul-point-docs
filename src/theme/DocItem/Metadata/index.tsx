import React from 'react';
import Metadata from '@theme-original/DocItem/Metadata';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData';
import { sidebarOf, type DocsGlobalData } from '@site/src/components/TabHint';

/**
 * Imagen para compartir según la pestaña de la página (Guía de uso, Administración,
 * Desarrolladores) y el idioma, en 1200x630. Las de otros idiomas están en
 * img/social/<idioma>/. Las páginas que no son documentos usan la de
 * `themeConfig.image`.
 */
const IMAGES: Record<string, string> = {
  usoSidebar: '/img/social/guia-de-uso.png',
  administracionSidebar: '/img/social/administracion.png',
  desarrolladoresSidebar: '/img/social/desarrolladores.png',
};

// El original no recibe contenido; el tipo genérico de @theme-original pide `children`.
type Props = { children?: React.ReactNode };

export default function MetadataWrapper(props: Props): React.JSX.Element {
  const { pathname } = useLocation();
  const docsData = (useGlobalData()['docusaurus-plugin-content-docs'] ?? {}) as DocsGlobalData;
  const sidebar = sidebarOf(pathname, docsData);
  const { i18n } = useDocusaurusContext();
  const file = IMAGES[sidebar ?? ''] ?? '/img/social/guia-de-uso.png';
  const localized =
    i18n.currentLocale === i18n.defaultLocale ? file : file.replace('/social/', `/social/${i18n.currentLocale}/`);
  const image = useBaseUrl(localized, { absolute: true });
  return (
    <>
      <Metadata>{props.children}</Metadata>
      <Head>
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </>
  );
}
