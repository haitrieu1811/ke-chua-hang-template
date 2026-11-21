"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Menu,
  ChevronDown,
  PhoneCall,
  Check,
  ArrowRight,
  MapPin,
  X,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import PATH from "@/constants/path";
import SHOP_INFO from "@/constants/info";
import Logo from "@/components/logo";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Các icon mạng xã hội chuẩn SVG chính xác
function FacebookIcon({ className }: { className?: string }) {
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

function TikTokIcon({ className }: { className?: string }) {
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

function YouTubeIcon({ className }: { className?: string }) {
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

// Icon cờ quốc gia chuẩn SVG để hiển thị đồng nhất trên cả Windows (laptop) và Mobile
function CountryFlagIcon({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  if (code === "vi") {
    return (
      <svg
        viewBox="0 0 30 20"
        className={cn(
          "h-4 w-6 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
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

  if (code === "en") {
    return (
      <svg
        viewBox="0 0 30 20"
        className={cn(
          "h-4 w-6 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
          className,
        )}
        aria-hidden="true"
      >
        <rect width="30" height="20" fill="#FFFFFF" />
        <g fill="#B22234">
          <rect y="0" width="30" height="1.54" />
          <rect y="3.08" width="30" height="1.54" />
          <rect y="6.15" width="30" height="1.54" />
          <rect y="9.23" width="30" height="1.54" />
          <rect y="12.31" width="30" height="1.54" />
          <rect y="15.38" width="30" height="1.54" />
          <rect y="18.46" width="30" height="1.54" />
        </g>
        <rect width="12.5" height="10.77" fill="#3C3B6E" />
        <g fill="#FFFFFF">
          <circle cx="2.1" cy="2" r="0.65" />
          <circle cx="4.8" cy="2" r="0.65" />
          <circle cx="7.5" cy="2" r="0.65" />
          <circle cx="10.2" cy="2" r="0.65" />
          <circle cx="3.45" cy="3.8" r="0.65" />
          <circle cx="6.15" cy="3.8" r="0.65" />
          <circle cx="8.85" cy="3.8" r="0.65" />
          <circle cx="2.1" cy="5.6" r="0.65" />
          <circle cx="4.8" cy="5.6" r="0.65" />
          <circle cx="7.5" cy="5.6" r="0.65" />
          <circle cx="10.2" cy="5.6" r="0.65" />
          <circle cx="3.45" cy="7.4" r="0.65" />
          <circle cx="6.15" cy="7.4" r="0.65" />
          <circle cx="8.85" cy="7.4" r="0.65" />
          <circle cx="2.1" cy="9.2" r="0.65" />
          <circle cx="4.8" cy="9.2" r="0.65" />
          <circle cx="7.5" cy="9.2" r="0.65" />
          <circle cx="10.2" cy="9.2" r="0.65" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className={cn(
        "h-4 w-6 shrink-0 rounded-[2px] shadow-2xs ring-1 ring-black/10",
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

// Danh mục sản phẩm hiển thị trong menu con khi hover vào "Sản phẩm"
const productCategories = [
  {
    title: "Kệ Tải Nặng (1 - 4 Tấn)",
    desc: "Kệ Selective, Drive-In, Cantilever & Radio Shuttle",
    href: `${PATH.PRODUCT}?category=heavy`,
  },
  {
    title: "Kệ Trung Tải (300 - 800kg)",
    desc: "Kệ lắp ngàm bốc tay cho kho phụ tùng, linh kiện",
    href: `${PATH.PRODUCT}?category=medium`,
  },
  {
    title: "Kệ Sàn & Đa Năng",
    desc: "Sàn lửng Mezzanine, Kệ sắt V lỗ & Pallet thép",
    href: `${PATH.PRODUCT}?category=floor`,
  },
];

// Danh sách các menu điều hướng được ánh xạ từ hằng số PATH
const navItems = [
  {
    title: "Trang chủ",
    href: PATH.HOME,
  },
  {
    title: "Giới thiệu",
    href: PATH.INTRODUCE,
  },
  {
    title: "Giải pháp",
    href: PATH.SOLUTION,
  },
  {
    title: "Sản phẩm",
    href: PATH.PRODUCT,
    children: productCategories,
  },
  {
    title: "Tin tức",
    href: PATH.ARTICLES,
  },
  {
    title: "Liên hệ",
    href: PATH.CONTACT,
  },
];

const languages = [
  { code: "vi", label: "Tiếng Việt", country: "Việt Nam" },
  { code: "en", label: "English", country: "Hoa Kỳ" },
  { code: "zh", label: "中文", country: "Trung Quốc" },
];

export default function MainHeader() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = React.useState("vi");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  // Hiển thị thanh promo mỗi khi reload lại trang, tắt khi click nút X
  const [showPromo, setShowPromo] = React.useState(true);

  const handleDismissPromo = () => {
    setShowPromo(false);
  };

  // Lắng nghe scroll để tạo hiệu ứng viền border/shadow sắc nét hơn
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const currentLangObj =
    languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* ========================================================================= */}
      {/* 0. PROMOTION BANNER BẮT MẮT TRÊN CÙNG (CHỦ ĐỀ GIÁNG SINH, CÓ NÚT TẮT, KHÔNG STICKY) */}
      {/* ========================================================================= */}
      {showPromo && (
        <div className="relative bg-linear-to-r from-red-800 via-rose-700 to-red-900 text-white py-2 px-4 text-sm font-medium transition-all shadow-md border-b border-amber-400/30">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div className="flex flex-1 items-center justify-center gap-2 text-center overflow-hidden">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-amber-300/40 px-2.5 py-0.5 text-sm font-bold tracking-wide uppercase shrink-0 text-amber-200">
                <Sparkles className="size-3.5 text-amber-300" />
                🎄 Ưu Đãi Giáng Sinh
              </span>
              <span className="truncate">
                Bùng nổ đại tiệc Noel: Giảm ngay <strong>25%</strong> chi phí kệ
                kho & <strong>Tặng gói khảo sát 3D</strong> trị giá 15.000.000đ!
              </span>
              <Link
                href={PATH.CHRISTMAS_PROMO}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 font-bold text-amber-300 underline underline-offset-4 hover:text-white transition-colors shrink-0 ml-1.5"
              >
                <span>Nhận ưu đãi</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Nút tắt promotion */}
            <button
              type="button"
              onClick={handleDismissPromo}
              className="flex size-7 items-center justify-center rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer shrink-0"
              aria-label="Đóng thông báo khuyến mãi"
              title="Đóng thông báo"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. TOP BAR: ĐỊA CHỈ VÀ MẠNG XÃ HỘI (KHÔNG STICKY - TỰ CUỘN THEO TRANG) */}
      {/* ========================================================================= */}
      <div className="border-b border-border/40 bg-muted/40 py-2 text-sm text-muted-foreground transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Bên trái: Địa chỉ cửa hàng & Hotline */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span className="truncate">
                <span className="font-semibold text-foreground">Địa chỉ:</span>{" "}
                {SHOP_INFO.ADDRESS}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              <span className="text-border">|</span>
              <PhoneCall className="size-4 text-amber-500" />
              <a
                href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                className="font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
              >
                Hotline: {SHOP_INFO.HOTLINE.TEXT}
              </a>
            </div>
          </div>

          {/* Bên phải: Kết nối mạng xã hội TikTok, Facebook, YouTube */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <span className="hidden sm:inline-block text-sm font-medium text-muted-foreground">
              Kết nối:
            </span>

            {/* Facebook */}
            <a
              href={SHOP_INFO.FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fanpage Facebook Kệ Kim Phú"
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
              title="Theo dõi chúng tôi trên Facebook"
            >
              <FacebookIcon className="size-4" />
            </a>

            {/* TikTok */}
            <a
              href={SHOP_INFO.TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kênh TikTok Kệ Kim Phú"
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-foreground/10 hover:text-foreground"
              title="Khám phá video thực tế trên TikTok"
            >
              <TikTokIcon className="size-4" />
            </a>

            {/* YouTube */}
            <a
              href={SHOP_INFO.YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kênh YouTube Kệ Kim Phú"
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:text-[#FF0000]"
              title="Xem video giới thiệu dự án trên YouTube"
            >
              <YouTubeIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY MAIN NAVBAR (CHỈ STICKY PHẦN NÀY: LOGO, MENU, NGÔN NGỮ, THEME, TÀI KHOẢN) */}
      {/* ========================================================================= */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          // Màu background của shadcn kết hợp blur theo yêu cầu
          "bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/75",
          "border-b",
          isScrolled ? "shadow-xs border-border" : "border-border/60",
        )}
      >
        {/* ========================================================================= */}
        {/* MAIN NAV BAR (3 PHẦN: LOGO - MENU - NGÔN NGỮ & TÀI KHOẢN) */}
        {/* ========================================================================= */}
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ========================================================= */}
          {/* PHẦN 1: LOGO THƯƠNG HIỆU (COMPONENT TÁI SỬ DỤNG) */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2">
            <Logo theme="light" />
          </div>

          {/* ========================================================= */}
          {/* PHẦN 2: MENU ĐIỀU HƯỚNG CHÍNH (DESKTOP - RENDER TỪ PATH CONSTANT) */}
          {/* ========================================================= */}
          <nav
            className="hidden items-center gap-1 xl:gap-2 lg:flex"
            aria-label="Menu điều hướng chính"
          >
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] uppercase font-medium transition-all duration-200",
                        isLinkActive(item.href)
                          ? "bg-accent/80 font-bold text-primary"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="size-4 opacity-70 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </Link>

                    {/* Menu con danh mục sản phẩm hiển thị khi hover */}
                    <div className="invisible absolute left-0 top-full z-50 w-80 pt-2 opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                      <div className="rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg ring-1 ring-black/5">
                        <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Danh mục sản phẩm
                        </div>
                        <div className="my-1 h-px bg-border" />
                        <div className="flex flex-col gap-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                            >
                              <span className="text-sm font-semibold text-foreground">
                                {sub.title}
                              </span>
                              <span className="text-xs text-muted-foreground line-clamp-1">
                                {sub.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="my-1 h-px bg-border" />
                        <Link
                          href={item.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                        >
                          <span>Xem tất cả sản phẩm</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-[15px] uppercase font-medium transition-all duration-200",
                    isLinkActive(item.href)
                      ? "bg-accent/80 font-bold text-primary"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* PHẦN 3: GIAO DIỆN SÁNG/TỐI (SHADCN), NGÔN NGỮ VÀ TÀI KHOẢN */}
          {/* ========================================================= */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* 3.1: CHỌN NGÔN NGỮ (VIỆT NAM, HOA KỲ, TRUNG QUỐC HIỂN THỊ LÁ CỜ) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 gap-2 px-3 font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 cursor-pointer text-sm"
                    aria-label="Chọn ngôn ngữ"
                  />
                }
              >
                <CountryFlagIcon
                  code={currentLangObj.code}
                  className="h-3.5 w-5"
                />
                <span className="text-sm font-bold uppercase whitespace-nowrap">
                  {currentLangObj.code}
                </span>
                <ChevronDown className="size-3.5 opacity-60 shrink-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-72 ring-1 ring-border text-sm"
              >
                <DropdownMenuLabel className="text-sm text-muted-foreground">
                  Ngôn ngữ / Language
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      className="flex cursor-pointer items-center justify-between gap-3 text-sm py-2 px-3 hover:bg-accent"
                      onClick={() => setCurrentLang(lang.code)}
                    >
                      <span className="flex items-center gap-2.5 whitespace-nowrap">
                        <CountryFlagIcon code={lang.code} />
                        <span className="text-sm font-semibold">
                          {lang.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({lang.country})
                        </span>
                      </span>
                      {currentLang === lang.code && (
                        <Check className="size-4 shrink-0 text-primary" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 3.2: CHUYỂN ĐỔI GIAO DIỆN SÁNG / TỐI (THEO CHUẨN SHADCN) */}
            <ModeToggle />

            {/* 3.3: MOBILE MENU TRIGGER (DRAWER CHO THIẾT BỊ DI ĐỘNG) */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden size-9 text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer"
                    aria-label="Mở menu di động"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:max-w-md p-0 flex flex-col bg-background/95 backdrop-blur-lg text-sm"
              >
                {/* Mobile Drawer Header */}
                <SheetHeader className="p-5 border-b border-border/60">
                  <SheetTitle className="text-left">
                    <Logo theme="light" size="sm" />
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Nav Links */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {/* Thông tin địa chỉ trên mobile drawer */}
                  <div className="mb-4 rounded-lg border border-border/80 bg-muted/40 p-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground">Địa chỉ:</strong>{" "}
                        {SHOP_INFO.ADDRESS}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {navItems.map((item) => (
                      <div key={item.href} className="flex flex-col gap-1">
                        <SheetClose
                          render={
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors",
                                isLinkActive(item.href)
                                  ? "bg-primary/10 text-primary font-bold"
                                  : "text-foreground hover:bg-muted",
                              )}
                            />
                          }
                        >
                          {item.title}
                        </SheetClose>
                        {item.children && (
                          <div className="ml-3 flex flex-col gap-1 border-l-2 border-border/60 pl-2.5">
                            {item.children.map((sub) => (
                              <SheetClose
                                key={sub.href}
                                render={
                                  <Link
                                    href={sub.href}
                                    className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                  />
                                }
                              >
                                {sub.title}
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Chuyển đổi giao diện Sáng / Tối trong mobile drawer */}
                  <div className="mt-6 flex items-center justify-between rounded-lg border border-border/80 bg-muted/40 p-3.5">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        Giao diện hiển thị
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Sáng, Tối hoặc Hệ thống
                      </span>
                    </div>
                    <ModeToggle />
                  </div>

                  {/* Chọn ngôn ngữ trong mobile drawer */}
                  <div className="mt-4 rounded-lg border border-border/80 bg-muted/40 p-3.5">
                    <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Globe className="size-4" />
                      <span>Chọn ngôn ngữ hiển thị</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => setCurrentLang(lang.code)}
                          className={cn(
                            "flex flex-col items-center justify-center gap-1.5 rounded-md px-2 py-2.5 text-sm font-semibold transition-all border cursor-pointer",
                            currentLang === lang.code
                              ? "border-primary bg-primary text-primary-foreground shadow-xs"
                              : "border-border bg-background text-foreground hover:bg-muted",
                          )}
                        >
                          <CountryFlagIcon code={lang.code} />
                          <span className="text-sm font-medium whitespace-nowrap">
                            {lang.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mạng xã hội trong mobile drawer */}
                  <div className="mt-4 rounded-lg border border-border/80 bg-muted/40 p-3.5">
                    <div className="text-sm font-semibold text-muted-foreground mb-2.5">
                      Kênh mạng xã hội chính thức
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={SHOP_INFO.FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground hover:text-[#1877F2]"
                      >
                        <FacebookIcon className="size-4 text-[#1877F2]" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={SHOP_INFO.TIKTOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                      >
                        <TikTokIcon className="size-4" />
                        <span>TikTok</span>
                      </a>
                      <a
                        href={SHOP_INFO.YOUTUBE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground hover:text-[#FF0000]"
                      >
                        <YouTubeIcon className="size-4 text-[#FF0000]" />
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Drawer Footer: Hotline */}
                <div className="p-5 border-t border-border/60 bg-muted/20 flex flex-col gap-2.5">
                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-secondary/80 px-3 py-2.5 text-sm font-bold text-secondary-foreground hover:bg-secondary transition-colors"
                  >
                    <PhoneCall className="size-4 text-primary" />
                    <span>Hotline tư vấn: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
