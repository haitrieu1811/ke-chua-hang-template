"use client";

import * as React from "react";
import { ChevronUp, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import SHOP_INFO from "@/constants/info";

// Icon Zalo chuẩn typography sắc nét
function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "size-6"}
      aria-hidden="true"
    >
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="8.5"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        letterSpacing="-0.3px"
      >
        Zalo
      </text>
    </svg>
  );
}

// Icon Facebook Messenger chuẩn SVG chính xác
function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-5"}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.913 1.455 5.518 3.734 7.224v3.52c0 .416.475.66.81.413l2.833-2.09c.84.233 1.728.36 2.623.36 5.523 0 10-4.145 10-9.427C22 6.145 17.523 2 12 2zm1.092 12.673l-2.55-2.72-4.982 2.72c-.445.243-.953-.255-.694-.71l5.263-9.288c.27-.478 1.053-.478 1.323 0l2.55 2.72 4.982-2.72c.445-.243.953.255.694.71l-5.263 9.288c-.27.478-1.053.478-1.323 0z" />
    </svg>
  );
}

export default function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Hiển thị nút cuộn trang khi kéo qua 250px
      if (currentScrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Tính toán tiến trình cuộn trang theo %
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (currentScrollY / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Liên hệ nhanh và cuộn trang"
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
    >
      {/* ========================================================================= */}
      {/* 1. NÚT GỌI ĐIỆN HOTLINE (STICKY - MÀU CAM PHỤ THƯƠNG HIỆU VỚI HIỆU ỨNG SÓNG) */}
      {/* ========================================================================= */}
      <a
        href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
        className={cn(
          "group relative flex size-11 sm:size-12 items-center justify-center rounded-full cursor-pointer",
          "bg-orange-500 text-white shadow-lg shadow-orange-500/35",
          "hover:bg-orange-600 hover:scale-110 active:scale-95",
          "transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        )}
        title={`Gọi hotline tư vấn: ${SHOP_INFO.HOTLINE.TEXT}`}
        aria-label={`Gọi hotline tư vấn: ${SHOP_INFO.HOTLINE.TEXT}`}
      >
        {/* Vòng tròn hiệu ứng sóng xung quanh nút gọi */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange-500/40 opacity-80" />

        <PhoneCall className="size-5 sm:size-5.5 transition-transform duration-200 group-hover:rotate-12" />

        {/* Tooltip hiển thị khi hover trên máy tính */}
        <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:flex items-center gap-2 whitespace-nowrap rounded-xl bg-card text-foreground px-3.5 py-1.5 text-sm font-bold shadow-xl border border-border/80">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
        </span>
      </a>

      {/* ========================================================================= */}
      {/* 2. NÚT CHAT ZALO (STICKY - MÀU ZALO XANH VỚI ICON ĐẶC TRƯNG) */}
      {/* ========================================================================= */}
      <a
        href={`https://zalo.me/${SHOP_INFO.HOTLINE.NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex size-11 sm:size-12 items-center justify-center rounded-full cursor-pointer",
          "bg-[#0068FF] text-white shadow-lg shadow-[#0068FF]/35",
          "hover:bg-[#0057d9] hover:scale-110 active:scale-95",
          "transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF]"
        )}
        title="Chat Zalo nhận báo giá trong 5 phút"
        aria-label="Chat Zalo nhận báo giá trong 5 phút"
      >
        <ZaloIcon className="size-6 sm:size-6.5" />

        {/* Tooltip hiển thị khi hover trên máy tính */}
        <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:flex items-center gap-2 whitespace-nowrap rounded-xl bg-card text-foreground px-3.5 py-1.5 text-sm font-bold shadow-xl border border-border/80">
          <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Chat Zalo Báo Giá</span>
        </span>
      </a>

      {/* ========================================================================= */}
      {/* 3. NÚT CHAT MESSENGER (STICKY - MÀU MESSENGER VỚI ICON SẤM SÉT) */}
      {/* ========================================================================= */}
      <a
        href={SHOP_INFO.FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex size-11 sm:size-12 items-center justify-center rounded-full cursor-pointer",
          "bg-[#0084FF] text-white shadow-lg shadow-[#0084FF]/35",
          "hover:bg-[#0074e0] hover:scale-110 active:scale-95",
          "transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]"
        )}
        title="Chat Facebook Messenger"
        aria-label="Chat Facebook Messenger"
      >
        <MessengerIcon className="size-5 sm:size-5.5 text-white" />

        {/* Tooltip hiển thị khi hover trên máy tính */}
        <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:flex items-center gap-2 whitespace-nowrap rounded-xl bg-card text-foreground px-3.5 py-1.5 text-sm font-bold shadow-xl border border-border/80">
          <span className="size-2 rounded-full bg-sky-500 animate-pulse" />
          <span>Chat Messenger</span>
        </span>
      </a>

      {/* ========================================================================= */}
      {/* 4. NÚT BACK TO TOP (NẰM DƯỚI CÙNG, XUẤT HIỆN MƯỢT MÀ KHI CUỘN TRANG) */}
      {/* ========================================================================= */}
      <div
        className={cn(
          "transition-all duration-300 transform",
          isVisible
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto h-11 sm:h-12"
            : "opacity-0 scale-75 translate-y-4 pointer-events-none h-0 overflow-hidden"
        )}
      >
        <button
          type="button"
          onClick={scrollToTop}
          className={cn(
            "group relative flex size-11 sm:size-12 items-center justify-center rounded-full cursor-pointer",
            "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
            "border border-primary-foreground/20",
            "hover:bg-primary/90 hover:scale-110 active:scale-95",
            "transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-label="Cuộn lên đầu trang"
          title="Cuộn lên đầu trang"
        >
          {/* Vòng tròn hiển thị tiến trình cuộn trang nhẹ nhàng xung quanh */}
          <svg
            className="absolute inset-0 size-full -rotate-90 pointer-events-none"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-primary-foreground/20"
            />
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={132}
              strokeDashoffset={132 - (132 * scrollProgress) / 100}
              strokeLinecap="round"
              className="text-primary-foreground transition-all duration-150"
            />
          </svg>

          {/* Icon mũi tên cuộn lên */}
          <ChevronUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </aside>
  );
}
