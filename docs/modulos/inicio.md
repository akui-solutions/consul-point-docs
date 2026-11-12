---
id: inicio
title: Inicio
sidebar_label: Inicio
sidebar_position: 1
description: Pantalla de Inicio de ConsulPoint. Artículos destacados, calendario, aplicaciones, accesos rápidos, conversaciones recientes y guías de ayuda.
---

# Inicio

**Ruta:** `/dashboard`

## Descripción

Pantalla principal de la plataforma, titulada **Panel de Control**. Reúne los artículos más recientes, un calendario, las aplicaciones y los enlaces de uso diario, y las últimas conversaciones del usuario. Está siempre disponible en el menú lateral, sea cual sea el rol.

<Screenshot src="/img/modulos/inicio.png" alt="Pantalla de Inicio en ConsulPoint" caption="Pantalla de Inicio" />

## Qué muestra

Cada usuario ve solo los bloques de los módulos a los que tiene acceso. El panel reparte los bloques visibles para ocupar todo el ancho, por lo que su disposición puede variar de un usuario a otro.

| Bloque | Contenido | Se muestra si… |
|---|---|---|
| **Artículo Destacado** | Carrusel con los 3 artículos activos más recientes de [Artículos y novedades](/modulos/articulos-y-novedades). Avanza solo cada pocos segundos; al pulsar un artículo se abre completo | El usuario tiene acceso a Artículos y novedades y hay artículos activos |
| **Calendario** | El mes actual y los dos siguientes. Las flechas avanzan o retroceden de mes, y el botón junto a ellas cambia entre **Vista cuadrícula** y **Vista lineal** | Siempre |
| **Accesos** | Las aplicaciones de la organización (**Mis aplicaciones**) y los enlaces personales del usuario (**Accesos Rápidos**) | El usuario tiene acceso a las aplicaciones o a los accesos rápidos |
| **Conversaciones Recientes** | Las 5 últimas conversaciones del usuario. Al pulsar una se abre en [Conversaciones](/modulos/conversaciones); si hay más, **Ver todas las conversaciones** lleva al listado completo | El usuario tiene acceso a Conversaciones |

### Avisos en la parte superior

- **¿Primera vez en ConsulPoint?** — tarjeta con enlaces a la guía de inicio de esta documentación (**Visión general**, **Navegación**, **Conceptos**). Se cierra con la **X** y deja de mostrarse para ese usuario en ese navegador.
- **Periodo de prueba** — en las organizaciones que están en prueba, una tarjeta indica los días que quedan. Los administradores ven además un botón que lleva a los planes disponibles.

## Accesos

El bloque cambia de título según lo que contiene: **Accesos** cuando incluye aplicaciones y accesos rápidos, o **Mis aplicaciones** o **Accesos Rápidos** cuando solo hay uno de los dos.

Muestra hasta 6 aplicaciones y 6 accesos rápidos. El botón de ampliar, en la esquina del bloque, abre **Aplicaciones y accesos** con todos los elementos, separados en pestañas y con buscador.

### Mis aplicaciones

Son las [aplicaciones integradas](/modulos/apps) instaladas en la organización. Al pulsar una se abre en una ventana sobre el Inicio, sin salir de la pantalla.

### Accesos rápidos

Enlaces a sitios que el usuario consulta a menudo, como la intranet o un portal de soporte. Se abren en una pestaña nueva del navegador.

Los accesos rápidos son **personales**: cada usuario ve solo los suyos. Además, se guardan por separado en la organización y en cada espacio de trabajo.

Para crear uno, si el rol lo permite:

1. Pulsar **+** junto a **Accesos Rápidos**, o **Agregar acceso** si todavía no hay ninguno.
2. Completar la ventana **Nuevo acceso**:

   | Campo | Descripción |
   |---|---|
   | **Nombre** | Entre 2 y 100 caracteres |
   | **Enlace** | Dirección web completa, por ejemplo `https://intranet.ejemplo.com` |
   | **Elige un icono** / **Sube una imagen personalizada** | Uno de los iconos disponibles o una imagen propia |

3. Pulsar **Guardar**.

El menú de cada acceso permite **Editar acceso** y **Eliminar acceso**.

:::danger Eliminar un acceso
Un acceso eliminado no se recupera; hay que volver a crearlo.
:::

## Centro de ayuda

Una vez cerrada la tarjeta **¿Primera vez en ConsulPoint?**, en su lugar aparece al final del panel el bloque **Centro de ayuda**. Contiene guías de esta documentación para cada módulo al que el usuario tiene acceso, y el enlace **Ver toda la documentación**.

<Screenshot src="/img/modulos/inicio-centro-de-ayuda.png" alt="Bloque Centro de ayuda en la pantalla de Inicio de ConsulPoint" caption="Centro de ayuda" />

## Cuando un bloque está vacío

Si no hay contenido, cada bloque lo indica, por ejemplo **Aún no hay accesos** o **No hay conversaciones recientes**. Si un bloque no se puede cargar, muestra un mensaje y un botón para reintentar.
