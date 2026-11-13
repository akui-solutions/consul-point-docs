---
id: consultar-un-agente
title: Agents API
sidebar_label: Query an agent
sidebar_position: 1
slug: /api-agentes
description: "How to query a ConsulPoint agent from an external system with the Agents API: request, response, attachments, errors and credits."
---

# Agents API

With an [API key](/organizacion/claves-de-api), an external system can send a question to one of the organization's agents and receive its answer. The agent answers with its own instructions, model and documents, just as it does in the platform.

The API is compatible with the OpenAI format, so it also works with tools that already speak that format.

## Request {#petición}

```
POST {base URL}/chat/completions
```

The **Base URL** is shown in **Connect external tool**, in the API key.

| Header | Content |
|---|---|
| `Authorization` | `Bearer {API key}` |
| `Content-Type` | `application/json` |
| `Accept` | `text/event-stream` to receive the response in chunks; otherwise it arrives complete |

The organization is inferred from the key: you do not need to send it.

### Native format {#formato-nativo}

```json
{
  "agentId": "Customer support assistant",
  "prompt": "What is the return period?",
  "context": [
    { "role": "user", "content": "Hi, I bought some sneakers last week." },
    { "role": "assistant", "content": "Hi, how can I help you with your purchase?" }
  ]
}
```

| Field | Required | What it is |
|---|---|---|
| `agentId` | Yes | The agent's identifier or its name (case-insensitive). The agent must be associated with the key |
| `prompt` | Yes, unless there are attachments | The question |
| `context` | No | The previous turns of the conversation (`user` or `assistant`). The API does not store conversations: each query is independent, and the caller sends the history |
| `systemMessages` | No | Additional instructions for this query (up to 10, of up to 50,000 characters each) |
| `attachments` | No | Images or a voice note. See [Attachments](#adjuntos) |
| `responseAudio` | No | `true` to also receive the answer as MP3 audio. The agent needs the **Text to speech** function |

### OpenAI format {#formato-openai}

```json
{
  "model": "Customer support assistant",
  "messages": [
    { "role": "system", "content": "Answer in one sentence." },
    { "role": "user", "content": "What is the return period?" }
  ],
  "stream": false
}
```

`model` is the agent. The last message that is not `system` is taken as the question; the previous ones, as context; and the `system` ones, as additional instructions. `stream: true` is the same as requesting the response in chunks.

## Response {#respuesta}

Complete response:

```json
{
  "requestId": "clx0abc123",
  "response": "The return period is 30 days from delivery.",
  "usage": { "inputTokens": 1290, "outputTokens": 18, "totalTokens": 1308 }
}
```

The complete response always has this format, also when the request uses the OpenAI format.

Response in chunks: `data:` events in OpenAI `chat.completion.chunk` format, ending with `data: [DONE]`. If the agent generates images or audio, they arrive in `delta.files`. If something fails midway, `data: {"error": {...}}` arrives before `[DONE]`.

## Attachments {#adjuntos}

Attachments go **inside the body**, in base64 (or as a data URL). Links to files and PDFs are not supported.

```json
"attachments": [
  { "type": "image", "mimeType": "image/jpeg", "data": "<base64>" },
  { "type": "audio", "mimeType": "audio/webm", "data": "<base64>" }
]
```

| | Limit |
|---|---|
| Images | JPEG, PNG or WebP; up to 4, of up to 5 MB each |
| Voice note | WebM, OGG, MP3, MP4 or WAV; 1, of up to 10 MB and 5 minutes. It is transcribed and the transcription is added to the question |
| Total | 20 MB of attachments and 28 MB of body |

In OpenAI format, images go as `image_url` parts (with a data URL) and audio as `input_audio`, in the last user message.

## Errors {#errores}

| Code | Cause |
|---|---|
| `400` | Invalid attachments or parameters |
| `401` | The key is missing or not valid |
| `403` | The agent is not associated with the key, the organization has no active plan or has no credits left |
| `404` | There is no agent with that name |
| `409` | Several agents have that name: use its identifier |
| `413` | The body exceeds 28 MB |
| `422` | The agent's model does not support images, the voice note contains no speech or the agent does not have **Text to speech** |
| `429` | More than 60 queries per minute with the same key |

## Credits {#créditos}

Each query uses the organization's credits according to the tokens used, unless the agent uses an [own model](/organizacion/proveedores-de-ia). Voice note transcription and response audio are always charged. See [Credits and limits](/organizacion/creditos-y-limites).

Each query is recorded in the key (**Recent executions**) and in the agent (**API queries**).
