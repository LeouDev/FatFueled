import { stories } from "@/data/gallery";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

const pad = (n: number) => String(n).padStart(2, "0");

/** Swipeable reel on mobile, staggered editorial grid on desktop. Photography only — no invented quotes. */
export function AthleteStories({ index }: { index?: string }) {
  return (
    <section aria-labelledby="stories-title" className="overflow-hidden py-24 sm:py-32 lg:py-36">
      <div className="shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow index={index}>Athlete stories</Eyebrow>
          <Headline
            id="stories-title"
            className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(8.6vw,10rem)]"
            lines={["The work", "shows."]}
          />
        </div>
        <Reveal>
          <p className="max-w-sm text-lg leading-relaxed text-white/70">From early mornings to race day, every finish has a story.</p>
        </Reveal>
      </div>

      <ul className="no-scrollbar mt-14 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 sm:scroll-px-6 sm:px-6 lg:shell lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:pb-20">
        {stories.map((story, i) => (
          <li key={i} className={`w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-auto ${i % 2 ? "lg:translate-y-20" : ""}`}>
            <Reveal delay={(i % 4) * 0.08}>
              <figure className="group relative aspect-[3/4] overflow-hidden">
                <Photo
                  photo={story.photo}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 44vw, 78vw"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <span aria-hidden className="eyebrow absolute right-4 top-4 tabular-nums text-white/60">
                  {pad(i + 1)}/{pad(stories.length)}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="eyebrow text-accent">{story.label}</span>
                  <p className="headline mt-2 text-3xl sm:text-4xl">{story.line}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <p aria-hidden className="shell eyebrow mt-6 text-white/55 lg:hidden">
        Swipe →
      </p>
    </section>
  );
}
