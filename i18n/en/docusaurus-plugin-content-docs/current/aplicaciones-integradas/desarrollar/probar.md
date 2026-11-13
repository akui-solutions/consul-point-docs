---
id: probar
title: Test
sidebar_label: Test
sidebar_position: 7
description: How to test a ConsulPoint integrated app locally, with test data and inside the platform, plus a checklist before publishing.
---

# Test

You test an app at three levels, from fastest to most faithful. The first two run on the developer's computer; the third, inside ConsulPoint.

| Level | What it checks | Needs |
|---|---|---|
| **With test data** | Interface, states and flows | Nothing: works offline |
| **Locally against the API** | Real queries and permissions | A valid session |
| **Inside ConsulPoint** | The final behavior | The published app |

## With test data {#con-datos-de-prueba}

Outside ConsulPoint, `window.MINI_APP_PARAMS` doesn't exist. The usual approach is for the app, **in development only**, to take the context from environment variables and replace the API calls with made-up data.

```text title=".env.local"
VITE_DEV_LANGUAGE=es
VITE_DEV_THEME=light
VITE_DEV_MOCK=true
```

Rules:

- Development values must not reach the published version: in production, the context comes only from the platform.
- Test data must be **made up**. Never real documents, names or emails.
- The test mode should cover the four states: loading, no context, error and empty.

## Locally against the API {#en-local-contra-la-api}

To query real data from the development computer, add the API base and a session to the environment:

```text title=".env.local"
VITE_DEV_API_BASE_URL=https://…
VITE_DEV_TOKEN=…
VITE_DEV_MINI_APP_ID=…
VITE_DEV_MOCK=false
```

The session expires after 30 minutes and isn't renewed locally, because there's no platform to renew it.

:::warning Environment file
Don't commit `.env.local` to the repository or share it: it contains a session.
:::

## Inside ConsulPoint {#dentro-de-consulpoint}

This is the test that counts. The shortest loop is with a **Custom** app:

1. Publish the version from the **Versions** tab.
2. Open the **Preview** tab.
3. Also test it in the places that match its type. See [Where they appear](/aplicaciones-integradas/donde-aparecen).

Every change requires publishing a new version.

## Checklist {#lista-de-comprobación}

**Behavior**

- [ ] It looks right in light and dark themes, and in Spanish and English.
- [ ] No screen is left blank: loading, no context, error and empty are all handled.
- [ ] It keeps working after being open for 30 minutes (the session is renewed).
- [ ] If a permission is missing, the app says so and the rest keeps working.
- [ ] When reloaded, it recovers what it was supposed to keep.

**Integration**

- [ ] All requests use `apiBaseUrl`; there are no hard-coded addresses.
- [ ] External links open with `OPEN_URL`; there's no `window.open` and no unhandled new-tab links.
- [ ] Internal navigation uses `#` routes and none of the app's own pages opens in a new tab.
- [ ] After changing data, the platform is notified with `INVALIDATE_TAGS`.

**Security**

- [ ] The token isn't stored, written to the console or included in addresses.
- [ ] Browser storage holds only interface preferences.
- [ ] The package includes no real data, keys or environment files.

**Package**

- [ ] `index.html` is at the root of the ZIP.
- [ ] It meets the limits listed in [Publish](/aplicaciones-integradas/publicar).
