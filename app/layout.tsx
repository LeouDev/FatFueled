import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StickyCTA } from "@/components/StickyCTA";
import { MotionProvider } from "@/components/ui/motion";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, title: site.title, description: site.description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${anton.variable}`}>
      <body>
        <div className="loader" aria-hidden>
          <div className="w-[min(70vw,320px)]">
            <p className="headline text-center text-5xl tracking-wide sm:text-6xl">
              Fat Fueled<span className="text-accent">.</span>
            </p>
            <div className="mt-5 h-px overflow-hidden bg-white/15">
              <div className="loader-bar h-full bg-accent" />
            </div>
          </div>
        </div>
        <a
          href="#main"
          className="eyebrow sr-only z-[110] bg-navy px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <StickyCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
