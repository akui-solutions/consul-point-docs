# Versión en inglés

El sitio en inglés se publica en `/en/`. El español es el original: cada página se escribe
primero en `docs/` y se traduce aquí.

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Páginas traducidas | `docusaurus-plugin-content-docs/current/`, con la misma ruta y nombre que en `docs/` |
| Grupos de los menús | `docusaurus-plugin-content-docs/current.json` |
| Barra superior y pie | `docusaurus-theme-classic/navbar.json`, `footer.json` |
| Textos de los componentes del sitio | `code.json` (claves que empiezan por `cp.`) |
| Capturas | `static/img/en/…`, con la misma ruta que las de español en `static/img/…` |
| Imágenes para compartir | `static/img/social/en/` |
| Qué páginas están al día | `translation-status.json` (lo escribe el script, no se edita a mano) |

Una página que aún no tiene traducción se muestra en español con un aviso, y los buscadores
no la indexan en inglés.

## Mantener los dos idiomas al día

Todo cambio en una página en español va en la misma PR que su cambio en inglés. Después se
marca la página como al día:

```bash
node scripts/translation-status.mjs --update introduccion/tu-cuenta.md
```

El build avisa de las páginas en inglés cuyo original en español cambió después, y la PR
muestra el mismo aviso. Para ver la lista:

```bash
node scripts/translation-status.mjs
```

## Cómo se escribe

- Traducir el sentido, no palabra por palabra. Misma estructura, títulos y tablas que en español.
- Tratar al lector de "you", con frases sencillas y directas.
- Citar las etiquetas de la interfaz exactamente como las muestra la plataforma en inglés
  (`public/locales/en` en el frontend), en negrita como en español.
- Dejar los enlaces como están (`/modulos/inicio`): el sitio añade `/en/` solo.
- Dar a cada título el mismo ancla que en español, para que los enlaces con `#` funcionen en
  los dos idiomas: `## User menu {#menú-de-usuario}`.
- Capturas: la misma captura que en español, con la plataforma en inglés y los mismos datos de ejemplo.

## Vocabulario

Nombres de módulos y conceptos, como los muestra la plataforma en inglés.

| Español | English |
|---|---|
| Inicio | Home |
| Conversaciones | Conversations |
| Artículos y novedades | Articles & Updates |
| Centro de Conocimiento | Knowledge Hub |
| Contactos | Contacts |
| Estudio | Studio |
| Catálogo de integraciones | Integrations catalog |
| Centro de Agentes de IA | AI Agents Center |
| Auditoría y Reportes | Audit & Reports |
| Configuración | Settings |
| Espacio de trabajo | Workspace |
| Bandeja Inteligente | Smart Inbox |
| Aplicación integrada | Integrated app |
| Aplicación externa (canal) | External app |
| Agente / Especialista / Microagente | Agent / Specialist / Micro-agent |
| Instrucciones del sistema | System instructions |
| Capacidades | Capabilities |
| Esquema de datos | Data schema |
| Carpeta | Folder |
| Conectores | Connectors |
| Integraciones | Integrations |
| Proveedores de IA | AI Providers |
| Claves de API | API keys |
| Equipos | Teams |
| Usuarios / Roles | Users / Roles |
| Suscripción | Subscription |
| Créditos | Credits |
| Fijados | Pinned |
| Configuración de cuenta | Account Settings |
| Organización favorita | Favorite organization |
| Pestañas del sitio: Guía de uso / Administración / Desarrolladores | User guide / Administration / Developers |
