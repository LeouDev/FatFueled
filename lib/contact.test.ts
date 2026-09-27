import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContact, type ContactForm } from "./contact.ts";

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
