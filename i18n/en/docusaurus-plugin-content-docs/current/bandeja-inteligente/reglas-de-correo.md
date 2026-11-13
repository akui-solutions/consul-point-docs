---
id: reglas-de-correo
title: Email rules
sidebar_label: Email rules
sidebar_position: 4
description: How to create email rules in the ConsulPoint Smart Inbox to capture emails, save their attachments and analyze them with AI.
---

# Email rules

<PageMeta route="/settings/smart-inbox/rules">the relevant one on **Smart Inbox**</PageMeta>

A rule says **which emails** from an account matter and **what to do** with them: save their attachments to the Knowledge Hub, analyze them with AI, or both. For example: "emails from `invoices@supplier.com` with 'invoice' in the subject: save the PDF to the Invoices folder and extract the data".

Rules are managed in **Settings → Email rules**.

<Screenshot src="/img/en/bandeja-inteligente/reglas-de-correo.png" alt="List of email rules in ConsulPoint settings" caption="Email rules" />

## Create a rule {#crear-una-regla}

1. Click **Create rule**.
2. Fill in the sections (see below).
3. Click **Save rule**.

At the bottom of the form, **Rule summary** explains in one sentence what the rule will do with the chosen settings.

### Name and priority {#nombre-y-prioridad}

| Field | Description |
|---|---|
| **Rule name** | Required, between 3 and 100 characters |
| **Priority** | **Highest**, **High**, **Medium** (default), **Low** or **Lowest** |
| **Description (optional)** | Up to 500 characters |

If an email matches several rules, the one with the highest priority applies.

### Mailbox {#buzón}

| Field | Description |
|---|---|
| **Account** | Required. The email account the rule reads. It cannot be changed later: for another account, create another rule |
| **Capture emails since** | Date from which emails are captured. Empty: no date limit |

### Criteria {#criterios}

| Criterion | Example |
|---|---|
| **Subject keywords** | `invoice`, `order` |
| **Sender emails** | `invoices@supplier.com` |
| **Sender domains** | `supplier.com` (includes its subdomains) |

Add each value by pressing Enter or a comma.

- An email is captured if it meets **all** the criteria you filled in.
- Within a criterion, it is enough for **one** of the values to match.
- Senders and domains count as a single criterion: it is enough for one of the two to match.
- Matching is not case-sensitive. Keywords match even when they are part of another word.
- With no criteria, the rule captures every email in the mailbox.

### What to do with the emails {#qué-hacer-con-los-correos}

**Save attachments to the Knowledge Hub**

| Field | Description |
|---|---|
| **Folder for attachments** | Required with this option. Your own folder or one shared with you with edit permission |
| **File types (optional)** | PDF, DOCX, XLSX, CSV, TXT, PNG, JPG. With none selected, all are saved |

Each attachment can be up to 25 MB.

**Analyze with AI**

| Field | Description |
|---|---|
| **Micro-agent (optional)** | A [micro-agent](/control/estudio/microagentes) of type **Mail Reader** or **Email to Markdown**. Empty: no analysis |
| **Summaries folder** | Only with a **Mail Reader**. A summary file is saved here for each analyzed email, in monthly subfolders |

Analysis uses credits. See [AI analysis](/bandeja-inteligente/analisis-con-ia) for the difference between the two types.

:::info Summaries folder requirements
It must be a folder you can write to and that is not a [Smart Extract](/centro-de-conocimiento/extraccion-inteligente) folder. The micro-agent must use a Google model.
:::

## Save attachments from existing emails {#guardar-los-adjuntos-de-correos-que-ya-existen}

When you save a rule with attachments, the platform asks **Save attachments of existing emails now?**:

- **Save attachments now** goes through all the account's emails that match the rule and saves their attachments. It runs in the background.
- **Not now** creates the rule without processing anything.

You can repeat this at any time from the rule list, with **Process attachments**. Attachments the rule has already saved are not duplicated.

## Manage rules {#gestionar-las-reglas}

The list shows, for each rule, the account, criteria, attachments folder, AI analysis, priority and status. Each rule's menu lets you:

| Action | What it does |
|---|---|
| **View details** | All the settings and the **Manual processing** of the AI analysis |
| **Edit** | Changes the rule, except the account |
| **Process attachments** | Saves the attachments of the emails that match the rule |
| **Deactivate** / **Activate** | A deactivated rule stops capturing and processing emails until it is activated again |
| **Delete** | Deletes the rule. This cannot be undone |

## Best practices {#buenas-prácticas}

:::tip Rules that work
- One rule per type of email: invoices, orders, incidents. Each one with its own folder.
- Specific criteria (sender or domain) rather than loose keywords, which capture more than they should.
- A date in **Capture emails since** so you don't process years of old email.
- Test the rule with the Smart Inbox rule selector before saving attachments or analyzing in bulk.
:::
