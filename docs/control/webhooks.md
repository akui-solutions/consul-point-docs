---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 3
description: Avisos automáticos de ConsulPoint a un sistema externo cuando se actualiza un usuario o una conversación. Eventos, formato de los envíos y límites.
---

# Webhooks

<PageMeta route="/settings/webhooks">permiso sobre **Webhooks**</PageMeta>

Un **webhook** avisa automáticamente a un sistema externo cuando ocurre algo en ConsulPoint: ConsulPoint envía los datos del evento a una dirección (URL) de ese sistema. Se gestionan en **Configuración → Webhooks**.

<Screenshot src="/img/configuracion/webhooks.png" alt="Lista de webhooks en Configuración" caption="Configuración → Webhooks" />

## La lista

Cada webhook muestra su **Nombre**, **Tipo**, **URL**, **Eventos**, **Propietario**, fecha de creación y **Estado** (**Activo** o **Inactivo**). Se puede buscar por nombre y filtrar por propietario y por estado.

| Acción | Qué hace |
|---|---|
| **Ver detalle** | Muestra la descripción, la URL, el propietario, el tipo, los eventos y las fechas |
| **Editar** | Cambia sus datos |
| **Activar** / **Desactivar** | Un webhook inactivo no envía nada |
| **Eliminar** | Solo es posible si antes se ha desactivado |

## Crear un webhook

Pulsar **Nuevo webhook** y completar:

| Campo | Contenido |
|---|---|
| **Nombre** | Obligatorio, entre 3 y 50 caracteres |
| **Descripción** | Opcional; si se rellena, entre 10 y 255 caracteres |
| **URL** | Obligatoria. La dirección del sistema externo que recibirá los avisos |
| **Tipo** | **Síncrono**, **Asíncrono** o **Cola**. Por defecto, **Asíncrono**. Ver [Tipos](#tipos) |
| **Eventos** | Los sucesos que disparan el aviso. Ver la tabla siguiente |
| **Chat** | Solo con **Conversación específica actualizada**: la conversación que lo dispara |

Los webhooks nuevos se crean activos. El plan fija el número máximo de webhooks. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).

## Eventos

| Evento | Cuándo se envía |
|---|---|
| **Usuario actualizado** | Cuando se modifican los datos de un usuario |
| **Usuario eliminado** | Cuando un administrador elimina un usuario |
| **Todas las conversaciones actualizadas** | Cuando un agente responde en **cualquier conversación de quien crea el webhook**. No incluye las conversaciones de otras personas |
| **Conversación específica actualizada** | Cuando un agente responde en la conversación elegida en **Chat** (una de quien crea el webhook) |

## Qué se envía

Cada aviso es un `POST` a la URL, con un cuerpo JSON:

```json
{
  "event": "conversation.updated.chat.clx0abc123",
  "tenantId": "clx0org001",
  "data": { "...": "..." },
  "timestamp": "2026-11-12T10:15:00.000Z"
}
```

| Campo | Qué es |
|---|---|
| `event` | El evento. En los de conversación incluye el identificador del usuario o de la conversación (`conversation.updated.user.…` o `conversation.updated.chat.…`) |
| `tenantId` | El identificador de la organización |
| `data` | En los eventos de usuario, los datos del usuario. En los de conversación, la conversación completa con sus mensajes y el agente que la atiende |
| `timestamp` | El momento del aviso |

:::warning Tenerlo en cuenta en el sistema que recibe
- Los avisos **no van firmados**: el sistema externo no puede comprobar con una firma que vienen de ConsulPoint. Conviene usar una URL difícil de adivinar y servida por HTTPS.
- ConsulPoint espera la respuesta **10 segundos** como máximo. Si el destino no responde o falla, el aviso **no se reintenta**.
- El aviso de una conversación incluye todos sus mensajes: puede contener datos personales.
:::

## Tipos

El tipo se elige al crear el webhook. Hoy, en la práctica, los tres se comportan igual: el aviso se envía en segundo plano y **no retrasa** la operación que lo dispara. **Cola** funciona como **Asíncrono**.
