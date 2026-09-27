import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink } from "./ui/Button";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

export function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Photo photo={images.finishArch} sizes="100vw" className="absolute inset-0" imgClassName="parallax" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell py-32 text-center">
        <Headline
          id="cta-title"
          className="headline text-[clamp(3.25rem,15vw,9rem)] lg:text-[min(11vw,20vh,14rem)]"
          outline={[1]}
          lines={["Your next", "finish", "starts here."]}
        />
        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-md text-lg text-white/85 sm:text-xl">Ready to train with purpose?</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={site.cta.href}>{site.cta.label}</ButtonLink>
            <ButtonLink href="/contact" variant="outline" className="bg-black/20 backdrop-blur-sm">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
