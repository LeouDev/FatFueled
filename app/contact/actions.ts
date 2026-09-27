"use server";

import { emptyContact, validateContact, type ContactForm } from "@/lib/contact";
import { renderContactEmail } from "@/lib/contact-email";
import { site } from "@/data/site";

export type SendResult = { ok: true } | { ok: false; error: string };

const FAILED = "Sorry — your message couldn't be sent. Please try again, or DM us on Instagram.";

/**
 * Emails a contact-form enquiry via Brevo's transactional API.
 * Env: BREVO_API_KEY, CONTACT_TO_EMAIL (inbox that receives enquiries),
 * CONTACT_FROM_EMAIL (a sender address verified in Brevo — no domain needed).
 */
export async function sendContact(input: ContactForm, honeypot: string): Promise<SendResult> {
  // Bots fill the hidden field; tell them it worked and send nothing.
  if (honeypot) return { ok: true };

  // Server actions are public endpoints: rebuild the payload from known string fields only, then re-validate.
  const raw = (input ?? {}) as Record<string, unknown>;
  const form = Object.fromEntries(
    Object.keys(emptyContact).map((key) => [key, typeof raw[key] === "string" ? raw[key] : ""]),
  ) as ContactForm;
  if (Object.keys(validateContact(form)).length) return { ok: false, error: "Please check the form and try again." };

  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] BREVO_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
    return { ok: false, error: FAILED };
  }

  const { subject, html, text } = renderContactEmail(form, { siteUrl: site.url, instagramUrl: site.instagram.url });
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Fat Fueled Website", email: from },
      to: [{ email: to }],
      replyTo: { email: form.email.trim(), name: form.name.trim().slice(0, 70) },
      subject,
      htmlContent: html,
      textContent: text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Brevo rejected the email:", res.status, await res.text());
    return { ok: false, error: FAILED };
  }
  return { ok: true };
}
