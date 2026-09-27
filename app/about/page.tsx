import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/motion";
import { aboutSections } from "@/data/content";
import { images } from "@/data/images";
import { coach, pageMeta, site } from "@/data/site";

export const metadata = pageMeta(
  "About",
  "The brand, the coach, the philosophy and the community behind Fat Fueled endurance coaching.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        photo={images.dinnerCrew}
        copy="Endurance coaching built on structure, consistency and the people who keep showing up."
        lines={["More than", "training."]}
      />

      <div className="py-12 sm:py-20">
        {aboutSections.map((section, i) => (
          <section
            key={section.title}
            aria-labelledby={`about-${section.number}`}
            className="shell grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-24"
          >
            <Reveal className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
              <Photo photo={section.photo} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] sm:aspect-[4/3]" />
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-auto" delay={0.1}>
              <span className="eyebrow tabular-nums text-accent">{section.number}</span>
              <h2 id={`about-${section.number}`} className="headline mt-5 text-[clamp(3.25rem,13vw,5.5rem)] lg:text-[min(6.5vw,7.5rem)]">
                {section.title}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">{section.text}</p>

              {section.title === "The coach" && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="headline text-3xl">{coach.name}</p>
                  <p className="eyebrow mt-3 text-accent">{coach.credential}</p>
                </div>
              )}
              {section.title === "The community" && (
                <ButtonLink href={site.instagram.url} variant="outline" className="mt-8">
                  Follow {site.instagram.handle}
                </ButtonLink>
              )}
            </Reveal>
          </section>
        ))}
      </div>

      <CTA />
    </>
  );
}
