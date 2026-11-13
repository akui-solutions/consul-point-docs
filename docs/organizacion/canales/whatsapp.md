---
id: whatsapp
title: WhatsApp
sidebar_label: WhatsApp
sidebar_position: 1
description: Cómo conectar un número de WhatsApp Business a ConsulPoint, con la conexión asistida de Meta o de forma manual, y cómo iniciar conversaciones con plantillas.
---

# WhatsApp

<PageMeta route="/settings/connectors/whatsapp/new">administrador</PageMeta>

Conectar un número de WhatsApp Business permite que un agente responda los mensajes que llegan a ese número y que el equipo los atienda desde [Conversaciones](/modulos/conversaciones). Se empieza en **Configuración → Conectores**, con **Agregar integración → WhatsApp**.

<Screenshot src="/img/canales/whatsapp-conectar.png" alt="Pantalla Conectar un número de WhatsApp" caption="Conectar un número de WhatsApp" />

La pantalla pide dos cosas: **cómo conectar el número** y, en **¿Quién atenderá este número?**, la **Persona a cargo** (que supervisa el número) y el **Agente de IA** (que responde los mensajes). Las dos son obligatorias.

## Conexión asistida (recomendada)

Se inicia sesión con Facebook y se siguen los pasos de Meta; ConsulPoint configura la conexión.

1. Elegir **Conexión asistida**, la persona a cargo y el agente.
2. Pulsar **Conectar con WhatsApp**. Se abre una ventana de Meta.
3. En la ventana de Meta, elegir la empresa y el número (o registrar uno nuevo) y terminar los pasos.
4. Al volver, la plataforma muestra **Número conectado** y la tarjeta del número aparece en **Conectores** como **Conectado**.

Si el número ya tenía un **PIN de verificación en dos pasos** (por ejemplo, de un proveedor anterior), se pide al final: escribir el **PIN de 6 dígitos** y pulsar **Registrar número**. Hasta entonces el número no envía ni recibe mensajes. Si no se recuerda el PIN, se puede cambiar o desactivar en WhatsApp Manager y volver a intentarlo; mientras tanto, el detalle de la integración ofrece **Introducir PIN**.

### Modo del número

Lo decide cómo se termina la conexión en la ventana de Meta, y se ve en el detalle de la integración:

| Modo | Qué implica |
|---|---|
| **Coexistencia (app de WhatsApp Business)** | El número sigue usándose también desde la app de WhatsApp Business. Si alguien responde desde la app, la IA se apaga en ese chat |
| **Cloud API** | El número solo funciona en ConsulPoint |

En coexistencia, WhatsApp puede compartir el **historial de conversaciones** al conectar. El detalle muestra su estado (**Solicitado**, **Importando…**, **Importado**, **No compartido** o **Error**); el historial solo se envía una vez, y para reintentarlo hay que volver a conectar el número.

### Si algo falla

| Mensaje | Qué hacer |
|---|---|
| Se cerró la ventana de Meta antes de terminar | Volver a pulsar **Conectar con WhatsApp** |
| La cuenta se compartió sin un número de teléfono | Repetir eligiendo o registrando un número |
| Este número ya está conectado | El número está en otra cuenta o como conexión manual; si es una conexión manual propia, eliminarla antes |
| La persona a cargo o el agente elegido no son válidos | Elegir otros: la persona tiene que tener permiso para usar el agente |
| Tu plan alcanzó el límite de integraciones | Mejorar el plan. Ver [Créditos y límites](/organizacion/creditos-y-limites) |
| Meta solo permite conectar desde una página segura | Conectar desde la plataforma publicada, no desde una copia local |

### Cuando la conexión caduca

La autorización de la conexión asistida caduca a los 60 días. Siete días antes, los administradores reciben el aviso **Conexión a punto de caducar**, y una vez caducada la tarjeta muestra **Caducada — reconectar**: el número deja de funcionar.

Para renovarla, repetir **Conexión asistida** con el mismo número: la plataforma la reconoce como una reconexión y conserva la integración, su asignación y sus conversaciones. Los números conectados de forma manual no caducan.

## Conexión manual

Para quien ya tiene su propia aplicación y su cuenta de empresa en Meta.

1. Elegir **Conexión manual** y completar:

   | Campo | Contenido |
   |---|---|
   | **Nombre (opcional)** | Si se deja vacío, se usa el número |
   | **Descripción (opcional)** | Hasta 500 caracteres |
   | **Número de WhatsApp** | Obligatorio, con su prefijo de país |
   | **Identificador de tu cuenta de WhatsApp Business** | Obligatorio, de 10 a 20 dígitos |
   | **Identificador de tu número** | Obligatorio, de 10 a 20 dígitos |
   | **Clave de acceso** | Obligatoria. Usar una clave permanente: la temporal que muestra Meta caduca en poco tiempo |

   Los tres datos de Meta se encuentran en developers.facebook.com: abrir la aplicación e ir a **WhatsApp → Configuración de API**.

2. Elegir la persona a cargo y el agente, y pulsar **Conectar número**.
3. La plataforma muestra dos datos: **URL de devolución de llamada** y **Token de verificación**. **Copiarlos en ese momento**: no se vuelven a mostrar.
4. En developers.facebook.com, en la aplicación, ir a **WhatsApp → Configuración**:
   - en **Webhook**, pegar la URL y el token y guardar;
   - en la misma sección, suscribirse al campo **messages**.
5. Pulsar **Finalizar**. Cuando Meta empiece a enviar los mensajes, el agente los responderá.

## Iniciar una conversación

WhatsApp solo permite que la empresa escriba primero con una **plantilla aprobada** por Meta. Las plantillas se crean y aprueban en Meta Business Manager; ConsulPoint muestra las aprobadas de cada número.

En [Conversaciones](/modulos/conversaciones), elegir **WhatsApp** y **Nueva conversación de WhatsApp**:

1. Elegir la **Conexión de WhatsApp** y escribir el **Número de teléfono** (y, si el contacto no existe, su nombre).
2. Elegir la **Plantilla aprobada** y completar sus variables. La **Vista previa del mensaje** muestra cómo llegará.
3. Pulsar **Iniciar conversación**.

Si la conexión no tiene plantillas aprobadas, hay que crear y aprobar una en Meta Business Manager. Ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana#iniciar-una-conversación-por-whatsapp-o-telegram).
