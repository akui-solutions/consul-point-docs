---
id: aplicacion-externa
title: Aplicación externa
sidebar_label: Aplicación externa
sidebar_position: 3
description: Cómo conectar un sistema propio (una app o una web) a ConsulPoint para que sus conversaciones lleguen al panel y las atiendan un agente y el equipo.
---

# Aplicación externa

<PageMeta route="/settings/connectors">administrador</PageMeta>

Una **aplicación externa** es un canal para un sistema propio de la organización, por ejemplo una app móvil o el chat de una web. El sistema envía a ConsulPoint los mensajes de sus usuarios; aquí los responden un agente o el equipo, y ConsulPoint devuelve cada respuesta al sistema para que se la entregue al usuario.

La configuración en ConsulPoint la hace un administrador. La parte técnica del otro sistema (enviar los mensajes y recibir las respuestas) está en [API del canal de aplicación externa](/canal-externo/api).

## Crear el canal

En **Configuración → Conectores**, pulsar **Agregar integración → Aplicación externa**. Se abre **Conectar aplicación externa**, en tres pasos.

**1. Crear canal**

| Campo | Contenido |
|---|---|
| **Nombre de la integración** | Obligatorio, entre 3 y 100 caracteres |
| **Descripción** | Opcional; si se rellena, entre 10 y 500 caracteres |
| **Tiempo sin actividad antes de abrir un chat nuevo (minutos)** | Obligatorio, de 1 a 10.080. Por defecto, 30. Si el usuario no escribe durante ese tiempo, su próximo mensaje abre una conversación nueva |
| **Exigir firma a la plataforma externa** | Si se activa, el otro sistema tiene que firmar cada mensaje que envía, además de usar la API key |

Pulsar **Crear canal**.

**2. Configurar salida**

Primero se muestran las dos credenciales del canal:

<Screenshot src="/img/canales/aplicacion-externa-credenciales.png" alt="Credenciales de una aplicación externa" caption="API key y secreto de firma (ejemplo)" maxWidth={600} />

- **API key**: la clave con la que el otro sistema envía los mensajes.
- **Secreto de firma**: sirve para firmar y comprobar los mensajes en los dos sentidos.

:::danger Guardarlas ahora
Las dos se muestran **una sola vez**. Hay que copiarlas y entregarlas al equipo del otro sistema por un canal seguro. Si se pierden, solo se pueden regenerar.
:::

Después, en **Entrega de respuestas (opcional)**, se indica dónde enviará ConsulPoint las respuestas:

- **URL de entrega de respuestas**: la dirección HTTPS del otro sistema que recibe las respuestas.
- **API Key de entrega**: una clave que el otro sistema comprobará en cada entrega.

Se puede **Omitir** y completarlo después con **Editar**. Mientras no esté configurado, la tarjeta muestra **Sin conectar**: los mensajes llegan, pero las respuestas no salen.

**3. Equipo**

Opcional: el **Responsable**, el **Agente de IA** y el equipo o las personas que verán y responderán las conversaciones. Pulsar **Finalizar**.

Si se asigna un agente, responde automáticamente cada mensaje del usuario. El equipo sigue viendo la conversación y puede intervenir en cualquier momento.

:::info El identificador del canal
El otro sistema necesita, además de la API key, el identificador de este canal para enviar los mensajes. Por ahora no aparece en pantalla: hay que pedírselo a soporte de ConsulPoint.
:::

## Después de crearlo

El detalle de la integración muestra **Chat nuevo tras inactividad**, la **URL de respuestas**, si hay **Secreto de firma** y si la **Firma obligatoria** está activada.

| Acción | Qué hace |
|---|---|
| **Editar** | Cambia el nombre, la descripción, el tiempo sin actividad y la entrega de respuestas |
| **Gestionar equipo** | Cambia el responsable, el agente y el equipo |
| **Regenerar API key** | Crea una API key nueva y muestra la nueva una vez. La anterior deja de funcionar **en ese mismo momento**: hay que actualizar el otro sistema |
| **Regenerar secreto de firma** | Crea un secreto nuevo. El anterior deja de valer en ese momento, sin periodo de solape: conviene coordinarlo antes con el otro sistema |
| **Eliminar** | Elimina el canal |
