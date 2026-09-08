import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
      label: 'Módulos principales',
      collapsed: false,
      items: [
        'modulos-principales/estudio',
        'modulos-principales/centro-de-conocimiento',
        'modulos-principales/conversaciones',
        'modulos-principales/bandeja-inteligente',
        'modulos-principales/integraciones',
      ],
    },
    {
      type: 'category',
      label: 'Organización',
      items: [
        'organizacion/espacios-de-trabajo',
        'organizacion/usuarios-y-roles',
        'organizacion/catalogo-de-aplicaciones',
      ],
    },
    {
      type: 'category',
      label: 'Control',
      items: [
        'control/auditoria-y-reportes',
        'control/configuracion',
        'control/webhooks',
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
