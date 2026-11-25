---
id: microagentes
title: Microagentes
sidebar_label: Microagentes
sidebar_position: 5
description: Qué es un microagente en ConsulPoint, sus seis tipos, dónde se usa cada uno y cómo crearlo con su esquema de respuesta.
---

# Microagentes

<PageMeta route="/studio/config/add-micro-agent" />

Un **microagente** hace una tarea concreta y devuelve el resultado con una estructura fija: por ejemplo, leer una factura y devolver el proveedor, la fecha y el importe. No conversa con nadie: lo ejecuta la plataforma cuando hace falta, por ejemplo al subir un documento a una carpeta o al llegar un correo.

Cada microagente tiene un **tipo**, que decide dónde se puede usar. El tipo se elige al crearlo y no se puede cambiar.

## Tipos de microagente

| Tipo | Qué hace | Dónde se usa |
|---|---|---|
| **Extractor de documentos** | Extrae texto y datos de imágenes, PDF y documentos escaneados | Carpetas de [Extracción inteligente](/centro-de-conocimiento/extraccion-inteligente) |
| **Lector de correo** | Lee los correos de la Bandeja Inteligente y guarda datos o un resumen. Ver [Lector de correo](#lector-de-correo) | Reglas de la [Bandeja Inteligente](/modulos/bandeja-inteligente) |
| **Descriptor de imágenes** | Describe las imágenes de los PDF (gráficos, fotos, diagramas) para que los agentes puedan entenderlas | **Conversión de PDF** de las carpetas del Centro de Conocimiento (ver [Carpetas y archivos](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf)) |
| **Analizador de conversaciones** | Analiza conversaciones para generar resumen, sentimiento, categoría y sugerencias de respuesta | Análisis de las conversaciones |
| **Procesador de multimedia** | Analiza vídeos y audios de YouTube guardados en carpetas multimedia | Carpetas [Multimedia](/centro-de-conocimiento/multimedia) |
| **Agente de búsqueda** | Busca en los documentos de las carpetas con los criterios y la terminología de la organización | **Búsqueda de los agentes** de las carpetas y los perfiles de búsqueda. Ver [Agente de búsqueda](#agente-de-búsqueda) |

:::info Analizador de conversaciones
La plataforma usa el **primer** analizador de conversaciones creado en la organización. Si hay varios, solo funciona ese.
:::

## Crear un microagente

1. En el Estudio, pestaña **Microagentes**, pulsar **Nuevo microagente**.
2. **Configuración**: tipo de microagente, nombre, descripción, instrucciones del sistema y modelo.
3. **Esquema e instrucción**: la estructura de la respuesta y la instrucción de ejecución. El **Descriptor de imágenes** y el **Lector de correo** con resultado **Resumen** no tienen este paso: su salida no lleva esquema, y la instrucción de ejecución se escribe en el paso 1.
4. Pulsar **Crear**.

### Configuración

| Campo | Descripción |
|---|---|
| **Tipo de microagente** | Obligatorio. Ver la tabla anterior. No se puede cambiar después |
| **Resultado** | Solo en el **Lector de correo**, y obligatorio: **Datos estructurados** o **Resumen**. No se puede cambiar después |
| **Nombre del microagente** | Obligatorio, entre 3 y 50 caracteres, sin repetir el de otro agente |
| **Descripción** | Obligatoria, hasta 400 caracteres |
| **Instrucciones del sistema** | Obligatorias, hasta 50.000 caracteres. El papel del microagente y las reglas generales |
| **Modelo** | Se ofrecen modelos de Google ligeros, adecuados para extracción. El **Lector de correo** puede usar cualquier proveedor disponible, también los modelos propios de la organización. El **Descriptor de imágenes** necesita un modelo que lea imágenes |
| **Temperatura** | De 0 a 1. Por defecto, 0. Para extraer datos conviene dejarla en 0 |

### Esquema e instrucción

Primero se elige **¿De dónde sale la estructura?**:

- **Definir una propia**: se describe en el mismo formulario.
- **Usar un esquema de la biblioteca**: se elige un esquema y una versión de la [Biblioteca de esquemas](/control/estudio/esquemas-de-datos). Conviene cuando varios microagentes, carpetas o aplicaciones comparten la misma estructura.

Con una estructura propia:

| Campo | Descripción |
|---|---|
| **Esquema de respuesta** | Las propiedades que debe devolver, con su nombre, tipo, formato, descripción y si son obligatorias. Se edita en modo **Visual** o en **Código**. Hasta 4 niveles de anidamiento |
| **Ejemplo de respuesta** | Obligatorio. Un ejemplo real de lo que debe devolver. **Generar desde esquema** propone uno |

Y en ambos casos:

| Campo | Descripción |
|---|---|
| **Instrucción de ejecución** | Obligatoria, hasta 20.000 caracteres. La orden concreta que se ejecuta con cada documento o correo |

**Generar con IA** propone el esquema a partir de las instrucciones, y cada campo de texto tiene su botón de mejora con IA.

Ejemplo de instrucción de ejecución para un extractor de facturas:

```prompt
Lee la factura y devuelve el proveedor, su NIF, la fecha de emisión, el número de factura y el importe total con impuestos. Si un dato no aparece en el documento, devuélvelo vacío; no lo deduzcas.
```

### Lector de correo

Lee los correos que captura una [regla de la Bandeja Inteligente](/bandeja-inteligente/reglas-de-correo) y guarda el resultado en la carpeta de la regla. Al crearlo se elige el **Resultado**, que queda fijo:

| Resultado | Qué guarda | Paso de esquema |
|---|---|---|
| **Datos estructurados** | Los campos de un esquema, siempre con el mismo formato | Sí |
| **Resumen** | Un documento de texto con lo importante del correo | No |

Una carpeta guarda un solo tipo de resultado, y una carpeta con esquema solo admite **Datos estructurados**. Ver [Análisis con IA](/bandeja-inteligente/analisis-con-ia).

### Agente de búsqueda

Un **Agente de búsqueda** reemplaza al agente de búsqueda predeterminado de la plataforma en las carpetas a las que se asigna. Sirve para que la búsqueda en los documentos tenga en cuenta el vocabulario de la organización.

<Screenshot src="/img/estudio/microagente-busqueda.png" alt="Formulario de un microagente de tipo Agente de búsqueda en el Estudio" caption="Crear un microagente de tipo Agente de búsqueda" maxWidth={1117} />

- No tiene **Esquema de respuesta** ni **Instrucción de ejecución**: solo **Instrucciones del sistema**.
- En las instrucciones van solo los **criterios y la terminología** del dominio: qué es relevante, sinónimos y siglas. La plataforma ya decide cómo buscar y cómo responder, así que no hace falta explicarlo.
- Se asigna a carpetas, no a agentes: en **Búsqueda de los agentes** de una carpeta o en un perfil, campo **Agente de búsqueda**. Ver [Búsqueda de los agentes](/centro-de-conocimiento/busqueda-de-los-agentes#agente-de-búsqueda).
- Solo se pueden elegir los agentes de búsqueda activos.

Ejemplo de instrucciones del sistema:

```prompt
En contratos, "adenda" y "modificación" significan lo mismo; prioriza siempre la versión vigente. "OT" es una orden de trabajo y "SAT" el servicio de asistencia técnica.
```


## El detalle de un microagente

| Pestaña | Contenido |
|---|---|
| **General** | Tipo, descripción, origen, modelo, temperatura, fechas, propietario, instrucciones del sistema e instrucción de ejecución |
| **Esquema de respuesta** | La estructura que devuelve, propia o de la biblioteca (con su versión) |

En la lista, el tipo aparece debajo del nombre, y los microagentes que instala una aplicación del catálogo muestran en **Origen** **De la aplicación** y su nombre.

## Eliminar

Si hay carpetas que usan el microagente, la plataforma lo avisa y pide escribir su nombre para confirmar. Un **Descriptor de imágenes** en uso por alguna carpeta no se puede eliminar: antes hay que cambiar el descriptor de esas carpetas. Lo mismo con un **Agente de búsqueda** que usan carpetas o perfiles: la plataforma indica cuántos y hay que asignarles otro agente de búsqueda primero.

## Buenas prácticas

:::tip Extracciones fiables
- Un microagente por tipo de documento: uno para facturas, otro para albaranes.
- Pocas propiedades, solo las que se van a usar, con descripciones claras.
- Un ejemplo de respuesta real y coherente con el esquema.
- Indicar en la instrucción qué hacer cuando falta un dato, para que no lo invente.
- Probar con algunos documentos reales en una carpeta de extracción antes de usarlo a gran escala.
:::
