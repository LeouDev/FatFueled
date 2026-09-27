import type { ContactForm } from "./contact";

type Options = { siteUrl: string; instagramUrl: string; submittedAt?: Date };

// Shared with the site's palette (app/globals.css).
const INK = "#0a0a0a";
const CARD = "#111111";
const NAVY = "#26255f";
const TINT = "#7c86e6";
const MUTED = "#8a8a8a";
const DISPLAY = "Anton, Impact, 'Arial Narrow Bold', 'Helvetica Neue', Arial, sans-serif";
const BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Notification email sent to the coach when the contact form is submitted. Inline styles + tables for email clients. */
export function renderContactEmail(form: ContactForm, { siteUrl, instagramUrl, submittedAt = new Date() }: Options) {
  const name = form.name.trim();
  const first = name.split(/\s+/)[0];
  const email = form.email.trim();
  const phone = form.phone.trim();
  const when = submittedAt.toLocaleString("en-PH", { timeZone: "Asia/Manila", dateStyle: "medium", timeStyle: "short" });
  const host = siteUrl.replace(/^https?:\/\//, "");

  const subject = `New enquiry: ${name} — ${form.discipline}`.replace(/[\r\n]+/g, " ");

  const rows: [string, string][] = [
    ["Email", `<a href="mailto:${esc(email)}" style="color:#ffffff;text-decoration:underline;">${esc(email)}</a>`],
    ["Phone", phone ? `<a href="tel:${phone.replace(/[^\d+]/g, "")}" style="color:#ffffff;text-decoration:none;">${esc(phone)}</a>` : "—"],
    ["Primary discipline", esc(form.discipline)],
    ["Experience level", esc(form.experience.trim() || "—")],
    ["Goal", esc(form.goal.trim() || "—")],
  ];

  const label = (text: string) =>
    `<p style="margin:0 0 6px;font-family:${BODY};font-size:11px;line-height:16px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:${TINT};">${text}</p>`;

  const button = (href: string, text: string, filled: boolean) =>
    `<td class="btn" style="padding:0 12px 12px 0;"><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td bgcolor="${filled ? NAVY : CARD}" style="background:${filled ? NAVY : CARD};border:1px solid ${filled ? "#4b4a99" : "#444444"};">` +
    `<a href="${href}" style="display:inline-block;padding:15px 22px;font-family:${BODY};font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#ffffff;text-decoration:none;">${text} &rarr;</a>` +
    `</td></tr></table></td>`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${esc(subject)}</title>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
<style>
  @media (max-width: 620px) {
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .h1 { font-size: 44px !important; line-height: 44px !important; }
    .row td { display: block !important; width: 100% !important; }
    .row .lbl { border-bottom: 0 !important; padding: 16px 0 2px !important; }
    .row .val { padding-top: 0 !important; }
    .btn { display: block !important; padding: 0 0 12px !important; }
    .btn table { width: 100% !important; }
    .btn a { display: block !important; text-align: center !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${INK};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${INK};">${esc(first)} wants to start ${esc(form.discipline.toLowerCase())} coaching — reply to this email to answer directly.</div>
<table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="${INK}" style="background:${INK};">
<tr><td align="center" style="padding:32px 12px 40px;">
<table role="presentation" width="600" border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">

  <tr><td style="padding:0 4px 24px;">
    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0"><tr>
      <td><a href="${esc(siteUrl)}"><img src="${esc(siteUrl)}/logo/logo-light.png" width="84" alt="Fat Fueled" style="display:block;width:84px;height:auto;border:0;"></a></td>
      <td align="right" style="font-family:${BODY};font-size:11px;line-height:16px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:${MUTED};">${esc(when)}</td>
    </tr></table>
  </td></tr>

  <tr><td class="px" bgcolor="${NAVY}" style="background:${NAVY};padding:40px 40px 36px;">
    <p style="margin:0 0 18px;font-family:${BODY};font-size:11px;line-height:16px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#c3c8f7;">&mdash;&nbsp; New coaching enquiry</p>
    <h1 class="h1" style="margin:0;font-family:${DISPLAY};font-size:56px;line-height:56px;font-weight:400;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">${esc(name)}<span style="color:${TINT};">.</span></h1>
    <p style="margin:16px 0 0;font-family:${BODY};font-size:17px;line-height:26px;color:#e4e6fb;">Wants to get moving with <strong style="color:#ffffff;">${esc(form.discipline.toLowerCase())}</strong> coaching.</p>
  </td></tr>

  <tr><td class="px" bgcolor="${CARD}" style="background:${CARD};padding:32px 40px 8px;">
    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
      ${rows
        .map(
          ([k, v]) => `<tr class="row">
        <td class="lbl" width="190" valign="top" style="padding:14px 16px 14px 0;border-bottom:1px solid #262626;">${label(k)}</td>
        <td class="val" valign="top" style="padding:14px 0;border-bottom:1px solid #262626;font-family:${BODY};font-size:16px;line-height:24px;color:#ffffff;">${v}</td>
      </tr>`,
        )
        .join("")}
    </table>
  </td></tr>

  <tr><td class="px" bgcolor="${CARD}" style="background:${CARD};padding:28px 40px 12px;">
    ${label("Message")}
    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-top:8px;"><tr>
      <td width="3" bgcolor="${TINT}" style="background:${TINT};font-size:0;line-height:0;">&nbsp;</td>
      <td style="padding:4px 0 4px 20px;font-family:${BODY};font-size:17px;line-height:28px;color:#ffffff;">${esc(form.message.trim()).replace(/\r?\n/g, "<br>")}</td>
    </tr></table>
  </td></tr>

  <tr><td class="px" bgcolor="${CARD}" style="background:${CARD};padding:28px 40px 30px;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr>
      ${button(`mailto:${esc(email)}?subject=${encodeURIComponent("Re: your Fat Fueled enquiry")}`, `Reply to ${esc(first)}`, true)}
      ${phone ? button(`tel:${phone.replace(/[^\d+]/g, "")}`, "Call", false) : ""}
    </tr></table>
  </td></tr>

  <tr><td style="padding:28px 4px 0;font-family:${BODY};font-size:13px;line-height:21px;color:${MUTED};">
    Hit reply to answer ${esc(first)} directly — their address is set as the reply-to.<br>
    Sent from the contact form on <a href="${esc(siteUrl)}/contact" style="color:${MUTED};text-decoration:underline;">${esc(host)}</a>.
  </td></tr>
  <tr><td style="padding:24px 4px 0;">
    <p style="margin:0;font-family:${DISPLAY};font-size:22px;line-height:24px;letter-spacing:0.5px;text-transform:uppercase;color:#3a3a3a;">Fat Fueled<span style="color:${NAVY};">.</span></p>
    <p style="margin:6px 0 0;font-family:${BODY};font-size:11px;line-height:16px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#555555;">Endurance coaching for the long run &middot; <a href="${esc(instagramUrl)}" style="color:#555555;text-decoration:none;">@fat_fueled</a></p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    `New coaching enquiry — ${when}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Primary discipline: ${form.discipline}`,
    `Experience level: ${form.experience.trim() || "—"}`,
    `Goal: ${form.goal.trim() || "—"}`,
    "",
    "Message:",
    form.message.trim(),
    "",
    `Reply to this email to answer ${first} directly.`,
  ].join("\n");

  return { subject, html, text };
}
