import { AthleteGallery } from "@/components/AthleteGallery";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/motion";
import { images } from "@/data/images";
import { pageMeta } from "@/data/site";

export const metadata = pageMeta(
  "Athletes",
  "Race days, training days, group rides and open water — the athletes behind Fat Fueled.",
  "/athletes",
);

export default function AthletesPage() {
  return (
    <>
      <PageHero
        eyebrow="Athletes"
        photo={images.fieldCrew}
        copy="Race days, training days, group rides and open water — the people who make Fat Fueled."
        lines={["The athletes", "behind the miles."]}
      />

      <section aria-labelledby="gallery-title" className="bg-ink-2 py-20 sm:py-28">
        <div className="shell">
          <Reveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>The archive</Eyebrow>
              <h2 id="gallery-title" className="headline mt-8 text-[clamp(3rem,12vw,6rem)]">
                Every mile counts<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/65">Filter by discipline or moment. Tap any photo to view it full size.</p>
          </Reveal>
          <AthleteGallery />
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
