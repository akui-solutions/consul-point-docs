import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Tres menús, uno por pestaña de la barra superior: Guía de uso, Desarrolladores
 * y Administración. Dentro de cada uno, los grupos son títulos fijos (no se
 * pliegan) con sus páginas siempre a la vista. Cada página está en un solo menú.
 */
/** Módulo con subpáginas: desplegable que abre su resumen al pulsarlo. */
const module = (label: string, overview: string, items: string[]) => ({
  type: 'category' as const,
  label,
  collapsed: true,
  link: { type: 'doc' as const, id: overview },
  items,
});

/** Apartado dentro de un grupo, sin página propia: desplegable que empieza abierto. */
const section = (label: string, items: string[]) => ({
  type: 'category' as const,
  label,
  collapsed: false,
  items,
});

const group = (
  label: string,
  items: (string | ReturnType<typeof module> | ReturnType<typeof section>)[],
) => ({
  type: 'category' as const,
  label,
  collapsible: false,
  className: 'sidebar-group',
  items,
});


const sidebars: SidebarsConfig = {
  usoSidebar: [
    group('Primeros pasos', [
      'intro',
      'introduccion/vision-general',
      'introduccion/conceptos',
      'introduccion/navegacion',
    ]),
    group('Módulos', [
      'modulos/inicio',
      'modulos/articulos-y-novedades',
      module('Conversaciones', 'conversaciones/conversaciones-overview', [
        'conversaciones/conversar-con-un-agente',
        'conversaciones/compartir-y-colaborar',
        'conversaciones/canales-y-atencion-humana',
        'conversaciones/problemas-frecuentes',
      ]),
      module('Bandeja Inteligente', 'bandeja-inteligente/bandeja-inteligente-overview', [
        'bandeja-inteligente/conectar-una-cuenta',
        'bandeja-inteligente/leer-el-correo',
        'bandeja-inteligente/reglas-de-correo',
        'bandeja-inteligente/analisis-con-ia',
        'bandeja-inteligente/problemas-frecuentes',
      ]),
      module('Centro de Conocimiento', 'centro-de-conocimiento/centro-de-conocimiento-overview', [
        'centro-de-conocimiento/carpetas-y-archivos',
        'centro-de-conocimiento/subir-documentos',
        'centro-de-conocimiento/conocimiento-de-los-agentes',
        'centro-de-conocimiento/compartir-y-permisos',
        'centro-de-conocimiento/extraccion-inteligente',
        'centro-de-conocimiento/multimedia',
        'centro-de-conocimiento/problemas-frecuentes',
      ]),
      module('Estudio', 'control/estudio/estudio-overview', [
        'control/estudio/crear-un-agente',
        'control/estudio/agentes',
        'control/estudio/especialistas',
        'control/estudio/microagentes',
        'control/estudio/esquemas-de-datos',
        'control/estudio/problemas-frecuentes',
      ]),
      module('Aplicaciones integradas', 'aplicaciones-integradas/aplicaciones-integradas-overview', [
        'aplicaciones-integradas/como-funcionan',
        'aplicaciones-integradas/donde-aparecen',
        'aplicaciones-integradas/problemas-frecuentes',
      ]),
    ]),
    group('Referencia', ['referencia/glosario']),
  ],

  // Un grupo por tema técnico. Hoy solo aplicaciones integradas; otros temas
  // (por ejemplo, una API pública) irían como grupos hermanos.
  desarrolladoresSidebar: [
    group('Aplicaciones integradas', [
      section('Primeros pasos', [
        'aplicaciones-integradas/desarrollar/primera-aplicacion',
        'aplicaciones-integradas/desarrollar/plantilla-de-inicio',
        'aplicaciones-integradas/desarrollar/probar',
        'aplicaciones-integradas/publicar',
      ]),
      section('Trabajar con la plataforma', [
        'aplicaciones-integradas/desarrollar/contexto',
        'aplicaciones-integradas/desarrollar/api-y-sesion',
        'aplicaciones-integradas/desarrollar/datos-propios',
        'aplicaciones-integradas/desarrollar/archivos-y-extracciones',
        'aplicaciones-integradas/desarrollar/comunicacion',
      ]),
      'aplicaciones-integradas/referencia',
    ]),
  ],

  administracionSidebar: [
    group('Organización', [
      'control/configuracion/configuracion-overview',
      'organizacion/usuarios-y-roles',
      'modulos/espacios-de-trabajo',
    ]),
    group('Canales e integraciones', [
      'modulos/integraciones',
      'control/webhooks',
    ]),
    group('Aplicaciones', [
      'organizacion/catalogo-de-aplicaciones',
      'aplicaciones-integradas/instalar-y-administrar',
    ]),
    group('Control', ['control/auditoria-y-reportes', 'referencia/permisos']),
  ],
};

export default sidebars;
