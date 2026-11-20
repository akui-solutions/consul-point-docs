---
id: actualizar-los-documentos
title: Actualizar los documentos
sidebar_label: Actualizar los documentos
sidebar_position: 6
description: Qué pasa con los documentos de una carpeta del Centro de Conocimiento de ConsulPoint cuando cambia su preparación o su conversión de PDF. Revisar el impacto, aplicar los cambios, créditos y documentos pendientes.
---

# Actualizar los documentos

<PageMeta route="/knowledge-hub">editar sobre **Centro de conocimiento** y poder editar la carpeta; crear para calcular el impacto y aplicar</PageMeta>

Cuando cambia la forma en que se preparan los documentos de una carpeta, los que ya estaban preparados **no se rehacen solos**: los agentes siguen leyéndolos como antes. Así un cambio no consume créditos ni deja a los agentes sin documentos sin que nadie lo decida.

Esta página explica cómo ver qué documentos quedaron pendientes y cómo actualizarlos.

## Qué deja documentos pendientes

| Cambio | Dónde se hace |
|---|---|
| Cualquier ajuste de **Preparación de documentos**: tipo de contenido, lectura de tablas, imágenes de los PDF, opciones avanzadas | [Búsqueda de los agentes](/centro-de-conocimiento/busqueda-de-los-agentes#preparación-de-documentos) |
| Cambiar el origen de la configuración o el perfil de la carpeta | [Búsqueda de los agentes](/centro-de-conocimiento/busqueda-de-los-agentes#origen-de-la-configuración) |
| Editar la preparación de un perfil que usa la carpeta | [Perfiles de búsqueda](/centro-de-conocimiento/perfiles-de-busqueda#editar-un-perfil) |
| Cambiar el servicio de **Conversión de PDF** o el **Descriptor de imágenes** de la carpeta | [Carpetas y archivos](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf) |
| Rehacer o editar la versión en texto de un PDF | [Subir documentos](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf) |

Los cambios en **Resultados de búsqueda** y en el agente de búsqueda no dejan nada pendiente: se aplican desde el siguiente mensaje.

Mientras un documento está pendiente, los agentes **lo siguen consultando** con la preparación anterior. No desaparece de las respuestas.

Los documentos que se suben después del cambio ya se preparan con la configuración nueva.

## Revisar el cambio

Al guardar un cambio que afecta a la preparación, la ventana **Revisar el cambio** calcula a qué documentos afecta:

<Screenshot src="/img/centro-de-conocimiento/busqueda-revisar-cambio.png" alt="Ventana Revisar el cambio con el impacto sobre los documentos de la carpeta" caption="Revisar el cambio" maxWidth={444} />

| Línea | Significa |
|---|---|
| **La carpeta tiene … documentos que leen los agentes.** | El total de documentos de la carpeta y sus subcarpetas |
| **… no necesitan cambios.** | Ya están preparados con la configuración nueva |
| **… se actualizarían sin costo.** | Solo hay que volver a cortarlos en fragmentos |
| **… PDF se convertirían de nuevo a texto.** | Su versión en texto se rehace con la conversión nueva |
| **Unas … páginas facturables.** | Las páginas de esos PDF que se convierten con el servicio **Avanzado**, que consume créditos. Si no se puede calcular: **No se puede estimar cuántas páginas se facturarán.** |
| **… ya se están actualizando y no vuelven a empezar.** | Documentos que ya estaban en cola |

Con las cifras a la vista, se elige:

| Botón | Qué hace |
|---|---|
| **Solo guardar** | Guarda la configuración. Los documentos quedan pendientes hasta que se actualicen |
| **Guardar y aplicar ahora** | Guarda y empieza a actualizar los documentos. Solo aparece si hay algo que actualizar |
| **Cancelar** | No guarda nada |

Si el rol no permite calcular el impacto, la ventana lo indica y solo ofrece **Solo guardar**. Calcular el impacto y aplicar requieren permiso de crear sobre el **Centro de conocimiento**, el mismo que hace falta para subir documentos.

## Actualizar los documentos pendientes

<Screenshot src="/img/centro-de-conocimiento/busqueda-pendientes.png" alt="Aviso de documentos pendientes de actualizar en la ventana Búsqueda de los agentes" caption="Búsqueda de los agentes con documentos pendientes" maxWidth={560} />

Si se eligió **Solo guardar**, o si los documentos quedaron pendientes por otro motivo, la ventana **Búsqueda de los agentes** muestra al principio **… documentos pendientes de actualizar**:

1. Pulsar **Actualizar documentos**. Si hay cambios sin guardar, primero hay que guardarlos.
2. **Aplicar los cambios** muestra el mismo cálculo que **Revisar el cambio**.
3. Pulsar **Aplicar ahora**.

Los documentos se actualizan en segundo plano, uno a uno. Mientras tanto, los agentes siguen leyendo la versión anterior de cada documento y pasan a la nueva a medida que termina. La plataforma avisa con una notificación si alguno falla; de los que terminan bien no hay aviso.

:::info Carpetas con muchos documentos
Cada vez se envían a actualizar hasta 200 documentos. Si hay más, aparece **Actualización pendiente** con los que quedan, y **Continuar actualización** envía los siguientes.
:::

Si alguien cambia la configuración entre que se revisa el impacto y se aplica, la plataforma no aplica nada: **La configuración cambió mientras tanto**. Hay que revisar el impacto nuevo y volver a aplicar. Así nadie paga por un cambio que no vio.

## Créditos

| Qué se actualiza | Costo |
|---|---|
| Documentos que solo hay que volver a cortar en fragmentos | Sin costo |
| Documentos que no son PDF | Sin costo |
| PDF con el servicio de conversión **Esencial** | Sin costo |
| PDF con el servicio **Avanzado** | Créditos por página. **Revisar el cambio** muestra las páginas facturables |

Sin créditos, la plataforma no deja aplicar: **No hay créditos disponibles para actualizar los documentos.** Ver [Créditos y límites](/organizacion/creditos-y-limites).

## Documentos pendientes en la lista

<Screenshot src="/img/centro-de-conocimiento/busqueda-marcas.png" alt="Lista de una carpeta con documentos pendientes de actualizar marcados" caption="Documentos pendientes en la lista de una carpeta" maxWidth={1166} />

- **Carpeta**: una marca naranja con flechas junto al nombre: **Documentos pendientes de actualizar**. Quien puede editar la carpeta la pulsa para abrir la configuración.
- **Documento**: un reloj naranja junto al nombre: **Documento pendiente de actualizar**. Al pasar el ratón indica el motivo y qué hacer.

| Motivo | Qué hacer |
|---|---|
| **La configuración de su carpeta cambió.** | Abrirlo y pulsar **Volver a preparar**, o actualizar toda la carpeta |
| **La conversión de PDF de su carpeta cambió.** | Abrirlo, pulsar **Rehacer la versión en texto** y, cuando termine, **Volver a preparar**. O actualizar toda la carpeta, que hace los dos pasos |
| Sin motivo (cambió su versión en texto) | Abrirlo y pulsar **Volver a preparar** |

### En la ficha del documento

<Screenshot src="/img/centro-de-conocimiento/archivo-actualizacion-pendiente.png" alt="Ficha de un documento con Disponibilidad para agentes: Disponible, actualización pendiente" caption="Ficha de un documento pendiente de actualizar" maxWidth={360} />

**Disponibilidad para agentes** indica el estado de cada documento:

| Estado | Significa |
|---|---|
| **Disponible** | Los agentes leen su contenido actual |
| **Disponible · Actualización pendiente** | Los agentes lo consultan, pero con la preparación o el contenido anterior. Debajo se explica el motivo |
| **Preparándose…** | Se está preparando |
| **No disponible todavía** | Los agentes aún no pueden leerlo |

:::warning Los PDF van en dos pasos
Si la conversión de PDF de la carpeta cambió, **Volver a preparar** no basta: el documento seguiría con la versión en texto anterior. Primero hay que **Rehacer la versión en texto** (el botón que ofrece la ficha) y después **Volver a preparar**. Actualizar toda la carpeta desde **Búsqueda de los agentes** hace los dos pasos solo.
:::

## Buenas prácticas

:::tip Actualizar fuera de horas de uso
En carpetas grandes, la actualización puede tardar. Los agentes siguen respondiendo, pero con una mezcla de documentos ya actualizados y pendientes hasta que termine.
:::

:::tip Revisar las páginas facturables
Antes de **Aplicar ahora** en carpetas con muchos PDF y servicio **Avanzado**, conviene mirar las páginas facturables en **Revisar el cambio**.
:::
