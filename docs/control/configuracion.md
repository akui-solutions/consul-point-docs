---
id: configuracion
title: Configuración
sidebar_label: Configuración
sidebar_position: 2
description: "Administración de la organización en Consul Point: proveedores de IA, almacenamiento, API keys, facturación y planes."
---

# Configuración

**Ruta:** `/settings`
**Permiso requerido:** administrador en la mayoría de secciones

## Secciones

| Sección | Ruta | Contenido |
|---|---|---|
| **Organización** | `/settings/organization` | Datos de la organización |
| **Usuarios** | `/settings/users` | Gestión de personas |
| **Roles** | `/settings/roles` | Permisos por rol |
| **Integraciones** | `/settings/integrations` | Canales de comunicación |
| **Proveedores** | `/settings/providers` | Proveedores de IA |
| **API Keys** | `/settings/apikeys` | Claves de acceso programático |
| **Apps** | `/settings/applications` | Aplicaciones de la organización |
| **Almacenamiento** | `/settings/s3storage` | Almacenamiento en la nube |
| **Webhooks** | `/settings/webhooks` | Notificaciones a sistemas externos |
| **Facturación** | `/settings/billing` | Plan, consumo y pagos |
| **Información** | `/settings/information` | Información del sistema |

## Proveedores de IA

Configuración de los proveedores de modelos disponibles para la organización. Determina qué modelos pueden seleccionarse al crear un agente.

La plataforma admite **OpenAI, Anthropic y Google**.

## Almacenamiento

Permite asociar almacenamiento en la nube propio mediante credenciales y asignación de espacio.

## Facturación

| Vista | Contenido |
|---|---|
| **Resumen** | Estado del plan y consumo |
| **Gestionar plan** | Cambio de plan |
| **Historial** | Facturación anterior |
| **Métodos de pago** | Formas de pago |
| **Bonos** | Créditos disponibles |
| **Preferencias** | Configuración de facturación |

El plan determina los límites de la organización: usuarios, roles, almacenamiento, tokens, agentes, chats y directorios. La plataforma emite avisos al aproximarse a cada umbral.
