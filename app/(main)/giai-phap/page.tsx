import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Layers,
  PhoneCall,
  Sliders,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import HomeCarousel from "@/app/(main)/_components/hero-carousel";
import SHOP_INFO from "@/constants/info";
import SolutionsExplorer from "./_components/solutions-explorer";

export const metadata: Metadata = {
  title: "Giải Pháp Kệ Sắt Tối Ưu Không Gian Lưu Trữ | Kệ Kim Phú",
  description:
    "Từ kho hàng, nhà xưởng đến cửa hàng kinh doanh, Kim Phú cung cấp đa dạng kệ Selective, kệ trung tải và kệ V lỗ. Hỗ trợ tư vấn quy cách và báo giá theo nhu cầu thực tế.",
};

export default async function SolutionsPage() {
  const t = await getTranslations("SolutionsPage");

  const heroMetrics = [
    {
      type: "number" as const,
      value: 80,
      suffix: "%",
      label: t("metrics.m1.label"),
      desc: t("metrics.m1.desc"),
      icon: TrendingUp,
    },
    {
      type: "number" as const,
      value: 100,
      suffix: "%",
      label: t("metrics.m2.label"),
      desc: t("metrics.m2.desc"),
      icon: CheckCircle2,
    },
    {
      type: "number" as const,
      value: 3,
      suffix: t("metrics.m3.suffix"),
      label: t("metrics.m3.label"),
      desc: t("metrics.m3.desc"),
      icon: Layers,
    },
    {
      type: "text" as const,
      text: t("metrics.m4.text"),
      label: t("metrics.m4.label"),
      desc: t("metrics.m4.desc"),
      icon: Sliders,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 0. BANNER SLIDE CHUNG */}
      <HomeCarousel />

      {/* 1. BREADCRUMB & HERO BANNER */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={500}>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors font-medium"
              >
                {t("breadcrumb.home")}
              </Link>
              <ChevronRight className="size-4 opacity-50" />
              <span className="text-foreground font-semibold">
                {t("breadcrumb.current")}
              </span>
            </nav>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="up" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Sparkles className="size-4 text-orange-500" />
                {t("hero.badge")}
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                {t("hero.titleStart")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
                {t("hero.titleEnd") ? ` ${t("hero.titleEnd")}` : ""}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("hero.desc")}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#giai-phap-theo-nhu-cau"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 uppercase"
                >
                  <span>{t("hero.primaryCta")}</span>
                  <ArrowRight className="size-4" />
                </a>

                <a
                  href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                >
                  <PhoneCall className="size-4 text-orange-500" />
                  <span>
                    {t("hero.hotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {heroMetrics.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={stat.label}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                >
                  <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                      <Icon className="size-5 text-orange-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      {stat.type === "number" ? (
                        <CountUp
                          value={stat.value}
                          suffix={stat.suffix}
                          delay={idx * 100}
                        />
                      ) : (
                        <span>{stat.text}</span>
                      )}
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {stat.desc}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. KHÁM PHÁ GIẢI PHÁP THEO NHU CẦU */}
      <SolutionsExplorer />

      {/* 3. BANNER CTA */}
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
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer uppercase"
                  >
                    <FileText className="size-5" />
                    <span>{t("cta.primaryBtn")}</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white hover:text-primary px-6 py-3.5 text-base font-bold text-white shadow-xs transition-all cursor-pointer"
                  >
                    <PhoneCall className="size-5" />
                    <span>
                      {t("cta.hotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
