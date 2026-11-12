---
id: archivos-y-extracciones
title: Archivos y extracciones
sidebar_label: Archivos y extracciones
sidebar_position: 5
description: Cómo una aplicación integrada trabaja con carpetas, archivos y datos extraídos del Centro de Conocimiento de ConsulPoint.
---

# Archivos y extracciones

## Descripción

Con el permiso **Centro de conocimiento**, una aplicación puede trabajar con las carpetas y archivos de la persona que la usa, y con los datos que la **Extracción inteligente** obtiene de cada documento.

Para los conceptos de carpeta, archivo y extracción, consultar [Centro de Conocimiento](/modulos/centro-de-conocimiento).

## Carpetas

| Consulta | Ruta |
|---|---|
| Carpetas propias | `GET /knowledge-hub/directories/own` |
| Carpetas compartidas | `GET /knowledge-hub/directories/shared` |
| Subcarpetas | Las mismas rutas con `?parentId={carpeta}` |

Cuando la aplicación se abre desde una carpeta, recibe `folderId` y no necesita preguntar. En los demás casos, se ofrece un selector de carpetas.

## Extracciones

Los datos extraídos de los documentos de una carpeta se consultan por páginas:

```text
GET /knowledge-hub-api/documents/{folderId}/extractions?page=1&limit=100
```

El máximo es 100 por página. Cada extracción trae los datos del documento y el resultado con la forma definida en el esquema de datos de la carpeta.

## Obtener un archivo

La API nunca devuelve el contenido de un archivo: entrega un **enlace temporal**.

```text
GET /knowledge-hub/documents/{folderId}/files/{fileId}
```

```json
{
  "url": "https://…",
  "expiresAt": "2026-10-21T20:19:34.391Z",
  "fileName": "informe.pdf",
  "mimeType": "application/pdf",
  "size": 71146758
}
```

Reglas:

- El enlace caduca a los **5 minutos**. Se pide justo antes de usarlo y no se guarda.
- El enlace se abre **sin cabeceras**: el almacenamiento rechaza las peticiones que lleven `Authorization`.
- No debe darse por hecho un dominio concreto: cada organización puede tener su propio almacenamiento.

| Para | Cómo |
|---|---|
| Entregar el archivo al usuario | Navegar al enlace desde el clic del usuario; el navegador lo descarga |
| Mostrar una imagen | Usar el enlace directamente como origen de la imagen |
| Leer el contenido (visor de PDF, análisis) | Descargarlo con una petición sin cabeceras |

## Subir archivos

```text
POST /knowledge-hub/documents/{folderId}/files
Content-Type: multipart/form-data   (campo: files)
```

| Límite | Valor |
|---|---|
| Tamaño por archivo | 150 MB |
| Archivos por petición | 6 |

Conviene comprobar ambos límites antes de enviar, para avisar al usuario desde el principio. La plataforma puede cambiar el nombre de un archivo para evitar duplicados: el nombre válido es el de la respuesta.

Después de crear, modificar o eliminar archivos, la aplicación avisa a la plataforma para que actualice sus listados. Consultar [Comunicarse con la plataforma](/aplicaciones-integradas/desarrollar/comunicacion).

## Buenas prácticas

:::warning Enlace caducado
Si el almacenamiento responde `403`, el enlace caducó. Pedir uno nuevo y reintentar una vez, sin mostrar error.
:::

:::tip Recordar la carpeta elegida
Si la aplicación recuerda la última carpeta, debe comprobar que siga entre las carpetas del usuario antes de usarla.
:::
