import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Discipline } from "@/data/disciplines";
import { Photo } from "./ui/Photo";

export function DisciplineCard({ discipline: d }: { discipline: Discipline }) {
  return (
    <Link
      href={`/contact?discipline=${d.slug}`}
      className="group relative block aspect-[6/5] overflow-hidden bg-ink sm:aspect-[3/4] lg:aspect-[3/5]"
    >
      <Photo
        photo={d.photo}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0"
        imgClassName="transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.06]"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/15 transition-opacity duration-700 group-hover:opacity-75" />

      <span className="eyebrow absolute left-5 top-5 tabular-nums text-accent">{d.number}</span>
      <span
        aria-hidden
        className="absolute right-5 top-5 grid size-11 place-items-center border border-white/30 transition-colors duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-white"
      >
        <ArrowUpRight className="size-5 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="headline text-5xl transition-transform duration-700 ease-expo group-hover:-translate-y-1.5 sm:text-6xl">
          {d.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">{d.description}</p>
        <span className="eyebrow mt-5 flex items-center gap-3 text-white/85">
          <span aria-hidden className="h-px w-6 bg-white/40 transition-all duration-700 ease-expo group-hover:w-14 group-hover:bg-accent" />
          Start {d.title.toLowerCase()} coaching
        </span>
      </div>
    </Link>
  );
}
