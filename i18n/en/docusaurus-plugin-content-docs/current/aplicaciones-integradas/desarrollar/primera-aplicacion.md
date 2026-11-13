---
id: primera-aplicacion
title: Your first app
sidebar_label: Your first app
sidebar_position: 1
description: Minimal walkthrough to create a ConsulPoint integrated app, read its context, package it and see it running.
---

# Your first app

A minimal walkthrough, from start to finish: an app that greets you in the user's language and shows up inside ConsulPoint. Use it to check the whole loop before building something real.

**Requirements:** basic web development knowledge and permission on **Apps** in a ConsulPoint organization.

:::tip Start from a ready-made base
The [starter template](/aplicaciones-integradas/desarrollar/plantilla-de-inicio) is a complete project, with session, own data and tests already solved. This walkthrough shows the minimum from scratch; the template is a starting point for a real app.
:::

## What it is, technically {#qué-es-técnicamente}

An integrated app is a **static website**: an `index.html` with its style, code and image files. You can build it with any tool that produces that (React, Vue, Svelte or plain HTML).

It has no server of its own. Everything it needs to save or query goes through the ConsulPoint API.

:::info Name in the code
In the API and in the code, integrated apps are called **mini apps**: that's why you see names such as `window.MINI_APP_PARAMS`, `miniAppId` or the `/mini-apps/…` paths.
:::

### Step 1 — Create the project {#paso-1--crear-el-proyecto}

With Vite, for example:

```bash
yarn create vite mi-aplicacion --template react-ts
cd mi-aplicacion
yarn install
```

### Step 2 — Read the context {#paso-2--leer-el-contexto}

ConsulPoint puts the context in `window.MINI_APP_PARAMS` before the app's code starts. Read it in a single place:

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

Outside ConsulPoint that object doesn't exist, which is why the example uses default values. The rest of the parameters are in [Context it receives](/aplicaciones-integradas/desarrollar/contexto).

### Step 3 — See it locally {#paso-3--verla-en-local}

```bash
yarn dev
```

The app opens in the browser with the default values. That's enough to work on the interface; for real data, see [Test](/aplicaciones-integradas/desarrollar/probar).

### Step 4 — Package it {#paso-4--empaquetar}

```bash
yarn build
cd dist && zip -r ../mi-aplicacion.zip . -x '.*'
```

The ZIP must contain the **contents** of the build folder, with `index.html` at the root, not the folder itself. The full rules are in [Publish](/aplicaciones-integradas/publicar).

### Step 5 — Create it in ConsulPoint {#paso-5--crearla-en-consulpoint}

1. Open **Settings → Apps** and click **Create application**.
2. Enter the name, a description and the **Extension** type.
3. In the **Versions** tab, click **Publish version** and upload the ZIP.
4. When the version shows as **Published**, open the **Preview** tab.

The app greets you in the language set in ConsulPoint.

## Next steps {#siguientes-pasos}

| To | Page |
|---|---|
| Start from a complete project | [Starter template](/aplicaciones-integradas/desarrollar/plantilla-de-inicio) |
| Query the organization's data | [Calling the API](/aplicaciones-integradas/desarrollar/api-y-sesion) |
| Save your own records | [Own data](/aplicaciones-integradas/desarrollar/datos-propios) |
| Work with documents | [Files and extractions](/aplicaciones-integradas/desarrollar/archivos-y-extracciones) |
| Ask the platform for actions | [Communicating with the platform](/aplicaciones-integradas/desarrollar/comunicacion) |

:::tip Package manager
The examples use **yarn**. **pnpm** also works. npm is not recommended.
:::
