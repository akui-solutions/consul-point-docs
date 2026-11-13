---
id: consultar-un-agente
title: API de agentes
sidebar_label: Consultar un agente
sidebar_position: 1
slug: /api-agentes
description: "Cómo consultar un agente de ConsulPoint desde un sistema externo con la API de agentes: petición, respuesta, adjuntos, errores y créditos."
---

# API de agentes

Con una [clave de API](/organizacion/claves-de-api), un sistema externo puede enviar una pregunta a un agente de la organización y recibir su respuesta. El agente responde con sus propias instrucciones, su modelo y sus documentos, igual que en la plataforma.

La API es compatible con el formato de OpenAI, así que también funciona con herramientas que ya hablan ese formato.

## Petición

```
POST {URL base}/chat/completions
```

La **URL base** se ve en **Conectar herramienta externa**, en la clave de API.

| Cabecera | Contenido |
|---|---|
| `Authorization` | `Bearer {clave de API}` |
| `Content-Type` | `application/json` |
| `Accept` | `text/event-stream` para recibir la respuesta por partes; si no, llega completa |

La organización se deduce de la clave: no hace falta enviarla.

### Formato nativo

```json
{
  "agentId": "Asistente de atención al cliente",
  "prompt": "¿Cuál es el plazo de devolución?",
  "context": [
    { "role": "user", "content": "Hola, compré unas zapatillas la semana pasada." },
    { "role": "assistant", "content": "Hola, ¿en qué puedo ayudarte con tu compra?" }
  ]
}
```

| Campo | Obligatorio | Qué es |
|---|---|---|
| `agentId` | Sí | El identificador del agente o su nombre (sin distinguir mayúsculas). El agente tiene que estar asociado a la clave |
| `prompt` | Sí, salvo que haya adjuntos | La pregunta |
| `context` | No | Los turnos anteriores de la conversación (`user` o `assistant`). La API no guarda conversaciones: cada consulta es independiente, y el historial lo envía quien llama |
| `systemMessages` | No | Instrucciones adicionales para esta consulta (hasta 10, de 50.000 caracteres cada una) |
| `attachments` | No | Imágenes o una nota de voz. Ver [Adjuntos](#adjuntos) |
| `responseAudio` | No | `true` para recibir, además, la respuesta en audio MP3. El agente necesita la función **Texto a voz** |

### Formato OpenAI

```json
{
  "model": "Asistente de atención al cliente",
  "messages": [
    { "role": "system", "content": "Responde en una frase." },
    { "role": "user", "content": "¿Cuál es el plazo de devolución?" }
  ],
  "stream": false
}
```

`model` es el agente. El último mensaje que no es `system` se toma como la pregunta; los anteriores, como contexto; y los `system`, como instrucciones adicionales. `stream: true` equivale a pedir la respuesta por partes.

## Respuesta

Respuesta completa:

```json
{
  "requestId": "clx0abc123",
  "response": "El plazo de devolución es de 30 días desde la entrega.",
  "usage": { "inputTokens": 1290, "outputTokens": 18, "totalTokens": 1308 }
}
```

La respuesta completa tiene siempre este formato, también cuando la petición usa el formato OpenAI.

Respuesta por partes: eventos `data:` en formato `chat.completion.chunk` de OpenAI, terminados en `data: [DONE]`. Si el agente genera imágenes o audio, llegan en `delta.files`. Si algo falla a mitad, llega `data: {"error": {...}}` antes de `[DONE]`.

## Adjuntos

Los adjuntos van **dentro del cuerpo**, en base64 (o como data URL). No se admiten enlaces a archivos ni PDF.

```json
"attachments": [
  { "type": "image", "mimeType": "image/jpeg", "data": "<base64>" },
  { "type": "audio", "mimeType": "audio/webm", "data": "<base64>" }
]
```

| | Límite |
|---|---|
| Imágenes | JPEG, PNG o WebP; hasta 4, de 5 MB cada una |
| Nota de voz | WebM, OGG, MP3, MP4 o WAV; 1, de hasta 10 MB y 5 minutos. Se transcribe y la transcripción se añade a la pregunta |
| Total | 20 MB de adjuntos y 28 MB de cuerpo |

En formato OpenAI, las imágenes van como partes `image_url` (con data URL) y el audio como `input_audio`, en el último mensaje del usuario.

## Errores

| Código | Causa |
|---|---|
| `400` | Adjuntos o parámetros no válidos |
| `401` | Falta la clave o no es válida |
| `403` | El agente no está asociado a la clave, la organización no tiene un plan activo o no le quedan créditos |
| `404` | No hay ningún agente con ese nombre |
| `409` | Varios agentes tienen ese nombre: usar su identificador |
| `413` | El cuerpo supera los 28 MB |
| `422` | El modelo del agente no admite imágenes, la nota de voz no tiene voz o el agente no tiene **Texto a voz** |
| `429` | Más de 60 consultas por minuto con la misma clave |

## Créditos

Cada consulta consume créditos de la organización según los tokens usados, salvo que el agente use un [modelo propio](/organizacion/proveedores-de-ia). La transcripción de notas de voz y el audio de la respuesta se cobran siempre. Ver [Créditos y límites](/organizacion/creditos-y-limites).

Cada consulta queda registrada en la clave (**Ejecuciones recientes**) y en el agente (**Consultas por API**).
