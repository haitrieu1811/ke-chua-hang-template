"use client";

import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Menu,
  PhoneCall,
  Sparkles,
  X,
} from "lucide-react";
import { type Locale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import Logo from "@/components/logo";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FacebookIcon, TikTokIcon, YouTubeIcon } from "@/constants/icon";
import SHOP_INFO from "@/constants/info";
import PATH from "@/constants/path";
import { cn } from "@/lib/utils";

type MainHeaderProps = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function MainHeader({ changeLocaleAction }: MainHeaderProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  // Hiển thị thanh promo mỗi khi reload lại trang, tắt khi click nút X
  const [showPromo, setShowPromo] = React.useState(true);

  const productCategories = [
    {
      title: t("categories.heavy.title"),
      desc: t("categories.heavy.desc"),
      href: `${PATH.PRODUCT}?category=heavy`,
    },
    {
      title: t("categories.medium.title"),
      desc: t("categories.medium.desc"),
      href: `${PATH.PRODUCT}?category=medium`,
    },
    {
      title: t("categories.floor.title"),
      desc: t("categories.floor.desc"),
      href: `${PATH.PRODUCT}?category=floor`,
    },
  ];

  const navItems = [
    {
      title: t("nav.home"),
      href: PATH.HOME,
    },
    {
      title: t("nav.introduce"),
      href: PATH.INTRODUCE,
    },
    {
      title: t("nav.solution"),
      href: PATH.SOLUTION,
    },
    {
      title: t("nav.product"),
      href: PATH.PRODUCT,
      children: productCategories,
    },
    {
      title: t("nav.articles"),
      href: PATH.ARTICLES,
    },
    {
      title: t("nav.contact"),
      href: PATH.CONTACT,
    },
  ];

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
                {t("promoBadge")}
              </span>
              <span className="truncate">
                {t.rich("promoText", {
                  discount: (chunks) => <strong>{chunks}</strong>,
                  gift: (chunks) => <strong>{chunks}</strong>,
                })}
              </span>
              <Link
                href={PATH.CHRISTMAS_PROMO}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 font-bold text-amber-300 underline underline-offset-4 hover:text-white transition-colors shrink-0 ml-1.5"
              >
                <span>{t("promoCta")}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Nút tắt promotion */}
            <button
              type="button"
              onClick={handleDismissPromo}
              className="flex size-7 items-center justify-center rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer shrink-0"
              aria-label={t("dismissPromo")}
              title={t("dismissPromoTitle")}
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
                <span className="font-semibold text-foreground">
                  {t("addressLabel")}
                </span>{" "}
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
                {t("hotlineLabel")} {SHOP_INFO.HOTLINE.TEXT}
              </a>
            </div>
          </div>

          {/* Bên phải: Kết nối mạng xã hội TikTok, Facebook, YouTube */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <span className="hidden sm:inline-block text-sm font-medium text-muted-foreground">
              {t("connectLabel")}
            </span>

            {/* Facebook */}
            <a
              href={SHOP_INFO.FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("facebookAria")}
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
              title={t("facebookTitle")}
            >
              <FacebookIcon className="size-4" />
            </a>

            {/* TikTok */}
            <a
              href={SHOP_INFO.TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("tiktokAria")}
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-foreground/10 hover:text-foreground"
              title={t("tiktokTitle")}
            >
              <TikTokIcon className="size-4" />
            </a>

            {/* YouTube */}
            <a
              href={SHOP_INFO.YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("youtubeAria")}
              className="flex size-7 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground transition-all duration-200 hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:text-[#FF0000]"
              title={t("youtubeTitle")}
            >
              <YouTubeIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY MAIN NAVBAR (CHỈ STICKY PHẦN NÀY: LOGO, MENU, NGÔN NGỮ, THEME) */}
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
        {/* MAIN NAV BAR (3 PHẦN: LOGO - MENU - NGÔN NGỮ & GIAO DIỆN) */}
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
            aria-label={t("mainNavAria")}
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
                          {t("productCategoriesTitle")}
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
                          <span>{t("viewAllProducts")}</span>
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
          {/* PHẦN 3: NGÔN NGỮ & GIAO DIỆN SÁNG/TỐI */}
          {/* ========================================================= */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* 3.1: CHỌN NGÔN NGỮ (VIỆT NAM, HOA KỲ, TRUNG QUỐC HIỂN THỊ LÁ CỜ) */}
            <LocaleSwitcher changeLocaleAction={changeLocaleAction} />

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
                    aria-label={t("openMobileMenu")}
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
                        <strong className="text-foreground">
                          {t("addressLabel")}
                        </strong>{" "}
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
                        {t("themeTitle")}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t("themeDesc")}
                      </span>
                    </div>
                    <ModeToggle />
                  </div>

                  {/* Mạng xã hội trong mobile drawer */}
                  <div className="mt-4 rounded-lg border border-border/80 bg-muted/40 p-3.5">
                    <div className="text-sm font-semibold text-muted-foreground mb-2.5">
                      {t("officialSocialTitle")}
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
                    <span>
                      {t("consultationHotline")} {SHOP_INFO.HOTLINE.TEXT}
                    </span>
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
