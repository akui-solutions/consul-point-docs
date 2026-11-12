---
id: donde-aparecen
title: Dónde aparecen
sidebar_label: Dónde aparecen
sidebar_position: 3
description: Lugares de ConsulPoint donde se muestra una aplicación integrada según su tipo, y qué hay que configurar en cada uno.
---

# Dónde aparecen

## Descripción

Una misma aplicación puede abrirse desde varios lugares de ConsulPoint. El **tipo** de la aplicación determina en cuáles se ofrece, y cada lugar le entrega un contexto distinto.

## Tipos de aplicación

| Tipo | Pensado para | Se ofrece en |
|---|---|---|
| **Extensión** | Herramientas de trabajo de uso general | Inicio, carpetas del Centro de Conocimiento y panel lateral de Conversaciones |
| **Visualizador** | Mostrar los datos extraídos de un archivo | Vista previa de archivos del Centro de Conocimiento |
| **Filtro** | Procesar o filtrar contenido | Su página propia y la barra lateral |

Cualquier aplicación, sea cual sea su tipo, puede abrirse en su página propia y fijarse en la barra lateral.

## Lugares

| Lugar | Qué aplicaciones muestra | Qué hay que configurar |
|---|---|---|
| **Página de la aplicación** | Todas | Nada. Se abre con **Abrir** desde el catálogo o con **Abrir aplicación** desde **Configuración → Aplicaciones** |
| **Barra lateral** | Las que se fijen | **Configuración → Barra lateral → Fijar elemento**. Visible **Solo para mí** o **Para todos** (esta opción, solo administradores). Máximo 10 elementos |
| **Inicio**, widget **Mis aplicaciones** | Extensiones | Nada |
| **Carpeta del Centro de Conocimiento**, panel lateral | Extensiones asignadas a la carpeta | En la carpeta, **Gestionar aplicaciones**. Hasta 7 por carpeta |
| **Vista previa de un archivo**, pestaña **Vista de la app** | El visualizador de la carpeta | En la carpeta, activar **Extracción inteligente** y elegir **Aplicación (opcional)**. Una por carpeta |
| **Conversaciones**, panel lateral | Extensiones activas | Nada |
| **Configuración → Aplicaciones**, pestaña **Vista previa** | La aplicación que se está consultando | Nada. Solo disponible si está activa |

:::info Pestaña Vista de la app
La pestaña solo aparece cuando el archivo ya tiene una extracción de datos. Consultar [Centro de Conocimiento](/modulos/centro-de-conocimiento).
:::

## Qué recibe la aplicación en cada lugar

Además del idioma, el tema y su sesión, la aplicación recibe datos del lugar donde se abrió:

| Lugar | Dato adicional |
|---|---|
| Página de la aplicación y barra lateral | Ninguno |
| Inicio | Identificador de la aplicación |
| Carpeta del Centro de Conocimiento | Carpeta abierta |
| Vista previa de un archivo | Extracción del archivo en pantalla |
| Conversaciones | Conversación abierta y si las respuestas automáticas están activas |

El detalle técnico está en [Contexto que recibe](/aplicaciones-integradas/desarrollar/contexto).

## Criterio de uso

:::tip Elegir el tipo
Utilizar **Extensión** salvo que la aplicación exista solo para mostrar los datos extraídos de un archivo, en cuyo caso corresponde **Visualizador**.
:::

:::warning Una aplicación a la vez
La plataforma muestra una sola aplicación integrada al mismo tiempo. Al abrir otra, la anterior se cierra y pierde lo que no hubiera guardado.
:::
