---
id: esquemas-de-datos
title: Esquemas de datos
sidebar_label: Esquemas de datos
sidebar_position: 5
description: El esquema de datos define la estructura JSON que un Microagente devuelve como resultado.
---

# Esquemas de datos

El esquema de datos define la estructura que debe tener la respuesta de un [Microagente](/control/estudio/microagentes): qué propiedades incluye, y con qué forma, el objeto JSON que devuelve al ejecutarse.

## Campos

| Campo | Función |
|---|---|
| **Esquema de respuesta** | Objeto JSON válido que describe las propiedades esperadas en la salida |
| **Ejemplo del esquema** | Instancia de ejemplo del objeto de respuesta. Obligatorio |

:::tip El ejemplo importa tanto como el esquema
El ejemplo del esquema no es solo documentación de apoyo: junto con la instrucción de ejecución, es lo que el Microagente utiliza como referencia concreta del formato de salida esperado.
:::

## Buenas prácticas

- Define únicamente las propiedades que el sistema receptor va a consumir; un esquema con campos innecesarios aumenta la probabilidad de errores de extracción.
- Usa nombres de propiedad estables y descriptivos, ya que son los que integrará el sistema externo que reciba el JSON.
- Mantén el ejemplo del esquema alineado con el esquema de respuesta: cualquier propiedad del ejemplo debe existir en el esquema, y viceversa.

:::info Contenido pendiente de ampliación
Esta página cubre los campos documentados del formulario de creación de Microagentes. Si el esquema soporta validaciones adicionales (tipos, campos opcionales, anidamiento, etc.), amplía esta página con esos detalles.
:::
