import { Locale } from "next-intl";

import { cn } from "cn";

export function CountryFlagIcon({
  code,
  className,
}: {
  code: Locale;
  className?: string;
}) {
  if (code === "en") {
    return (
      <svg
        viewBox="0 0 60 30"
        preserveAspectRatio="xMidYMid slice"
        className={cn(
          "h-3.5 w-5 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
          className,
        )}
        aria-hidden="true"
      >
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          stroke="#C8102E"
          strokeWidth="2.5"
        />
        <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  if (code === "zh") {
    return (
      <svg
        viewBox="0 0 30 20"
        className={cn(
          "h-3.5 w-5 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
          className,
        )}
        aria-hidden="true"
      >
        <rect width="30" height="20" fill="#DE2910" />
        <polygon
          points="5.5,2.5 6.38,5.21 9.23,5.21 6.92,6.89 7.8,9.6 5.5,7.92 3.2,9.6 4.08,6.89 1.77,5.21 4.62,5.21"
          fill="#FFDE00"
        />
        <circle cx="11.2" cy="2.6" r="0.9" fill="#FFDE00" />
        <circle cx="12.8" cy="4.6" r="0.9" fill="#FFDE00" />
        <circle cx="12.8" cy="7.3" r="0.9" fill="#FFDE00" />
        <circle cx="11.2" cy="9.3" r="0.9" fill="#FFDE00" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className={cn(
        "h-3.5 w-5 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
        className,
      )}
      aria-hidden="true"
    >
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,4 16.47,8.53 21.24,8.53 17.38,11.33 18.85,15.85 15,13.06 11.15,15.85 12.62,11.33 8.76,8.53 13.53,8.53"
        fill="#FFFF00"
      />
    </svg>
  );
}

// Các icon mạng xã hội chuẩn SVG chính xác
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-4"}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-4"}
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-4"}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
