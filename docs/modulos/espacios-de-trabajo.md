---
id: espacios-de-trabajo
title: Espacios de trabajo
sidebar_label: Espacios de trabajo
description: Espacios de trabajo de ConsulPoint. Separan usuarios, agentes, aplicaciones y contenido por equipo, departamento o proyecto dentro de una organización.
---

# Espacios de trabajo

<PageMeta route="/workspaces">el que corresponda sobre **Espacios de trabajo**</PageMeta>

Un espacio de trabajo separa, dentro de una organización, el trabajo de un equipo, un departamento o un proyecto. Cada espacio tiene sus propios miembros, los agentes y las aplicaciones que se le asignan, y su propio contenido. Los miembros eligen en qué espacio trabajan desde la barra superior.

## Cómo se llega

Los espacios de trabajo no aparecen en el menú lateral. Se usan y se gestionan desde el selector de la barra superior, que muestra el nombre de la organización o del espacio en el que se está trabajando.

<Screenshot src="/img/modulos/espacios-de-trabajo-selector.png" alt="Selector de organización y espacios de trabajo en ConsulPoint" caption="Selector de la barra superior" maxWidth={320} />

- **Cambiar de espacio**: pulsar el nombre del espacio en la lista. **Principal** vuelve a la organización.
- **Gestionar los espacios**: pulsar el engranaje junto al nombre de la organización (**Gestionar espacios de trabajo**). Solo se muestra cuando se está en la organización principal, no dentro de un espacio.
- **Organización favorita**: la estrella (**Marcar como favorita**) destaca una organización, para quien pertenece a varias.

## Quién puede hacer qué

| Acción | Quién |
|---|---|
| Ver la lista y el detalle de los espacios | Cualquier rol con acceso a Espacios de trabajo |
| Crear, editar, activar y desactivar espacios | Roles con permiso de creación o edición; con los roles predeterminados, el administrador de la organización |
| Añadir usuarios, agentes y aplicaciones a un espacio | Roles con permiso de creación sobre Espacios de trabajo |
| Desvincular agentes y aplicaciones de un espacio | Solo el **Administrador** de ese espacio |

Los permisos de cada rol se configuran en [Roles](/organizacion/roles).

## Lista de espacios

<Screenshot src="/img/modulos/espacios-de-trabajo-lista.png" alt="Lista de espacios de trabajo en ConsulPoint" caption="Lista de espacios de trabajo" />

La lista muestra el **Nombre**, la **Descripción**, el **Administrador**, el **Estado** y la **Fecha de creación** de cada espacio. Se puede buscar por nombre y filtrar por administrador o por estado. El menú de **Acciones** de cada fila permite **Ver** o **Editar** el espacio.

## Crear un espacio

1. Pulsar **Agregar Espacio de Trabajo**.
2. Completar la ventana **Crear espacio de trabajo**:

   | Campo | Descripción |
   |---|---|
   | **Nombre del espacio de trabajo** | Obligatorio, entre 2 y 60 caracteres |
   | **Descripción** | Opcional, entre 2 y 255 caracteres |
   | **Administrador** | Obligatorio. Persona con privilegios administrativos dentro del espacio |
   | **Añadir usuarios** | Opcional. Miembros de la organización que tendrán acceso desde el principio |

3. Pulsar **Crear**.

El número de espacios de trabajo que se pueden crear depende del plan contratado.

## Detalle de un espacio

El detalle tiene dos pestañas: **General** y **Usuarios**. En la cabecera, **Editar** cambia el nombre, la descripción y el administrador, y **Desactivar** o **Activar** cambia el estado.

<Screenshot src="/img/modulos/espacios-de-trabajo-general.png" alt="Pestaña General de un espacio de trabajo en ConsulPoint" caption="Pestaña General de un espacio" />

### General

| Bloque | Contenido |
|---|---|
| **Información General** | Fecha de creación, última actualización, propietario y descripción |
| **Agentes** | Agentes disponibles en el espacio. **Añadir agente** asigna uno existente |
| **Aplicaciones** | [Aplicaciones integradas](/aplicaciones-integradas) disponibles en el espacio. **Añadir aplicación** asigna una existente |

Desde el menú de cada fila, **Desvincular** quita el agente o la aplicación del espacio. No los elimina de la organización.

### Usuarios

Tiene dos listas: **Miembros** e **Invitaciones**.

En **Miembros**, el **Tipo de usuario** distingue entre **Interno** (de la organización) y **Externo** (de fuera de ella). **Desvincular** quita a la persona del espacio, que pierde el acceso a él.

Para añadir personas, pulsar **Añadir usuarios**:

- **Usuarios de la organización actual**: se buscan por nombre o correo y se añaden directamente.
- **Invitar a alguien externo por email**: se indica el correo y, si la persona no tiene cuenta en la plataforma, su nombre y apellido. Recibe un correo con un enlace para unirse; si no tenía cuenta, la crea al aceptar.

### Invitaciones

| Estado | Significado |
|---|---|
| **Pendiente** | Enviada y todavía sin aceptar |
| **Aceptada** | La persona ya es miembro del espacio |
| **Expirada** | Pasaron 7 días sin aceptarla |
| **Cancelada** | Se anuló antes de aceptarla |

Una invitación se puede **Reenviar** desde el menú de su fila.

:::danger Eliminar una invitación
**Eliminar** borra la invitación de forma permanente. Para volver a invitar a esa persona hay que enviar una invitación nueva.
:::

## Activar y desactivar

Un espacio está **Activo** o **Inactivo**. Al desactivarlo, deja de aparecer en el selector de la barra superior. Su contenido no se elimina: al activarlo de nuevo, vuelve a estar disponible tal como estaba.

## Qué queda separado en cada espacio

Dentro de un espacio, cada miembro trabaja con el contenido propio de ese espacio en:

- [Conversaciones](/modulos/conversaciones)
- [Artículos y novedades](/modulos/articulos-y-novedades)
- [Centro de Conocimiento](/modulos/centro-de-conocimiento)
- Los accesos rápidos de [Inicio](/modulos/inicio)

Los módulos que no están disponibles dentro de un espacio, como Contactos, no aparecen mientras se trabaja en él.

## Buenas prácticas

:::tip Cuándo conviene
Cuando hay departamentos con necesidades distintas, marcas independientes o proyectos cuya documentación debe mantenerse separada. En organizaciones pequeñas con un único ámbito de trabajo, añade complejidad sin beneficio.
:::

:::tip Empresas que trabajan con clientes
Un espacio por cliente mantiene separados su conocimiento, sus conversaciones y sus agentes. Las personas del cliente se invitan como usuarios externos y solo acceden a su espacio. Los administradores de la organización siguen viendo todos los espacios, y el número de espacios disponibles depende del plan contratado.
:::
