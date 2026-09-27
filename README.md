# Fat Fueled

Marketing site for **Fat Fueled**, endurance coaching for triathlon, cycling, running and swimming, led by UESCA Certified Coach Lee Stephen Fat.
All photography comes from the [@fat_fueled](https://www.instagram.com/fat_fueled/) Instagram feed.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide. Every route is statically prerendered.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm test        # contact-form validation
npm run build
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `app/` (`/`, `/coaching`, `/athletes`, `/about`, `/contact`) |
| Sections & UI | `components/` (homepage sections) and `components/ui/` (Button, Photo, Headline/Reveal motion, …) |
| Every photo + alt text | `data/images.ts` (files in `public/images/`) |
| Copy | `data/site.ts` (nav, coach), `data/content.ts`, `data/disciplines.ts`, `data/gallery.ts`, `data/athletes.ts` |
| Brand tokens | `app/globals.css` (`@theme`: ink, navy, accent) |
| Logo | `public/logo/` (`logo.png` original colours, `logo-light.png` for dark backgrounds) |
| Favicon / social image | `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`, `app/opengraph-image.jpg` |

**Swap a photo:** overwrite the file in `public/images/` with the same name, or point its import in `data/images.ts` at a new file. Alt text and crop focus (`position`) sit next to it.

**Colours:** `navy` (#26255F) is the exact logo navy, used for buttons and filled accents. `accent` (#7C86E6) is the same navy lightened for small text and hairlines, because pure navy on the near-black background is only 1.4:1 contrast.

## Before launch: placeholders to replace

Anything still waiting on the client shows a dashed **✎ placeholder** tag while running `npm run dev` (hidden on the live site; `components/ui/Placeholder.tsx`):

- **Coach bio:** `coach.bio` in `data/site.ts`. Set `bioPlaceholder: false` once it's final.
- **Coach portrait:** `coach.photo` currently uses a coaching-session photo.
- **Coaching packages & pricing:** `packages` in `data/content.ts` (empty, so the page shows "Coming soon"; no pricing has been invented).
- **Athlete testimonials:** `testimonials` in `data/athletes.ts`. Real quotes only; the section shows "Coming soon" until then.

## Contact form → email

Submissions go through a server action (`app/contact/actions.ts`). It re-validates the form (`lib/contact.ts`), drops bots via a hidden honeypot field, and sends a branded HTML + plain-text email (`lib/contact-email.ts`) through [Brevo](https://www.brevo.com)'s transactional API. The visitor's address is set as reply-to, so hitting **Reply** answers them directly.

## Environment

| Variable | Purpose |
| --- | --- |
| `BREVO_API_KEY` | Brevo v3 API key (Brevo → SMTP & API → API Keys). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Kept out of the repo on purpose. |
| `CONTACT_FROM_EMAIL` | Sender address verified in Brevo (Senders & IPs → Senders). Switch to an address on your own domain once you have one, for better deliverability. |
| `NEXT_PUBLIC_SITE_URL` | Optional production URL for canonical links, Open Graph, sitemap and robots, and the email's logo/links. On Vercel it falls back to the production domain. |
