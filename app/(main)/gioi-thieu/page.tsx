import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  Building2,
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Layers,
  Check,
  PhoneCall,
  ArrowRight,
  Target,
  Compass,
  Zap,
  ClipboardList,
  FileText,
  Truck,
  HeartHandshake,
  History,
  MapPin,
  Package,
  Headphones,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import SHOP_INFO from "@/constants/info";

export const metadata: Metadata = {
  title: "Giới Thiệu Về Kim Phú | Chuyên Cung Cấp Kệ Sắt Kho Hàng Công Nghiệp",
  description:
    "Kim Phú chuyên cung cấp các dòng kệ Selective, kệ trung tải và kệ V lỗ, đáp ứng nhu cầu lưu trữ hàng hóa tại kho xưởng, nhà máy, cửa hàng và doanh nghiệp.",
};

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  const developmentMilestones = [
    {
      year: "2014",
      tag: t("timeline.items.y2014.tag"),
      highlight: t("timeline.items.y2014.highlight"),
      title: t("timeline.items.y2014.title"),
      desc: t("timeline.items.y2014.desc"),
      icon: Building2,
      isCurrent: false,
    },
    {
      year: "2017",
      tag: t("timeline.items.y2017.tag"),
      highlight: t("timeline.items.y2017.highlight"),
      title: t("timeline.items.y2017.title"),
      desc: t("timeline.items.y2017.desc"),
      icon: Package,
      isCurrent: false,
    },
    {
      year: "2019",
      tag: t("timeline.items.y2019.tag"),
      highlight: t("timeline.items.y2019.highlight"),
      title: t("timeline.items.y2019.title"),
      desc: t("timeline.items.y2019.desc"),
      icon: MapPin,
      isCurrent: false,
    },
    {
      year: "2021",
      tag: t("timeline.items.y2021.tag"),
      highlight: t("timeline.items.y2021.highlight"),
      title: t("timeline.items.y2021.title"),
      desc: t("timeline.items.y2021.desc"),
      icon: Layers,
      isCurrent: false,
    },
    {
      year: "2024",
      tag: t("timeline.items.y2024.tag"),
      highlight: t("timeline.items.y2024.highlight"),
      title: t("timeline.items.y2024.title"),
      desc: t("timeline.items.y2024.desc"),
      icon: Zap,
      isCurrent: false,
    },
    {
      year: "2026",
      tag: t("timeline.items.y2026.tag"),
      highlight: t("timeline.items.y2026.highlight"),
      title: t("timeline.items.y2026.title"),
      desc: t("timeline.items.y2026.desc"),
      icon: Award,
      isCurrent: true,
    },
  ];

  const stats = [
    {
      value: 40,
      decimals: 0,
      prefix: "",
      suffix: "+",
      label: t("stats.stat1.label"),
      desc: t("stats.stat1.desc"),
      icon: Layers,
    },
    {
      value: 95,
      decimals: 0,
      prefix: "",
      suffix: "%",
      label: t("stats.stat2.label"),
      desc: t("stats.stat2.desc"),
      icon: HeartHandshake,
    },
    {
      value: 8,
      decimals: 0,
      prefix: "0",
      suffix: "",
      label: t("stats.stat3.label"),
      desc: t("stats.stat3.desc"),
      icon: MapPin,
    },
    {
      value: 24,
      decimals: 0,
      prefix: "",
      suffix: "h",
      label: t("stats.stat4.label"),
      desc: t("stats.stat4.desc"),
      icon: Clock,
    },
  ];

  const coreValues = [
    { step: "01", title: t("values.items.v1.title"), desc: t("values.items.v1.desc") },
    { step: "02", title: t("values.items.v2.title"), desc: t("values.items.v2.desc") },
    { step: "03", title: t("values.items.v3.title"), desc: t("values.items.v3.desc") },
    { step: "04", title: t("values.items.v4.title"), desc: t("values.items.v4.desc") },
    { step: "05", title: t("values.items.v5.title"), desc: t("values.items.v5.desc") },
    { step: "06", title: t("values.items.v6.title"), desc: t("values.items.v6.desc") },
  ];

  const capabilities = [
    { title: t("capabilities.items.c1.title"), desc: t("capabilities.items.c1.desc") },
    { title: t("capabilities.items.c2.title"), desc: t("capabilities.items.c2.desc") },
    { title: t("capabilities.items.c3.title"), desc: t("capabilities.items.c3.desc") },
  ];

  const processSteps = [
    { step: "01", icon: ClipboardList, title: t("process.steps.s1.title"), desc: t("process.steps.s1.desc") },
    { step: "02", icon: Headphones, title: t("process.steps.s2.title"), desc: t("process.steps.s2.desc") },
    { step: "03", icon: FileText, title: t("process.steps.s3.title"), desc: t("process.steps.s3.desc") },
    { step: "04", icon: Truck, title: t("process.steps.s4.title"), desc: t("process.steps.s4.desc") },
    { step: "05", icon: ShieldCheck, title: t("process.steps.s5.title"), desc: t("process.steps.s5.desc") },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
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

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Sparkles className="size-4 text-orange-500" />
                  {t("hero.badge")}
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15] uppercase">
                  {t("hero.titleStart")}{" "}
                  <span className="text-primary">{t("hero.titleHighlight")}</span>
                  {t("hero.titleEnd") ? ` ${t("hero.titleEnd")}` : ""}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("hero.desc")}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/san-pham"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 uppercase"
                  >
                    <span>{t("hero.primaryCta")}</span>
                    <ArrowRight className="size-4" />
                  </Link>

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

            <div className="lg:col-span-5">
              <ScrollReveal direction="left" duration={750} delay={200}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl">
                    <img
                      src="/images/hero-warehouse.jpg"
                      alt={t("hero.imageBadge")}
                      className="h-[360px] sm:h-[420px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-xs mb-2">
                        <Layers className="size-4" />
                        {t("hero.imageBadge")}
                      </div>
                      <p className="text-sm font-medium text-white/90">
                        {t("hero.imageCaption")}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xl backdrop-blur-md">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-xl">
                      <CountUp value={3} suffix="+" duration={1400} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-foreground uppercase">
                        {t("hero.floatTitle")}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t("hero.floatDesc")}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                  duration={600}
                >
                  <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                      <Icon className="size-5 text-orange-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      <CountUp
                        value={stat.value}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        delay={idx * 120}
                      />
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground uppercase">
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

      {/* 2. CÂU CHUYỆN THƯƠNG HIỆU & TẦM NHÌN - SỨ MỆNH */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="right" duration={700}>
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
                  <img
                    src="/images/factory-production.jpg"
                    alt={t("story.imageTitle")}
                    className="h-[380px] sm:h-[450px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm font-bold text-orange-400 uppercase tracking-wider block mb-1">
                      {t("story.imageTag")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {t("story.imageTitle")}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Compass className="size-4 text-orange-500" />
                  {t("story.badge")}
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  {t("story.title")}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("story.p1")}
                </p>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("story.p2")}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 transition-colors hover:border-primary">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-3">
                      <Target className="size-5" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {t("story.visionTitle")}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t("story.visionDesc")}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 transition-colors hover:border-orange-500">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-white mb-3">
                      <Zap className="size-5" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {t("story.missionTitle")}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t("story.missionDesc")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN */}
      <section className="relative border-b border-border/80 bg-muted/30 py-16 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(59,130,246,0.06),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <History className="size-4 text-orange-500" />
                {t("timeline.badge")}
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground uppercase">
                {t("timeline.title")}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("timeline.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mt-14 sm:mt-16">
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-5 lg:left-1/2 lg:-translate-x-1/2 w-0.5 bg-linear-to-b from-primary/25 via-primary to-orange-500"
            />

            <div className="space-y-8 lg:space-y-12">
              {developmentMilestones.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center"
                  >
                    <div
                      className={`absolute left-5 lg:left-1/2 -translate-x-1/2 z-10 flex size-11 sm:size-12 items-center justify-center rounded-full border-4 border-background shadow-md font-black text-xs sm:text-sm ${
                        item.isCurrent
                          ? "bg-orange-500 text-white ring-4 ring-orange-500/20"
                          : "bg-primary text-primary-foreground ring-4 ring-primary/15"
                      }`}
                    >
                      {item.year}
                    </div>

                    <div
                      className={`pl-14 sm:pl-16 lg:pl-0 ${
                        isEven
                          ? "lg:col-start-1 lg:pr-4"
                          : "lg:col-start-2 lg:pl-4"
                      }`}
                    >
                      <ScrollReveal
                        direction={isEven ? "right" : "left"}
                        delay={idx * 80}
                        duration={650}
                      >
                        <div
                          className={`group rounded-2xl border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                            item.isCurrent
                              ? "border-orange-500/50 ring-1 ring-orange-500/20"
                              : "border-border/80 hover:border-primary/50"
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                                  item.isCurrent
                                    ? "bg-orange-500 text-white"
                                    : "bg-primary/10 text-primary"
                                }`}
                              >
                                <Icon
                                  className={`size-5 ${
                                    item.isCurrent
                                      ? "text-white"
                                      : "text-orange-500"
                                  }`}
                                />
                              </div>
                              <span
                                className={`text-sm font-bold uppercase tracking-wider ${
                                  item.isCurrent
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-primary"
                                }`}
                              >
                                {item.tag}
                              </span>
                            </div>

                            <span
                              className={`rounded-full px-3 py-1 text-xs sm:text-sm font-bold ${
                                item.isCurrent
                                  ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              {item.highlight}
                            </span>
                          </div>

                          <h3 className="mt-4 text-lg sm:text-xl font-black text-foreground leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 GIÁ TRỊ CỐT LÕI */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <ShieldCheck className="size-4 text-orange-500" />
                {t("values.badge")}
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground uppercase">
                {t("values.title")}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("values.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                duration={600}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute -top-3 -right-2 text-5xl font-black text-muted/25 select-none transition-colors group-hover:text-primary/10">
                    {val.step}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <CheckCircle2 className="size-5 text-orange-500" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">
                        #{val.step}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {val.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                    <span>{t("values.footerLabel")}</span>
                    <Check className="size-4 text-orange-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NĂNG LỰC CUNG ỨNG & HỖ TRỢ */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Truck className="size-4 text-orange-500" />
                  {t("capabilities.badge")}
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground uppercase">
                  {t("capabilities.title")}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("capabilities.desc")}
                </p>

                <div className="mt-6 space-y-3.5">
                  {capabilities.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs"
                    >
                      <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                        <Check className="size-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={700}>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/san-pham/ke-trung-tai"
                    className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-all hover:border-primary/50"
                  >
                    <img
                      src="/images/racking-medium.jpg"
                      alt={t("capabilities.card1Title")}
                      className="h-56 sm:h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-3 text-center bg-card border-t border-border/60">
                      <span className="text-sm font-bold text-foreground block uppercase group-hover:text-primary transition-colors">
                        {t("capabilities.card1Title")}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t("capabilities.card1Desc")}
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/san-pham/ke-v-lo"
                    className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-all hover:border-primary/50"
                  >
                    <img
                      src="/images/racking-v-lo.jpg"
                      alt={t("capabilities.card2Title")}
                      className="h-56 sm:h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-3 text-center bg-card border-t border-border/60">
                      <span className="text-sm font-bold text-foreground block uppercase group-hover:text-primary transition-colors">
                        {t("capabilities.card2Title")}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t("capabilities.card2Desc")}
                      </span>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUY TRÌNH CUNG ỨNG & HỖ TRỢ KHÁCH HÀNG */}
      <section className="border-b border-border/80 bg-muted/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <ClipboardList className="size-4 text-orange-500" />
                {t("process.badge")}
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground uppercase">
                {t("process.title")}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("process.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-xs">
                          {step.step}
                        </span>
                        <Icon className="size-5 text-orange-500 transition-transform group-hover:scale-110" />
                      </div>

                      <h3 className="mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 text-sm font-semibold text-primary flex items-center gap-1">
                      <span>{t("process.footerLabel")}</span>
                      <Check className="size-4 text-orange-500" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="relative bg-background py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 shadow-xl text-center">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-bold text-white shadow-xs uppercase">
                  <Sparkles className="size-4" />
                  {t("cta.badge")}
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  {t("cta.title")}
                </h2>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("cta.desc")}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 uppercase"
                  >
                    <span>{t("cta.primaryBtn")}</span>
                    <ArrowRight className="size-4.5" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-8 py-3.5 text-sm sm:text-base font-bold text-foreground hover:bg-muted transition-colors"
                  >
                    <PhoneCall className="size-4.5 text-orange-500" />
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
