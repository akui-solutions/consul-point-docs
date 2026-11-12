---
id: conocimiento-de-los-agentes
title: Conocimiento de los agentes
sidebar_label: Conocimiento de los agentes
sidebar_position: 4
description: Cómo un agente de ConsulPoint lee los documentos del Centro de Conocimiento, cómo comprobar que un archivo está disponible y qué hacer cuando no lo está.
---

# Conocimiento de los agentes

## Descripción

Un agente responde con los documentos de las carpetas que se comparten con él. Esta página explica cómo darle ese acceso, cómo comprobar que un archivo ya está disponible y qué límites tiene.

## Dar acceso a un agente

Hay dos caminos, con el mismo resultado:

- Desde el Centro de Conocimiento: **Compartir** la carpeta y añadir el agente (ver [Compartir y permisos](/centro-de-conocimiento/compartir-y-permisos)).
- Desde el [Estudio](/modulos/estudio): vincular la carpeta en la configuración del agente.

Un agente siempre tiene acceso de **Solo lectura**: consulta el contenido, pero no lo modifica. Una carpeta se puede compartir con un máximo de 5 agentes.

## Qué lee el agente

- **Toda la carpeta**: los archivos de la carpeta compartida y de todas sus subcarpetas.
- **Los archivos nuevos**: lo que se sube después a esas carpetas se prepara automáticamente.
- **Solo los formatos que puede leer**: PDF, Word, Excel, texto y Markdown (ver [Formatos y límites](/centro-de-conocimiento/subir-documentos#formatos-y-límites)). Las imágenes sueltas no.

## Preparación

Antes de que un agente pueda leer un archivo, la plataforma lo prepara: extrae el texto (de los PDF, con el [servicio de conversión](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf) de la carpeta), lo divide en fragmentos y los indexa para poder buscar por significado y no solo por palabras exactas.

La preparación empieza sola al compartir la carpeta con un agente y al subir archivos a una carpeta compartida. Tarda unos minutos por archivo; con muchos archivos, más. Si falla, la plataforma avisa con una notificación.

### Comprobar si un archivo está disponible

Al abrir un archivo, **Mostrar información** indica si está **Disponible para agentes**:

| Indicación | Significado |
|---|---|
| **Sí, al día** | Los agentes leen la versión actual |
| **Sí, pero una versión anterior** | Los agentes leen una versión que ya cambió. Conviene **Volver a preparar** |
| **Preparándose…** | En curso |
| **Todavía no** | Los agentes tienen acceso a la carpeta, pero aún no pueden leer este archivo |

### Acciones manuales

Desde **Mostrar información**, en un archivo de una carpeta compartida con un agente:

| Acción | Cuándo usarla |
|---|---|
| **Preparar para agentes** | El archivo no se preparó, por ejemplo porque falló |
| **Volver a preparar** | El archivo cambió o se cambió la conversión de PDF de la carpeta. Los agentes lo leen de nuevo desde cero |
| **Retirar de los agentes** | Que los agentes dejen de leer este archivo concreto. El archivo no se borra y la carpeta sigue compartida |

Preparar un archivo manualmente consume créditos de la organización. Estas acciones no están disponibles desde un espacio de trabajo.

## Cómo responde el agente

En cada pregunta, el agente busca en las carpetas a las que tiene acceso los fragmentos más relacionados y responde a partir de ellos. No lee todos los documentos enteros cada vez.

:::info El agente respeta los permisos de quien pregunta
En [Conversaciones](/modulos/conversaciones), el agente solo busca en las carpetas compartidas con él **a las que también tiene acceso la persona que conversa**. Dos personas pueden obtener respuestas distintas del mismo agente si tienen acceso a carpetas distintas.
:::

## Buenas prácticas

:::tip Documentos que se entienden bien
- Un tema por documento y títulos claros. Ayuda a que la búsqueda encuentre el fragmento correcto.
- En PDF escaneados o con tablas complejas, usar el servicio **Avanzado** y revisar la [versión en texto](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf) antes de compartir.
- Compartir con cada agente solo las carpetas de su tema. Menos contenido irrelevante, mejores respuestas.
:::
