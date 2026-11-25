import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import { getAllProducts } from "@/data/products";
import {
  ArrowRight,
  ChevronRight,
  Headphones,
  Layers,
  PhoneCall,
  Sliders,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import * as React from "react";
import ProductListClient from "./_components/product-list-client";

export const metadata: Metadata = {
  title: "Hệ Thống Giá Kệ Chứa Hàng Nhà Kho Chuyên Dụng | Kệ Kim Phú",
  description:
    "Kim Phú cung cấp đa dạng kệ Selective, kệ trung tải và kệ V lỗ. Giải pháp tối ưu hóa không gian kho bãi từ kệ tải trọng 300 - 4000 kg/pallet.",
};

const CORE_SLUGS = new Set(["ke-selective", "ke-trung-tai", "ke-v-lo"]);

export default async function ProductsPage() {
  const t = await getTranslations("ProductsPage");
  const products = getAllProducts().filter((p) => CORE_SLUGS.has(p.slug));

  const whyChooseItems = [
    {
      step: "01",
      icon: Layers,
      title: t("whyChoose.items.w1.title"),
      description: t("whyChoose.items.w1.desc"),
    },
    {
      step: "02",
      icon: Headphones,
      title: t("whyChoose.items.w2.title"),
      description: t("whyChoose.items.w2.desc"),
    },
    {
      step: "03",
      icon: Sliders,
      title: t("whyChoose.items.w3.title"),
      description: t("whyChoose.items.w3.desc"),
    },
    {
      step: "04",
      icon: Truck,
      title: t("whyChoose.items.w4.title"),
      description: t("whyChoose.items.w4.desc"),
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner & Breadcrumb */}
      <section className="relative overflow-hidden border-b border-border/80 bg-linear-to-b from-primary/10 via-background to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight className="size-4" />
            <span className="font-semibold text-foreground">
              {t("breadcrumb.current")}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <Layers className="size-4 text-orange-500" />
              {t("hero.badge")}
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Danh sách sản phẩm & Bộ lọc */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <React.Suspense fallback={null}>
            <ProductListClient initialProducts={products} />
          </React.Suspense>
        </div>
      </section>

      {/* 3. Vì sao doanh nghiệp lựa chọn kệ sắt Kim Phú? */}
      <section className="border-t border-border/80 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                {t("whyChoose.badge")}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
                {t("whyChoose.title")}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("whyChoose.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.step}
                  direction="up"
                  delay={idx * 90}
                  duration={600}
                  className="h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs hover:border-primary/50 transition-all">
                    <span className="absolute top-4 right-5 text-3xl font-black text-muted/40 select-none">
                      {item.step}
                    </span>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6 text-orange-500" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Banner Tư Vấn & Báo Giá Nhanh */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-blue-700 to-primary p-8 sm:p-12 text-white shadow-xl">
              <div className="relative z-10 max-w-3xl">
                <span className="inline-block rounded-full bg-orange-500 px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-white">
                  {t("cta.badge")}
                </span>
                <h2 className="mt-4 text-2xl sm:text-4xl font-black leading-tight">
                  {t("cta.title")}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
                  {t("cta.desc")}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer uppercase"
                  >
                    <PhoneCall className="size-5" />
                    <span>
                      {t("cta.hotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
                    </span>
                  </a>

                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white hover:text-primary px-6 py-3.5 text-base font-bold text-white shadow-xs transition-all cursor-pointer uppercase"
                  >
                    <span>{t("cta.quoteBtn")}</span>
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
