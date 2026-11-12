---
id: problemas-frecuentes
title: Problemas frecuentes
sidebar_label: Problemas frecuentes
sidebar_position: 8
description: Soluciones a los problemas más habituales del Centro de Conocimiento de ConsulPoint.
---

# Problemas frecuentes

## El agente no usa un documento

| Causa | Cómo comprobarlo | Solución |
|---|---|---|
| La carpeta no está compartida con el agente | En la carpeta, **Ver detalles** → **Quién tiene acceso** | **Compartir** la carpeta con el agente |
| El archivo aún se está preparando | **Mostrar información** → **Disponible para agentes**: **Preparándose…** | Esperar unos minutos |
| La preparación falló | **Disponible para agentes**: **Todavía no** | **Preparar para agentes** |
| El agente lee una versión anterior | **Disponible para agentes**: **Sí, pero una versión anterior** | **Volver a preparar** |
| El formato no lo leen los agentes, como una imagen suelta | El tipo de archivo | Guardarlo como PDF y volver a subirlo |
| Quien conversa no tiene acceso a esa carpeta | Los permisos de la carpeta | El agente solo usa carpetas a las que también tiene acceso la persona que conversa. Ver [Conocimiento de los agentes](/centro-de-conocimiento/conocimiento-de-los-agentes#cómo-responde-el-agente) |

Si el documento está disponible y el agente sigue sin usarlo, el problema suele estar en la pregunta o en el documento: conviene preguntar con los términos que usa el documento y revisar su [versión en texto](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf).

## Al subir

| Mensaje | Causa | Solución |
|---|---|---|
| **Supera el tamaño máximo** | El archivo pasa de 150 MB | Dividirlo o comprimirlo |
| **Formato no admitido** | Tipo de archivo no aceptado | Ver [Formatos y límites](/centro-de-conocimiento/subir-documentos#formatos-y-límites) |
| No se pueden añadir más archivos a la subida | Se admiten hasta 6 por subida | Subirlos en varias tandas |
| La subida se rechaza aunque el archivo es válido | Se alcanzó el almacenamiento del plan | Liberar espacio o ampliar el plan |

## No aparece una opción

| Síntoma | Causa |
|---|---|
| No se ve la pestaña **Mis documentos** | El rol no tiene permiso de edición sobre Centro de Conocimiento, o se está dentro de un espacio de trabajo |
| No aparece **Compartir** o **Eliminar** | Hace falta ser el propietario o tener **Puede administrar** sobre la carpeta |
| No aparece **Subir archivo** | Hace falta **Puede editar**. En una carpeta **Multimedia** la opción es **Subir audio o vídeo** |
| No se puede mover desde **Compartidos conmigo** | Mover solo está disponible en **Mis documentos** |
| No se pueden **Preparar para agentes** archivos | No está disponible desde un espacio de trabajo, o la carpeta no está compartida con ningún agente |

## Carpetas

| Síntoma | Causa | Solución |
|---|---|---|
| No se puede eliminar una carpeta | No está vacía | Mover o eliminar antes su contenido |
| **Ya existe un elemento con este nombre en esta ubicación** | Nombre repetido en la misma carpeta | Elegir otro nombre |
| No se puede cambiar el tipo de una carpeta | El tipo se fija al crearla | Crear una carpeta nueva del tipo deseado y mover el contenido |

## Extracción inteligente

| Estado | Solución |
|---|---|
| **No se pudo extraer** | En la vista previa del archivo, **Reintentar**. Si se repite, revisar la configuración del microagente |
| **Extraídos con avisos** | Revisar **Ver problemas** y ajustar el esquema de datos o las instrucciones del microagente |
| **Duplicado** | El contenido ya se extrajo de otro archivo de la carpeta. No requiere acción |
