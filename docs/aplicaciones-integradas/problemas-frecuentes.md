---
id: problemas-frecuentes
title: Problemas frecuentes de Aplicaciones integradas
sidebar_label: Problemas frecuentes
sidebar_position: 8
description: Síntomas, causas y soluciones de los problemas más habituales al desarrollar, publicar o usar aplicaciones integradas en ConsulPoint.
---

# Problemas frecuentes

Problemas habituales, ordenados por el momento en que aparecen. Cada fila indica el síntoma, la causa más probable y la solución.

## Al abrir la aplicación

| Síntoma | Causa | Solución |
|---|---|---|
| El recuadro queda en blanco | El paquete no tiene `index.html` en la raíz, o un archivo de estilos o código no se encuentra | Revisar el contenido del ZIP y que las referencias de `index.html` empiecen por `/`, no por `./`. Ver [Publicar](/aplicaciones-integradas/publicar) |
| Al leer un archivo, el navegador responde «Failed to fetch» | El almacenamiento de archivos no admite peticiones desde el dominio de las aplicaciones | Contactar con soporte de ConsulPoint |
| Aparece un mensaje de aplicación no disponible | Está en borrador, desactivada o sin una versión publicada | Activarla y comprobar la pestaña **Versiones** |
| «Esta aplicación ya no está disponible» | Quien la publica la retiró del catálogo | Desinstalarla desde **Instaladas** |
| Funciona en la **Vista previa** pero no aparece en Inicio o en Conversaciones | Su tipo no corresponde a ese lugar | Consultar [Dónde aparecen](/aplicaciones-integradas/donde-aparecen) |
| No aparece la pestaña **Vista de la app** en un archivo | El archivo aún no tiene extracción, o la carpeta no tiene aplicación asignada | Revisar la **Extracción inteligente** de la carpeta |
| Al abrirla directamente en el navegador no carga datos | Fuera de ConsulPoint no recibe sesión | Abrirla siempre desde la plataforma |

## Mientras se usa

| Síntoma | Causa | Solución |
|---|---|---|
| Tras media hora, las acciones dejan de funcionar | La aplicación no renueva su sesión | Implementar la renovación. Consultar [Llamar a la API](/aplicaciones-integradas/desarrollar/api-y-sesion) |
| Una función responde «sin permiso» | La aplicación no tiene ese recurso concedido, o la persona no tiene acceso por su rol | Revisar la pestaña **Permisos** y el rol del usuario |
| Un permiso recién concedido no surte efecto | Los permisos tardan en aplicarse | Esperar hasta 5 minutos |
| Un enlace no abre nada | La aplicación intenta abrir una pestaña por su cuenta | Usar `OPEN_URL`. Consultar [Comunicarse con la plataforma](/aplicaciones-integradas/desarrollar/comunicacion) |
| Un archivo no se puede leer dentro de la aplicación, aunque sí descargar | El enlace caducó o se abrió con cabeceras | Pedir un enlace nuevo y abrirlo sin cabeceras |
| La plataforma no refleja un cambio hecho en la aplicación | Falta avisar del cambio | Enviar `INVALIDATE_TAGS` |
| La aplicación se reinicia al cambiar de idioma, tema o carpeta | Es el comportamiento previsto | Guardar en la plataforma lo que deba conservarse |
| Los datos guardados desaparecen | Se guardaban en el navegador, o se desinstaló la aplicación | Guardar en [modelos de datos](/aplicaciones-integradas/desarrollar/datos-propios) |

## Al guardar datos

| Síntoma | Causa | Solución |
|---|---|---|
| Error al guardar en un modelo | El modelo no existe todavía | Crearlo en la pestaña **Modelos** antes de usarlo |
| `409` al actualizar | Otra persona modificó el registro | Volver a leerlo y repetir el cambio |
| `422` al guardar | El registro no cumple el esquema | Revisar los campos que indica la respuesta |
| `400` al actualizar | Falta la versión del registro (`_rev`) | Enviar la que se obtuvo al leerlo |

## Al publicar

| Síntoma | Causa | Solución |
|---|---|---|
| La versión queda **Fallida** | El paquete contiene un archivo no admitido o supera un límite | Revisar las [reglas del paquete](/aplicaciones-integradas/publicar) |
| La versión nueva está **Publicada** pero se sigue viendo la anterior | El navegador conserva archivos durante unos minutos | Recargar la aplicación pasados 5 minutos |
| Una versión con número menor sustituye a la actual | Se usa siempre la última publicada por fecha | Publicar de nuevo la versión correcta |
| No aparece **Publicar versión** | La aplicación es **Instalada**, o falta permiso sobre **Aplicaciones** | Las versiones de una aplicación instalada las publica quien la creó |
| Las organizaciones no reciben la versión nueva del catálogo | Cada organización decide cuándo actualizar | Pulsar **Actualizar** en **Instaladas** |

## Cuándo pedir ayuda

Si el problema no figura aquí, conviene reunir antes de contactar con soporte:

- el nombre de la aplicación y su versión;
- el lugar desde el que se abrió;
- qué se esperaba y qué ocurrió;
- la hora aproximada, para localizar el caso en la actividad.
