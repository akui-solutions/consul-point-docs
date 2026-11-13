---
id: usuarios
title: Usuarios
sidebar_label: Usuarios
sidebar_position: 2
description: Invitar personas a la organización en ConsulPoint, asignarles un rol, y activarlas, desactivarlas o reenviar su invitación.
---

# Usuarios

<PageMeta route="/settings/users">administrador</PageMeta>

En **Configuración → Usuarios** se gestionan las personas que tienen acceso a la organización: se invitan, se les asigna un rol y se activan o desactivan.

<Screenshot src="/img/configuracion/usuarios.png" alt="Lista de usuarios en Configuración de ConsulPoint" caption="Configuración → Usuarios" />

## La lista

Cada persona aparece con su **Nombre**, **Correo electrónico**, **Rol**, **Estado** y **Acciones**. El campo **Buscar por nombre o apellido** filtra la lista.

| Estado | Significado |
|---|---|
| Activo | Puede entrar en la organización |
| Inactivo | Desactivada: no puede entrar |
| Pendiente | Invitada; todavía no ha aceptado la invitación |
| Expirado | La invitación caducó sin aceptarse |

## Invitar a una persona

1. Pulsar **Invitar Usuario**.
2. Rellenar los cuatro campos, todos obligatorios:
   - **Nombre** y **Apellidos**: entre 2 y 64 caracteres, solo letras y espacios.
   - **Correo electrónico**.
   - **Seleccione rol**: debajo se muestra la descripción del rol elegido. Ver [Roles](/organizacion/roles).
3. Pulsar **Enviar invitación**.

<Screenshot src="/img/configuracion/invitar-usuario.png" alt="Diálogo Invitar nuevo usuario" caption="Invitar nuevo usuario" maxWidth={560} />

La persona recibe un correo con un enlace para crear su cuenta y elegir su contraseña. Hasta que lo haga, aparece como pendiente.

Si el correo ya tiene una cuenta de ConsulPoint en otra organización, la persona se añade directamente como activa y recibe un correo que le avisa de que se ha unido a una organización nueva. Entra con la contraseña que ya tenía.

:::info Plan y límite de usuarios
Para invitar hace falta que la organización tenga un plan activo. El plan fija el número máximo de usuarios activos; las invitaciones pendientes no cuentan. Al llegar al máximo, la plataforma muestra **Llegaste al tope de tu plan** con la opción **Mejorar plan**.
:::

## Acciones

Las acciones de cada persona dependen de su estado:

| Acción | Estado | Qué hace |
|---|---|---|
| **Cambiar rol** | Activo | Asigna otro rol en **Tipo de Rol** y se confirma con **Guardar** |
| **Desactivar usuario** | Activo | La persona deja de poder entrar. Sus datos se conservan |
| **Activar usuario** | Inactivo | Vuelve a permitir la entrada |
| **Enviar recordatorio** | Pendiente | Vuelve a enviar el correo de invitación |
| **Reenviar invitación** | Expirado | Envía una invitación nueva |
| **Eliminar usuario** | Pendiente o expirado | Retira la invitación |

Las personas que ya aceptaron la invitación no se eliminan: se desactivan.

:::note Los cambios de rol tardan unos minutos
Un cambio de rol puede tardar hasta 10 minutos en aplicarse a una persona que tenga la sesión abierta.
:::
