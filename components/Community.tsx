import { communityValues } from "@/data/content";
import { community } from "@/data/gallery";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

const [a, b, c, d] = community.supporting;

export function Community({ index }: { index?: string }) {
  return (
    <section aria-labelledby="community-title" className="overflow-hidden bg-ink-2 pt-24 sm:pt-32 lg:pt-36">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow index={index}>Community</Eyebrow>
            <Headline
              id="community-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(8.6vw,10rem)]"
              outline={[1]}
              lines={["Train together.", "Go further."]}
            />
          </div>
          <Reveal className="lg:col-span-4">
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              Endurance may be an individual pursuit, but the journey doesn&apos;t have to be.
            </p>
          </Reveal>
        </div>

        {/* Collage: one big group shot, four smaller moments arranged around it. */}
        <div className="mt-14 grid grid-cols-2 gap-3 lg:mt-20 lg:grid-cols-12 lg:gap-4">
          <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
            <Photo photo={community.main} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[4/3] lg:aspect-auto lg:h-full" />
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.1}>
            <Photo photo={a} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4]" />
          </Reveal>
          <Reveal className="lg:col-span-2 lg:self-end" delay={0.2}>
            <Photo photo={b} sizes="(min-width: 1024px) 17vw, 50vw" className="aspect-[3/4]" />
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.1}>
            <Photo photo={c} sizes="(min-width: 1024px) 17vw, 50vw" className="aspect-[3/4]" />
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.2}>
            <Photo photo={d} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] lg:aspect-[4/3]" />
          </Reveal>
        </div>
      </div>

      <div className="group mt-20 overflow-hidden border-y border-white/10 py-6 lg:mt-28 lg:py-8">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {communityValues.map((value) => (
                <li key={value} className="headline flex items-center gap-10 pr-10 text-5xl sm:text-7xl lg:text-8xl">
                  <span className={copy === 0 ? "text-white" : "text-outline"}>{value}</span>
                  <span aria-hidden className="size-3 bg-accent sm:size-4" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
