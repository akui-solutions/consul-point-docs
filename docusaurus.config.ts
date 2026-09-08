import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const ORG = 'akui-solutions';
const REPO = 'consul-point-docs';

const config: Config = {
  title: 'Consul Point',
  tagline: 'Documentación de la plataforma de agentes de IA empresarial',
  favicon: 'img/favicon.ico',

  // Ajusta `url` si configuráis un dominio propio (ej. https://docs.consulpoint.com)
  url: `https://${ORG}.github.io`,
  baseUrl: `/${REPO}/`,

  organizationName: ORG,
  projectName: REPO,
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: { label: 'Español', htmlLang: 'es-ES' },
      // Para activar inglés: añade 'en' a `locales` y traduce en i18n/en/
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Consul Point',
      logo: {
        alt: 'Consul Point',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: `https://github.com/${ORG}/${REPO}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            { label: 'Visión general', to: '/introduccion/vision-general' },
            { label: 'Conceptos fundamentales', to: '/introduccion/conceptos' },
            { label: 'Estudio', to: '/modulos-principales/estudio' },
          ],
        },
        {
          title: 'Módulos',
          items: [
            { label: 'Centro de Conocimiento', to: '/modulos-principales/centro-de-conocimiento' },
            { label: 'Conversaciones', to: '/modulos-principales/conversaciones' },
            { label: 'Integraciones', to: '/modulos-principales/integraciones' },
          ],
        },
        {
          title: 'Referencia',
          items: [
            { label: 'Referencia de campos', to: '/referencia/campos' },
            { label: 'Matriz de permisos', to: '/referencia/permisos' },
            { label: 'Glosario', to: '/referencia/glosario' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akui Solutions · Consul Point`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Búsqueda: solicitad Algolia DocSearch (gratis para docs públicas)
    // en https://docsearch.algolia.com/apply/ y descomentad este bloque.
    // algolia: {
    //   appId: 'TU_APP_ID',
    //   apiKey: 'TU_SEARCH_API_KEY',
    //   indexName: 'consul-point',
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
