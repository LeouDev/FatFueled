import { testimonials } from "@/data/athletes";
import { Eyebrow } from "./ui/Eyebrow";
import { Placeholder } from "./ui/Placeholder";
import { Reveal } from "./ui/motion";

/** Renders real testimonials from data/athletes.ts; shows an honest "coming soon" state until they exist. */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="shell py-24 sm:py-32">
      <Eyebrow>In their words</Eyebrow>
      <h2 id="testimonials-title" className="headline mt-8 text-[clamp(3rem,12vw,6rem)]">
        Athlete stories<span className="text-accent">.</span>
      </h2>

      {testimonials.length === 0 ? (
        <Reveal>
          <div className="mt-12 grid place-items-center gap-5 border border-dashed border-white/15 px-6 py-20 text-center">
            <p className="headline text-4xl text-white/80 sm:text-5xl">Coming soon</p>
            <p className="max-w-md text-white/60">Stories from Fat Fueled athletes, in their own words, will live here.</p>
            <Placeholder>Add testimonials in data/athletes.ts</Placeholder>
          </div>
        </Reveal>
      ) : (
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Reveal>
                <figure className="h-full border border-white/10 bg-ink-2 p-8">
                  <blockquote className="text-xl leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="eyebrow mt-8 text-accent">
                    {t.name}
                    {t.discipline && <span className="text-white/55"> · {t.discipline}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
