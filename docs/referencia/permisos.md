---
id: permisos
title: Matriz de permisos
sidebar_label: Matriz de permisos
sidebar_position: 2
description: Los módulos que controla cada rol en ConsulPoint, con el nombre que tienen en la pantalla de roles, y las secciones que exigen ser administrador.
---

# Matriz de permisos

Qué controla cada permiso de un [rol](/organizacion/roles) y qué secciones exigen, además, ser administrador.

## Módulos

En la pantalla de permisos de un rol, cada módulo tiene cuatro permisos: **Ver**, **Crear**, **Editar** y **Eliminar**. Sin **Ver**, el módulo no aparece en el menú.

| Nombre en la pantalla de roles | Corresponde a |
|---|---|
| **Inicio** | [Inicio](/modulos/inicio) |
| **Conversaciones** | [Conversaciones](/modulos/conversaciones) |
| **Recursos** | [Artículos y novedades](/modulos/articulos-y-novedades) |
| **Centro de conocimiento** | [Centro de Conocimiento](/modulos/centro-de-conocimiento) |
| **Bandeja Inteligente** | [Bandeja Inteligente](/modulos/bandeja-inteligente) y sus [Reglas de correo](/bandeja-inteligente/reglas-de-correo) |
| **Estudio** | [Estudio](/modulos/estudio): agentes, especialistas y microagentes |
| **Biblioteca de esquemas** | [Biblioteca de esquemas](/control/estudio/esquemas-de-datos) del Estudio |
| **Habilidades** | [Habilidades](/control/estudio/habilidades) del Estudio y su pestaña en el Catálogo de integraciones |
| **Contactos** | Contactos y **Configuración → Tipos de contacto** |
| **Etiquetas** | **Configuración → Etiquetas** |
| **Espacios de trabajo** | [Espacios de trabajo](/modulos/espacios-de-trabajo) |
| **Aplicaciones** | [Aplicaciones integradas](/aplicaciones-integradas/instalar-y-administrar) |
| **Elementos fijados** | Los elementos fijados del menú lateral (**Configuración → Barra lateral**) |
| **Atajos** | Los accesos rápidos de [Inicio](/modulos/inicio) |
| **Integraciones** | Los canales de [Integraciones y canales](/modulos/integraciones) |
| **Conectores** | Los [conectores](/organizacion/conectores): herramientas externas para los agentes |
| **Webhooks** | [Webhooks](/control/webhooks) |
| **Claves de API** | **Configuración → Claves de API** |
| **Usuarios** | [Usuarios](/organizacion/usuarios) |
| **Equipos** | [Equipos](/organizacion/equipos) |
| **Organización** | [Organización](/organizacion/datos-de-la-organizacion) |
| **Auditoría y reportes** | [Auditoría y Reportes](/control/auditoria-y-reportes) |

## Secciones solo para administradores

Estas secciones de Configuración solo las ve el rol **Administrador**, aunque otro rol tenga permisos sobre el módulo:

| Sección | Además |
|---|---|
| [Usuarios](/organizacion/usuarios) | Permiso de ver **Usuarios** |
| [Roles](/organizacion/roles) | — |
| [Equipos](/organizacion/equipos) | Permiso de ver **Equipos** |
| [Suscripción](/organizacion/suscripcion) | — |
| [Proveedores de IA](/organizacion/proveedores-de-ia) | — |
| [Conectores](/modulos/integraciones) (integraciones y conectores) | Permiso de ver **Integraciones** o **Conectores** |

El rol **Administrador** tiene todos los permisos y no se puede editar.

:::note Disponibilidad efectiva
Un permiso solo tiene efecto si el módulo está incluido en el plan de la organización. Una persona con permisos sobre un módulo no contratado no lo verá en el menú.
:::
