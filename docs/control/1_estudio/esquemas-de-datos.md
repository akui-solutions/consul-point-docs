---
id: esquemas-de-datos
title: Biblioteca de esquemas
sidebar_label: Biblioteca de esquemas
sidebar_position: 6
description: Esquemas de datos reutilizables en ConsulPoint. Cómo crearlos, versionarlos y vincularlos a microagentes, carpetas y aplicaciones.
---

# Biblioteca de esquemas

<PageMeta route="/studio/schema-library">el que corresponda sobre **Biblioteca de esquemas**. Con los roles predeterminados, solo administradores</PageMeta>

Un **esquema de datos** define qué datos se extraen de un documento y con qué forma: por ejemplo, que una factura tiene un proveedor (texto), una fecha (fecha) y un importe (número). La biblioteca guarda esquemas reutilizables, para que varios elementos extraigan siempre los mismos campos.

Un esquema se puede vincular a:

- **Microagentes**, como estructura de su respuesta (ver [Microagentes](/control/estudio/microagentes)).
- **Carpetas** de [Extracción inteligente](/centro-de-conocimiento/extraccion-inteligente), para comprobar que los datos extraídos lo cumplen.
- **Aplicaciones** integradas que muestran o usan esos datos.

Un microagente también puede tener una estructura propia, definida en su formulario. La biblioteca conviene cuando la misma estructura la comparten varios elementos o cuando una aplicación depende de ella.

## Crear un esquema

1. En el Estudio, pestaña **Biblioteca de esquemas**, pulsar **Nuevo esquema**.
2. Completar **Crear esquema de datos**:

   | Campo | Descripción |
   |---|---|
   | **Clave** | Obligatoria, hasta 64 caracteres: minúsculas, números, guiones y guiones bajos. Identifica el esquema ante aplicaciones y microagentes. **No se puede cambiar después** |
   | **Nombre** | Obligatorio, hasta 150 caracteres |
   | **Descripción** | Opcional, hasta 500 caracteres |
   | **Definición (JSON Schema)** | Obligatoria. Los campos del esquema, su tipo y cuáles son obligatorios. Hasta 4 niveles de anidamiento |
   | **Ejemplo (opcional)** | Datos de muestra que cumplen la definición. **Generar desde esquema** propone uno |

3. Pulsar **Crear esquema**.

La definición sigue el estándar JSON Schema. Ejemplo para facturas:

```json
{
  "type": "object",
  "properties": {
    "proveedor": { "type": "string", "description": "Razón social del emisor" },
    "fecha": { "type": "string", "format": "date" },
    "importe_total": { "type": "number", "description": "Importe con impuestos" }
  },
  "required": ["proveedor", "fecha", "importe_total"]
}
```

## Versiones

Cada cambio de estructura crea una **versión** nueva (v1, v2…). Así, un cambio no rompe lo que ya funciona.

- Una versión **en uso** por algún elemento no se puede editar. Para cambiar la estructura, **Nueva versión**.
- Una versión nueva no se aplica sola: cada microagente, carpeta o aplicación sigue con la versión a la que está vinculado hasta que se vincula a la nueva.
- **Comparar** muestra las diferencias entre dos versiones.

En el detalle del esquema, la pestaña **General** muestra la estructura de la última versión y **Versiones** el historial, con cuántos elementos usan cada una.

## Vincular un esquema

Desde la versión, **Gestionar vínculos** permite vincularla a carpetas, aplicaciones o microagentes que todavía no tengan esquema. De las carpetas, solo se ofrecen las propias.

También se vincula desde cada elemento: al crear un microagente (**Usar un esquema de la biblioteca**) o al configurar una carpeta de extracción (**Esquema de datos (opcional)**).

:::info Si el microagente y la carpeta usan versiones distintas
Manda la del microagente. La carpeta lo avisa con un mensaje, para poder alinearlas.
:::

## Cómo se comprueban los datos

En una carpeta de extracción inteligente, cuando los datos se extraen con un esquema de la biblioteca, la plataforma comprueba que el resultado lo cumple. Si no, el documento queda como **Extraídos con avisos** y la vista previa lista los problemas. Las estructuras propias de un microagente no se comprueban de esta forma. Los campos que no están en el esquema se consideran un problema; un campo vacío, no.

## Eliminar

Si el esquema está en uso, la plataforma indica cuántos elementos lo usan y pide escribir su clave para confirmar. Esos elementos dejan de extraer datos con él hasta que se les asigne otro.

## Buenas prácticas

:::tip Esquemas fáciles de mantener
- Una clave estable y descriptiva (`factura-proveedor`, no `esquema1`): es la que usan las aplicaciones.
- Solo los campos que se van a usar, con una descripción en cada uno. La descripción ayuda al microagente a encontrar el dato.
- Un ejemplo real y coherente con la definición.
- Antes de crear una versión nueva, revisar qué elementos usan la actual y planificar su cambio.
:::
