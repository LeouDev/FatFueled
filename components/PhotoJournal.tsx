"use client";

import { useRef, useState, type PointerEvent } from "react";
import { journal } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

const photos = journal.map((item) => item.photo);

/** Asymmetric editorial grid (2/3 + 1/3 rows that alternate) with a "View" cursor and lightbox. */
export function PhotoJournal({ index }: { index?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const cursor = useRef<HTMLDivElement>(null);

  const moveCursor = (e: PointerEvent) => {
    const el = cursor.current;
    if (!el || e.pointerType !== "mouse") return;
    el.style.translate = `${e.clientX - 44}px ${e.clientY - 44}px`;
    el.dataset.visible = "true";
  };
  const hideCursor = () => cursor.current?.setAttribute("data-visible", "false");

  return (
    <section aria-labelledby="journal-title" className="bg-ink-2 py-24 sm:py-32 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow index={index}>Photo journal</Eyebrow>
            <Headline
              id="journal-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(8.6vw,10rem)]"
              lines={["Race days,", "rest days."]}
            />
          </div>
          <Reveal>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">Moments from the start line, the long miles and everything in between.</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12 lg:gap-4" onPointerMove={moveCursor} onPointerLeave={hideCursor}>
          {journal.map((item, i) => (
            <li key={item.photo.src.src} className={item.size === "lg" ? "lg:col-span-8" : "lg:col-span-4"}>
              <Reveal delay={i % 2 ? 0.1 : 0}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className={`group relative block w-full overflow-hidden text-left lg:h-[min(40vw,640px)] lg:cursor-none ${
                    item.size === "lg" ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/5] lg:aspect-auto"
                  }`}
                >
                  <Photo
                    photo={item.photo}
                    sizes={item.size === "lg" ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="absolute inset-0"
                    imgClassName="transition-[scale,filter] duration-[1.4s] ease-expo group-hover:scale-105 lg:grayscale-[35%] lg:group-hover:grayscale-0"
                  />
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="eyebrow absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <span aria-hidden className="size-1.5 bg-accent" />
                    {item.label}
                  </span>
                  <span aria-hidden className="eyebrow absolute right-4 top-4 tabular-nums text-white/60">
                    FF/{String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div ref={cursor} aria-hidden className="journal-cursor eyebrow hidden size-22 place-items-center rounded-full bg-navy text-white lg:grid">
        View
      </div>
      <Lightbox photos={photos} index={open} onChange={setOpen} />
    </section>
  );
}
