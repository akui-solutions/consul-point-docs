---
id: referencia
title: Reference
sidebar_label: Technical reference
sidebar_position: 7
description: Technical reference for ConsulPoint integrated apps. Context parameters, messages, API paths, limits and response codes.
---

# Reference

Lookup tables for developers. Each topic is explained on its own page; here you only find the exact data.

## Context (`window.MINI_APP_PARAMS`) {#contexto-windowmini_app_params}

| Parameter | Present in | Value |
|---|---|---|
| `language` | Always | `es` · `en` |
| `theme` | Always | `light` · `dark` |
| `token` | Always | Temporary session |
| `apiBaseUrl` | Always | API base |
| `miniAppId` | Always | App identifier |
| `applicationId` | Home | App identifier |
| `folderId` | Knowledge Hub folder | Folder identifier |
| `id` | File preview | Extraction identifier |
| `chatId` | Conversations | Conversation identifier |
| `aiResponseEnabled` | Conversations | `"true"` · `"false"` |

## Messages to the platform {#mensajes-hacia-la-plataforma}

All of them carry `source: 'aku-iframe'` and are sent with target `'*'`.

| `type` | Fields | Response |
|---|---|---|
| `INVALIDATE_TAGS` | `api`, `tags[]` | — |
| `NAVIGATE` | `path` | — |
| `OPEN_URL` | `url` (`https` only) | `OPEN_URL_RESULT` |
| `PREVIEW_EMAIL` | `integrationId`, `messageId` | `PREVIEW_EMAIL_RESULT` |
| `INSERT_MESSAGE_TEXT` | `chatId`, `text` | — |
| `REFRESH_SESSION` | — | `SESSION_REFRESHED` · `SESSION_REFRESH_FAILED` |

### Values of `api` in `INVALIDATE_TAGS` {#valores-de-api-en-invalidate_tags}

| Value | When to use it |
|---|---|
| `knowledgeHub` | Files or folders were created, modified or deleted |
| `conversations` | Conversations changed |
| `applications` | The list of apps changed |
| `dashboard` | The Home widgets changed |
| `users` · `roles` · `organization` | Users, roles or organization data changed |
| `notifications` | Notifications were generated |

## Messages from the platform {#mensajes-desde-la-plataforma}

All of them carry `source: 'aku-parent'`.

| `type` | Fields | When it arrives |
|---|---|---|
| `SESSION_REFRESHED` | `token` | After requesting a renewal |
| `SESSION_REFRESH_FAILED` | — | The session could not be renewed |
| `OPEN_URL_RESULT` | `ok`, `reason` | After `OPEN_URL` |
| `PREVIEW_EMAIL_RESULT` | `ok`, `reason` | After `PREVIEW_EMAIL` |
| `CHAT_AI_RESPONSE_STATUS` | `chatId`, `aiResponseEnabled` | When the conversation's automatic replies are turned on or off |

In responses, `ok: true` means the platform accepted the request; `ok: false` with `reason: 'invalid'` means the data was not valid.

## API paths {#rutas-de-la-api}

All are relative to `apiBaseUrl` and require the `Authorization` and `X-Mini-App-Id` headers.

| Path | What for | Permission |
|---|---|---|
| `GET /mini-apps/v2/{miniAppId}/session` | Identity of the person using the app | — |
| `…/mini-apps/{miniAppId}/models/{name}/data` | Own records | — |
| `GET` · `POST /mini-app-runtime/activity` | Activity | — |
| `GET /knowledge-hub/directories/own` · `/shared` | Folders | Knowledge Hub |
| `GET /knowledge-hub-api/documents/{folderId}/extractions` | Extractions of a folder | Knowledge Hub |
| `GET /knowledge-hub/documents/{folderId}/files/{fileId}` | Temporary link to a file | Knowledge Hub |
| `POST /knowledge-hub/documents/{folderId}/files` | Upload files | Knowledge Hub |
| `GET /inbox/integrations` | Connected email accounts | Smart Inbox |
| `GET` · `PUT` · `DELETE /inbox/filter-rules/{id}` · `POST /inbox/{integrationId}/filter-rules` | Rules that save emails to a folder | Smart Inbox |
| `GET` · `POST /inbox/filter-rules/{id}/process` | Process a rule's emails and check the progress | Smart Inbox |
| `GET /consult-point/chat-ai/{chatId}/analysis` | Analysis of a conversation | Conversations |
| `GET /contacts` · `/contacts/{id}` | People | Contacts |
| `GET /companies` · `/companies/{id}` · `/companies/{id}/members` | Companies | Contacts |

## Limits {#límites}

| Item | Limit |
|---|---|
| Session duration | 30 minutes |
| Validity of a file link | 5 minutes |
| ZIP package | 50 MB · 10 MB per file · 2,000 files |
| File upload | 150 MB per file · 6 per request |
| Extractions per page | 100 |
| Own records per page | 500 (25 by default) |
| Activity per query | 100 |
| Apps per folder | 7 |
| Pinned items in the sidebar | 10 |
| Text in the message box | 65,000 characters |

## Response codes {#códigos-de-respuesta}

| Code | Usual meaning | What to do |
|---|---|---|
| `401` | The session expired | Renew it and repeat the request once |
| `403` | A permission is missing, or the path is not open to apps | Show the feature as unavailable |
| `404` | The resource does not exist or does not belong to the organization | Treat it as nonexistent |
| `409` | Someone else modified the record | Read it again and retry |
| `413` | The file exceeds the allowed size | Warn before sending |
| `422` | The record does not match the model's schema | Fix the fields listed |
| `429` | Too many requests | Wait and retry |

:::info Resources in the Permissions tab
**Schema Library** appears in the list of resources, but it offers no paths for apps.
:::
