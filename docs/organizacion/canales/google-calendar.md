---
id: google-calendar
title: Google Calendar
sidebar_label: Google Calendar
sidebar_position: 4
description: Cómo conectar el calendario de Google de la organización para que los agentes consulten disponibilidad y agenden citas en WhatsApp, Telegram y aplicaciones externas.
---

# Google Calendar

<PageMeta route="/settings/connectors">administrador</PageMeta>

Conectar Google Calendar permite que los agentes **consulten la disponibilidad y agenden citas** en el calendario de la organización mientras atienden a un cliente por WhatsApp, Telegram o una aplicación externa.

## Conectar el calendario

1. En **Configuración → Conectores**, pulsar **Agregar integración → Google Calendar**.
2. Se abre una ventana de Google: iniciar sesión con la cuenta cuyo calendario se va a usar y aceptar los permisos (ver los eventos y crear eventos nuevos).
3. Al terminar, la plataforma muestra **Google Calendar conectado**, y la tarjeta aparece con la cuenta conectada.

<Screenshot src="/img/canales/google-calendar.png" alt="Tarjeta de Google Calendar conectada" caption="Google Calendar conectado (ejemplo)" maxWidth={520} />

Cada organización conecta **un solo calendario**: el principal de esa cuenta de Google. Mientras está conectado, la opción **Google Calendar** de **Agregar integración** aparece desactivada.

Si el enlace de conexión caduca (dura unos minutos) o se usa dos veces, la plataforma pide volver a intentarlo.

## Qué hacen los agentes

No hace falta activar nada en los agentes: todos los que atienden conversaciones de **WhatsApp, Telegram o aplicaciones externas** pueden, cuando el cliente lo pide:

- **Consultar la disponibilidad** de la agenda, en un intervalo de hasta 31 días;
- **Agendar una cita** de hasta 8 horas, en una fecha futura.

Las conversaciones internas de la plataforma no usan el calendario.

Las citas se crean en el calendario conectado. Si el cliente da su correo, queda guardado en el evento, pero Google no le envía ninguna invitación. Los agentes no modifican ni eliminan eventos.

En la conversación, [Qué hizo el agente](/conversaciones/conversar-con-un-agente#qué-hizo-el-agente) muestra **Revisó la disponibilidad de la agenda** y **Agendó "…"**.

:::tip Indicarlo en las instrucciones
Conviene que las [instrucciones del sistema](/control/estudio/crear-un-agente#comportamiento-instrucciones-del-sistema) del agente digan cuándo ofrecer una cita, qué duración tiene y qué datos pedir antes de agendarla.
:::

## Desconectar

En la tarjeta, el icono de papelera (**Desconectar**). Los agentes dejan de poder consultar la disponibilidad y agendar citas; los eventos ya creados siguen en el calendario.
