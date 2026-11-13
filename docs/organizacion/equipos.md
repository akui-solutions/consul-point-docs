---
id: equipos
title: Equipos
sidebar_label: Equipos
sidebar_position: 4
description: Qué es un equipo en ConsulPoint, cómo crearlo y gestionar sus miembros, y dónde se usa.
---

# Equipos

<PageMeta route="/settings/teams">administrador con permiso sobre **Equipos**</PageMeta>

Un equipo es un grupo de personas de la organización con un nombre. Sirve para asignar varias personas a la vez; hoy se usa para que un equipo atienda las conversaciones de una [integración](/modulos/integraciones).

<Screenshot src="/img/configuracion/equipos.png" alt="Lista de equipos en Configuración de ConsulPoint" caption="Configuración → Equipos" />

## Crear un equipo

1. Pulsar **Crear equipo**.
2. Rellenar:
   - **Nombre**: obligatorio, entre 2 y 64 caracteres, sin repetir el de otro equipo.
   - **Descripción**: opcional, hasta 255 caracteres.
   - **Miembros**: personas de la organización. Solo se pueden añadir usuarios activos.
3. Guardar.

Las personas añadidas a un equipo reciben una notificación.

## La lista

Cada equipo muestra su **Nombre**, **Descripción** y **Nº miembros**. Sus acciones:

| Acción | Qué hace |
|---|---|
| **Ver detalle** | Muestra la fecha de creación y los miembros. Las personas desactivadas aparecen marcadas |
| **Gestionar miembros** | Añade o quita personas |
| **Editar** | Cambia el nombre y la descripción |
| **Eliminar** | Elimina el equipo |

## Dónde se usan

En una integración, **Gestionar equipo** asigna un equipo para que atienda sus conversaciones, junto con las personas que se añadan una a una. Cada integración admite un equipo. Si después cambian los miembros del equipo, el cambio se aplica también a la integración. Ver [Integraciones y canales](/modulos/integraciones#datos-de-cada-integración).

:::warning Un equipo asignado no se puede eliminar
Si un equipo atiende alguna integración, la plataforma no deja eliminarlo y muestra cuáles son. Hay que quitarlo antes de esas integraciones.
:::
