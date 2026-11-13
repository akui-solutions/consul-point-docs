---
id: contexto
title: Context it receives
sidebar_label: Context it receives
sidebar_position: 2
description: Parameters ConsulPoint hands to an integrated app when it opens, depending on where it's opened from.
---

# Context it receives

When an app is opened, ConsulPoint hands it an object with everything it needs to know: `window.MINI_APP_PARAMS`. It's the only source of context, and it's available before the app's code runs.

## Common parameters {#parámetros-comunes}

| Parameter | Values | Content |
|---|---|---|
| `language` | `es` · `en` | The user's language |
| `theme` | `light` · `dark` | Active visual theme |
| `token` | text | Temporary session for calling the API |
| `apiBaseUrl` | address | API base. Don't hard-code it |
| `miniAppId` | identifier | The app's identifier |

## Parameters by place {#parámetros-según-el-lugar}

| Where it's opened | Parameter | Content |
|---|---|---|
| Home | `applicationId` | The app's identifier |
| Knowledge Hub folder | `folderId` | Open folder |
| File preview | `id` | Extraction of the file on screen |
| Conversations | `chatId` | Open conversation |
| Conversations | `aiResponseEnabled` | `"true"` or `"false"`, depending on whether automatic replies are on |

All values are text. A parameter that doesn't apply to the place isn't present.

## How to read it {#cómo-leerlo}

Read it in a single module and don't access the object from components or services:

```ts title="src/config.ts"
export function getConfig() {
  const params = window.MINI_APP_PARAMS ?? {};
  return {
    language: params.language ?? 'es',
    theme: params.theme ?? 'light',
    token: params.token ?? null,
    apiBaseUrl: params.apiBaseUrl ?? null,
    miniAppId: params.miniAppId ?? null,
    folderId: params.folderId ?? null,
    chatId: params.chatId ?? null,
  };
}
```

## When it changes {#cuándo-cambia}

If the user changes language, theme, folder or conversation, ConsulPoint **reloads the app** with the new context. You don't need to listen for changes. If the platform sends a new context without reloading, the optional `mini-app-context` event fires on `window`.

### How the context arrives {#cómo-llega-el-contexto}

The app is served from its own domain, separate from the platform's. When it loads, it tells ConsulPoint it's ready and receives the context; meanwhile, its scripts wait, and they run in order once `window.MINI_APP_PARAMS` exists. That's why you should avoid in your code:

- `document.write`;
- relying on `document.readyState` being `loading`;
- `on…` attributes in the HTML that call functions from your own code.

That's also why the app must not assume its in-memory state is kept: whatever matters is saved on the platform.

## The four states of a screen {#los-cuatro-estados-de-una-pantalla}

Every screen must handle these situations and never be left blank in any of them:

| State | When it happens |
|---|---|
| **Loading** | While starting up or querying data |
| **No context** | A required parameter is missing, for example the folder |
| **Error** | A query failed |
| **Empty** | The query responded, but there's no data |

The **No context** state isn't an error: it's a normal situation, explained with a clear message, for example asking the user to choose a folder.

## Best practices {#buenas-prácticas}

:::warning The token
Don't store the `token` in browser storage, don't write it to the console and don't include it in addresses.
:::

:::tip Language and theme
Apply the theme on startup and provide all texts in Spanish and English.
:::
