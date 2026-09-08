---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 3
description: Notificación automática a sistemas externos ante eventos de ConsulPoint. Modos síncrono, asíncrono y cola.
---

# Webhooks

**Ruta:** `/settings/webhooks`
**Permiso requerido:** administrador

## Descripción

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

| Campo | Descripción |
|---|---|
| **Nombre** | Identificador del webhook |
| **URL** | Destino de la notificación |
| **Eventos** | Sucesos que lo activan |
| **Tipo** | Modo de ejecución |
| **Estado** | Activo o Inactivo |

## Eventos disponibles

- Usuario actualizado
- Usuario eliminado
- Conversación específica actualizada
- Todas las conversaciones actualizadas
