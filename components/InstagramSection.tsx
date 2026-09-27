import Image from "next/image";
import logo from "@/public/logo/logo.png";
import { instagramFeed } from "@/data/gallery";
import { site } from "@/data/site";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { InstagramIcon } from "./ui/InstagramIcon";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

/** A premium take on the @fat_fueled grid, from local assets rather than an embed. */
export function InstagramSection({ index }: { index?: string }) {
  return (
    <section aria-labelledby="ig-title" className="py-24 sm:py-32 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index={index}>Instagram</Eyebrow>
            <Headline
              id="ig-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(6.4vw,7.5rem)]"
              lines={["Follow the", "journey."]}
            />
            <Reveal>
              <p className="mt-8 text-lg leading-relaxed text-white/75">Training days. Race days. Everything in between.</p>
              <div className="mt-10 flex items-center gap-4 border-y border-white/10 py-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white p-2 ring-2 ring-accent ring-offset-2 ring-offset-ink">
                  <Image src={logo} alt="" width={48} height={32} className="h-auto w-full" />
                </span>
                <div>
                  <p className="font-semibold">fat_fueled</p>
                  <p className="text-sm text-white/60">Endurance coaching for triathlon, cycling, running and swimming.</p>
                </div>
              </div>
              <ButtonLink href={site.instagram.url} className="mt-8">
                {site.instagram.handle}
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${site.instagram.handle} on Instagram (opens in a new tab)`}
          className="lg:col-span-8"
        >
          <ul className="grid grid-cols-3 gap-1 sm:gap-2">
            {instagramFeed.map((photo, i) => (
              <li key={photo.src.src}>
                <Reveal delay={(i % 3) * 0.08} y={20}>
                  <div className="group relative aspect-[3/4] overflow-hidden">
                    <Photo
                      photo={photo}
                      sizes="(min-width: 1024px) 22vw, 33vw"
                      className="absolute inset-0"
                      imgClassName="transition-transform duration-[1.2s] ease-expo group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <InstagramIcon className="size-7" />
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </a>
      </div>
    </section>
  );
}
