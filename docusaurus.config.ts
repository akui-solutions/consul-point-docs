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
  themes: [
    '@docusaurus/theme-mermaid',
    // Buscador local: el índice se genera al compilar y viaja con el sitio; no
    // depende de ningún servicio externo. Solo funciona en la versión compilada
    // (pnpm build && pnpm serve), no con pnpm start. Textos en i18n/es/code.json.
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['es'],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
        searchResultLimits: 8,
      },
    ],
  ],
  clientModules: ['./src/clientModules/tableLabels.ts'],
  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/modulos/apps', to: '/aplicaciones-integradas' },
          // Los límites de cada formulario están en la página de ese formulario.
          { from: '/referencia/campos', to: '/control/estudio/crear-un-agente' },
          { from: '/organizacion/usuarios-y-roles', to: '/organizacion/usuarios' },
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
        // El mismo SVG que la plataforma (consul-point-fe, LogoConsulPoint), con
        // sus colores de tema claro y oscuro. Ancho proporcional (742x131).
        src: 'img/logo-wordmark.svg',
        srcDark: 'img/logo-wordmark-dark.svg',
        height: 24,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'usoSidebar', position: 'left', label: 'Guía de uso' },
        {
          type: 'docSidebar',
          sidebarId: 'desarrolladoresSidebar',
          position: 'left',
          label: 'Desarrolladores',
        },
        {
          type: 'docSidebar',
          sidebarId: 'administracionSidebar',
          position: 'left',
          label: 'Administración',
        },
        { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'ConsulPoint',
        src: 'img/logo-wordmark.svg',
        srcDark: 'img/logo-wordmark-dark.svg',
        height: 22,
      },
      // Una columna por tema, con sus páginas más consultadas (Guía de uso,
      // Administración y, de Desarrolladores, las aplicaciones integradas).
      links: [
        {
          title: 'Guía de uso',
          items: [
            { label: 'Conceptos fundamentales', to: '/introduccion/conceptos' },
            { label: 'Centro de Conocimiento', to: '/modulos/centro-de-conocimiento' },
            { label: 'Estudio', to: '/modulos/estudio' },
            { label: 'Glosario', to: '/referencia/glosario' },
          ],
        },
        {
          title: 'Administración',
          items: [
            { label: 'Usuarios', to: '/organizacion/usuarios' },
            { label: 'Roles', to: '/organizacion/roles' },
            { label: 'Integraciones y canales', to: '/modulos/integraciones' },
            { label: 'Auditoría y Reportes', to: '/control/auditoria-y-reportes' },
            { label: 'Matriz de permisos', to: '/referencia/permisos' },
          ],
        },
        {
          title: 'Aplicaciones integradas',
          items: [
            { label: 'Tu primera aplicación', to: '/aplicaciones-integradas/desarrollar/primera-aplicacion' },
            { label: 'Contexto que recibe', to: '/aplicaciones-integradas/desarrollar/contexto' },
            { label: 'Publicar', to: '/aplicaciones-integradas/publicar' },
            { label: 'Referencia técnica', to: '/aplicaciones-integradas/referencia' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akui Solutions · ConsulPoint`,
    },
    // Diagramas: texto algo más pequeño que el de Mermaid por defecto. Se deja su
    // tipografía: con la del sitio mide mal el texto y lo corta en las cajas.
    mermaid: {
      options: {
        themeVariables: {
          fontSize: '14px',
        },
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
