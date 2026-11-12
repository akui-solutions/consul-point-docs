---
id: reglas-de-correo
title: Reglas de correo
sidebar_label: Reglas de correo
sidebar_position: 4
description: Cómo crear reglas de correo en la Bandeja Inteligente de ConsulPoint para capturar correos, guardar sus adjuntos y analizarlos con IA.
---

# Reglas de correo

**Ruta:** `/settings/smart-inbox/rules`
**Permiso requerido:** el que corresponda sobre **Bandeja Inteligente**

## Descripción

Una regla dice **qué correos** de una cuenta interesan y **qué hacer** con ellos: guardar sus adjuntos en el Centro de Conocimiento, analizarlos con IA, o ambas cosas. Por ejemplo: "los correos de `facturas@proveedor.com` con 'factura' en el asunto: guardar el PDF en la carpeta Facturas y extraer los datos".

Las reglas se gestionan en **Configuración → Reglas de correo**.

<Screenshot src="/img/bandeja-inteligente/reglas-de-correo.png" alt="Lista de reglas de correo en la configuración de ConsulPoint" caption="Reglas de correo" />

## Crear una regla

1. Pulsar **Crear regla**.
2. Completar las secciones (ver abajo).
3. Pulsar **Guardar regla**.

Al pie del formulario, **Resumen de la regla** explica en una frase lo que hará con la configuración elegida.

### Nombre y prioridad

| Campo | Descripción |
|---|---|
| **Nombre de la regla** | Obligatorio, entre 3 y 100 caracteres |
| **Prioridad** | **Más alta**, **Alta**, **Media** (por defecto), **Baja** o **Más baja** |
| **Descripción (opcional)** | Hasta 500 caracteres |

Si un correo cumple varias reglas, se aplica la de mayor prioridad.

### Buzón

| Campo | Descripción |
|---|---|
| **Cuenta** | Obligatoria. La cuenta de correo que lee la regla. No se puede cambiar después: para otra cuenta, se crea otra regla |
| **Capturar correos desde** | Fecha a partir de la cual se capturan correos. Vacío: sin límite de fecha |

### Criterios

| Criterio | Ejemplo |
|---|---|
| **Palabras clave en el asunto** | `factura`, `pedido` |
| **Correos del remitente** | `facturas@proveedor.com` |
| **Dominios del remitente** | `proveedor.com` (incluye sus subdominios) |

Cada valor se añade pulsando Enter o una coma.

- Un correo se captura si cumple **todos** los criterios completados.
- Dentro de un criterio basta con que coincida **uno** de los valores.
- Los remitentes y los dominios cuentan como un solo criterio: basta con que coincida uno de los dos.
- No distingue mayúsculas de minúsculas. Las palabras clave coinciden aunque formen parte de otra palabra.
- Sin criterios, la regla captura todos los correos del buzón.

### Qué hacer con los correos

**Guardar adjuntos en el Centro de conocimiento**

| Campo | Descripción |
|---|---|
| **Carpeta para los adjuntos** | Obligatoria con esta opción. Carpeta propia o compartida conmigo con permiso de edición |
| **Tipos de archivo (opcional)** | PDF, DOCX, XLSX, CSV, TXT, PNG, JPG. Sin ninguno, se guardan todos |

Cada adjunto puede ocupar hasta 25 MB.

**Analizar con IA**

| Campo | Descripción |
|---|---|
| **Micro-agente (opcional)** | Un [microagente](/control/estudio/microagentes) de tipo **Lector de correo** o **Email a Markdown**. Vacío: sin análisis |
| **Carpeta de resúmenes** | Solo con un **Lector de correo**. Aquí se guarda un archivo de resumen por cada correo analizado, en subcarpetas por mes |

El análisis consume créditos. Ver [Análisis con IA](/bandeja-inteligente/analisis-con-ia) para la diferencia entre los dos tipos.

:::info Requisitos de la carpeta de resúmenes
Debe ser una carpeta en la que se pueda escribir y que no sea de [Extracción inteligente](/centro-de-conocimiento/extraccion-inteligente). El microagente debe usar un modelo de Google.
:::

## Guardar los adjuntos de correos que ya existen

Al guardar una regla con adjuntos, la plataforma pregunta **¿Guardar ya los adjuntos de los correos existentes?**:

- **Guardar adjuntos ahora** revisa todos los correos de la cuenta que cumplen la regla y guarda sus adjuntos. Se ejecuta en segundo plano.
- **Ahora no** deja la regla creada sin procesar nada.

En cualquier momento se puede repetir desde la lista de reglas, con **Procesar adjuntos**. Los adjuntos que la regla ya guardó no se duplican.

## Gestionar las reglas

La lista muestra, por regla, la cuenta, los criterios, la carpeta de adjuntos, el análisis con IA, la prioridad y el estado. El menú de cada regla permite:

| Acción | Qué hace |
|---|---|
| **Ver detalle** | Toda la configuración y el **Procesamiento manual** del análisis con IA |
| **Editar** | Cambia la regla, salvo la cuenta |
| **Procesar adjuntos** | Guarda los adjuntos de los correos que cumplen la regla |
| **Desactivar** / **Activar** | Una regla desactivada deja de capturar y procesar correos hasta que se vuelve a activar |
| **Eliminar** | Borra la regla. No se puede deshacer |

## Buenas prácticas

:::tip Reglas que funcionan
- Una regla por tipo de correo: facturas, pedidos, incidencias. Cada una con su carpeta.
- Criterios concretos (remitente o dominio) antes que palabras clave sueltas, que capturan más de la cuenta.
- Una fecha en **Capturar correos desde** para no procesar años de correo antiguo.
- Probar la regla con el selector de regla de la Bandeja Inteligente antes de guardar adjuntos o analizar en lote.
:::
