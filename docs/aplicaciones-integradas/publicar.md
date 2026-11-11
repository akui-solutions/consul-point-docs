---
id: publicar
title: Publicar
sidebar_label: Publicar
sidebar_position: 5
description: Cómo crear una aplicación integrada en ConsulPoint y publicar sus versiones. Reglas del paquete ZIP, modelos, permisos y publicación en el catálogo.
---

# Publicar

**Ruta:** `/settings/applications`
**Permiso requerido:** creación sobre **Aplicaciones** y una suscripción activa

## Descripción

Publicar una aplicación consiste en **crearla** en ConsulPoint, **subir su paquete** como una versión y **concederle** los permisos y modelos de datos que necesita. Esta página describe el caso de una aplicación **Propia**; la publicación en el catálogo se explica al final.

## Crear la aplicación

En **Configuración → Aplicaciones**, pulsar **Crear aplicación**.

<Screenshot src="/img/aplicaciones-integradas/crear-aplicacion.png" alt="Formulario Nueva aplicación en ConsulPoint" caption="Formulario Nueva aplicación, con datos de ejemplo" />

| Campo | Contenido |
|---|---|
| **Nombre de la aplicación** | Entre 3 y 64 caracteres |
| **Descripción** | Qué hace y para quién |
| **Tipo de aplicación** | **Extensión**, **Visualizador** o **Filtro**. Determina [dónde aparece](/aplicaciones-integradas/donde-aparecen) |
| **Categorías** | Para clasificarla en los listados |
| **Ruta de acceso** | Opcional. Identificador legible, en minúsculas con guiones |
| **Visibilidad** | **Privado** o **Público** |
| **Esquema de datos** | Opcional. La forma de los datos que la aplicación intercambia |
| **Identidad visual** | Icono y colores, o una imagen |
| **Primera versión** | Opcional. Si se adjunta el paquete al crear, se publica como `1.0.0` |

**Guardar como borrador** crea la aplicación sin ponerla a disposición de los usuarios hasta que se active.

## Publicar una versión

En la pestaña **Versiones**, pulsar **Publicar versión**.

<Screenshot src="/img/aplicaciones-integradas/aplicacion-versiones.png" alt="Pestaña Versiones de una aplicación propia en ConsulPoint" caption="Pestaña Versiones de una aplicación propia, con su primera versión publicada" />

| Campo | Contenido |
|---|---|
| **Versión** | Formato `X.Y.Z`, por ejemplo `1.2.0` |
| **Archivo ZIP** | El paquete de la aplicación |

### Estados de una versión

| Estado | Significado |
|---|---|
| **Pendiente** · **Procesando** | El paquete se está desplegando |
| **Publicada** | Está disponible |
| **Fallida** | El paquete no era válido. La versión anterior sigue en uso |

La versión en uso figura como **Actual**: es siempre la última **publicada** por fecha, no la de número más alto. Las versiones anteriores se conservan.

## Reglas del paquete

| Regla | Valor |
|---|---|
| `index.html` | En la raíz del ZIP y en minúsculas |
| Tamaño del ZIP | Hasta 50 MB |
| Tamaño por archivo | Hasta 10 MB |
| Tamaño total descomprimido | Hasta 50 MB |
| Número de archivos | Hasta 2.000 |
| Tipos de archivo admitidos | `.html` `.css` `.js` `.json` `.map` `.png` `.jpg` `.jpeg` `.gif` `.svg` `.ico` `.webp` `.woff` `.woff2` `.ttf` `.eot` `.txt` `.md` |

Se rechazan los archivos ocultos, los que no tienen extensión y los de cualquier otro tipo, como `.mjs`, `.wasm` o `.pdf`. Un solo archivo no admitido hace fallar la versión completa.

:::warning Referencias a archivos
Las referencias a estilos, código e imágenes desde `index.html` deben usar rutas que empiecen por `/` (el valor por defecto de herramientas como Vite). La plataforma las adapta al publicar.
:::

## Modelos y permisos

| Pestaña | Para qué |
|---|---|
| **Modelos** | Definir las colecciones donde la aplicación guarda sus registros. Consultar [Datos propios](/aplicaciones-integradas/desarrollar/datos-propios) |
| **Permisos** | Indicar a qué recursos de la organización accede y con qué operaciones. Consultar [Llamar a la API](/aplicaciones-integradas/desarrollar/api-y-sesion) |

Ambos deben estar configurados antes de que los usuarios abran la aplicación. Para conceder acceso a **Contactos** o **Usuarios**, quien lo concede necesita ser administrador o tener lectura sobre ese módulo.

## Activar y desactivar

Una aplicación solo puede abrirse cuando su estado es **Activo**. Con **Desactivar** deja de estar disponible sin perder su configuración. **Eliminar** solo se ofrece para aplicaciones desactivadas.

## Publicar en el catálogo

La publicación en el [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones), para que la instalen otras organizaciones, la gestiona el equipo de ConsulPoint. Para ello se entrega:

- el paquete ZIP y su número de versión;
- el tipo, la descripción y el icono;
- los modelos de datos que utiliza;
- los permisos que necesita, con su justificación.

Una versión nueva en el catálogo no llega sola a las organizaciones: cada una decide cuándo **Actualizar**.

## Buenas prácticas

:::tip Numerar las versiones
Subir el último número para correcciones (`1.2.0` → `1.2.1`), el central para funciones nuevas y el primero para cambios que obliguen a revisar datos o permisos.
:::

:::info Volver a una versión anterior
No existe una acción para volver atrás. Si una versión da problemas, se publica de nuevo el paquete anterior con un número de versión superior.
:::
