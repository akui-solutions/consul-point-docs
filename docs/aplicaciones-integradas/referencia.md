---
id: referencia
title: Referencia
sidebar_label: Referencia técnica
sidebar_position: 7
description: Referencia técnica de las aplicaciones integradas de ConsulPoint. Parámetros de contexto, mensajes, rutas de la API, límites y códigos de respuesta.
---

# Referencia

Tablas de consulta para quien desarrolla. Cada tema se explica en su página; aquí están solo los datos exactos.

## Contexto (`window.MINI_APP_PARAMS`)

| Parámetro | Presente en | Valor |
|---|---|---|
| `language` | Siempre | `es` · `en` |
| `theme` | Siempre | `light` · `dark` |
| `token` | Siempre | Sesión temporal |
| `apiBaseUrl` | Siempre | Base de la API |
| `miniAppId` | Siempre | Identificador de la aplicación |
| `applicationId` | Inicio | Identificador de la aplicación |
| `folderId` | Carpeta del Centro de Conocimiento | Identificador de la carpeta |
| `id` | Vista previa de un archivo | Identificador de la extracción |
| `chatId` | Conversaciones | Identificador de la conversación |
| `aiResponseEnabled` | Conversaciones | `"true"` · `"false"` |

## Mensajes hacia la plataforma

Todos llevan `source: 'aku-iframe'` y se envían con destino `'*'`.

| `type` | Campos | Respuesta |
|---|---|---|
| `INVALIDATE_TAGS` | `api`, `tags[]` | — |
| `NAVIGATE` | `path` | — |
| `OPEN_URL` | `url` (solo `https`) | `OPEN_URL_RESULT` |
| `PREVIEW_EMAIL` | `integrationId`, `messageId` | `PREVIEW_EMAIL_RESULT` |
| `INSERT_MESSAGE_TEXT` | `chatId`, `text` | — |
| `REFRESH_SESSION` | — | `SESSION_REFRESHED` · `SESSION_REFRESH_FAILED` |

### Valores de `api` en `INVALIDATE_TAGS`

| Valor | Cuándo usarlo |
|---|---|
| `knowledgeHub` | Se crearon, modificaron o eliminaron archivos o carpetas |
| `conversations` | Cambiaron conversaciones |
| `applications` | Cambió la lista de aplicaciones |
| `dashboard` | Cambiaron los widgets de Inicio |
| `users` · `roles` · `organization` | Cambiaron usuarios, roles o datos de la organización |
| `notifications` | Se generaron notificaciones |

## Mensajes desde la plataforma

Todos llevan `source: 'aku-parent'`.

| `type` | Campos | Cuándo llega |
|---|---|---|
| `SESSION_REFRESHED` | `token` | Tras pedir una renovación |
| `SESSION_REFRESH_FAILED` | — | La sesión no se pudo renovar |
| `OPEN_URL_RESULT` | `ok`, `reason` | Tras `OPEN_URL` |
| `PREVIEW_EMAIL_RESULT` | `ok`, `reason` | Tras `PREVIEW_EMAIL` |
| `CHAT_AI_RESPONSE_STATUS` | `chatId`, `aiResponseEnabled` | Al cambiar las respuestas automáticas de la conversación |

En las respuestas, `ok: true` indica que la plataforma aceptó la petición; `ok: false` con `reason: 'invalid'`, que los datos no eran válidos.

## Rutas de la API

Todas son relativas a `apiBaseUrl` y requieren las cabeceras `Authorization` y `X-Mini-App-Id`.

| Ruta | Para qué | Permiso |
|---|---|---|
| `GET /mini-apps/v2/{miniAppId}/session` | Identidad de quien usa la aplicación | — |
| `…/mini-apps/{miniAppId}/models/{nombre}/data` | Registros propios | — |
| `GET` · `POST /mini-app-runtime/activity` | Actividad | — |
| `GET /knowledge-hub/directories/own` · `/shared` | Carpetas | Centro de conocimiento |
| `GET /knowledge-hub-api/documents/{folderId}/extractions` | Extracciones de una carpeta | Centro de conocimiento |
| `GET /knowledge-hub/documents/{folderId}/files/{fileId}` | Enlace temporal a un archivo | Centro de conocimiento |
| `POST /knowledge-hub/documents/{folderId}/files` | Subir archivos | Centro de conocimiento |
| `GET /inbox/integrations` | Cuentas de correo conectadas | Bandeja Inteligente |
| `GET` · `PUT` · `DELETE /inbox/filter-rules/{id}` · `POST /inbox/{integrationId}/filter-rules` | Reglas que guardan correos en una carpeta | Bandeja Inteligente |
| `GET` · `POST /inbox/filter-rules/{id}/process` | Procesar los correos de una regla y consultar el avance | Bandeja Inteligente |
| `GET /consult-point/chat-ai/{chatId}/analysis` | Análisis de una conversación | Conversaciones |
| `GET /contacts` · `/contacts/{id}` | Personas | Contactos |
| `GET /companies` · `/companies/{id}` · `/companies/{id}/members` | Empresas | Contactos |

## Límites

| Concepto | Límite |
|---|---|
| Duración de la sesión | 30 minutos |
| Validez de un enlace a un archivo | 5 minutos |
| Paquete ZIP | 50 MB · 10 MB por archivo · 2.000 archivos |
| Subida de archivos | 150 MB por archivo · 6 por petición |
| Extracciones por página | 100 |
| Registros propios por página | 500 (25 por defecto) |
| Actividad por consulta | 100 |
| Aplicaciones por carpeta | 7 |
| Elementos fijados en la barra lateral | 10 |
| Texto en el cuadro de mensaje | 65.000 caracteres |

## Códigos de respuesta

| Código | Significado habitual | Qué hacer |
|---|---|---|
| `401` | La sesión venció | Renovarla y repetir la petición una vez |
| `403` | Falta un permiso, o la ruta no está abierta a aplicaciones | Mostrar la función como no disponible |
| `404` | El recurso no existe o no pertenece a la organización | Tratarlo como inexistente |
| `409` | Otra persona modificó el registro | Volver a leer y reintentar |
| `413` | El archivo supera el tamaño permitido | Avisar antes de enviar |
| `422` | El registro no cumple el esquema del modelo | Corregir los campos indicados |
| `429` | Demasiadas peticiones | Esperar y reintentar |

:::info Recursos en la pestaña Permisos
**Biblioteca de esquemas** figura en la lista de recursos, pero todavía no ofrece rutas para aplicaciones.
:::
