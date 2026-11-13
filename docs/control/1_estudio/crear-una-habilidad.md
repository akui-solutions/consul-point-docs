---
id: crear-una-habilidad
title: Crear una habilidad
sidebar_label: Crear una habilidad
sidebar_position: 7
description: Cómo crear, importar, editar y exportar una habilidad en el Estudio de ConsulPoint, con sus archivos de referencia, imágenes y scripts.
---

# Crear una habilidad

<PageMeta route="/studio/skills/new">creación sobre **Habilidades**</PageMeta>

Una habilidad se crea en el Estudio, en la pestaña **Habilidades**, con **Nueva habilidad**, o se importa ya hecha con **Importar habilidad**. Qué es una habilidad y cómo la usa un agente se explica en [Habilidades](/control/estudio/habilidades).

## Los datos de la habilidad

<Screenshot src="/img/estudio/crear-habilidad.png" alt="Formulario para crear una habilidad" caption="Nueva habilidad" />

| Campo | Restricción |
|---|---|
| **Nombre** | Obligatorio, hasta 64 caracteres: minúsculas, números y guiones, sin guion al principio ni al final. Por ejemplo, `revision-de-facturas`. No puede repetirse en la organización |
| **Descripción** | Obligatoria, hasta 1.024 caracteres. Es lo que lee el agente para decidir **cuándo** usar la habilidad |
| **Etiquetas** | Opcionales, hasta 20. Sirven para buscarla en la biblioteca |
| **Instrucciones** | Obligatorias, hasta 100.000 caracteres. El procedimiento que el agente sigue al pie de la letra |

:::tip Una buena descripción
La descripción decide si el agente usa la habilidad. Mejor «Revisa facturas de proveedores: comprueba importes, impuestos y datos fiscales antes de aprobarlas» que «Facturas».
:::

## El contenido

Además de las instrucciones, una habilidad puede llevar archivos. Se pueden subir al crearla, en **Contenido de la habilidad**, o después, en la pestaña **Contenido** de la habilidad, con **Agregar archivo**:

| Tipo | Para qué | Formatos |
|---|---|---|
| **Archivo de referencia** | Una **Guía**, **Plantilla** o **Ejemplo** que el agente consulta | .md, .txt, .pdf, .docx, .json, .csv, .yaml, .yml, .xml, .html |
| **Imagen** | Una imagen de referencia | .png, .jpg, .jpeg, .gif, .webp, .svg |
| **Script** | Código que el agente ejecuta. Se indica su **Propósito** (obligatorio), sus **Entradas** y sus **Salidas** | .js, .mjs y .py |

Límites: 5 MB por archivo, 20 archivos y 25 MB en total por habilidad. Los nombres de los scripts y de los archivos de texto no pueden tener espacios, tildes ni paréntesis, porque el agente no podría leerlos.

<Screenshot src="/img/estudio/habilidad-contenido.png" alt="Pestaña Contenido de una habilidad" caption="Detalle de una habilidad → Contenido" />

### Scripts

Los scripts se ejecutan en un entorno aislado: sin acceso a internet y solo con la biblioteca estándar de cada lenguaje (no se pueden instalar paquetes de npm ni de pip). Cada ejecución tiene como máximo 30 segundos y 256 MB de memoria. Un script puede leer los archivos de texto de su propia habilidad.

## Importar y exportar

Las habilidades usan el formato **SKILL.md**, el mismo que otras herramientas de IA, así que se pueden llevar de una a otra:

- **Importar habilidad** acepta un paquete .zip de hasta 30 MB con un archivo `SKILL.md` y, si las tiene, las carpetas `references`, `scripts` y `assets`, sin subcarpetas.
- **Exportar**, en el detalle de la habilidad, descarga ese mismo paquete.

## Editar, activar y eliminar

En el detalle de una habilidad:

| Acción | Qué hace |
|---|---|
| **Editar** | Cambia los datos y las instrucciones. Los cambios se aplican a todos los agentes que la tienen asignada. Solo en habilidades **Propia** |
| **Activar** / **Desactivar** | Una habilidad desactivada sigue asignada, pero ningún agente la usa |
| **Exportar** | Descarga el paquete .zip |
| **Eliminar** | La elimina de la biblioteca y de los agentes. No se puede deshacer. Solo en habilidades **Propia** |

La tarjeta de uso muestra cuántas veces se ha usado la habilidad, cuándo fue la última y los resultados de sus scripts.

## Habilidades del catálogo

En el [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones), la pestaña **Habilidades** ofrece habilidades ya hechas. Al instalar una, se añade a la biblioteca con origen **Del catálogo**. Si después aparece **Actualización disponible**, **Actualizar habilidad** sustituye sus instrucciones y archivos, y conserva el nombre, el estado y los agentes asignados. **Desinstalar habilidad** la quita de la biblioteca y de los agentes.
