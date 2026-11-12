---
id: carpetas-y-archivos
title: Carpetas y archivos
sidebar_label: Carpetas y archivos
sidebar_position: 2
description: Crear carpetas, navegar, buscar, filtrar, mover, cambiar de nombre y eliminar contenido en el Centro de Conocimiento de ConsulPoint.
---

# Carpetas y archivos

Cómo organizar el contenido del Centro de Conocimiento: crear carpetas, encontrar archivos y mantener todo en orden. Para subir archivos, ver [Subir documentos](/centro-de-conocimiento/subir-documentos).

## Crear una carpeta

1. Pulsar **Nueva carpeta**. La carpeta se crea dentro de la que está abierta, o en la raíz.
2. Completar la ventana **Crear nueva carpeta**:

   | Campo | Descripción |
   |---|---|
   | **Nombre de la carpeta** | Obligatorio, entre 2 y 60 caracteres. No puede repetirse dentro de la misma carpeta |
   | **Descripción** | Opcional, entre 2 y 255 caracteres |
   | **Tipo de carpeta** | **Estándar**, **Extracción inteligente** o **Multimedia**. No se puede cambiar después |
   | **Opciones avanzadas** | Cómo se convierten a texto los PDF de la carpeta. Ver más abajo |

3. Pulsar **Crear carpeta**.

<Screenshot src="/img/centro-de-conocimiento/crear-carpeta.png" alt="Ventana Crear nueva carpeta en el Centro de Conocimiento de ConsulPoint" caption="Crear nueva carpeta" maxWidth={640} />

Las carpetas pueden contener subcarpetas sin límite de niveles. El número de carpetas y el espacio de almacenamiento dependen del plan contratado.

### Conversión de PDF

En **Opciones avanzadas** se elige cómo se convierten a texto los PDF de la carpeta y de sus subcarpetas, antes de que los lean los agentes:

| Servicio | Cuándo usarlo |
|---|---|
| **Esencial** | PDF con texto seleccionable, como los creados con Word. Conserva texto y tablas, no imágenes. Gratis |
| **Avanzado** | Escaneados, varias columnas o tablas complejas. Puede conservar las imágenes con una descripción, para que los agentes también las entiendan. Consume créditos |

En la misma sección, **Descriptor de imágenes** permite elegir un agente que describa las imágenes de los PDF. Si se deja vacío, la plataforma las describe automáticamente.

Una subcarpeta usa la conversión de la carpeta superior que la tenga configurada. Para cambiarla, se edita esa carpeta.

## Navegar y encontrar contenido

- **Vistas**: cuadrícula o lista, con los botones de la barra superior. La lista muestra **Nombre**, **Propietario**, **Compartido con**, **Última modificación** y **Tamaño**.
- **Ruta de navegación**: bajo el título, para volver a cualquier carpeta superior.
- **Búsqueda**: **Buscar archivos y carpetas…** busca dentro de la carpeta abierta.
- **Filtros**: en la raíz, por tipo de carpeta. Dentro de una carpeta, por tipo de archivo (**PDF**, **Documento**, **Hoja de cálculo**, **Presentación**, **Imagen**, **Audio**, **Video**, **Otro**) y, en **Mis documentos**, por **Propietario**.
- **Ordenar por**: **Fecha**, **Nombre**, **Tamaño** o **Tipo**. Por defecto, los más recientes primero.

## Acciones sobre el contenido

Cada carpeta y cada archivo tiene un menú de acciones. Solo se muestran las que el usuario puede hacer, según su rol y el permiso que tenga sobre la carpeta (ver [Compartir y permisos](/centro-de-conocimiento/compartir-y-permisos)).

| Acción | Sobre | Qué hace |
|---|---|---|
| **Compartir** | Carpetas | Da acceso a personas, espacios de trabajo o agentes |
| **Descargar** | Archivos | Descarga el archivo original |
| **Editar carpeta** | Carpetas | Cambia nombre, descripción y configuración |
| **Cambiar nombre** | Archivos | Entre 1 y 100 caracteres, sin espacios ni los caracteres `/ : ; ' "` |
| **Crear versión en texto** | PDF | Convierte el PDF a texto. Ver [Subir documentos](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf) |
| **Mover a…** | Ambos | Lleva el elemento a otra carpeta |
| **Gestionar aplicaciones** | Carpetas | Asigna hasta 7 [aplicaciones integradas](/aplicaciones-integradas) a la carpeta |
| **Ver detalles** | Carpetas | Ubicación, fechas, configuración de extracción y quién tiene acceso |
| **Eliminar** | Ambos | Ver más abajo |

Al abrir un archivo se muestra su vista previa. **Mostrar información** indica, entre otras cosas, si está **Disponible para agentes** (ver [Conocimiento de los agentes](/centro-de-conocimiento/conocimiento-de-los-agentes)).

### Mover contenido

En **Mis documentos** hay tres formas:

- **Mover a…** desde el menú del elemento.
- Arrastrar el elemento y soltarlo sobre una carpeta.
- Seleccionar varios elementos y pulsar **Mover a…** en la barra de selección.

En **Compartidos conmigo** no se puede mover contenido.

Al mover un archivo a otra carpeta, los agentes de la carpeta de destino pasan a leerlo y los de la carpeta de origen dejan de hacerlo.

### Eliminar

:::danger Eliminación permanente
Un archivo eliminado no se recupera: no hay papelera. Se eliminan también sus datos extraídos y deja de estar disponible para los agentes.
:::

Una carpeta solo se puede eliminar si está vacía. Antes hay que mover o eliminar su contenido.
