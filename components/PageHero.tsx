import type { Photo as PhotoData } from "@/data/images";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

type Props = { eyebrow: string; lines: string[]; copy?: string; photo: PhotoData };

export function PageHero({ eyebrow, lines, copy, photo }: Props) {
  return (
    <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden lg:min-h-[88svh]">
      <div aria-hidden className="hero-zoom absolute inset-0 -z-10">
        <Photo photo={photo} sizes="100vw" priority className="absolute inset-0" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/40 to-ink/20" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-black/70 to-transparent" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="shell pb-14 pt-36 lg:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Headline
          as="h1"
          onMount
          delay={0.15}
          lines={lines}
          className="headline mt-8 text-[clamp(3.75rem,16vw,7.5rem)] lg:text-[min(10vw,19vh,12rem)]"
        />
        {copy && (
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{copy}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
