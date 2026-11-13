---
id: conectar-una-cuenta
title: Conectar una cuenta de correo
sidebar_label: Conectar una cuenta
sidebar_position: 2
description: Cómo conectar una cuenta de Gmail, Outlook o IMAP a la Bandeja Inteligente de ConsulPoint.
---

# Conectar una cuenta de correo

<PageMeta route="/settings/connectors">administrador</PageMeta>

La Bandeja Inteligente lee el correo de las cuentas conectadas a la organización. Se admiten tres tipos: **Gmail**, **Outlook** (Microsoft) y cualquier cuenta compatible con **IMAP** (Yahoo, iCloud, Zoho o un servidor propio).

Sin ninguna cuenta conectada, la Bandeja Inteligente muestra **No hay cuentas de correo conectadas** y un botón **Ir a Configuración**.

## Gmail u Outlook

1. Ir a **Configuración → Conectores**.
2. Pulsar **Agregar integración** → **Email**.
3. Elegir **Gmail** u **Outlook**, y completar:
   - **Nombre de la integración**, obligatorio;
   - **Descripción**, opcional (si se rellena, al menos 10 caracteres);
   - **Visibilidad**: **Privada** (por defecto) o **Global**. Ver [Visibilidad](#visibilidad).
4. Pulsar **Continuar con Google** o **Continuar con Microsoft**. Se abre una ventana del proveedor para iniciar sesión y autorizar el acceso.
5. Al terminar, la plataforma muestra que la cuenta está conectada.

Si se cierra la ventana antes de terminar, la cuenta queda creada como **Sin conectar**: se completa después con **Conectar cuenta**, en su tarjeta de **Conectores**. Si la autorización deja de valer, la misma tarjeta ofrece **Reconectar cuenta**.

La plataforma pide permiso para leer y gestionar el correo, porque al abrir un correo lo marca como leído en la cuenta.

## IMAP

1. Ir a **Configuración → Conectores** → **Agregar integración** → **Email** → **IMAP**.
2. Completar **Conectar cuenta de correo IMAP**:

   | Campo | Descripción |
   |---|---|
   | **Nombre de la integración** | Para reconocer la cuenta, por ejemplo "IMAP Soporte" |
   | **Descripción** | Opcional; si se rellena, al menos 10 caracteres |
   | **Visibilidad** | **Privada** (por defecto) o **Global**. Ver [Visibilidad](#visibilidad) |
   | **Proveedor de correo** | Yahoo, iCloud, Zoho u **Otro (IMAP personalizado)** |
   | **Correo electrónico** | La dirección de la cuenta |
   | **Contraseña** | La de la cuenta o, con Yahoo e iCloud, una **contraseña de aplicación** |
   | **Servidor IMAP**, **Puerto**, **Conexión segura** | Con Yahoo, iCloud y Zoho se rellenan solos y no se pueden cambiar. Con **Otro**, se escriben los del servidor de correo; el puerto habitual es 993, con conexión segura |

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
