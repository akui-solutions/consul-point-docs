---
id: consultar-un-agente
title: Agents API
sidebar_label: Query an agent
sidebar_position: 1
slug: /api-agentes
description: "How to query a ConsulPoint agent from an external system with the Agents API: request, response, attachments, end-user memory, errors and credits."
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
| `endUserId` | No | The identifier of the person the external system is serving, so the agent remembers them across queries. See [End-user memory](#memoria-por-usuario-final) |

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

`model` is the agent. The last message that is not `system` is taken as the question; the previous ones, as context; and the `system` ones, as additional instructions. `stream: true` is the same as requesting the response in chunks. `user` is the end-user identifier for [memory](#memoria-por-usuario-final); if it isn't valid, it's ignored and the query runs without memory.

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

## End-user memory {#memoria-por-usuario-final}

If the agent has the **Memory** function (see [Agent memory](/control/estudio/memoria)), it can remember each person the external system serves: their preferences, what they said and what's pending. Each query says who it's about with an identifier chosen by the integrator:

| Format | Field |
|---|---|
| Native | `endUserId` |
| OpenAI | `user` |

```json
{
  "agentId": "Customer service assistant",
  "prompt": "Remember that I prefer you to write to me in English",
  "endUserId": "customer-42"
}
```

Without an identifier, or if the agent has no memory, the query works the same, without remembering anything.

| Rule | Detail |
|---|---|
| Identifier format | Up to 128 characters: unaccented letters, numbers and `. _ @ + -`. No spaces, `/` or `:`, and not only dots |
| Invalid identifier | In native format, a `400` error. In OpenAI format it's ignored and the query runs without memory |
| One memory per… | API key, agent and identifier. The same identifier with another key or another agent is a different memory |
| Expiry | It doesn't expire through inactivity |

The agent keeps what's useful, following what it should remember. Because the person is external, it doesn't keep instructions that try to change its behavior, or data about other people. See [What the agent keeps](/control/estudio/memoria#qué-guarda-el-agente).

:::warning The server sets the identifier
The platform trusts the identifier it receives. The external system's server must set it from its own session, never the person's browser or app: whoever sends someone else's identifier gets answers based on what the agent remembers about that person. Use a stable, opaque identifier, such as a UUID or the user's internal id, rather than an email or a phone number.
:::

If two queries for the same end user and the same agent arrive at the same time, the last one to save replaces what the other one saved.

### View and delete memory {#ver-y-borrar-la-memoria}

These endpoints use the same API key. Their address is the base URL without the trailing `/query` (it ends in `/llm-api`), followed by the path:

| Method | Path | What it does | Response |
|---|---|---|---|
| `GET` | `/agents/{agentId}/end-users/{endUserId}/memory` | What the agent remembers about that end user with this key | `200` with `content` (Markdown) and `updatedAt`, both `null` if nothing is stored |
| `DELETE` | `/agents/{agentId}/end-users/{endUserId}/memory` | Deletes what the agent remembers about that end user | `204`, also if there was nothing |
| `DELETE` | `/end-users/{endUserId}/memory` | Deletes their memory with every agent of the key, for example when they ask for their data to be deleted. The query history is kept | `204` |

`{agentId}` is the agent's identifier, not its name: the last part of the address of its detail in Studio.

```bash
curl -X DELETE -H "Authorization: Bearer {API key}" \
  "{base URL without /query}/end-users/customer-42/memory"
```

- The key must be linked to the agent and active.
- They don't use credits, but they count toward the key's limit of 60 requests per minute.
- They work even if the agent no longer has memory turned on.
- The content is partly written from what the end user says: always show it as text, never as HTML.

| Code | Cause |
|---|---|
| `400` | The agent or end-user identifier isn't valid |
| `403` | The key isn't linked to the agent, or the organization has no active subscription |
| `404` | The agent doesn't exist in the organization |
| `503` | Memory isn't available right now (when deleting) |

End users' memory is deleted automatically when you delete the API key, remove the agent from the key or delete the agent. Deactivating or regenerating the key doesn't delete it.

## Errors {#errores}

| Code | Cause |
|---|---|
| `400` | Invalid attachments or parameters, or an invalid `endUserId` |
| `401` | The key is missing or not valid |
| `403` | The agent is not associated with the key, the organization has no active subscription or has no credits left |
| `404` | There is no agent with that name |
| `409` | Several agents have that name: use its identifier |
| `413` | The body exceeds 28 MB |
| `422` | The agent's model does not support images, the voice note contains no speech or the agent does not have **Text to speech** |
| `429` | More than 60 queries per minute with the same key |

## Credits {#créditos}

Each query uses the organization's credits according to the tokens used, unless the agent uses an [own model](/organizacion/proveedores-de-ia). Voice note transcription and response audio are always charged. With [memory](#memoria-por-usuario-final), what the agent remembers about the end user is part of each query and of its usage. See [Credits and limits](/organizacion/creditos-y-limites).

Each query is recorded in the key (**Recent executions**) and in the agent (**API queries**).
