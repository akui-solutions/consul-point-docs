---
id: primera-aplicacion
title: Tu primera aplicación
sidebar_label: Tu primera aplicación
sidebar_position: 1
description: Recorrido mínimo para crear una aplicación integrada en ConsulPoint, leer su contexto, empaquetarla y verla funcionando.
---

# Tu primera aplicación

## Descripción

Recorrido mínimo, de principio a fin: una aplicación que saluda en el idioma del usuario y se ve dentro de ConsulPoint. Sirve para comprobar el circuito completo antes de construir algo real.

**Requisitos:** conocimientos básicos de desarrollo web y permiso sobre **Aplicaciones** en una organización de ConsulPoint.

:::tip Empezar con una base hecha
La [plantilla de inicio](/aplicaciones-integradas/desarrollar/plantilla-de-inicio) es un proyecto completo, con sesión, datos propios y pruebas ya resueltos. Este recorrido muestra el mínimo desde cero; la plantilla, un punto de partida para una aplicación real.
:::

## Qué es, técnicamente

Una aplicación integrada es un **sitio web estático**: un `index.html` con sus archivos de estilos, código e imágenes. Puede construirse con cualquier herramienta que produzca eso (React, Vue, Svelte o HTML sin más).

No tiene servidor propio. Todo lo que necesita guardar o consultar lo hace a través de la API de ConsulPoint.

### Paso 1 — Crear el proyecto

Con Vite, por ejemplo:

```bash
yarn create vite mi-aplicacion --template react-ts
cd mi-aplicacion
yarn install
```

### Paso 2 — Leer el contexto

ConsulPoint deja el contexto en `window.MINI_APP_PARAMS` antes de que arranque el código de la aplicación. Conviene leerlo en un único lugar:

```ts title="src/config.ts"
export function getConfig() {
  const params = window.MINI_APP_PARAMS ?? {};
  return {
    language: params.language ?? 'es',
    theme: params.theme ?? 'light',
    token: params.token ?? null,
    apiBaseUrl: params.apiBaseUrl ?? null,
    miniAppId: params.miniAppId ?? null,
  };
}
```

```tsx title="src/App.tsx"
import { getConfig } from './config';

export default function App() {
  const { language } = getConfig();
  return <h1>{language === 'en' ? 'Hello' : 'Hola'}</h1>;
}
```

Fuera de ConsulPoint ese objeto no existe, por eso el ejemplo usa valores por defecto. El resto de parámetros está en [Contexto que recibe](/aplicaciones-integradas/desarrollar/contexto).

### Paso 3 — Verla en local

```bash
yarn dev
```

La aplicación se abre en el navegador con los valores por defecto. Es suficiente para trabajar la interfaz; para datos reales, consultar [Probar](/aplicaciones-integradas/desarrollar/probar).

### Paso 4 — Empaquetar

```bash
yarn build
cd dist && zip -r ../mi-aplicacion.zip . -x '.*'
```

El ZIP debe contener el **contenido** de la carpeta compilada, con `index.html` en la raíz, no la carpeta en sí. Las reglas completas están en [Publicar](/aplicaciones-integradas/publicar).

### Paso 5 — Crearla en ConsulPoint

1. Abrir **Configuración → Aplicaciones** y pulsar **Crear aplicación**.
2. Indicar el nombre, una descripción y el tipo **Extensión**.
3. En la pestaña **Versiones**, pulsar **Publicar versión** y subir el ZIP.
4. Cuando la versión figure como **Publicada**, abrir la pestaña **Vista previa**.

La aplicación saluda en el idioma configurado en ConsulPoint.

## Siguientes pasos

| Para | Página |
|---|---|
| Partir de un proyecto completo | [Plantilla de inicio](/aplicaciones-integradas/desarrollar/plantilla-de-inicio) |
| Consultar datos de la organización | [Llamar a la API](/aplicaciones-integradas/desarrollar/api-y-sesion) |
| Guardar registros propios | [Datos propios](/aplicaciones-integradas/desarrollar/datos-propios) |
| Trabajar con documentos | [Archivos y extracciones](/aplicaciones-integradas/desarrollar/archivos-y-extracciones) |
| Pedir acciones a la plataforma | [Comunicarse con la plataforma](/aplicaciones-integradas/desarrollar/comunicacion) |

:::tip Gestor de paquetes
Los ejemplos usan **yarn**. También sirve **pnpm**. No se recomienda npm.
:::
