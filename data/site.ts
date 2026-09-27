import type { Metadata } from "next";
import { images } from "./images";

export const site = {
  name: "Fat Fueled",
  title: "Fat Fueled | Endurance Coaching",
  description: "Endurance coaching for triathlon, cycling, running, and swimming.",
  tagline: "Endurance coaching for the long run.",
  // Set NEXT_PUBLIC_SITE_URL once the production domain is known.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  instagram: { handle: "@fat_fueled", url: "https://www.instagram.com/fat_fueled/" },
  cta: { label: "Start Training", href: "/contact" },
  nav: [
    { label: "Home", href: "/" },
    { label: "Coaching", href: "/coaching" },
    { label: "Disciplines", href: "/#disciplines" },
    { label: "Athletes", href: "/athletes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

/** aria-current for a nav link: "page" for real pages, "location" for an in-page section like /#disciplines. */
export const currentAttr = (href: string, activeHref: string) =>
  href === activeHref ? (href.includes("#") ? "location" : "page") : undefined;

/** Flip bioPlaceholder off once the client supplies the coach's own bio. */
export const coach = {
  name: "Lee Stephen Fat",
  credential: "UESCA Certified Coach",
  bio: "Coaching is about more than putting miles on the clock. It's about understanding the athlete, building consistency and creating a process that can be sustained.",
  bioPlaceholder: true,
  // Replace with a portrait of the coach when available.
  photo: images.coachSession,
};

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, title: `${title} | ${site.name}`, description, url: path },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}
