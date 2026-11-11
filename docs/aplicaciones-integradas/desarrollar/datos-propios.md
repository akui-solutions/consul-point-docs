---
id: datos-propios
title: Datos propios
sidebar_label: Datos propios
sidebar_position: 4
description: Modelos de datos de una aplicación integrada en ConsulPoint. Cómo definirlos y cómo leer y guardar registros propios.
---

# Datos propios

## Descripción

Una aplicación no tiene base de datos propia. Para conservar registros (pedidos revisados, incidencias, ajustes) utiliza **modelos**: colecciones de datos que ConsulPoint guarda por ella.

## Qué es un modelo

| Elemento | Contenido |
|---|---|
| **Nombre** | Identificador de la colección, en minúsculas con guiones (`pedido-revisado`). Hasta 60 caracteres. No se puede cambiar después |
| **Etiqueta** | Nombre legible |
| **Descripción** | Qué guarda la colección |
| **JSON Schema** | Forma de cada registro (opcional) |
| **Validación estricta** | Si está activa, los registros que no cumplen el esquema se rechazan |

Los modelos se definen en la pestaña **Modelos** de la aplicación, con **Agregar Modelo**. Deben existir **antes** de que la aplicación intente usarlos.

En una aplicación **Instalada**, los modelos los define quien la publicó y no se pueden modificar.

## A quién pertenecen los datos

- Los datos son de **cada organización**: una organización nunca ve los de otra.
- Dentro de la organización, **todas las personas que usan la aplicación ven los mismos registros**. No hay separación por usuario.
- Al **desinstalar** una aplicación del catálogo, sus datos se eliminan y no se recuperan al reinstalarla.
- Al **eliminar un modelo**, se eliminan todos sus registros.

## Leer y guardar

Todas las rutas parten de `/mini-apps/{miniAppId}/models/{nombre}/data`.

| Operación | Método y ruta | Notas |
|---|---|---|
| Listar | `GET …/data?limit=` | Hasta 500 por página (25 por defecto). La respuesta trae `bookmark` para pedir la página siguiente |
| Leer uno | `GET …/data/{id}` | |
| Crear | `POST …/data` | El cuerpo es el registro |
| Actualizar | `PUT …/data/{id}` | Cuerpo: `{ "data": { … }, "_rev": "…" }` |
| Eliminar | `DELETE …/data/{id}?rev=…` | |

```ts title="Crear y actualizar un registro"
const base = `/mini-apps/${miniAppId}/models/pedido-revisado/data`;

const creado = await sessionFetch(base, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ pedido: 'P-1042', estado: 'confirmado' }),
}).then(r => r.json());

await sessionFetch(`${base}/${creado._id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: { estado: 'exportado' }, _rev: creado._rev }),
});
```

Cada registro incluye `_id` y `_rev`. El `_rev` es la versión del registro y hay que enviarlo al actualizar o eliminar.

## Respuestas que conviene manejar

| Respuesta | Significado | Qué hacer |
|---|---|---|
| `409` | Otra persona modificó el registro antes | Volver a leerlo y reintentar |
| `422` | El registro no cumple el esquema (con validación estricta) | Revisar los campos indicados en la respuesta |
| `400` | Falta `_rev` al actualizar | Enviar la versión leída |

## Buenas prácticas

:::warning Usar siempre el identificador
En las rutas de datos se utiliza el identificador de la aplicación recibido en `miniAppId`, nunca su ruta de acceso.
:::

:::tip Campos no previstos
Para rechazar campos que no estén en el esquema, declarar `"additionalProperties": false` en el propio JSON Schema.
:::

:::info Listados
Los listados no admiten filtros ni orden. Para colecciones grandes, conviene leer por páginas y filtrar en la aplicación.
:::
