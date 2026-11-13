---
id: problemas-frecuentes
title: Common issues with Integrated apps
sidebar_label: Common issues
sidebar_position: 8
description: Symptoms, causes and solutions for the most common issues when developing, publishing or using ConsulPoint integrated apps.
---

# Common issues

Common issues, ordered by when they appear. Each row gives the symptom, the most likely cause and the solution.

## When opening the app {#al-abrir-la-aplicación}

| Symptom | Cause | Solution |
|---|---|---|
| The frame stays blank | The package has no `index.html` at the root, or a style or code file cannot be found | Check the ZIP contents and that the references in `index.html` start with `/`, not `./`. See [Publish](/aplicaciones-integradas/publicar) |
| When reading a file, the browser responds "Failed to fetch" | File storage does not accept requests from the apps' domain | Contact ConsulPoint support |
| An app-not-available message appears | It is a draft, deactivated or has no published version | Activate it and check the **Versions** tab |
| "This application is no longer available" | The publisher removed it from the catalog | Uninstall it from **Installed** |
| It works in **Preview** but does not appear in Home or in Conversations | Its type does not match that place | See [Where they appear](/aplicaciones-integradas/donde-aparecen) |
| The **App view** tab does not appear on a file | The file has no extraction yet, or the folder has no app assigned | Check the folder's **Smart Extract** |
| Opened directly in the browser, it loads no data | Outside ConsulPoint it gets no session | Always open it from the platform |

## While it is in use {#mientras-se-usa}

| Symptom | Cause | Solution |
|---|---|---|
| After half an hour, actions stop working | The app does not renew its session | Implement the renewal. See [Calling the API](/aplicaciones-integradas/desarrollar/api-y-sesion) |
| A feature responds "no permission" | The app has not been granted that resource, or the person has no access through their role | Check the **Permissions** tab and the user's role |
| A newly granted permission has no effect | Permissions take a while to apply | Wait up to 5 minutes |
| A link opens nothing | The app tries to open a tab on its own | Use `OPEN_URL`. See [Communicating with the platform](/aplicaciones-integradas/desarrollar/comunicacion) |
| A file cannot be read inside the app, although it can be downloaded | The link expired or was opened with headers | Request a new link and open it without headers |
| The platform does not reflect a change made in the app | The change was not announced | Send `INVALIDATE_TAGS` |
| The app restarts when the language, theme or folder changes | This is the expected behavior | Save on the platform whatever must be kept |
| Saved data disappears | It was saved in the browser, or the app was uninstalled | Save it in [data models](/aplicaciones-integradas/desarrollar/datos-propios) |

## When saving data {#al-guardar-datos}

| Symptom | Cause | Solution |
|---|---|---|
| Error saving to a model | The model does not exist yet | Create it in the **Models** tab before using it |
| `409` when updating | Someone else modified the record | Read it again and repeat the change |
| `422` when saving | The record does not match the schema | Check the fields the response points out |
| `400` when updating | The record version (`_rev`) is missing | Send the one you got when reading it |

## When publishing {#al-publicar}

| Symptom | Cause | Solution |
|---|---|---|
| The version ends up **Failed** | The package contains an unsupported file or exceeds a limit | Check the [package rules](/aplicaciones-integradas/publicar) |
| The new version is **Published** but you still see the previous one | The browser keeps files for a few minutes | Reload the app after 5 minutes |
| A version with a lower number replaces the current one | The latest one published by date is always used | Publish the correct version again |
| **Publish version** does not appear | The app is **Installed**, or permission on **Apps** is missing | The versions of an installed app are published by whoever created it |
| Organizations do not get the new catalog version | Each organization decides when to update | Click **Update** in **Installed** |

## When to ask for help {#cuándo-pedir-ayuda}

If the problem is not listed here, gather the following before contacting support:

- the app's name and version;
- the place it was opened from;
- what was expected and what happened;
- the approximate time, to find the case in the activity.
