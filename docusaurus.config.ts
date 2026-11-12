import type { Config, PluginConfig } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const ORG = 'akui-solutions';
const REPO = 'consul-point-docs';

// Inyecta Tailwind CSS en el pipeline de PostCSS de Docusaurus.
const tailwindPlugin: PluginConfig = function tailwindPlugin() {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(tailwindcss, autoprefixer);
      return postcssOptions;
    },
  };
};

const config: Config = {
  title: 'ConsulPoint',
  tagline: 'Documentación de la plataforma de agentes de IA empresarial',
  favicon: 'img/favicon.ico',

  // Dominio propio. El DNS de docs.consulpoint.com debe apuntar a GitHub Pages
  // (CNAME → akui-solutions.github.io) y el dominio debe estar configurado en
  // Settings → Pages del repositorio. Ver README, sección "Dominio propio".
  url: 'https://docs.consulpoint.com',
  baseUrl: '/',

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
  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/modulos/apps', to: '/aplicaciones-integradas' },
          {
            from: '/modulos/complementos/portal/espacios-de-trabajo',
            to: '/modulos/espacios-de-trabajo',
          },
        ],
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
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
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'ConsulPoint',
        src: 'img/logo-wordmark-navy.png',
        srcDark: 'img/logo-wordmark-light.png',
        // 32px (2rem), el mismo tamaño de logo que usa docs.iota.org
        // (también sobre Docusaurus). Sin `width` fijo: el ancho se escala
        // en proporción (271x67 reales) para no deformar el logo.
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
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
            { label: 'Estudio', to: '/modulos/estudio' },
          ],
        },
        {
          title: 'Módulos',
          items: [
            { label: 'Centro de Conocimiento', to: '/modulos/centro-de-conocimiento' },
            { label: 'Conversaciones', to: '/modulos/conversaciones' },
            { label: 'Integraciones', to: '/modulos/integraciones' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Akui Solutions · ConsulPoint`,
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
