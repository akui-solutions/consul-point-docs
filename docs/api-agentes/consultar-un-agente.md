---
id: consultar-un-agente
title: API de agentes
sidebar_label: Consultar un agente
sidebar_position: 1
slug: /api-agentes
description: "Cómo consultar un agente de ConsulPoint desde un sistema externo con la API de agentes: petición, respuesta, adjuntos, memoria por usuario final, errores y créditos."
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
| `endUserId` | No | El identificador de la persona a la que atiende el sistema externo, para que el agente la recuerde entre consultas. Ver [Memoria por usuario final](#memoria-por-usuario-final) |

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

`model` es el agente. El último mensaje que no es `system` se toma como la pregunta; los anteriores, como contexto; y los `system`, como instrucciones adicionales. `stream: true` equivale a pedir la respuesta por partes. `user` es el identificador del usuario final para la [memoria](#memoria-por-usuario-final); si no es válido, se ignora y la consulta va sin memoria.

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

## Memoria por usuario final

Si el agente tiene la función **Memoria** (ver [Memoria de los agentes](/control/estudio/memoria)), puede recordar a cada persona que atiende el sistema externo: sus preferencias, lo que contó y lo que quedó pendiente. Cada consulta indica de quién se trata con un identificador que elige quien integra:

| Formato | Campo |
|---|---|
| Nativo | `endUserId` |
| OpenAI | `user` |

```json
{
  "agentId": "Asistente de atención al cliente",
  "prompt": "Recuerda que prefiero que me escribas en inglés",
  "endUserId": "cliente-42"
}
```

Sin identificador, o si el agente no tiene memoria, la consulta funciona igual, sin recordar nada.

| Regla | Detalle |
|---|---|
| Formato del identificador | Hasta 128 caracteres: letras sin acentos, números y `. _ @ + -`. Sin espacios, `/` ni `:`, y no solo puntos |
| Identificador no válido | En formato nativo, error `400`. En formato OpenAI se ignora y la consulta va sin memoria |
| Una memoria por… | Clave de API, agente e identificador. El mismo identificador con otra clave o con otro agente es otra memoria |
| Caducidad | No caduca por inactividad |

El agente guarda lo que le sirve siguiendo lo que debe recordar. Como la persona es externa, no guarda instrucciones que intenten cambiar su comportamiento ni datos de otras personas. Ver [Qué guarda el agente](/control/estudio/memoria#qué-guarda-el-agente).

:::warning El identificador lo fija el servidor
La plataforma confía en el identificador que recibe. Debe fijarlo el servidor del sistema externo a partir de su propia sesión, nunca el navegador o la app de la persona: quien envíe el identificador de otra persona recibe respuestas basadas en lo que el agente recuerda de ella. Conviene un identificador estable y opaco, como un UUID o el id interno del usuario, en lugar de un email o un teléfono.
:::

Si llegan dos consultas a la vez del mismo usuario final con el mismo agente, la última que guarde reemplaza lo que guardó la otra.

### Ver y borrar la memoria

Estos endpoints usan la misma clave de API. Su dirección es la URL base sin `/query` al final (termina en `/llm-api`), seguida de la ruta:

| Método | Ruta | Qué hace | Respuesta |
|---|---|---|---|
| `GET` | `/agents/{agentId}/end-users/{endUserId}/memory` | Lo que el agente recuerda de ese usuario final con esta clave | `200` con `content` (Markdown) y `updatedAt`, los dos `null` si no hay nada guardado |
| `DELETE` | `/agents/{agentId}/end-users/{endUserId}/memory` | Borra lo que el agente recuerda de ese usuario final | `204`, también si no había nada |
| `DELETE` | `/end-users/{endUserId}/memory` | Borra su memoria con todos los agentes de la clave, por ejemplo cuando pide que se borren sus datos. El historial de consultas se conserva | `204` |

`{agentId}` es el identificador del agente, no su nombre: el último tramo de la dirección de su detalle en el Estudio.

```bash
curl -X DELETE -H "Authorization: Bearer {clave de API}" \
  "{URL base sin /query}/end-users/cliente-42/memory"
```

- La clave tiene que estar asociada al agente y activa.
- No consumen créditos, pero cuentan en el límite de 60 solicitudes por minuto de la clave.
- Funcionan aunque el agente ya no tenga la memoria activada.
- El contenido se escribe en parte con lo que dice el usuario final: mostrarlo siempre como texto, nunca como HTML.

| Código | Causa |
|---|---|
| `400` | El identificador del agente o del usuario final no es válido |
| `403` | La clave no está asociada al agente, o la organización no tiene un plan activo |
| `404` | El agente no existe en la organización |
| `503` | La memoria no está disponible en este momento (al borrar) |

La memoria de los usuarios finales se borra sola al eliminar la clave de API, al quitar el agente de la clave o al eliminar el agente. Desactivar o regenerar la clave no la borra.

## Errores

| Código | Causa |
|---|---|
| `400` | Adjuntos o parámetros no válidos, o un `endUserId` no válido |
| `401` | Falta la clave o no es válida |
| `403` | El agente no está asociado a la clave, la organización no tiene un plan activo o no le quedan créditos |
| `404` | No hay ningún agente con ese nombre |
| `409` | Varios agentes tienen ese nombre: usar su identificador |
| `413` | El cuerpo supera los 28 MB |
| `422` | El modelo del agente no admite imágenes, la nota de voz no tiene voz o el agente no tiene **Texto a voz** |
| `429` | Más de 60 consultas por minuto con la misma clave |

## Créditos

Cada consulta consume créditos de la organización según los tokens usados, salvo que el agente use un [modelo propio](/organizacion/proveedores-de-ia). La transcripción de notas de voz y el audio de la respuesta se cobran siempre. Con [memoria](#memoria-por-usuario-final), lo que el agente recuerda del usuario final forma parte de cada consulta y de su consumo. Ver [Créditos y límites](/organizacion/creditos-y-limites).

Cada consulta queda registrada en la clave (**Ejecuciones recientes**) y en el agente (**Consultas por API**).
