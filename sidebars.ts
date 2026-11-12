import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Centro de Conocimiento: documentos que consultan los agentes.
const centroDeConocimientoCategory = {
  type: 'category' as const,
  label: 'Centro de Conocimiento',
  link: {
    type: 'doc' as const,
    id: 'centro-de-conocimiento/centro-de-conocimiento-overview',
  },
  items: [
    'centro-de-conocimiento/carpetas-y-archivos',
    'centro-de-conocimiento/subir-documentos',
    'centro-de-conocimiento/conocimiento-de-los-agentes',
    'centro-de-conocimiento/compartir-y-permisos',
    'centro-de-conocimiento/extraccion-inteligente',
    'centro-de-conocimiento/multimedia',
    'centro-de-conocimiento/problemas-frecuentes',
  ],
};

// Estudio: creación de agentes, especialistas, microagentes y esquemas de datos.
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

// Guía de aplicaciones integradas: qué son, cómo se desarrollan y cómo se administran.
const aplicacionesIntegradasCategory = {
  type: 'category' as const,
  label: 'Aplicaciones integradas',
  link: {
    type: 'doc' as const,
    id: 'aplicaciones-integradas/aplicaciones-integradas-overview',
  },
  items: [
    'aplicaciones-integradas/como-funcionan',
    'aplicaciones-integradas/donde-aparecen',
    {
      type: 'category' as const,
      label: 'Desarrollar',
      items: [
        'aplicaciones-integradas/desarrollar/primera-aplicacion',
        'aplicaciones-integradas/desarrollar/contexto',
        'aplicaciones-integradas/desarrollar/api-y-sesion',
        'aplicaciones-integradas/desarrollar/datos-propios',
        'aplicaciones-integradas/desarrollar/archivos-y-extracciones',
        'aplicaciones-integradas/desarrollar/comunicacion',
        'aplicaciones-integradas/desarrollar/probar',
      ],
    },
    'aplicaciones-integradas/publicar',
    'aplicaciones-integradas/instalar-y-administrar',
    'aplicaciones-integradas/referencia',
    'aplicaciones-integradas/problemas-frecuentes',
  ],
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
      label: 'Uso diario',
      collapsed: false,
      items: [
        'modulos/inicio',
        'modulos/conversaciones',
        'modulos/bandeja-inteligente',
        'modulos/articulos-y-novedades',
      ],
    },
    centroDeConocimientoCategory,
    estudioCategory,
    aplicacionesIntegradasCategory,
    {
      type: 'category',
      label: 'Administración',
      items: [
        configuracionCategory,
        'modulos/espacios-de-trabajo',
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
