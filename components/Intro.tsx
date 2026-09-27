import { images } from "@/data/images";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="shell grid gap-y-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-x-12 lg:py-36">
      <div className="lg:col-span-7">
        <Eyebrow index="01">The approach</Eyebrow>
        <Headline
          id="intro-title"
          className="headline mt-8 text-[clamp(3.5rem,15.5vw,6rem)] lg:text-[min(8.6vw,10rem)]"
          outline={[2]}
          lines={["Don't just", "train.", "Train with", "purpose."]}
        />
      </div>

      <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-span-2">
        <figure className="relative">
          <Photo photo={images.runnerOrange} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5]" />
          <figcaption className="eyebrow absolute bottom-4 left-4 bg-ink/70 px-2.5 py-1.5 text-white/80 backdrop-blur-sm">
            Race day · Running
          </figcaption>
        </figure>
      </Reveal>

      <Reveal className="lg:col-span-6 lg:row-start-2 lg:self-end">
        <p className="max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
          Endurance is built one session at a time. Fat Fueled brings structure, purpose and consistency to the
          journey — from training days to race day.
        </p>
        <ButtonLink href="/coaching" variant="outline" className="mt-10">
          Explore coaching
        </ButtonLink>
      </Reveal>
    </section>
  );
}
