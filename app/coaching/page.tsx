import { CTA } from "@/components/CTA";
import { DisciplineSection } from "@/components/DisciplineSection";
import { Method } from "@/components/Method";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Placeholder } from "@/components/ui/Placeholder";
import { Headline, Reveal } from "@/components/ui/motion";
import { coachingPillars, packages } from "@/data/content";
import { images } from "@/data/images";
import { pageMeta } from "@/data/site";

export const metadata = pageMeta(
  "Coaching",
  "Structured, athlete-specific endurance coaching for triathlon, cycling, running and swimming.",
  "/coaching",
);

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching"
        photo={images.cyclingCrowd}
        copy="Structured, athlete-specific endurance coaching for triathlon, cycling, running and swimming."
        lines={["Train", "with purpose."]}
      />

      <section aria-labelledby="pillars-title" className="py-24 sm:py-32 lg:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow index="01">What coaching looks like</Eyebrow>
              <Headline
                id="pillars-title"
                className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(6.4vw,7.5rem)]"
                lines={["Structure.", "Consistency.", "Purpose."]}
              />
              <Reveal className="mt-12 hidden lg:block">
                <Photo photo={images.testingTrainer} sizes="30vw" className="aspect-[4/5] max-w-sm" />
              </Reveal>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {coachingPillars.map((pillar, i) => (
              <li key={pillar.title} className="border-t border-white/10 py-10 last:border-b lg:py-12">
                <Reveal className="grid gap-4 sm:grid-cols-[5rem_1fr]">
                  <span className="eyebrow tabular-nums text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="headline text-4xl sm:text-5xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">{pillar.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <DisciplineSection index="02" />
      <Method index="03" className="bg-ink" />

      <section aria-labelledby="packages-title" className="bg-ink-2 py-24 sm:py-32 lg:py-36">
        <div className="shell">
          <Eyebrow index="04">Coaching options</Eyebrow>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Headline
              id="packages-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(8.6vw,10rem)]"
              lines={["Coaching", "options."]}
            />
            <Placeholder className="self-start lg:self-end">Packages & pricing to be supplied</Placeholder>
          </div>
          <ul className="mt-14 grid gap-3 md:grid-cols-3 lg:mt-20 lg:gap-4">
            {packages.map((pkg, i) => (
              <li key={i}>
                <Reveal delay={i * 0.08} className="flex h-full min-h-80 flex-col justify-between border border-dashed border-white/20 p-8">
                  <span className="eyebrow tabular-nums text-accent">Option 0{i + 1}</span>
                  <div>
                    <h3 className="headline text-4xl text-white/85">{pkg.name}</h3>
                    <p className="mt-3 text-white/55">{pkg.detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-12">
            <ButtonLink href="/contact">Ask about coaching</ButtonLink>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
