"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CircleAlert } from "lucide-react";
import {
  disciplineOptions,
  experienceOptions,
  submitContact,
  validateContact,
  type ContactErrors,
  type ContactForm as ContactFormData,
} from "@/lib/contact";
import { site } from "@/data/site";
import { ButtonArrow, ButtonLink, buttonClass } from "./ui/Button";
import { Placeholder } from "./ui/Placeholder";

const empty: ContactFormData = { name: "", email: "", phone: "", discipline: "", experience: "", goal: "", message: "" };

const field =
  "mt-2 block w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder:text-white/30 transition-colors focus:border-accent focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-400";

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Discipline cards link here with ?discipline=<slug>; preselect it.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("discipline");
    const match = disciplineOptions.find((option) => option.toLowerCase() === slug);
    if (match) setForm((f) => ({ ...f, discipline: match }));
  }, []);

  const update = (key: keyof ContactFormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    setStatus("sending");
    await submitContact(form);
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div role="status" className="border border-white/10 bg-ink-2 p-8 sm:p-12">
        <p className="eyebrow text-accent">Message ready</p>
        <p className="headline mt-4 text-5xl sm:text-6xl">Thanks, {form.name.split(" ")[0]}.</p>
        <p className="mt-6 max-w-md text-white/75">
          This form isn&apos;t connected to an inbox yet, so please also send a quick DM on Instagram — that&apos;s the
          fastest way to start the conversation.
        </p>
        <Placeholder className="mt-6">Form backend not yet connected</Placeholder>
        <ButtonLink href={site.instagram.url} className="mt-8">
          Message {site.instagram.handle}
        </ButtonLink>
      </div>
    );
  }

  const input = (key: keyof ContactFormData) => ({
    id: `contact-${key}`,
    name: key,
    value: form[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  const label = (key: keyof ContactFormData, text: string, optional = false) => (
    <label htmlFor={`contact-${key}`} className="eyebrow text-white/60">
      {text} {optional ? <span className="normal-case tracking-normal text-white/55">(optional)</span> : <span className="text-accent">*</span>}
    </label>
  );

  const error = (key: keyof ContactFormData) =>
    errors[key] && (
      <p id={`contact-${key}-error`} className="mt-2 flex items-center gap-2 text-sm text-red-400">
        <CircleAlert aria-hidden className="size-4 shrink-0" /> {errors[key]}
      </p>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      <div>
        {label("name", "Name")}
        <input {...input("name")} autoComplete="name" onChange={(e) => update("name", e.target.value)} className={field} />
        {error("name")}
      </div>
      <div>
        {label("email", "Email")}
        <input {...input("email")} type="email" autoComplete="email" onChange={(e) => update("email", e.target.value)} className={field} />
        {error("email")}
      </div>
      <div>
        {label("phone", "Phone", true)}
        <input {...input("phone")} type="tel" autoComplete="tel" onChange={(e) => update("phone", e.target.value)} className={field} />
        {error("phone")}
      </div>
      <div>
        {label("discipline", "Primary discipline")}
        <select {...input("discipline")} onChange={(e) => update("discipline", e.target.value)} className={`${field} appearance-none`}>
          <option value="" disabled className="bg-ink">
            Select a discipline
          </option>
          {disciplineOptions.map((option) => (
            <option key={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
        {error("discipline")}
      </div>
      <div>
        {label("experience", "Experience level", true)}
        <select {...input("experience")} onChange={(e) => update("experience", e.target.value)} className={`${field} appearance-none`}>
          <option value="" className="bg-ink">
            Select your level
          </option>
          {experienceOptions.map((option) => (
            <option key={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        {label("goal", "Goal", true)}
        <input {...input("goal")} placeholder="e.g. first sprint triathlon" onChange={(e) => update("goal", e.target.value)} className={field} />
      </div>
      <div className="sm:col-span-2">
        {label("message", "Message")}
        <textarea
          {...input("message")}
          rows={4}
          placeholder="Tell us where you are now and where you want to go."
          onChange={(e) => update("message", e.target.value)}
          className={`${field} resize-y`}
        />
        {error("message")}
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/55">
          <span className="text-accent">*</span> Required
        </p>
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full disabled:opacity-60 sm:w-auto")}>
          {status === "sending" ? "Sending…" : "Send message"}
          <ButtonArrow />
        </button>
      </div>
    </form>
  );
}
