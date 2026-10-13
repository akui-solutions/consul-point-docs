---
id: intro
title: Documentación de ConsulPoint
sidebar_label: Inicio
sidebar_position: 1
slug: /
description: Guía de referencia completa de ConsulPoint, la plataforma empresarial de inteligencia artificial para crear, desplegar y gobernar agentes, conocimiento, automatizaciones y aplicaciones integradas.
---

import Link from '@docusaurus/Link';

Bienvenido a la documentación de **ConsulPoint**, la plataforma empresarial de inteligencia artificial diseñada para conectar agentes, conocimiento, personas, aplicaciones y procesos dentro de una organización.

En esta documentación encontrarás una referencia completa de las capacidades y módulos de la plataforma: qué función cumple cada uno, cómo se configura, cómo interactúa con el resto del sistema y en qué escenarios puede utilizarse.

El objetivo es ofrecer una visión clara tanto funcional como técnica de ConsulPoint, desde la gestión del conocimiento y los agentes de IA hasta las integraciones, automatizaciones, permisos, auditoría y capacidades de gobierno empresarial.

## Por dónde empezar

<!-- markdownlint-disable MD033 -->
<div className="row">
  <div className="col col--6">
    <div className="card margin-bottom--lg">
      <div className="card__header"><h3>🚀 Primeros pasos</h3></div>
      <div className="card__body">
        <p>Si es tu primer contacto con la plataforma, empieza por la visión general y los conceptos fundamentales.</p>
      </div>
      <div className="card__footer">
        <Link className="button button--primary button--block" to="/introduccion/vision-general">Visión general</Link>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card margin-bottom--lg">
      <div className="card__header"><h3>🤖 Crear un agente</h3></div>
      <div className="card__body">
        <p>Ve directamente al módulo Estudio para aprender a crear y configurar tu primer agente de IA.</p>
      </div>
      <div className="card__footer">
        <Link className="button button--secondary button--block" to="/modulos/estudio">Ir al Estudio</Link>
      </div>
    </div>
  </div>
</div>
<!-- markdownlint-enable MD033 -->

## Organización de esta documentación

| Sección                 | Contenido                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Introducción**        | Visión general, conceptos fundamentales y navegación                                                                                      |
| **Módulos**             | Centro de Conocimiento, Conversaciones, Bandeja Inteligente, Apps, y los complementos (Comms, Portal, Automatizaciones, Advanced Control) |
| **Control y Auditoría** | Estudio, Configuración (webhooks, usuarios y roles, integraciones y canales), catálogo de aplicaciones, y auditoría y reportes            |
| **Referencia**          | Campos, permisos, glosario y sistema de diseño                                                                                            |

:::tip La regla de oro
El orden de configuración recomendado es siempre **conocimiento → agente → canal**. Un agente sin conocimiento vinculado responde de forma genérica; un canal sin agente asignado no responde.
:::
