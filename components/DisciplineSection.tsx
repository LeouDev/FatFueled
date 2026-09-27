import { disciplines } from "@/data/disciplines";
import { DisciplineCard } from "./DisciplineCard";
import { Eyebrow } from "./ui/Eyebrow";
import { Headline, Reveal } from "./ui/motion";

export function DisciplineSection({ index, className = "bg-ink-2" }: { index?: string; className?: string }) {
  return (
    <section id="disciplines" aria-labelledby="disciplines-title" className={`py-24 sm:py-32 lg:py-36 ${className}`}>
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow index={index}>Disciplines</Eyebrow>
            <Headline
              id="disciplines-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(8.6vw,10rem)]"
              lines={["Find your", "discipline."]}
            />
          </div>
          <Reveal>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              Four disciplines. One approach — structure, consistency and purpose, whatever you&apos;re training for.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <li key={d.slug}>
              <Reveal delay={i * 0.08}>
                <DisciplineCard discipline={d} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
