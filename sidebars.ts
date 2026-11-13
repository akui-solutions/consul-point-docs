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
      'introduccion/acceder-a-la-plataforma',
      'introduccion/tu-cuenta',
      'introduccion/notificaciones',
    ]),
    group('Módulos', [
      'modulos/inicio',
      'modulos/articulos-y-novedades',
      'modulos/contactos',
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
        'control/estudio/habilidades',
        'control/estudio/crear-una-habilidad',
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
    group('API de agentes', ['api-agentes/consultar-un-agente']),
    group('Canal de aplicación externa', ['canal-externo/api']),
  ],

  // Mismos grupos que el menú de Configuración de la plataforma.
  administracionSidebar: [
    'control/configuracion/configuracion-overview',
    group('Acceso y organización', [
      'organizacion/usuarios',
      'organizacion/roles',
      'organizacion/equipos',
      'organizacion/datos-de-la-organizacion',
      'organizacion/suscripcion',
      'modulos/espacios-de-trabajo',
    ]),
    group('IA e integraciones', [
      'organizacion/proveedores-de-ia',
      module('Integraciones y canales', 'modulos/integraciones', [
        'organizacion/canales/whatsapp',
        'organizacion/canales/telegram',
        'organizacion/canales/aplicacion-externa',
        'organizacion/canales/google-calendar',
      ]),
      'organizacion/conectores',
      'organizacion/catalogo-de-aplicaciones',
      'aplicaciones-integradas/instalar-y-administrar',
    ]),
    group('Datos y personalización', [
      'organizacion/tipos-de-contacto',
      'organizacion/etiquetas',
      'organizacion/barra-lateral',
    ]),
    group('Desarrolladores', ['organizacion/claves-de-api', 'control/webhooks']),
    group('Control', [
      'control/auditoria-y-reportes',
      'organizacion/creditos-y-limites',
      'referencia/permisos',
      'control/configuracion/problemas-frecuentes',
    ]),
  ],
};

export default sidebars;
