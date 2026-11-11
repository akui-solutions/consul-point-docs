---
id: probar
title: Probar
sidebar_label: Probar
sidebar_position: 7
description: Cómo probar una aplicación integrada de ConsulPoint en local, con datos de prueba y dentro de la plataforma, y lista de comprobación antes de publicar.
---

# Probar

## Descripción

Una aplicación se prueba en tres niveles, de más rápido a más fiel. Los dos primeros se hacen en el equipo de quien desarrolla; el tercero, dentro de ConsulPoint.

| Nivel | Qué comprueba | Necesita |
|---|---|---|
| **Con datos de prueba** | Interfaz, estados y flujos | Nada: funciona sin conexión |
| **En local contra la API** | Consultas reales y permisos | Una sesión válida |
| **Dentro de ConsulPoint** | El comportamiento definitivo | La aplicación publicada |

## Con datos de prueba

Fuera de ConsulPoint no existe `window.MINI_APP_PARAMS`. Lo habitual es que la aplicación, **solo en desarrollo**, tome el contexto de variables de entorno y sustituya las llamadas a la API por datos inventados.

```text title=".env.local"
VITE_DEV_LANGUAGE=es
VITE_DEV_THEME=light
VITE_DEV_MOCK=true
```

Reglas:

- Los valores de desarrollo no deben llegar a la versión publicada: en producción, el contexto viene únicamente de la plataforma.
- Los datos de prueba deben ser **inventados**. Nunca documentos, nombres o correos reales.
- Conviene que el modo de prueba cubra los cuatro estados: cargando, sin contexto, error y vacío.

## En local contra la API

Para consultar datos reales desde el equipo de desarrollo se añade al entorno la base de la API y una sesión:

```text title=".env.local"
VITE_DEV_API_BASE_URL=https://…
VITE_DEV_TOKEN=…
VITE_DEV_MINI_APP_ID=…
VITE_DEV_MOCK=false
```

La sesión caduca a los 30 minutos y en local no se renueva, porque no hay plataforma que la renueve.

:::warning Archivo de entorno
`.env.local` no se sube al repositorio ni se comparte: contiene una sesión.
:::

## Dentro de ConsulPoint

Es la prueba que cuenta. El circuito más corto es el de una aplicación **Propia**:

1. Publicar la versión desde la pestaña **Versiones**.
2. Abrir la pestaña **Vista previa**.
3. Probarla también en los lugares que correspondan a su tipo. Consultar [Dónde aparecen](/aplicaciones-integradas/donde-aparecen).

Cada cambio requiere publicar una versión nueva.

## Lista de comprobación

**Funcionamiento**

- [ ] Se ve correctamente con tema claro y oscuro, y en español e inglés.
- [ ] Ninguna pantalla queda en blanco: cargando, sin contexto, error y vacío están resueltos.
- [ ] Sigue funcionando después de 30 minutos abierta (la sesión se renueva).
- [ ] Si falta un permiso, la aplicación lo indica y el resto sigue funcionando.
- [ ] Al recargarla, recupera lo que debía conservar.

**Integración**

- [ ] Todas las peticiones usan `apiBaseUrl`; no hay direcciones fijas.
- [ ] Los enlaces externos se abren con `OPEN_URL`; no hay `window.open` ni enlaces en pestaña nueva sin tratar.
- [ ] La navegación interna usa rutas con `#` y ninguna página propia se abre en pestaña nueva.
- [ ] Tras modificar datos, se avisa a la plataforma con `INVALIDATE_TAGS`.

**Seguridad**

- [ ] El token no se guarda, no se escribe en la consola ni aparece en direcciones.
- [ ] El almacenamiento del navegador contiene solo preferencias de interfaz.
- [ ] El paquete no incluye datos reales, claves ni archivos de entorno.

**Paquete**

- [ ] `index.html` está en la raíz del ZIP.
- [ ] Cumple los límites indicados en [Publicar](/aplicaciones-integradas/publicar).
