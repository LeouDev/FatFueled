import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="shell flex min-h-svh flex-col justify-center py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="headline mt-8 text-[clamp(4.5rem,20vw,14rem)]">
        Off course<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-white/70">This page took a wrong turn. Let&apos;s get you back on the route.</p>
      <ButtonLink href="/" className="mt-10 self-start">
        Back home
      </ButtonLink>
    </section>
  );
}
