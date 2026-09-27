import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContact, type ContactForm } from "./contact.ts";
import { renderContactEmail } from "./contact-email.ts";

const valid: ContactForm = {
  name: "Alex",
  email: "alex@example.com",
  phone: "",
  discipline: "Triathlon",
  experience: "",
  goal: "",
  message: "Training for my first 70.3.",
};

test("a complete form has no errors", () => {
  assert.deepEqual(validateContact(valid), {});
});

test("required fields and formats are enforced", () => {
  const errors = validateContact({ ...valid, name: " ", email: "alex@", discipline: "", message: "hi" });
  assert.deepEqual(Object.keys(errors).sort(), ["discipline", "email", "message", "name"]);
});

test("phone is optional but must look like a phone number", () => {
  assert.equal(validateContact({ ...valid, phone: "+63 917 123 4567" }).phone, undefined);
  assert.ok(validateContact({ ...valid, phone: "call me" }).phone);
});

test("emails that could smuggle extra mailto params are rejected", () => {
  assert.ok(validateContact({ ...valid, email: "alex@example.com?cc=spam@evil.com" }).email);
  assert.ok(validateContact({ ...valid, email: 'a"onmouseover@x.com' }).email);
  assert.ok(validateContact({ ...valid, message: "x".repeat(5001) }).message);
});

test("the notification email escapes everything the visitor typed", () => {
  const { html, text, subject } = renderContactEmail(
    { ...valid, name: "<script>alert(1)</script>", goal: 'Sub-3 "marathon" & more', message: "Line one\nLine <b>two</b>" },
    { siteUrl: "https://example.com", instagramUrl: "https://instagram.com/x", submittedAt: new Date(0) },
  );
  assert.ok(!html.includes("<script>alert(1)</script>") && html.includes("&lt;script&gt;alert(1)&lt;/script&gt;"));
  assert.ok(html.includes("Sub-3 &quot;marathon&quot; &amp; more"));
  assert.ok(html.includes("Line one<br>Line &lt;b&gt;two&lt;/b&gt;"));
  assert.ok(html.includes('href="mailto:alex@example.com?subject='));
  assert.ok(text.includes("Line <b>two</b>") && !subject.includes("\n"));
});
