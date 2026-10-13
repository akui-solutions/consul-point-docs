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
  <ModuleCard icon="dashboard" title="Inicio" module="Dashboard" href="/modulos/inicio">
    Novedades destacadas, calendario, accesos a las aplicaciones y conversaciones recientes.
  </ModuleCard>
  <ModuleCard icon="chat" title="Conversaciones" module="Chat" href="/modulos/conversaciones">
    Interacción con los agentes.
  </ModuleCard>
  <ModuleCard icon="articles" title="Artículos y novedades" module="Resources" href="/modulos/articulos-y-novedades">
    Contenido interno.
  </ModuleCard>
  <ModuleCard icon="knowledge" title="Centro de Conocimiento" module="Knowledge Hub" href="/modulos/centro-de-conocimiento">
    Gestión documental.
  </ModuleCard>
  <ModuleCard icon="contacts" title="Contactos">
    Personas y entidades con las que se relaciona la organización.
  </ModuleCard>
  <ModuleCard icon="studio" title="Estudio" module="Studio" href="/modulos/estudio">
    Creación y configuración de agentes.
  </ModuleCard>
  <ModuleCard icon="store" title="Catálogo de integraciones" module="Store" href="/organizacion/catalogo-de-aplicaciones">
    Aplicaciones y conectores instalables.
  </ModuleCard>
  <ModuleCard icon="reports" title="Auditoría y Reportes" module="Consumption" href="/control/auditoria-y-reportes">
    Consumo de créditos y actividad de los usuarios.
  </ModuleCard>
  <ModuleCard icon="settings" title="Configuración" module="Settings" href="/control/configuracion">
    Administración de la organización.
  </ModuleCard>
</ModuleGrid>

### Fijados

La sección **Fijados** reúne las aplicaciones ancladas a la barra lateral para acceder a ellas rápidamente. Cada usuario puede anclar las suyas y los administradores pueden anclarlas para toda la organización. Se gestiona desde **Configuración → Personalización → Barra lateral**.

## Barra superior

La barra superior da acceso a los elementos que acompañan a cualquier módulo:

<ModuleGrid>
  <ModuleCard icon="workspaces" title="Espacios de trabajo" module="Workspaces" href="/modulos/complementos/portal/espacios-de-trabajo">
    Selector para cambiar de organización o espacio de trabajo.
  </ModuleCard>
  <ModuleCard icon="inbox" title="Bandeja Inteligente" module="Smart Inbox" href="/modulos/bandeja-inteligente">
    Correo con procesamiento automático. Visible si el módulo está habilitado.
  </ModuleCard>
  <ModuleCard icon="notifications" title="Notificaciones">
    Avisos de la plataforma.
  </ModuleCard>
  <ModuleCard icon="user" title="Menú de usuario">
    Preferencias personales, como el modo oscuro y el idioma.
  </ModuleCard>
</ModuleGrid>

<Callout type="info" title="Visibilidad condicionada">
  El menú muestra únicamente los módulos habilitados para la organización y permitidos por el rol del usuario. Un menú incompleto no indica un error.
</Callout>

## Idioma

La interfaz está disponible en **español e inglés**. El idioma se cambia desde el **menú de usuario**, en la esquina superior derecha.

{/* Captura del selector de idioma en el perfil: guardar el archivo en static/img/navegacion/ y descomentar.
<Screenshot src="/img/navegacion/selector-idioma.png" alt="Selector de idioma en el perfil de usuario" caption="Cambio de idioma desde el perfil" />
*/}
