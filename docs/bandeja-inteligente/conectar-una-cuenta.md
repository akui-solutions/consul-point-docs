---
id: conectar-una-cuenta
title: Conectar una cuenta de correo
sidebar_label: Conectar una cuenta
sidebar_position: 2
description: Cómo conectar una cuenta de Gmail, Outlook o IMAP a la Bandeja Inteligente de ConsulPoint.
---

# Conectar una cuenta de correo

**Ruta:** `/settings/connectors`
**Permiso requerido:** administrador

## Descripción

La Bandeja Inteligente lee el correo de las cuentas conectadas a la organización. Se admiten tres tipos: **Gmail**, **Outlook** (Microsoft) y cualquier cuenta compatible con **IMAP** (Yahoo, iCloud, Zoho o un servidor propio).

Sin ninguna cuenta conectada, la Bandeja Inteligente muestra **No hay cuentas de correo conectadas** y un botón **Ir a Configuración**.

## Gmail u Outlook

1. Ir a **Configuración → Conectores**.
2. Pulsar **Agregar integración** → **Email**.
3. Elegir **Gmail** u **Outlook**, y completar **Nombre de la integración** y **Descripción**.
4. Pulsar **Continuar con Google** o **Continuar con Microsoft**. Se abre la página del proveedor para iniciar sesión y autorizar el acceso.
5. Al volver a ConsulPoint, la cuenta queda conectada.

La plataforma pide permiso para leer y gestionar el correo, porque al abrir un correo lo marca como leído en la cuenta.

## IMAP

1. Ir a **Configuración → Conectores** → **Agregar integración** → **Email** → **IMAP**.
2. Completar **Conectar cuenta de correo IMAP**:

   | Campo | Descripción |
   |---|---|
   | **Nombre de la integración** | Para reconocer la cuenta, por ejemplo "IMAP Soporte" |
   | **Descripción** | Opcional |
   | **Proveedor de correo** | Yahoo, iCloud, Zoho u **Otro (IMAP personalizado)** |
   | **Correo electrónico** | La dirección de la cuenta |
   | **Contraseña** | La de la cuenta o, con Yahoo e iCloud, una **contraseña de aplicación** |
   | **Servidor IMAP**, **Puerto**, **Conexión segura** | Los datos del servidor de correo. El puerto habitual es 993, con conexión segura |

3. Pulsar **Probar conexión**. Hasta que se muestra **Conexión verificada** no se puede conectar.
4. Pulsar **Conectar**.

:::tip Contraseñas de aplicación
Yahoo e iCloud no aceptan la contraseña habitual: piden una **contraseña de aplicación**. Se crea activando la verificación en dos pasos y generándola en la configuración de seguridad de la cuenta. El formulario lo recuerda al elegir esos proveedores.
:::

La contraseña se guarda cifrada.

## Visibilidad

Cada cuenta conectada es:

| Visibilidad | Quién la usa |
|---|---|
| **Global** | Todos los usuarios de la organización con acceso a la Bandeja Inteligente |
| **Privada** | Solo el usuario asignado |

## Varias cuentas

Se pueden conectar varias cuentas. En la Bandeja Inteligente, el selector de la cabecera cambia de cuenta; la plataforma recuerda la última elegida.

El número de integraciones, sumando correo, WhatsApp, Telegram y demás conectores, depende del plan contratado.
