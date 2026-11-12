---
id: navegacion
title: Navegación
sidebar_label: Navegación
sidebar_position: 3
description: Estructura del menú lateral de ConsulPoint y visibilidad de módulos según rol.
---

# Navegación

<PageHero eyebrow="Introducción" highlights={['Menú lateral persistente', 'Visibilidad según rol', 'Español · English']}>
  La plataforma se organiza mediante un **menú lateral persistente** que da acceso directo a cada módulo de ConsulPoint.
</PageHero>

<MenuIllustration
  active="Inicio"
  caption="Estructura de la interfaz: menú lateral y barra superior"
  main={[
    { icon: 'dashboard', label: 'Inicio' },
    { icon: 'chat', label: 'Conversaciones' },
    { icon: 'articles', label: 'Artículos y novedades' },
    { icon: 'knowledge', label: 'Centro de Conocimiento' },
    { icon: 'contacts', label: 'Contactos' },
  ]}
  section="Fijados"
  workspace="Mi organización"
  footer={[
    { icon: 'studio', label: 'Estudio' },
    { icon: 'store', label: 'Catálogo de integraciones' },
    { icon: 'reports', label: 'Auditoría y Reportes' },
    { icon: 'settings', label: 'Configuración' },
  ]}
/>

## Módulos del menú

El menú lateral se divide en dos bloques: en la parte superior, los módulos de uso diario; en la inferior, los de creación y administración.

<ModuleGrid>
  <ModuleCard icon="dashboard" title="Inicio" href="/modulos/inicio">
    Artículos destacados, aplicaciones, accesos rápidos y conversaciones recientes.
  </ModuleCard>
  <ModuleCard icon="chat" title="Conversaciones" href="/modulos/conversaciones">
    Interacción con los agentes.
  </ModuleCard>
  <ModuleCard icon="articles" title="Artículos y novedades" href="/modulos/articulos-y-novedades">
    Contenido interno.
  </ModuleCard>
  <ModuleCard icon="knowledge" title="Centro de Conocimiento" href="/modulos/centro-de-conocimiento">
    Gestión documental.
  </ModuleCard>
  <ModuleCard icon="contacts" title="Contactos">
    Personas y entidades con las que se relaciona la organización, por ejemplo los contactos de WhatsApp o Telegram.
  </ModuleCard>
  <ModuleCard icon="studio" title="Estudio" href="/modulos/estudio">
    Creación y configuración de agentes.
  </ModuleCard>
  <ModuleCard icon="store" title="Catálogo de integraciones" href="/organizacion/catalogo-de-aplicaciones">
    Aplicaciones y conectores instalables.
  </ModuleCard>
  <ModuleCard icon="reports" title="Auditoría y Reportes" href="/control/auditoria-y-reportes">
    Consumo de créditos y actividad de los usuarios.
  </ModuleCard>
  <ModuleCard icon="settings" title="Configuración" href="/control/configuracion">
    Administración de la organización.
  </ModuleCard>
</ModuleGrid>

### Fijados

La sección **Fijados** reúne las aplicaciones ancladas a la barra lateral para acceder a ellas rápidamente. Cada usuario puede anclar las suyas y los administradores pueden anclarlas para toda la organización. Se gestiona desde **Configuración → Personalización → Barra lateral**.

## Barra superior

La barra superior da acceso a los elementos que acompañan a cualquier módulo:

<ModuleGrid>
  <ModuleCard icon="workspaces" title="Espacios de trabajo" href="/modulos/espacios-de-trabajo">
    Selector para cambiar de organización o espacio de trabajo.
  </ModuleCard>
  <ModuleCard icon="inbox" title="Bandeja Inteligente" href="/modulos/bandeja-inteligente">
    Correo de las cuentas conectadas, con reglas y análisis con IA. Visible para quien tiene permiso sobre ella.
  </ModuleCard>
  <ModuleCard icon="notifications" title="Notificaciones">
    Avisos de la plataforma.
  </ModuleCard>
  <ModuleCard icon="help" title="Ayuda y documentación">
    Abre esta documentación en una pestaña nueva.
  </ModuleCard>
  <ModuleCard icon="user" title="Menú de usuario">
    Configuración de la cuenta, preferencias (modo oscuro e idioma) y cerrar sesión.
  </ModuleCard>
</ModuleGrid>

:::info Visibilidad condicionada
El menú muestra únicamente los módulos habilitados para la organización y permitidos por el rol del usuario. Un menú incompleto no indica un error.
:::

## Idioma

La interfaz está disponible en **español e inglés**. El idioma se cambia desde el **menú de usuario**, en la esquina superior derecha.

{/* Captura del selector de idioma en el perfil: guardar el archivo en static/img/navegacion/ y descomentar.
<Screenshot src="/img/navegacion/selector-idioma.png" alt="Selector de idioma en el perfil de usuario" caption="Cambio de idioma desde el perfil" />
*/}
