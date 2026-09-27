import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui/Button";
import { InstagramIcon } from "./ui/InstagramIcon";

const linkClass = "link-underline text-sm text-white/70 hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink pt-20 lg:pt-28">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Logo width={160} className="h-auto w-32 lg:w-40" />
          <p className="headline mt-10 text-[clamp(2.75rem,8vw,5.5rem)]">
            Endurance coaching
            <br />
            for the long run<span className="text-accent">.</span>
          </p>
          <ButtonLink href={site.cta.href} className="mt-10">
            {site.cta.label}
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
          <div>
            <h2 className="eyebrow text-accent">Disciplines</h2>
            <ul className="mt-6 space-y-3">
              {disciplines.map((d) => (
                <li key={d.slug}>
                  <Link href={`/contact?discipline=${d.slug}`} className={linkClass}>
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Footer">
            <h2 className="eyebrow text-accent">Navigate</h2>
            <ul className="mt-6 space-y-3">
              {site.nav
                .filter((item) => !item.href.includes("#"))
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div>
            <h2 className="eyebrow text-accent">Social</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                  <InstagramIcon className="size-4" /> Instagram
                </a>
              </li>
              <li className="text-sm text-white/55">{site.instagram.handle}</li>
            </ul>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="headline mt-20 select-none whitespace-nowrap bg-linear-to-b from-white/20 to-white/0 bg-clip-text text-center text-[18.5vw] leading-[0.82] text-transparent lg:mt-28"
      >
        Fat Fueled
      </p>

      <div className="shell flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Fat Fueled. All rights reserved.</p>
        <p className="eyebrow text-white/55">Triathlon · Cycling · Running · Swimming</p>
        <a href="#main" className="eyebrow inline-flex items-center gap-2 text-white/60 hover:text-white">
          Back to top <ArrowUp aria-hidden className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
