import Image from "next/image";
import logoLight from "@/public/logo/logo-light.png";

/** The Fat Fueled logo, knocked out (navy → white) for dark backgrounds. */
export function Logo({ width = 64, className = "", priority = false }: { width?: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src={logoLight}
      alt="Fat Fueled"
      width={width}
      height={Math.round((width * logoLight.height) / logoLight.width)}
      loading={priority ? "eager" : undefined}
      className={className}
    />
  );
}
