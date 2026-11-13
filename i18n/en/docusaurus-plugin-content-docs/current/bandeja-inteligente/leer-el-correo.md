---
id: leer-el-correo
title: Read email
sidebar_label: Read email
sidebar_position: 3
description: How to search, filter and read emails in the ConsulPoint Smart Inbox, and what each icon means.
---

# Read email

<PageMeta route="/smart-inbox" />

The Smart Inbox shows the email of the chosen account as it is in the provider (Gmail, Outlook or IMAP), with added information: which rule captured each email and whether its attachments or its analysis have already been saved.

The platform does not keep a copy of the emails: it reads them from the account each time.

:::warning Opening an email marks it as read
When you open an email in the Smart Inbox, it is also marked as read in the email account (Gmail, Outlook…).
:::

## The screen {#la-pantalla}

| Element | What it does |
|---|---|
| **Account selector** | In the header. Changes the email account shown |
| **Search inbox...** | Searches the account's emails, with suggestions as you type |
| **Refresh** | Checks the account again |
| **Split view** / **List view** | List and email side by side, or just the list |
| **Show AI panel** | Opens the panel with the analysis of the selected email. See [AI analysis](/bandeja-inteligente/analisis-con-ia) |
| **Rule selector** | Above the list. Shows **All rules** or only the emails a rule captures |

The list shows 25 emails per page (you can change it to 10, 50 or 100).

## Filters {#filtros}

Quick-access chips below the search box:

| Filter | Available in |
|---|---|
| **Unread** | All accounts |
| **With attachments** | Gmail and Outlook |
| **Starred** (in Outlook, **Flagged**) | Gmail and Outlook |
| **Last 7 days** | Gmail |

**Search options**, in the search box, lets you filter by **From**, **To**, **Subject**, **Label** and **Date range** (these two, Gmail only), as well as attachments, starred and unread. It is not available for IMAP accounts.

Active filters are shown as chips that you can remove one by one, or all at once with **Clear filters**.

## Icons on each email {#iconos-de-cada-correo}

Next to each email there are icons showing what has been done with it. Hover over them to see the details:

| Icon | Meaning |
|---|---|
| **Filter rule** | The rule that captured the email (only with **All rules**) |
| **Attachments saved** | The attachments were saved to the rule's folder |
| **Failed to save the attachments** | They could not be saved. You can try again from the rule with **Process attachments** |
| **Analyzing…** / **Analyzed and saved** / **Analysis failed** | The status of the AI analysis |
| **Saved to the Knowledge Hub** | The AI-generated document is already in a folder |

The sparkles button on each row analyzes the email with AI. It only appears on emails captured by a rule that do not have an analysis yet.

## View an email {#ver-un-correo}

When you open an email, you see the subject, sender, recipients, the rule that captured it, its Gmail labels and the content. The arrows in the header move to the previous or next email.

- Links in the email ask for confirmation before opening.
- **Attachments** are listed with their name and size. To save them to the Knowledge Hub you need a [rule](/bandeja-inteligente/reglas-de-correo) with **Save attachments to the Knowledge Hub**.

The Smart Inbox does not reply to, forward, move or delete emails.
