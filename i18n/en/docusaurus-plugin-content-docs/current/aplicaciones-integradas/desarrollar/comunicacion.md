---
id: comunicacion
title: Communicating with the platform
sidebar_label: Communicating with the platform
sidebar_position: 6
description: Messages an integrated app exchanges with ConsulPoint to refresh data, navigate, open links or show an email.
---

# Communicating with the platform

The app and ConsulPoint are on different domains, so they can only communicate through **messages** (`postMessage`). With them, the app asks the platform for actions it cannot do on its own.

## Four rules {#cuatro-reglas}

1. **Send to the parent window with target `'*'`**. The message only reaches ConsulPoint, which is what shows the app.
2. **Mark every message** with `source: 'aku-iframe'`. Without that mark, it is ignored.
3. **Accept a response only if** it comes from the parent window and carries `source: 'aku-parent'`.
4. **Send nothing outside ConsulPoint**: if the app is not inside the platform, there is no one to talk to.

```ts title="src/services/platform.ts"
const isEmbedded = () => window !== window.parent;

export function sendToPlatform(message: Record<string, unknown>) {
  if (!isEmbedded()) return;
  window.parent.postMessage({ source: 'aku-iframe', ...message }, '*');
}

export function onPlatformMessage(type: string, handler: (data: any) => void) {
  const listener = (event: MessageEvent) => {
    if (event.source !== window.parent) return;
    if (event.data?.source !== 'aku-parent' || event.data.type !== type) return;
    handler(event.data);
  };
  window.addEventListener('message', listener);
  return () => window.removeEventListener('message', listener);
}
```

:::warning The app's own domain
Do not use the app's own address (`window.location.origin`) as the target of a message or to validate a response: the platform is on another domain and the message would be lost without an error.
:::

## Available messages {#mensajes-disponibles}

| Message | What for | Response |
|---|---|---|
| `INVALIDATE_TAGS` | Report that the app changed data the platform also shows | — |
| `NAVIGATE` | Open a ConsulPoint page | — |
| `OPEN_URL` | Open an external link in a new tab | `OPEN_URL_RESULT` |
| `PREVIEW_EMAIL` | Show a Smart Inbox email over the app | `PREVIEW_EMAIL_RESULT` |
| `INSERT_MESSAGE_TEXT` | Write text in the message box of the open conversation | — |
| `REFRESH_SESSION` | Renew the session | `SESSION_REFRESHED` · `SESSION_REFRESH_FAILED` |

The fields of each message are in the [Reference](/aplicaciones-integradas/referencia).

### Refresh the platform's data {#actualizar-los-datos-de-la-plataforma}

```ts
sendToPlatform({
  type: 'INVALIDATE_TAGS',
  api: 'knowledgeHub',
  tags: [{ type: 'KnowledgeHub', id: folderId }],
});
```

### Open a ConsulPoint page {#abrir-una-página-de-consulpoint}

```ts
sendToPlatform({ type: 'NAVIGATE', path: '/contacts/<id>' });
```

Only allowed paths are followed: the Smart Inbox (`/smart-inbox`) and Contacts (`/contacts`). When navigating, the app closes.

### Open an external link {#abrir-un-enlace-externo}

An integrated app **cannot open windows or tabs**. To open a link, it asks the platform:

```ts
sendToPlatform({ type: 'OPEN_URL', url: 'https://example.com/document' });
```

- Only `https` addresses are opened.
- It must be sent directly from the user's click; otherwise, the browser may block the tab.
- It cannot be used to open the app's own pages: outside ConsulPoint they have no session.

### Show an email {#mostrar-un-correo}

```ts
sendToPlatform({ type: 'PREVIEW_EMAIL', integrationId, messageId });
```

The platform opens the email in a panel over the app, without leaving it.

### Write in the conversation {#escribir-en-la-conversación}

Available when the app is opened in the side panel of Conversations:

```ts
sendToPlatform({ type: 'INSERT_MESSAGE_TEXT', chatId, text: 'Suggested text' });
```

The text replaces whatever was in the message box. The person decides whether to send it.

## Best practices {#buenas-prácticas}

:::tip Wait with a limit
When waiting for a response, set a maximum time and remove the listener when the response arrives or the time runs out.
:::

:::info Frequency
The platform discards the messages of an app that sends too many per second. Do not send messages in a loop.
:::
