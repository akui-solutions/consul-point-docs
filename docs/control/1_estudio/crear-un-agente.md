---
id: crear-un-agente
title: Crear un agente
sidebar_label: Crear un agente
sidebar_position: 2
description: Paso a paso para crear un agente o un especialista en el Estudio de ConsulPoint, con todos los campos del formulario.
---

# Crear un agente

**Ruta:** `/studio/config/add-assistant`
**Permiso requerido:** creación sobre **Estudio**

## Descripción

El formulario para crear un agente o un especialista, campo por campo. Los microagentes usan un formulario distinto: ver [Microagentes](/control/estudio/microagentes).

## Antes de empezar

- Tener claro **para qué** es el agente y **a quién** atiende. Es la base de sus instrucciones.
- Si va a responder con documentos, subirlos antes al [Centro de Conocimiento](/modulos/centro-de-conocimiento), en una carpeta por tema.

## Los pasos

1. En el Estudio, pestaña **Agentes**, pulsar **Nuevo agente** (o **Nuevo especialista** en su pestaña).
2. **Configuración**: tipo, información básica, comportamiento, modelo, personalización y capacidades.
3. **Documentos y acceso**: documentos propios del agente y quién puede usarlo.
4. Pulsar **Crear**.

Al editar un agente ya creado solo aparece el paso **Configuración**. Los documentos y el acceso se gestionan desde su [detalle](/control/estudio/agentes).

<Screenshot src="/img/estudio/crear-agente.png" alt="Formulario Crear agente en el Estudio de ConsulPoint" caption="Crear agente, paso Configuración" />

## Paso 1: Configuración

### Tipo de agente

**Agente**, **Especialista** o **Microagente** (ver [Los tres tipos de agente](/modulos/estudio#los-tres-tipos-de-agente)). Elegir **Microagente** lleva a su propio formulario y conserva el nombre, la descripción y las instrucciones escritas.

:::danger El tipo no se puede cambiar
Una vez creado, el tipo queda fijo. Si se eligió mal, hay que crear un agente nuevo.
:::

### Información básica

| Campo | Descripción |
|---|---|
| **Imagen** | Solo agentes. JPG, PNG o WEBP, hasta 500 KB. **Generar avatar con IA** crea una a partir del nombre y la descripción |
| **Nombre** | Obligatorio, entre 3 y 50 caracteres. No puede repetir el de otro agente o microagente de la organización; el formulario lo comprueba mientras se escribe |
| **Descripción** | Obligatoria, hasta 400 caracteres. Se muestra en las listas y al elegir agente |

**Generar con IA**, en la cabecera de la sección, pide una idea en pocas palabras (**Tu idea**) y propone el nombre, la descripción y las instrucciones del sistema. Cada campo tiene, además, su propio botón para generarlo o mejorarlo. Todo lo generado se puede editar antes de crear el agente.

Los especialistas añaden la sección **Información técnica** (**Nombre técnico** y **Descripción técnica**). Ver [Especialistas](/control/estudio/especialistas#crear-un-especialista).

### Comportamiento: instrucciones del sistema

**Instrucciones del sistema** es obligatorio (hasta 50.000 caracteres) y es el campo que más influye en la calidad de las respuestas. Define el papel del agente, de dónde saca la información, cómo responde y qué no debe hacer.

Estructura recomendada:

```text
[ROL]        Quién es el agente y a quién atiende.
[FUENTES]    De dónde sale la información y qué hacer
             cuando no tiene el dato.
[ESTILO]     Tono, extensión y formato de las respuestas.
[LÍMITES]    Qué no debe hacer y cuándo derivar a una persona.
```

Ejemplo:

```text
Eres el asistente comercial de la empresa. Atiendes a clientes
que preguntan por nuestros productos y servicios.

Responde siempre a partir de la documentación disponible. Si un
dato no consta, dilo claramente en lugar de deducirlo.

Usa un tono cordial y directo. Respuestas breves, sin
tecnicismos innecesarios.

No ofrezcas precios especiales, descuentos ni resoluciones de
reclamaciones: en esos casos, deriva a una persona del equipo
comercial.
```

El botón de mejora con IA reescribe las instrucciones y permite elegir el formato: Markdown, XML o JSON.

### Modelo

| Campo | Descripción |
|---|---|
| **Proveedor** | Google, OpenAI, Anthropic o **Custom** (modelos propios de la organización, si el plan los incluye) |
| **Modelo** | Obligatorio. Se propone el recomendado del proveedor |
| **Temperatura** | De 0 (**Precisa**) a 1 (**Creativa**). Por defecto, 0. En los agentes está dentro de **Personalización** |

Criterio para la temperatura:

| Valor | Uso recomendado |
|---|---|
| 0 – 0,3 | Atención al cliente, datos operativos, cumplimiento normativo |
| 0,4 – 0,7 | Uso general, consulta interna |
| 0,8 – 1 | Redacción creativa, lluvia de ideas |

Algunos modelos más recientes ajustan su razonamiento por sí mismos e ignoran la temperatura.

### Personalización

Solo para agentes.

- **Tono de comunicación**: hasta 3 entre **Formal**, **Informal**, **Amigable**, **Técnico** y **Profesional**. No se pueden combinar Formal con Informal, ni Amigable con Técnico.
- **Iniciadores de conversación**: hasta 5 frases sugeridas al empezar una conversación, de 3 a 150 caracteres cada una.

### Capacidades

Funciones adicionales que el agente puede usar. Se añaden con **Agregar capacidad**.

| Capacidad | Qué permite |
|---|---|
| **Acceso al centro de conocimiento** | Consultar los documentos del Centro de Conocimiento. Sin ella, el agente no aparece para compartir carpetas con él |
| **Buscar en la web** | Buscar información actualizada en internet. En Conversaciones aparece el botón **Búsqueda web**, y la búsqueda solo se usa cuando está activado |
| **Texto a voz** | Leer en voz alta las respuestas. Consume créditos |
| **Voz a texto** | Convertir voz a texto |
| **Adjuntar archivos** | Subir y procesar archivos |
| **Fuentes certificadas** | Usar fuentes de información verificadas, promovidas por Cala AI. Se activan en cada conversación con el botón **Fuentes certificadas** |

Los especialistas solo pueden tener **Acceso al centro de conocimiento**. Los microagentes no tienen capacidades.

:::warning La causa más frecuente de respuestas genéricas
Un agente sin **Acceso al centro de conocimiento** no consulta documentos, aunque haya carpetas preparadas para él.
:::

## Paso 2: Documentos y acceso

### Documentos de conocimiento

Opcional. Documentos propios del agente: PDF, DOCX, ODT o TXT, hasta 30 MB por archivo. También se pueden añadir después, desde la pestaña **Documentos** del agente.

Para documentos que comparten varios agentes, o que mantiene otro equipo, es mejor usar carpetas del [Centro de Conocimiento](/centro-de-conocimiento/conocimiento-de-los-agentes).

### Acceso

Quién puede usar el agente:

| Opción | Quién lo usa |
|---|---|
| **Solo yo** | Solo quien lo crea, ni siquiera los administradores |
| **Toda la organización** | Todos lo usan; los administradores lo editan. Es la opción por defecto |
| **Personas y roles concretos** | Solo quien se añada, con su nivel. Solo para agentes, no para especialistas |

Con **Personas y roles concretos** hay que añadir al menos una persona o un rol y elegir el nivel:

| Nivel | Qué permite |
|---|---|
| **Puede usar** | Conversar con el agente y adjuntar documentos en el chat |
| **Puede editar** | Además, cambiar su configuración y compartirlo. No puede eliminarlo |
| **Puede administrar** | Todo, incluido eliminarlo, exportarlo e importarlo |

## Después de crearlo

1. Si va a usar carpetas del Centro de Conocimiento, compartirlas con el agente.
2. Asignarle [especialistas](/control/estudio/especialistas#asignar-especialistas-a-un-agente), si los necesita.
3. Probarlo en [Conversaciones](/modulos/conversaciones) con preguntas reales, y comprobar en las fuentes de cada respuesta que usa los documentos correctos.

## Buenas prácticas

:::tip Agentes que responden bien
- Un agente por función. Un agente "que lo sabe todo" responde peor que varios enfocados.
- Instrucciones concretas, con ejemplos de lo que sí y lo que no debe hacer.
- Temperatura baja en agentes que dan datos o atienden a clientes.
- Probar con las preguntas más habituales antes de abrirlo a más personas.
:::
