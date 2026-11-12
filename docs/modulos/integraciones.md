---
id: integraciones
title: Integraciones y Canales
sidebar_label: Integraciones y Canales
sidebar_position: 5
description: "Configuración de canales externos en ConsulPoint: WhatsApp Business, Telegram, Gmail, Outlook, IMAP y aplicaciones externas. Atención humana."
---

<PageMeta route="/settings/connectors">administrador</PageMeta>

Configuración de las conexiones con canales de comunicación externos. Una integración vincula un canal con un agente y con un responsable.

## Canales disponibles

| Canal                     | Tipo       | Uso                              |
| ------------------------- | ---------- | -------------------------------- |
| **WhatsApp Business**     | Mensajería | Atención al cliente vía WhatsApp |
| **Telegram**              | Mensajería | Atención vía Telegram            |
| **Gmail**                 | Correo     | Correo corporativo Google        |
| **Microsoft Outlook**     | Correo     | Correo corporativo Microsoft     |
| **IMAP**                  | Correo     | Cualquier servidor de correo     |
| **Aplicaciones externas** | API        | Integración con sistemas propios |

## Estados de integración

| Estado                       | Significado                            |
| ---------------------------- | -------------------------------------- |
| **Activo / Inactivo**        | Integración habilitada o deshabilitada |
| **Conectado / Desconectado** | Estado del canal                       |
| **Autorizado**               | Credenciales válidas                   |
| **Acción requerida**         | Requiere reautorización del usuario    |

:::warning Caducidad de autorizaciones
Las autorizaciones de correo y de WhatsApp caducan. Ante el estado **Acción requerida**, utilizar la acción **Reautorizar cuenta**. El canal no opera mientras persista ese estado — es la causa habitual de que un canal deje de responder sin cambios de configuración.
:::

## Conexión de WhatsApp Business

<PageMeta route="/settings/connectors/whatsapp/new" />

Proceso guiado que comienza con la validación de la línea con Meta.

**Requisitos previos:**

- Cuenta de WhatsApp Business
- Número de teléfono no registrado en la aplicación WhatsApp estándar
- Credenciales de Meta

## Conexión de correo

Gmail y Microsoft Outlook se conectan mediante autorización de la cuenta. Otros proveedores requieren datos de servidor IMAP.

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

Para cambiar después el responsable, el agente o el equipo, usar **Gestionar equipo** en la lista de integraciones.

## Atención humana

Las conversaciones de los canales aparecen en Conversaciones. Allí una persona puede **Tomar control** de una conversación o atender las que muestran **Requiere atención**, y el agente deja de responder mientras tanto. Ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana).
