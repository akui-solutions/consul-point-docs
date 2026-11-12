---
id: problemas-frecuentes
title: Problemas frecuentes
sidebar_label: Problemas frecuentes
sidebar_position: 6
description: Soluciones a los problemas más habituales de la Bandeja Inteligente de ConsulPoint.
---

# Problemas frecuentes

## Acceso y cuentas

| Síntoma | Causa y solución |
|---|---|
| No aparece el icono de la Bandeja Inteligente | El rol no tiene permiso sobre ella. Con los roles predeterminados, solo los administradores |
| **No hay cuentas de correo conectadas** | Conectar una cuenta en **Configuración → Conectores**. Ver [Conectar una cuenta](/bandeja-inteligente/conectar-una-cuenta) |
| No aparece una cuenta que sí está conectada | La cuenta es **Privada** y está asignada a otro usuario, o está inactiva |
| **No se pudieron cargar los correos** | Falló la conexión con la cuenta. Pulsar **Reintentar** y, si persiste, revisar la cuenta en **Configuración → Conectores** |
| No se puede conectar una cuenta IMAP | **Probar conexión** debe dar **Conexión verificada**. Revisar el servidor, el puerto y, en Yahoo o iCloud, usar una contraseña de aplicación |
| La Bandeja Inteligente no aparece dentro de un espacio de trabajo | Solo está disponible en la organización principal |

## Reglas

| Síntoma | Causa y solución |
|---|---|
| Un correo no aparece al filtrar por una regla | No cumple todos los criterios, o es anterior a **Capturar correos desde** |
| La regla captura demasiados correos | Las palabras clave coinciden aunque formen parte de otra palabra. Usar remitentes o dominios, o palabras más específicas |
| No aparece un microagente al configurar el análisis | Solo se ofrecen los de tipo **Lector de correo** y **Email a Markdown** que estén activos |
| No se puede elegir **Carpeta de resúmenes** | Solo está disponible con un **Lector de correo** |
| La carpeta de resúmenes da error | No debe ser de extracción inteligente, hay que poder escribir en ella y el microagente debe usar un modelo de Google |

## Adjuntos

| Síntoma | Causa y solución |
|---|---|
| Los adjuntos de los correos nuevos no se guardan | No se guardan solos. Usar **Procesar adjuntos** en la regla |
| Falta un adjunto | Su tipo no está en **Tipos de archivo** de la regla, o pasa de 25 MB |
| **Error al guardar los adjuntos** | Repetir con **Procesar adjuntos**. Si persiste, revisar que la carpeta exista y el espacio de almacenamiento del plan |

## Análisis con IA

| Síntoma | Causa y solución |
|---|---|
| Los correos nuevos no tienen análisis | El análisis no es automático. Analizarlos uno a uno o con **Analizar pendientes** |
| **Analizar pendientes** no procesa todos | Analiza hasta 50 por ejecución. Pulsar **Procesar de nuevo** |
| Se detuvo por falta de créditos | Revisar el consumo y los créditos disponibles con **Ver consumo** |
| El análisis se muestra pero no se guarda | La regla no tiene **Carpeta de resúmenes**, o la carpeta ya no existe |
| **Análisis previo** junto al análisis | Lo generó otra regla o un intento anterior, y no está en la carpeta de esta regla. **Guardar con esta regla** lo guarda en ella |
