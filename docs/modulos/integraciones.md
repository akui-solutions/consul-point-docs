---
id: integraciones
title: Integraciones y canales
sidebar_label: Integraciones y canales
sidebar_position: 5
description: "Los canales que se conectan a ConsulPoint (WhatsApp, Telegram, correo, aplicaciones externas y Google Calendar), sus estados, acciones y tiempos de espera."
---

# Integraciones y canales

<PageMeta route="/settings/connectors">administrador</PageMeta>

Una **integración** conecta un canal con ConsulPoint: un número de WhatsApp, un bot de Telegram, una cuenta de correo, una aplicación externa o Google Calendar. Las conversaciones de los canales llegan a [Conversaciones](/modulos/conversaciones), y el correo, a la [Bandeja Inteligente](/modulos/bandeja-inteligente).

<Screenshot src="/img/configuracion/conectores-e-integraciones.png" alt="Pantalla Conectores e integraciones en Configuración de ConsulPoint" caption="Configuración → Conectores" />

## La pantalla

En **Configuración → Conectores**, la pantalla **Conectores e integraciones** muestra una tarjeta por cada integración, con la etiqueta **Integración**, y por cada [conector](/organizacion/conectores), con la etiqueta **Conector**. Se puede buscar y filtrar por **Estado de conexión** y por **Tipo de servicio**.

| Estado | Significado |
|---|---|
| **Conectado** | El canal funciona |
| **Sin conectar** | Falta completar la conexión, por ejemplo autorizar la cuenta de correo |
| **Caducada — reconectar** | Solo WhatsApp: la autorización caducó y hay que volver a conectar el número. Mientras tanto, el canal no funciona |

## Canales

Se añaden con **Agregar integración**:

| Canal | Para qué sirve | Dónde llega |
|---|---|---|
| **WhatsApp** | Atender un número de WhatsApp Business con un agente y con personas del equipo | Conversaciones |
| **Telegram** | Atender un bot de Telegram | Conversaciones |
| **Email** | Gmail y Microsoft Outlook (con autorización de la cuenta) o cualquier correo IMAP. Ver [Conectar una cuenta](/bandeja-inteligente/conectar-una-cuenta) | Bandeja Inteligente |
| **Aplicación externa** | Que un sistema propio envíe y reciba mensajes por API | Conversaciones |
| **Google Calendar** | Que los agentes consulten la disponibilidad y agenden citas | — |

### WhatsApp: conexión y modo del número

El número se conecta con **Conexión asistida** (recomendada: se inicia sesión con Facebook y se siguen los pasos de Meta) o con **Conexión manual** (para quien ya tiene su propia aplicación y cuenta de empresa en Meta). El detalle de la integración indica el **Modo del número**:

| Modo | Qué implica |
|---|---|
| **Coexistencia (app de WhatsApp Business)** | El número también se usa desde la app de WhatsApp Business. Si alguien responde desde la app, la IA se apaga en ese chat |
| **Cloud API** | El número solo funciona en ConsulPoint, no en la app de WhatsApp Business |

## Acciones

Cada tarjeta tiene sus acciones según el canal:

| Acción | Canales | Qué hace |
|---|---|---|
| **Editar** | Todos | Cambia el nombre, la descripción y los datos del canal |
| **Gestionar equipo** | WhatsApp, Telegram, aplicación externa | Asigna el responsable, el agente y el [equipo](/organizacion/equipos) que atienden las conversaciones |
| **Conectar cuenta** / **Reconectar cuenta** | Correo | Autoriza (o vuelve a autorizar) la cuenta |
| **Regenerar API key** / **Regenerar secreto de firma** | Aplicación externa | Crea credenciales nuevas; las anteriores dejan de valer |
| **Conectar Google Calendar** / **Desconectar** | Google Calendar | Al desconectar, los agentes dejan de poder consultar la disponibilidad y agendar citas |
| **Eliminar** | Todos | Elimina la integración. No se puede deshacer |

## Datos de cada integración

Los datos que se piden cambian según el canal:

| Canal | Datos | Responsable y agente |
|---|---|---|
| **WhatsApp** | Con Meta (guiado) o manual. En manual: **Número de WhatsApp**, **Identificador de tu cuenta de WhatsApp Business**, **Identificador de tu número** y **Clave de acceso**. Nombre y descripción, opcionales | En **¿Quién atenderá este número?**: **Persona a cargo** y **Agente de IA**. Opcionales, pero sin agente el canal no responde |
| **Telegram** | **Nombre de la integración**, **Descripción** (opcional) y **Token del bot** | **Responsable** y **Agente de IA**, obligatorios |
| **Gmail y Microsoft** | **Nombre de la integración**, **Descripción** (opcional) y **Visibilidad**: **Privada** o **Global**. La cuenta se autoriza con el proveedor | No se asignan |
| **IMAP** | **Nombre de la integración**, **Descripción** (opcional), **Proveedor de correo**, **Correo electrónico**, **Contraseña**, **Servidor IMAP**, **Puerto** y **Conexión segura** | No se asignan |
| **Aplicación externa** | **Nombre de la integración**, **Descripción** (opcional), **Tiempo sin actividad antes de abrir un chat nuevo (minutos)** (30 por defecto) y **Exigir firma a la plataforma externa**. Opcionalmente, en **Configurar salida**: **URL de entrega de respuestas** y **API Key de entrega** | En el paso **Equipo**: **Responsable**, **Agente de IA** y equipo o personas. Opcionales |

El nombre admite hasta 50 caracteres y la descripción, si se rellena, entre 10 y 255.

Para cambiar después el responsable, el agente o el equipo, usar **Gestionar equipo** en la tarjeta de la integración.

## Tiempos de espera

En WhatsApp, Telegram y aplicaciones externas, **Editar** incluye **Tiempos de espera**, que se aplican cuando una conversación espera a una persona del equipo (ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana#mensajes-al-contacto-mientras-espera)):

| Campo | Significado |
|---|---|
| **Recordatorio (minutos)** | Cada cuánto se recuerda al contacto que sigue en espera. Por defecto, cada 10 minutos (de 1 a 1.440) |
| **Espera máxima (minutos)** | Cuánto puede esperar el contacto (de 1 a 10.080). Vacío significa automático: 30 minutos en WhatsApp y Telegram; en las aplicaciones externas, según el canal |

## Atención humana

Las conversaciones de los canales aparecen en Conversaciones. Allí una persona puede **Tomar control** de una conversación o atender las que muestran **Requiere atención**, y el agente deja de responder mientras tanto. Ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana).
