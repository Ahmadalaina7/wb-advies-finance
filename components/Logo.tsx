import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type LogoProps = {
  /** dark = header (light bg), light = footer (dark bg) */
  variant?: "dark" | "light";
  /** header uses sm→md, footer uses footer */
  size?: "header" | "footer";
  href?: string;
  priority?: boolean;
};

/** Native logo aspect ≈ 921×287 */
const INTRINSIC = { width: 921, height: 287 } as const;

const SIZE_CLASS = {
  /** Fits a 72px header: compact on phone, balanced on desktop */
  header: "h-9 w-auto sm:h-10 lg:h-11",
  /** Slightly stronger brand presence inside the footer lockup */
  footer: "h-11 w-auto sm:h-[3.25rem]",
} as const;

const SIZE_PX = {
  header: 176,
  footer: 200,
} as const;

export default function Logo({
  variant = "dark",
  size = "header",
  href = "/",
  priority = false,
}: LogoProps) {
  const src = variant === "light" ? "/wb-logo-light.png" : "/wb-logo.png";

  return (
    <Link
      href={href}
      className="inline-flex min-h-[44px] items-center"
      aria-label={`${SITE.name}, naar de homepage`}
    >
      <Image
        src={src}
        alt={SITE.name}
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        priority={priority}
        sizes={`${SIZE_PX[size]}px`}
        className={`${SIZE_CLASS[size]} object-contain object-left`}
      />
    </Link>
  );
}
