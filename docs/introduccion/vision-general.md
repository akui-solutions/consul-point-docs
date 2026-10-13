---
id: vision-general
title: Visión general de la plataforma
sidebar_label: Visión general
sidebar_position: 1
description: Arquitectura funcional de ConsulPoint y relación entre sus cuatro capas.
---

**ConsulPoint es una plataforma de productividad empresarial de nueva generación, diseñada con la inteligencia artificial en el centro**. Reúne conocimiento, agentes, comunicaciones, aplicaciones y automatizaciones en un entorno gobernado para resolver las necesidades diarias de empleados y operarios.

Se integra con los ERP, CRM, CMS y demás sistemas que la organización ya utiliza, y permite incorporar aplicaciones ágiles y específicas que aprovechan sus datos y funciones. Estas herramientas pueden complementar los procesos existentes y sustituir progresivamente determinadas funcionalidades cuando resulte conveniente, al ritmo de cada organización.

Su arquitectura es modular. Cada capacidad puede utilizarse de forma independiente, pero el mayor valor aparece cuando **conocimiento, agentes, canales de comunicación, Enterprise Apps, conectores, integraciones y automatizaciones** trabajan de forma conjunta bajo un mismo modelo de permisos, trazabilidad, supervisión y control.

## Seguridad y Aislamiento de datos

La **organización** es el ámbito principal de aislamiento, administración y control dentro de ConsulPoint.

Todos los recursos creados o gestionados en la plataforma pertenecen a una organización concreta. Esto incluye, entre otros:

- usuarios;
- documentos y conocimiento;
- agentes y especialistas;
- conversaciones;
- Enterprise Apps;
- conectores e integraciones;
- configuraciones;
- espacios de trabajo;
- registros de auditoría.

Los recursos de una organización no forman parte del entorno de otras organizaciones.

Dentro de una misma organización, el acceso a la información y a las capacidades puede restringirse adicionalmente mediante roles, permisos, espacios de trabajo y los permisos asignados a cada recurso.

En el caso de las Apps y las conversaciones con IA, la versión Enterprise incorpora, mediante Advanced Control, una revisión más profunda de los permisos, las capacidades autorizadas y las políticas aplicables. El acceso efectivo y las acciones permitidas dependen tanto de los permisos del usuario como de las capacidades autorizadas para la aplicación o el agente de IA, siempre bajo las políticas de la organización.

Advanced Control permite que organizaciones con requisitos estrictos de control se acerquen a la agilidad de una startup para adoptar IA y desplegar aplicaciones, manteniendo sus estándares de seguridad y gobierno. Para ello, automatiza las verificaciones y aprobaciones dentro de los límites previamente autorizados y deriva a revisión adicional las solicitudes que los exceden.

De forma conceptual:

```text
Acceso efectivo = Permisos del usuario ∩ Permisos del recurso o aplicación ∩ Políticas de la organización
```
