---
id: telegram
title: Telegram
sidebar_label: Telegram
sidebar_position: 2
description: Cómo conectar un bot de Telegram a ConsulPoint para que un agente atienda sus mensajes.
---

# Telegram

<PageMeta route="/settings/connectors">administrador</PageMeta>

Un bot de Telegram conectado a ConsulPoint recibe los mensajes de quien le escriba, los responde con un agente y los muestra en [Conversaciones](/modulos/conversaciones).

## Antes de empezar: crear el bot

El bot se crea en Telegram, con **@BotFather**: se le envía `/newbot`, se elige un nombre y un usuario para el bot, y BotFather devuelve el **token** del bot (algo como `123456789:AAE…`). Ese token es la credencial del bot: no debe compartirse.

## Conectar el bot

En **Configuración → Conectores**, pulsar **Agregar integración → Telegram**. Se abre **Conectar Bot de Telegram**, en dos pasos.

<Screenshot src="/img/canales/telegram.png" alt="Diálogo Conectar Bot de Telegram" caption="Conectar Bot de Telegram" maxWidth={600} />

**1. Configurar bot**

| Campo | Contenido |
|---|---|
| **Nombre de la integración** | Obligatorio, entre 3 y 100 caracteres. Por ejemplo, «Bot de soporte» |
| **Descripción** | Opcional, hasta 500 caracteres |
| **Token del bot** | Obligatorio. El que entregó @BotFather |

Pulsar **Crear bot**. La plataforma comprueba el token con Telegram y deja el bot listo para recibir mensajes. Si el token no es válido, muestra **No se pudo crear el bot**.

**2. Asignar agente**

Elegir el **Responsable** y el **Agente de IA**, los dos obligatorios, y pulsar **Guardar y activar**.

La tarjeta del bot aparece en **Conectores** con su usuario (`@…`) y el estado **Conectado**. El detalle muestra el **Usuario del bot**, que se puede copiar para compartirlo.

:::warning Cambiar el token
Si se regenera el token en @BotFather, lo más seguro es eliminar la integración y crearla de nuevo con el token nuevo.
:::

## Iniciar una conversación

En Telegram, un bot no puede escribir primero a quien nunca le ha escrito. En [Conversaciones](/modulos/conversaciones), **Iniciar conversación de Telegram** permite escribir a un **Contacto existente** o a un **ID de chat de Telegram** (el contacto puede obtenerlo escribiendo a @userinfobot). Si el contacto aún no ha iniciado el bot, la plataforma lo indica.
