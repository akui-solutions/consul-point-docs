---
id: acceder-a-la-plataforma
title: Acceder a la plataforma
sidebar_label: Acceder a la plataforma
sidebar_position: 4
description: Cómo iniciar sesión en ConsulPoint, crear una organización, aceptar una invitación, elegir organización, recuperar la contraseña y qué pasa cuando caduca la sesión.
---

# Acceder a la plataforma

Esta página explica cómo entrar en ConsulPoint por primera vez y en el día a día: iniciar sesión, crear una organización, aceptar una invitación y recuperar la contraseña.

## Iniciar sesión

<Screenshot src="/img/acceso/iniciar-sesion.png" alt="Pantalla de inicio de sesión de ConsulPoint" caption="Inicio de sesión" />

1. Escribir el **Correo electrónico** y la **Contraseña**. El ojo del campo muestra u oculta la contraseña.
2. Pulsar **Iniciar sesión**.

Arriba a la derecha se cambia el tema (claro u oscuro) y el idioma (español o inglés) antes de entrar. La elección se guarda en ese navegador.

Si los datos no son correctos, aparece **Credenciales inválidas. Verifica tu correo electrónico y contraseña.** Para entrar solo se usan correo y contraseña: no hay acceso con Google ni con Microsoft.

## Elegir organización

Quien pertenece a una sola organización entra directamente en [Inicio](/modulos/inicio).

Quien pertenece a varias ve **¡Hola de nuevo!** con la lista de sus organizaciones, y elige con cuál trabajar. Esa organización queda como **favorita** y la próxima vez se entra directamente en ella. Las organizaciones inactivas aparecen deshabilitadas.

Después se cambia de organización o de espacio de trabajo desde el selector de la barra superior, y la estrella cambia la favorita. Ver [Espacios de trabajo](/modulos/espacios-de-trabajo#cómo-se-llega).

## Crear una organización

<Screenshot src="/img/acceso/crear-organizacion.png" alt="Formulario Crea tu organización" caption="Crea tu organización" maxWidth={520} />

Cuando el registro está abierto, la pantalla de inicio de sesión muestra **¿No tienes una cuenta? Regístrate**. Si está cerrado, en su lugar aparece **Solicitar acceso**, para pedir una cuenta al equipo de ConsulPoint.

1. Pulsar **Regístrate**.
2. Completar **Crea tu organización**:

   | Campo | Descripción |
   |---|---|
   | **Nombre de la organización** | Entre 3 y 64 caracteres. Es el nombre que verá todo el equipo |
   | **Nombre** y **Apellido** | Entre 2 y 64 caracteres, solo letras y espacios |
   | **Correo electrónico** | El de la persona que crea la organización, que será su administradora |

3. Pulsar **Crear organización**.
4. Abrir el correo que llega a esa dirección y seguir el enlace para [crear la contraseña](#crear-la-contraseña).

La organización empieza con un periodo de prueba. Si el correo ya tiene una cuenta, aparece **Este email ya tiene una cuenta.**: en ese caso basta con iniciar sesión.

## Aceptar una invitación

### A una organización

Cuando un administrador invita a alguien desde [Usuarios](/organizacion/usuarios):

- **Si la persona no tiene cuenta**, recibe un correo con un enlace para [crear la contraseña](#crear-la-contraseña).
- **Si ya tiene cuenta** en otra organización, no tiene que hacer nada: recibe un correo informativo y la organización nueva aparece en su lista la próxima vez que entra.

### A un espacio de trabajo

Las invitaciones a un [espacio de trabajo](/modulos/espacios-de-trabajo) llegan por correo y caducan a los 7 días.

- **Sin cuenta**: el enlace abre **Únete al espacio de trabajo**. Se crea la contraseña y se pulsa **Aceptar invitación**.
- **Con cuenta**: el enlace pide primero **Iniciar sesión** y después **Seleccionar perfil**, el perfil con el que se entra al espacio. Se termina con **Aceptar invitación**.

Quien ya tiene la sesión iniciada recibe además la notificación **Invitación a un espacio de trabajo**, que lleva al mismo lugar.

## Crear la contraseña

El enlace del correo de registro o de invitación abre **Te damos la bienvenida a ConsulPoint**, con el correo ya rellenado. Se escribe la **Contraseña**, se repite en **Confirmar contraseña** y se pulsa **Crear cuenta**. Después se [inicia sesión](#iniciar-sesión) con ella.

La contraseña debe tener:

- Mínimo 8 caracteres.
- Al menos una letra mayúscula y una minúscula.
- Al menos un número.
- Al menos un carácter especial, por ejemplo `! @ # $ % & * - _ =`.

La lista de la pantalla marca cada requisito a medida que se cumple.

:::note El enlace caduca
Los enlaces de los correos caducan pasado un tiempo. Si aparece **Enlace de invitación expirado**, hay que pedir al administrador que reenvíe la invitación o, si la organización se creó desde el registro, escribir al equipo de ConsulPoint.
:::

## Recuperar la contraseña

1. En la pantalla de inicio de sesión, pulsar **¿Olvidaste tu contraseña?**.
2. Escribir el **Correo electrónico** y pulsar **Enviar enlace**.
3. Abrir el correo y seguir el enlace a **Restablece tu contraseña**.
4. Escribir la contraseña nueva dos veces, con los mismos requisitos que al [crearla](#crear-la-contraseña), y pulsar **Restablecer contraseña**.

El enlace caduca al poco tiempo: conviene usarlo en cuanto llega. Si no aparece, revisar la carpeta de spam. Al cambiar la contraseña llega un correo de confirmación.

Con la sesión iniciada, el cambio de contraseña se pide desde [Tu cuenta](/introduccion/tu-cuenta#contraseña).

## La sesión

La sesión se renueva sola mientras se usa la plataforma. Tras un tiempo sin actividad caduca:

- Cinco minutos antes aparece **Tu sesión está por expirar**, para guardar lo que se esté haciendo.
- Al caducar aparece **Sesión expirada** y la plataforma vuelve a la pantalla de inicio de sesión.

Las pestañas abiertas de la plataforma van a la par: cerrar sesión en una la cierra en todas las de ese navegador. **Cerrar sesión** está en el [menú de usuario](/introduccion/tu-cuenta#cerrar-sesión) y cierra solo la sesión de ese navegador, no la de otros dispositivos.

## Problemas al entrar

| Mensaje | Qué hacer |
|---|---|
| **Credenciales inválidas…** | Revisar el correo y la contraseña. Si no se recuerda, [recuperarla](#recuperar-la-contraseña) |
| **No tienes permisos para acceder.** | La cuenta existe pero no tiene acceso. Consultar con el administrador de la organización |
| **No tienes organizaciones asociadas a esta cuenta.** | La cuenta no pertenece a ninguna organización activa. Pedir una invitación al administrador |
| **Enlace de invitación expirado** | Pedir que se reenvíe la invitación. Para restablecer la contraseña, pedir un enlace nuevo |
| **Demasiados intentos…** | Esperar un rato antes de volver a intentarlo |
