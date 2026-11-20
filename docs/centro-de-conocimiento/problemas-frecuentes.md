---
id: problemas-frecuentes
title: Problemas frecuentes del Centro de Conocimiento
sidebar_label: Problemas frecuentes
sidebar_position: 8
description: Soluciones a los problemas más habituales del Centro de Conocimiento de ConsulPoint.
---

# Problemas frecuentes

## El agente no usa un documento

| Causa | Cómo comprobarlo | Solución |
|---|---|---|
| La carpeta no está compartida con el agente | En la carpeta, **Ver detalles** → **Quién tiene acceso** | **Compartir** la carpeta con el agente |
| El archivo aún se está preparando | **Mostrar información** → **Disponibilidad para agentes**: **Preparándose…** | Esperar unos minutos |
| La preparación falló | **Disponibilidad para agentes**: **No disponible todavía** | **Preparar para agentes** |
| El agente lee una versión anterior | **Disponibilidad para agentes**: **Disponible · Actualización pendiente** | Seguir el paso que indica. Ver [Actualizar los documentos](/centro-de-conocimiento/actualizar-los-documentos) |
| El formato no lo leen los agentes, como una imagen suelta | El tipo de archivo | Guardarlo como PDF y volver a subirlo |
| Quien conversa no tiene acceso a esa carpeta | Los permisos de la carpeta | El agente solo usa carpetas a las que también tiene acceso la persona que conversa. Ver [Conocimiento de los agentes](/centro-de-conocimiento/conocimiento-de-los-agentes#cómo-responde-el-agente) |

Si el documento está disponible y el agente sigue sin usarlo, el problema suele estar en la pregunta o en el documento: conviene preguntar con los términos que usa el documento y revisar su [versión en texto](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf).

## Búsqueda de los agentes

| Síntoma o mensaje | Causa | Solución |
|---|---|---|
| No aparece **Configurar búsqueda de agentes** | La carpeta no está compartida con ningún agente, es una subcarpeta (usa la configuración de la carpeta compartida), es multimedia, o no se puede editar | Abrirla en la carpeta compartida con el agente. Ver [A qué carpetas se aplica](/centro-de-conocimiento/busqueda-de-los-agentes#a-qué-carpetas-se-aplica) |
| Se cambió la configuración y las respuestas no cambian | Los cambios de **Preparación de documentos** no se aplican solos | Actualizar los documentos pendientes. Ver [Actualizar los documentos](/centro-de-conocimiento/actualizar-los-documentos) |
| Marca naranja **Documentos pendientes de actualizar** en una carpeta | Cambió su preparación, su perfil o su conversión de PDF | Pulsar la marca y **Actualizar documentos** |
| Un PDF sigue pendiente después de **Volver a preparar** | Cambió la conversión de PDF y su versión en texto es la anterior | **Rehacer la versión en texto** y después **Volver a preparar**, o actualizar toda la carpeta |
| La opción **Perfil** está desactivada | Todavía no hay perfiles en el espacio de trabajo | Crear uno con **Guardar como perfil**. Ver [Perfiles de búsqueda](/centro-de-conocimiento/perfiles-de-busqueda#crear-un-perfil) |
| No aparece **Guardar como perfil** | El origen no es **Propia**, o no se creó la carpeta | Elegir **Propia**. Solo quien creó la carpeta puede crear perfiles desde ella |
| **Describir las imágenes de los PDF** está desactivado | La carpeta no convierte los PDF con **Avanzado** y **Conservar las imágenes** | **Cambiar la conversión de PDF** |
| **Tu rol no permite calcular el impacto, pero puedes guardar** | Falta el permiso de crear sobre el **Centro de conocimiento** | Guardar y pedir a alguien con ese permiso que aplique los cambios |
| **No hay créditos disponibles para actualizar los documentos** | La organización no tiene créditos | Ver [Créditos y límites](/organizacion/creditos-y-limites) |
| **Demasiadas solicitudes seguidas** | Se aplicaron cambios muchas veces en poco tiempo | Esperar un minuto |
| **La configuración cambió mientras tanto** | Otra persona cambió la configuración | Revisar el impacto nuevo y volver a aplicar |
| **Esta carpeta tiene demasiadas subcarpetas…** | La carpeta tiene más de 5.000 subcarpetas | Contactar con soporte |
| **El agente elegido está desactivado** u otro aviso en **Agente de búsqueda** | El agente de búsqueda ya no se puede usar | Elegir otro o activarlo en el Estudio. Mientras tanto, se usa el **Agente predeterminado** |
| **Lo usa … carpeta. Cámbiala a otra opción de búsqueda antes de eliminarlo.** | El perfil está en uso | Pasar esas carpetas a otro origen y volver a eliminarlo |
| **Ya existe un perfil con ese nombre en este espacio.** | Nombre repetido | Elegir otro nombre |
| **Solo quien creó el perfil puede…** | No se es quien creó el perfil | Pedírselo a esa persona |

## Al subir

| Mensaje | Causa | Solución |
|---|---|---|
| **Supera el tamaño máximo** | El archivo pasa de 150 MB | Dividirlo o comprimirlo |
| **Formato no admitido** | Tipo de archivo no aceptado | Ver [Formatos y límites](/centro-de-conocimiento/subir-documentos#formatos-y-límites) |
| No se pueden añadir más archivos a la subida | Se admiten hasta 6 por subida | Subirlos en varias tandas |
| La subida se rechaza aunque el archivo es válido | Se alcanzó el almacenamiento de la suscripción | Liberar espacio o ampliar la suscripción |

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
