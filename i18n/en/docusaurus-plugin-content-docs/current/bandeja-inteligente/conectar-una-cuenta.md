---
id: conectar-una-cuenta
title: Connect an email account
sidebar_label: Connect an account
sidebar_position: 2
description: How to connect a Gmail, Outlook or IMAP account to the ConsulPoint Smart Inbox.
---

# Connect an email account

<PageMeta route="/settings/connectors">administrator</PageMeta>

The Smart Inbox reads email from the accounts connected to the organization. Three types are supported: **Gmail**, **Outlook** (Microsoft) and any account that supports **IMAP** (Yahoo, iCloud, Zoho or your own server).

With no account connected, the Smart Inbox shows **No email accounts connected** and a **Go to Settings** button.

## Gmail or Outlook {#gmail-u-outlook}

1. Go to **Settings → Connectors**.
2. Click **Add integration** → **Email**.
3. Choose **Gmail** or **Outlook**, and fill in:
   - **Integration name**, required;
   - **Description**, optional (if filled in, at least 10 characters);
   - **Visibility**: **Private** (default) or **Global**. See [Visibility](#visibilidad).
4. Click **Continue with Google** or **Continue with Microsoft**. A provider window opens so you can sign in and authorize access.
5. When you finish, the platform shows that the account is connected.

If you close the window before finishing, the account is created as **Not connected**: you can complete it later with **Connect account**, on its card in **Connectors**. If the authorization stops being valid, the same card offers **Reconnect account**.

The platform asks for permission to read and manage email, because opening an email marks it as read in the account.

## IMAP {#imap}

1. Go to **Settings → Connectors** → **Add integration** → **Email** → **IMAP**.
2. Fill in **Connect IMAP email account**:

   | Field | Description |
   |---|---|
   | **Integration name** | To recognize the account, for example "IMAP Support" |
   | **Description** | Optional; if filled in, at least 10 characters |
   | **Visibility** | **Private** (default) or **Global**. See [Visibility](#visibilidad) |
   | **Email provider** | Yahoo, iCloud, Zoho or **Other (custom IMAP)** |
   | **Email** | The account's address |
   | **Password** | The account's password or, with Yahoo and iCloud, an **app password** |
   | **IMAP server**, **Port**, **Secure connection** | With Yahoo, iCloud and Zoho they are filled in automatically and cannot be changed. With **Other**, enter your mail server's values; the usual port is 993, with a secure connection |

3. Click **Test connection**. You cannot connect until **Connection verified** is shown.
4. Click **Connect**.

:::tip App passwords
Yahoo and iCloud do not accept your usual password: they require an **app password**. You create it by turning on two-step verification and generating it in the account's security settings. The form reminds you of this when you choose those providers.
:::

The password is stored encrypted.

## Visibility {#visibilidad}

Each connected account is:

| Visibility | Who uses it |
|---|---|
| **Global** | All users in the organization with access to the Smart Inbox |
| **Private** | Only the assigned user |

## Several accounts {#varias-cuentas}

You can connect several accounts. In the Smart Inbox, the selector in the header switches accounts; the platform remembers the last one you chose.

The number of integrations, counting email, WhatsApp, Telegram and other connectors, depends on your plan.
