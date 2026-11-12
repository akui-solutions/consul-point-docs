import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Estudio se muestra como subcategoría tanto en "Módulos" como en
// "Control y Auditoría"; se define una vez y se reutiliza en ambas.
const estudioCategory = {
  type: 'category' as const,
  label: 'Estudio',
  link: { type: 'doc' as const, id: 'control/estudio/estudio-overview' },
  items: [
    'control/estudio/agentes',
    'control/estudio/especialistas',
    'control/estudio/microagentes',
    'control/estudio/esquemas-de-datos',
  ],
};

// Configuración integra Webhooks, Usuarios y Roles, e Integraciones y Canales.
const configuracionCategory = {
  type: 'category' as const,
  label: 'Configuración',
  link: { type: 'doc' as const, id: 'control/configuracion/configuracion-overview' },
  items: ['control/webhooks', 'organizacion/usuarios-y-roles', 'modulos/integraciones'],
};

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introducción',
      collapsed: false,
      items: [
        'introduccion/vision-general',
        'introduccion/conceptos',
        'introduccion/navegacion',
      ],
    },
    {
      type: 'category',
      label: 'Módulos',
      collapsed: false,
      items: [
        'modulos/inicio',
        'modulos/centro-de-conocimiento',
        'modulos/conversaciones',
        'modulos/bandeja-inteligente',
        'modulos/apps',
        'modulos/articulos-y-novedades',
        'modulos/espacios-de-trabajo',
      ],
    },
    {
      type: 'category',
      label: 'Control y Auditoría',
      items: [
        estudioCategory,
        configuracionCategory,
        'organizacion/catalogo-de-aplicaciones',
        'control/auditoria-y-reportes',
      ],
    },
    {
      type: 'category',
      label: 'Referencia',
      items: [
        'referencia/campos',
        'referencia/permisos',
        'referencia/glosario',
      ],
    },
  ],
};

export default sidebars;
