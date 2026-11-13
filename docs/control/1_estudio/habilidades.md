---
id: habilidades
title: Habilidades
sidebar_label: Habilidades
sidebar_position: 6
description: Qué es una habilidad en ConsulPoint, cómo la usa un agente, la biblioteca de habilidades del Estudio y cómo asignarlas a agentes y especialistas.
---

# Habilidades

<PageMeta route="/studio/skills">permiso sobre **Habilidades**</PageMeta>

Una **habilidad** es un procedimiento que se escribe una sola vez y se asigna a los agentes que lo necesiten: cómo revisar una factura, cómo redactar una respuesta de reclamación, cómo calcular un presupuesto. Además de las instrucciones, puede incluir archivos de referencia (guías, plantillas, ejemplos o imágenes) y scripts que el agente ejecuta.

<Screenshot src="/img/estudio/habilidades.png" alt="Biblioteca de habilidades en el Estudio de ConsulPoint" caption="Estudio → Habilidades" />

## Cómo la usa un agente

El agente no lleva todas sus habilidades cargadas en cada respuesta: conoce el nombre y la **Descripción** de cada una, y abre una habilidad solo cuando la conversación lo requiere. Por eso la descripción debe decir con claridad **cuándo** usarla. Una vez abierta, el agente sigue sus instrucciones al pie de la letra.

En la conversación, encima de la respuesta, **Qué hizo el agente** muestra cada paso:

- **Usó la habilidad "…"**
- **Leyó "…" de la habilidad "…"**, al consultar un archivo de referencia
- **Ejecutó "…" de la habilidad "…"**, al ejecutar un script

Las habilidades funcionan igual en Conversaciones, en los canales conectados, en los especialistas (cada uno usa las suyas) y en las consultas por API.

:::note Los cambios llegan a las conversaciones nuevas
Si se edita, desactiva o quita una habilidad, el cambio se aplica a las conversaciones nuevas con el agente. Una conversación abierta que ya la usó puede seguir con la versión anterior.
:::

## La biblioteca

En el Estudio, la pestaña **Habilidades** reúne las habilidades de la organización, con su **Estado**, su **Uso** (cuántas veces la han usado los agentes) y su **Origen**:

| Origen | Significado |
|---|---|
| **Propia** | Creada o importada por la organización. Se puede editar y eliminar |
| **Del catálogo** | Instalada desde el [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones). Se puede activar o desactivar, pero no editar; para quitarla, se desinstala desde el catálogo |

La lista se puede buscar por nombre o etiqueta y filtrar por **Estado** y **Origen**. Una habilidad **Desactivada** sigue asignada a sus agentes, pero ninguno la usa hasta que se vuelva a activar.

Para crear una, ver [Crear una habilidad](/control/estudio/crear-una-habilidad).

## Asignar habilidades a un agente

En el detalle del agente, la pestaña **Capacidades** muestra, debajo de las funciones integradas, las habilidades que tiene asignadas, con su uso en ese agente.

1. Pulsar **Gestionar habilidades** (o **Agregar habilidades**, si todavía no tiene ninguna).
2. Buscar las habilidades y añadirlas. Solo se pueden añadir habilidades activas.
3. Guardar.

<Screenshot src="/img/estudio/capacidades-agente.png" alt="Habilidades en la pestaña Capacidades de un agente" caption="Detalle de un agente → Capacidades" />

Cada agente admite hasta **20 habilidades**. Los especialistas también tienen la pestaña **Capacidades** con sus habilidades: cuando un agente consulta a un especialista, este usa sus propias habilidades, no las del agente.

Para asignar habilidades hace falta permiso de ver **Habilidades**, permiso de editar **Estudio** y acceso de edición al agente.

## Quién puede hacer qué

Con los roles predeterminados, el **Administrador** puede crear, editar y eliminar habilidades; **Miembro** y **Colaborador** solo verlas. El plan fija el número máximo de habilidades de la organización, contando las desactivadas y las del catálogo. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).
