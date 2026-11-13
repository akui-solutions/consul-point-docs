---
id: configuracion-overview
title: Configuración
sidebar_label: Configuración
sidebar_position: 1
slug: /control/configuracion
description: "Las secciones de Configuración de ConsulPoint: acceso, organización, suscripción, IA e integraciones, datos, personalización y herramientas para desarrolladores, y quién ve cada una."
---

# Configuración

<PageMeta route="/settings">depende de cada sección; varias son solo para administradores</PageMeta>

Configuración reúne los ajustes de la organización: quién tiene acceso, el plan, los canales y modelos de IA, los datos de clasificación y las herramientas para desarrolladores. Se abre desde **Configuración**, al final del menú lateral.

<Screenshot src="/img/configuracion/configuracion.png" alt="Pantalla de Configuración en ConsulPoint, con el menú de secciones a la izquierda" caption="Configuración, sección Usuarios" />

Cada persona ve solo las secciones que su rol le permite, y al entrar se abre la primera de ellas. Configuración existe solo en la organización principal: dentro de un espacio de trabajo no está disponible.

## Secciones

Las secciones están agrupadas igual que en la plataforma. En la columna **Quién la ve**, «permiso sobre…» significa permiso de ver ese módulo en el rol; además, el módulo tiene que estar incluido en el plan de la organización. Ver [Matriz de permisos](/referencia/permisos).

### Administración

| Sección | Para qué sirve | Quién la ve |
|---|---|---|
| **Acceso → Usuarios** | Invitar personas, cambiar su rol y activarlas o desactivarlas. Ver [Usuarios](/organizacion/usuarios) | Administradores |
| **Acceso → Roles** | Definir qué puede hacer cada rol en cada módulo. Ver [Roles](/organizacion/roles) | Administradores |
| **Acceso → Equipos** | Agrupar personas para asignarlas juntas, por ejemplo a una integración. Ver [Equipos](/organizacion/equipos) | Administradores con permiso sobre **Equipos** |
| **Organización** | Nombre, logo y descripción de la organización. Ver [Organización](/organizacion/datos-de-la-organizacion) | Permiso sobre **Organización** |
| **Suscripción** | El plan, los créditos y la solicitud de un plan nuevo. Ver [Suscripción](/organizacion/suscripcion) | Administradores |

### IA e integraciones

| Sección | Para qué sirve | Quién la ve |
|---|---|---|
| **Proveedores de IA** | Los modelos de IA disponibles y los propios de la organización, si el plan los incluye. Ver [Proveedores de IA](/organizacion/proveedores-de-ia) | Administradores |
| **Conectores** | Los canales (WhatsApp, Telegram, correo, aplicaciones externas) y las herramientas externas para los agentes. Ver [Integraciones y canales](/modulos/integraciones) y [Conectores](/organizacion/conectores) | Administradores |
| **Reglas de correo** | Qué correos procesa la Bandeja Inteligente. Ver [Reglas de correo](/bandeja-inteligente/reglas-de-correo) | Permiso sobre **Bandeja Inteligente** |
| **Aplicaciones** | Las aplicaciones integradas instaladas y las propias. Ver [Instalar y administrar](/aplicaciones-integradas/instalar-y-administrar) | Permiso sobre **Aplicaciones** |

### Datos

| Sección | Para qué sirve | Quién la ve |
|---|---|---|
| **Tipos de contacto** | Clasificar las personas y entidades de Contactos. Ver [Tipos de contacto](/organizacion/tipos-de-contacto) | Permiso sobre **Contactos** |
| **Etiquetas** | Clasificar personas, entidades y habilidades. Ver [Etiquetas](/organizacion/etiquetas) | Permiso sobre **Etiquetas** |

### Personalización

| Sección | Para qué sirve | Quién la ve |
|---|---|---|
| **Barra lateral** | Las aplicaciones fijadas en el menú lateral. Ver [Barra lateral](/organizacion/barra-lateral) | Permiso sobre **Elementos fijados** y **Aplicaciones** |

### Desarrolladores

| Sección | Para qué sirve | Quién la ve |
|---|---|---|
| **Claves de API** | Claves para consultar los agentes desde otro sistema. Ver [Claves de API](/organizacion/claves-de-api) | Permiso sobre **Claves de API** |
| **Webhooks** | Avisos automáticos a sistemas externos. Ver [Webhooks](/control/webhooks) | Permiso sobre **Webhooks** |

### Acerca de

Al final del menú, para todas las personas. Muestra la fecha de lanzamiento y las versiones de la plataforma, quién la desarrolla, el correo de soporte (si ConsulPoint lo ha configurado) y los enlaces a **Términos y Condiciones** y **Política de Privacidad**.
