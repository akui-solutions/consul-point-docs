---
id: problemas-frecuentes
title: Problemas frecuentes de la Bandeja Inteligente
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
| No aparece un lector al configurar el análisis | Solo se ofrecen los microagentes de tipo **Lector de correo** que estén activos |
| No se puede elegir **Lector de correo** | Primero hay que elegir la **Carpeta para los resultados** |
| Un lector aparece deshabilitado | No encaja con la carpeta: tiene un esquema y el lector es de **Resumen**, o la carpeta ya guarda el otro tipo de resultado. Elegir otro lector u otra carpeta |
| La carpeta para los resultados da error | No debe ser de extracción inteligente y hay que poder escribir en ella |
| La regla aparece con **Sin carpeta** | Tiene lector pero no carpeta, así que no analiza correos. Editarla y elegir una carpeta |

## Adjuntos

| Síntoma | Causa y solución |
|---|---|
| Los adjuntos de los correos nuevos no se guardan | No se guardan solos. Usar **Procesar adjuntos** en la regla |
| Falta un adjunto | Su tipo no está en **Tipos de archivo** de la regla, o pasa de 25 MB |
| **Error al guardar los adjuntos** | Repetir con **Procesar adjuntos**. Si persiste, revisar que la carpeta exista y el espacio de almacenamiento de la suscripción |

## Análisis con IA

| Síntoma | Causa y solución |
|---|---|
| Los correos nuevos no tienen análisis | El análisis no es automático. Analizarlos uno a uno o con **Analizar pendientes** |
| **Analizar pendientes** no procesa todos | Analiza hasta 50 por ejecución. Pulsar **Procesar de nuevo** |
| Se detuvo por falta de créditos | Revisar el consumo y los créditos disponibles con **Ver consumo** |
| **No se puede analizar este correo** | La regla no tiene carpeta para los resultados, la carpeta ya no existe o la regla está desactivada. El panel lleva a la regla para corregirlo |
| La respuesta del lector quedó incompleta | La respuesta era demasiado larga. Pedirle menos datos en sus instrucciones; volver a analizar sin cambiarlo consume créditos y suele fallar igual |
| Un resumen aparece como **Pendiente de guardar** | Es anterior a que la carpeta fuera obligatoria. Guardarlo con **Guardar en la carpeta de la regla** o **Guardar en el Centro de conocimiento…** |
| **Análisis previo** junto al análisis | Lo generó otra regla o un intento anterior, y no está en la carpeta de esta regla. **Guardar con esta regla** lo guarda en ella |
