---
id: comunicacion
title: Comunicarse con la plataforma
sidebar_label: Comunicarse con la plataforma
sidebar_position: 6
description: Mensajes que una aplicación integrada intercambia con ConsulPoint para actualizar datos, navegar, abrir enlaces o mostrar un correo.
---

# Comunicarse con la plataforma

La aplicación y ConsulPoint están en dominios distintos, por lo que solo se comunican mediante **mensajes** (`postMessage`). Con ellos la aplicación pide a la plataforma acciones que no puede hacer por sí misma.

## Cuatro reglas

1. **Enviar a la ventana contenedora con destino `'*'`**. El mensaje solo llega a ConsulPoint, que es quien muestra la aplicación.
2. **Marcar cada mensaje** con `source: 'aku-iframe'`. Sin esa marca, se ignora.
3. **Aceptar una respuesta solo si** viene de la ventana contenedora y lleva `source: 'aku-parent'`.
4. **No enviar nada fuera de ConsulPoint**: si la aplicación no está dentro de la plataforma, no hay a quién hablarle.

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

:::warning Dominio propio de la aplicación
No utilizar la dirección de la propia aplicación (`window.location.origin`) como destino de un mensaje ni para validar una respuesta: la plataforma está en otro dominio y el mensaje se perdería sin dar error.
:::

## Mensajes disponibles

| Mensaje | Para qué | Respuesta |
|---|---|---|
| `INVALIDATE_TAGS` | Avisar de que la aplicación cambió datos que la plataforma también muestra | — |
| `NAVIGATE` | Abrir una página de ConsulPoint | — |
| `OPEN_URL` | Abrir un enlace externo en una pestaña nueva | `OPEN_URL_RESULT` |
| `PREVIEW_EMAIL` | Mostrar un correo de la Bandeja Inteligente sobre la aplicación | `PREVIEW_EMAIL_RESULT` |
| `INSERT_MESSAGE_TEXT` | Escribir un texto en el cuadro de mensaje de la conversación abierta | — |
| `REFRESH_SESSION` | Renovar la sesión | `SESSION_REFRESHED` · `SESSION_REFRESH_FAILED` |

Los campos de cada mensaje están en la [Referencia](/aplicaciones-integradas/referencia).

### Actualizar los datos de la plataforma

```ts
sendToPlatform({
  type: 'INVALIDATE_TAGS',
  api: 'knowledgeHub',
  tags: [{ type: 'KnowledgeHub', id: folderId }],
});
```

### Abrir una página de ConsulPoint

```ts
sendToPlatform({ type: 'NAVIGATE', path: '/contacts/<id>' });
```

Solo se siguen las rutas permitidas: la Bandeja Inteligente (`/smart-inbox`) y Contactos (`/contacts`). Al navegar, la aplicación se cierra.

### Abrir un enlace externo

Una aplicación integrada **no puede abrir ventanas ni pestañas**. Para abrir un enlace, lo pide a la plataforma:

```ts
sendToPlatform({ type: 'OPEN_URL', url: 'https://ejemplo.com/documento' });
```

- Solo se abren direcciones `https`.
- Debe enviarse directamente desde el clic del usuario; de lo contrario, el navegador puede bloquear la pestaña.
- No sirve para abrir páginas de la propia aplicación: fuera de ConsulPoint no tienen sesión.

### Mostrar un correo

```ts
sendToPlatform({ type: 'PREVIEW_EMAIL', integrationId, messageId });
```

La plataforma abre el correo en un panel sobre la aplicación, sin salir de ella.

### Escribir en la conversación

Disponible cuando la aplicación se abre en el panel lateral de Conversaciones:

```ts
sendToPlatform({ type: 'INSERT_MESSAGE_TEXT', chatId, text: 'Texto sugerido' });
```

El texto sustituye lo que hubiera en el cuadro de mensaje. La persona decide si lo envía.

## Buenas prácticas

:::tip Esperar con límite
Al esperar una respuesta, fijar un tiempo máximo y retirar la escucha cuando llegue la respuesta o se agote el tiempo.
:::

:::info Frecuencia
La plataforma descarta los mensajes de una aplicación que envíe demasiados por segundo. No enviar mensajes en bucle.
:::
