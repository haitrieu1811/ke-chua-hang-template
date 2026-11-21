"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  /**
   * Theme sáng hoặc tối để thích ứng hoàn hảo với màu nền:
   * - "light": Dành cho background sáng (như Header)
   * - "dark": Dành cho background tối (như Footer nền đen/tối)
   */
  theme?: "light" | "dark";
  /** Kích thước của Logo: "sm" | "md" | "lg" */
  size?: "sm" | "md" | "lg";
  /** Giữ tương thích với props cũ */
  showSubtitle?: boolean;
  /** Link khi click vào logo, mặc định là "/" */
  href?: string;
  className?: string;
}

export function Logo({
  theme = "light",
  size = "md",
  href = "/",
  className,
}: LogoProps) {
  const isDark = theme === "dark";

  const sizeClass = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-14 sm:h-16 w-auto",
  }[size];

  const imageClass = cn(
    "object-contain transition-transform duration-300 group-hover:scale-[1.02]",
    sizeClass,
  );

  const content = (
    <div
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-95 select-none",
        className,
      )}
    >
      {isDark ? (
        <Image
          src="/images/logo-dark.png"
          alt="Kệ Kim Phú"
          width={2061}
          height={763}
          loading="eager"
          className={imageClass}
        />
      ) : (
        <>
          <Image
            src="/images/logo.png"
            alt="Kệ Kim Phú"
            width={851}
            height={315}
            loading="eager"
            className={cn(imageClass, "dark:hidden")}
          />
          <Image
            src="/images/logo-dark.png"
            alt="Kệ Kim Phú"
            width={2061}
            height={763}
            loading="eager"
            className={cn(imageClass, "hidden dark:block")}
          />
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Về trang chủ Kệ Kim Phú">
        {content}
      </Link>
    );
  }

  return content;
}

export default Logo;
