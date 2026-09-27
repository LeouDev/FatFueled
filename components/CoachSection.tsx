import { disciplines } from "@/data/disciplines";
import { coach, site } from "@/data/site";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Placeholder } from "./ui/Placeholder";
import { Headline, Reveal } from "./ui/motion";

export function CoachSection({ index }: { index?: string }) {
  return (
    <section aria-labelledby="coach-title" className="py-24 sm:py-32 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-6">
          <figure className="relative">
            <Photo photo={coach.photo} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5]" />
            <figcaption className="eyebrow absolute bottom-4 left-4 bg-ink/70 px-2.5 py-1.5 text-white/80 backdrop-blur-sm">
              Coach {coach.name}
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-6">
          <Eyebrow index={index}>The coach</Eyebrow>
          <Headline
            id="coach-title"
            className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(7vw,8.5rem)]"
            lines={["Meet", "your coach."]}
          />
          <Reveal>
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="headline text-4xl sm:text-5xl">{coach.name}</p>
              <p className="eyebrow mt-4 flex items-center gap-2 text-accent">
                <span aria-hidden className="size-1.5 bg-accent" />
                {coach.credential}
              </p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">{coach.bio}</p>
              {coach.bioPlaceholder && <Placeholder className="mt-4">Placeholder bio — supply final copy</Placeholder>}
              <ul aria-label="Disciplines coached" className="mt-10 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <li key={d.slug} className="eyebrow border border-white/15 px-3 py-2 text-white/70">
                    {d.title}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={site.cta.href}>Train with Fat Fueled</ButtonLink>
                <ButtonLink href="/about" variant="outline">
                  More about us
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
