import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Photo } from "@/components/ui/Photo";
import { Headline, Reveal } from "@/components/ui/motion";
import { images } from "@/data/images";
import { pageMeta, site } from "@/data/site";

export const metadata = pageMeta(
  "Contact",
  "Preparing for your first race or chasing your next goal? Start the conversation with Fat Fueled.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="shell grid gap-16 pb-24 pt-32 sm:pt-40 lg:grid-cols-12 lg:gap-12 lg:pb-40 lg:pt-48">
      <div className="lg:col-span-5">
        <Eyebrow>Contact</Eyebrow>
        <Headline
          as="h1"
          id="contact-title"
          onMount
          delay={0.1}
          className="headline mt-8 text-[clamp(4rem,19vw,8rem)] lg:text-[min(8.4vw,10rem)]"
          lines={["Let's", "get moving."]}
        />
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/75">
            Whether you&apos;re preparing for your first race or working toward your next performance goal, start the
            conversation.
          </p>
        </Reveal>
        <Reveal delay={0.5} className="mt-12 hidden lg:block">
          <figure className="relative max-w-sm">
            <Photo photo={images.medalTrio} sizes="30vw" className="aspect-[4/5]" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-5 pt-16">
              <p className="eyebrow flex items-center gap-2 text-white/80">
                <InstagramIcon className="size-4" /> Prefer DMs?
              </p>
              <ButtonLink href={site.instagram.url} variant="outline" size="sm" className="mt-4 bg-black/30 backdrop-blur-sm">
                {site.instagram.handle}
              </ButtonLink>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="lg:col-span-6 lg:col-start-7">
        <ContactForm />
        <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/10 pt-6 lg:hidden">
          <p className="text-white/65">Prefer DMs?</p>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex items-center gap-2 text-accent">
            <InstagramIcon className="size-4" /> {site.instagram.handle}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
