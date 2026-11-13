---
id: donde-aparecen
title: Where they appear
sidebar_label: Where they appear
sidebar_position: 3
description: Places in ConsulPoint where an integrated app is shown depending on its type, and what to set up in each one.
---

# Where they appear

The same app can be opened from several places in ConsulPoint. The app's **type** determines where it is offered, and each place hands it a different context.

## App types {#tipos-de-aplicación}

| Type | Meant for | Offered in |
|---|---|---|
| **Extension** | General-purpose work tools | Home, Knowledge Hub folders and the Conversations side panel |
| **Viewer** | Showing the data extracted from a file | Knowledge Hub file preview |
| **Filter** | Processing or filtering content | Its own page and the sidebar |

Any app, whatever its type, can be opened on its own page and pinned to the sidebar.

## Places {#lugares}

| Place | Which apps it shows | What to set up |
|---|---|---|
| **App page** | All | Nothing. It opens with **Open** from the catalog or with **Open app** from **Settings → Apps** |
| **Sidebar** | The pinned ones | **Settings → Sidebar → Pin item**. Visible **Only for me** or **For everyone** (this option, administrators only). Up to 10 items |
| **Home**, **My Applications** widget | Extensions | Nothing |
| **Knowledge Hub folder**, side panel | Extensions assigned to the folder | In the folder, **Manage apps**. Up to 7 per folder |
| **File preview**, **App view** tab | The folder's viewer | In the folder, turn on **Smart Extract** and choose **App (optional)**. One per folder |
| **Conversations**, side panel | Active extensions | Nothing |
| **Settings → Apps**, **Preview** tab | The app you are viewing | Nothing. Only available if it is active |

:::info App view tab
The tab only appears when the file already has a data extraction. See [Knowledge Hub](/modulos/centro-de-conocimiento).
:::

## What the app receives in each place {#qué-recibe-la-aplicación-en-cada-lugar}

Besides the language, the theme and its session, the app receives data about the place where it was opened:

| Place | Additional data |
|---|---|
| App page and sidebar | None |
| Home | The app's identifier |
| Knowledge Hub folder | Open folder |
| File preview | Extraction of the file on screen |
| Conversations | Open conversation and whether automatic responses are on |

The technical details are in [Context it receives](/aplicaciones-integradas/desarrollar/contexto).

## Usage guidelines {#criterio-de-uso}

:::tip Choosing the type
Use **Extension** unless the app exists only to show the data extracted from a file, in which case **Viewer** is the right one.
:::

:::warning One app at a time
The platform shows only one integrated app at a time. Opening another closes the previous one, which loses anything not saved.
:::
