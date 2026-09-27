"use client";

import Image from "next/image";
import { useState } from "react";
import { athleteGallery } from "@/data/athletes";
import { tagLabels, type Tag } from "@/data/images";
import { Lightbox } from "./Lightbox";

const filters = Object.keys(tagLabels) as Tag[];

export function AthleteGallery() {
  const [filter, setFilter] = useState<Tag | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const photos = filter === "all" ? athleteGallery : athleteGallery.filter((p) => p.tags.includes(filter));

  const chip = (value: Tag | "all", label: string) => (
    <li key={value}>
      <button
        type="button"
        aria-pressed={filter === value}
        onClick={() => setFilter(value)}
        className="eyebrow min-h-11 whitespace-nowrap border border-white/20 px-4 text-white/70 transition-colors hover:border-white hover:text-white aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
      >
        {label}
      </button>
    </li>
  );

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <ul aria-label="Filter photos" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {chip("all", "All")}
          {filters.map((tag) => chip(tag, tagLabels[tag]))}
        </ul>
        <p aria-live="polite" className="eyebrow tabular-nums text-white/55">
          {photos.length} photos
        </p>
      </div>

      <ul className="mt-10 columns-2 gap-2 sm:gap-3 md:columns-3 xl:columns-4">
        {photos.map((photo, i) => (
          <li key={photo.src.src} className="mb-2 break-inside-avoid sm:mb-3">
            <button type="button" onClick={() => setOpen(i)} className="group relative block w-full overflow-hidden bg-ink-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                placeholder="blur"
                className="h-auto w-full transition-transform duration-[1.2s] ease-expo group-hover:scale-105"
              />
              <span className="eyebrow absolute bottom-3 left-3 bg-ink/70 px-2 py-1 text-white/85 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                {photo.tags.map((t) => tagLabels[t]).join(" · ")}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox photos={photos} index={open} onChange={setOpen} />
    </>
  );
}
