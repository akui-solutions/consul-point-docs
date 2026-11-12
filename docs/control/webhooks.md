---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 3
description: Notificación automática a sistemas externos ante eventos de ConsulPoint. Modos síncrono, asíncrono y cola.
---

# Webhooks

<PageMeta route="/settings/webhooks">administrador</PageMeta>

Mecanismo de notificación a sistemas externos ante eventos de la plataforma. Permite integrar ConsulPoint con sistemas propios.

## Tipos de ejecución

| Tipo | Comportamiento |
|---|---|
| **Síncrono** | Espera la respuesta del destino antes de continuar (bloqueante) |
| **Asíncrono** | Envía sin esperar respuesta (no bloqueante) |
| **Cola** | Encola el envío para procesamiento diferido |

:::warning Criterio de selección
Utilizar **Asíncrono** salvo que la operación dependa de la respuesta del sistema destino. El modo **Síncrono** introduce latencia en la operación que lo dispara.
:::

## Configuración

En **Configuración → Webhooks**, pulsar **Crear webhook**:

| Campo | Descripción |
|---|---|
| **Nombre** | Obligatorio, entre 3 y 50 caracteres |
| **URL** | Obligatoria. Dirección a la que se envían los eventos |
| **Descripción** | Opcional; si se rellena, entre 10 y 255 caracteres |
| **Eventos** | Uno o más de la lista siguiente |
| **Chat** | Solo con el evento **Conversación específica actualizada**: la conversación que lo activa |
| **Tipo** | **Síncrono**, **Asíncrono** o **Cola**. Por defecto, **Asíncrono** |

## Eventos disponibles

- Usuario actualizado
- Usuario eliminado
- Conversación específica actualizada
- Todas las conversaciones actualizadas
