---
id: contexto
title: Contexto que recibe
sidebar_label: Contexto que recibe
sidebar_position: 2
description: Parámetros que ConsulPoint entrega a una aplicación integrada al abrirla, según el lugar desde el que se abre.
---

# Contexto que recibe

Al abrir una aplicación, ConsulPoint le entrega un objeto con todo lo que necesita saber: `window.MINI_APP_PARAMS`. Es la única fuente de contexto, y está disponible antes de que se ejecute el código de la aplicación.

## Parámetros comunes

| Parámetro | Valores | Contenido |
|---|---|---|
| `language` | `es` · `en` | Idioma del usuario |
| `theme` | `light` · `dark` | Tema visual activo |
| `token` | texto | Sesión temporal para llamar a la API |
| `apiBaseUrl` | dirección | Base de la API. No debe escribirse fija en el código |
| `miniAppId` | identificador | Identificador de la aplicación |

## Parámetros según el lugar

| Lugar donde se abre | Parámetro | Contenido |
|---|---|---|
| Inicio | `applicationId` | Identificador de la aplicación |
| Carpeta del Centro de Conocimiento | `folderId` | Carpeta abierta |
| Vista previa de un archivo | `id` | Extracción del archivo en pantalla |
| Conversaciones | `chatId` | Conversación abierta |
| Conversaciones | `aiResponseEnabled` | `"true"` o `"false"`, según estén activas las respuestas automáticas |

Todos los valores son texto. Un parámetro que no corresponde al lugar no está presente.

## Cómo leerlo

Se recomienda centralizar la lectura en un único módulo y no acceder al objeto desde componentes o servicios:

```ts title="src/config.ts"
export function getConfig() {
  const params = window.MINI_APP_PARAMS ?? {};
  return {
    language: params.language ?? 'es',
    theme: params.theme ?? 'light',
    token: params.token ?? null,
    apiBaseUrl: params.apiBaseUrl ?? null,
    miniAppId: params.miniAppId ?? null,
    folderId: params.folderId ?? null,
    chatId: params.chatId ?? null,
  };
}
```

## Cuándo cambia

Si el usuario cambia de idioma, de tema, de carpeta o de conversación, ConsulPoint **vuelve a cargar la aplicación** con el contexto nuevo. No hay que escuchar cambios.

Por eso la aplicación no debe dar por hecho que su estado en memoria se conserva: lo que importe se guarda en la plataforma.

## Los cuatro estados de una pantalla

Toda pantalla debe contemplar estas situaciones y no quedar en blanco en ninguna:

| Estado | Cuándo ocurre |
|---|---|
| **Cargando** | Mientras se inicia o se consultan datos |
| **Sin contexto** | Falta un parámetro necesario, por ejemplo la carpeta |
| **Error** | Falló una consulta |
| **Vacío** | La consulta respondió, pero no hay datos |

El estado **Sin contexto** no es un error: es una situación normal que se explica con un mensaje claro, por ejemplo pidiendo elegir una carpeta.

## Buenas prácticas

:::warning El token
No guardar el `token` en el almacenamiento del navegador, no escribirlo en la consola y no incluirlo en direcciones.
:::

:::tip Idioma y tema
Aplicar el tema al iniciar y ofrecer todos los textos en español e inglés.
:::
