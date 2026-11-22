"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import SHOP_INFO from "@/constants/info";
import {
  Star,
  Quote,
  Building2,
  CheckCircle2,
  ThumbsUp,
  Warehouse,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";

interface Testimonial {
  id: number;
  name: string;
  category: "all" | "logistics" | "cold" | "factory" | "retail";
  categoryLabel: string;
  avatarText: string;
  scale: string;
  rating: number;
  quote: string;
  metrics: string;
}

export default function TestimonialsSection() {
  const t = useTranslations("HomePage.testimonials");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t("items.item1.name"),
      category: "logistics",
      categoryLabel: t("items.item1.categoryLabel"),
      avatarText: "TQ",
      scale: t("items.item1.scale"),
      rating: 5,
      quote: t("items.item1.quote"),
      metrics: t("items.item1.metrics"),
    },
    {
      id: 2,
      name: t("items.item2.name"),
      category: "cold",
      categoryLabel: t("items.item2.categoryLabel"),
      avatarText: "ML",
      scale: t("items.item2.scale"),
      rating: 5,
      quote: t("items.item2.quote"),
      metrics: t("items.item2.metrics"),
    },
    {
      id: 3,
      name: t("items.item3.name"),
      category: "retail",
      categoryLabel: t("items.item3.categoryLabel"),
      avatarText: "HN",
      scale: t("items.item3.scale"),
      rating: 5,
      quote: t("items.item3.quote"),
      metrics: t("items.item3.metrics"),
    },
    {
      id: 4,
      name: t("items.item4.name"),
      category: "factory",
      categoryLabel: t("items.item4.categoryLabel"),
      avatarText: "VH",
      scale: t("items.item4.scale"),
      rating: 5,
      quote: t("items.item4.quote"),
      metrics: t("items.item4.metrics"),
    },
    {
      id: 5,
      name: t("items.item5.name"),
      category: "retail",
      categoryLabel: t("items.item5.categoryLabel"),
      avatarText: "TH",
      scale: t("items.item5.scale"),
      rating: 5,
      quote: t("items.item5.quote"),
      metrics: t("items.item5.metrics"),
    },
    {
      id: 6,
      name: t("items.item6.name"),
      category: "factory",
      categoryLabel: t("items.item6.categoryLabel"),
      avatarText: "MĐ",
      scale: t("items.item6.scale"),
      rating: 5,
      quote: t("items.item6.quote"),
      metrics: t("items.item6.metrics"),
    },
  ];

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "logistics", label: t("categories.logistics") },
    { key: "cold", label: t("categories.cold") },
    { key: "factory", label: t("categories.factory") },
    { key: "retail", label: t("categories.retail") },
  ] as const;

  const stats = [
    {
      value: 99.2,
      decimals: 1,
      suffix: t("stats.stat1.suffix"),
      title: t("stats.stat1.title"),
      desc: t("stats.stat1.desc"),
      icon: ShieldCheck,
    },
    {
      value: 1500,
      decimals: 0,
      suffix: t("stats.stat2.suffix"),
      title: t("stats.stat2.title"),
      desc: t("stats.stat2.desc"),
      icon: Warehouse,
    },
    {
      value: 10,
      decimals: 0,
      suffix: t("stats.stat3.suffix"),
      title: t("stats.stat3.title"),
      desc: t("stats.stat3.desc"),
      icon: Building2,
    },
    {
      value: 100,
      decimals: 0,
      suffix: t("stats.stat4.suffix"),
      title: t("stats.stat4.title"),
      desc: t("stats.stat4.desc"),
      icon: TrendingUp,
    },
  ];

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((item) => item.category === activeCategory);

  return (
    <section className="relative border-b border-border/80 bg-background py-16 sm:py-24 overflow-hidden">
      {/* Nền hiệu ứng trang trí nhẹ */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section với ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <ThumbsUp className="size-4 text-orange-500" />
              {t("badge")}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Thước đo uy tín đồng bộ (Animation tuần tự từng chỉ số) */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                duration={600}
              >
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-muted/40 p-4 text-center sm:p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-md h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5.5" />
                  </div>
                  <div className="mt-3 text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      delay={idx * 100}
                    />
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-bold text-foreground">
                    {stat.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.desc}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tabs tự code gọn gàng (Animation xuất hiện nhẹ) */}
        <ScrollReveal direction="up" delay={150} duration={600}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-muted/70 p-1 shadow-2xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Lưới danh sách đánh giá khách hàng (Animation so le stagger mượt mà) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={(index % 3) * 120}
              duration={650}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                {/* Watermark Quote Icon */}
                <Quote className="absolute top-5 right-5 size-10 text-muted/30 transition-colors group-hover:text-primary/20" />

                <div>
                  {/* Header: Star Rating màu Cam + Badge Xanh */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-orange-500">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="size-4.5 fill-orange-500" />
                      ))}
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Highlight metric badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="size-4 text-orange-500" />
                    {item.metrics}
                  </div>

                  {/* Nội dung đánh giá */}
                  <p className="mt-3.5 text-sm sm:text-base text-foreground/90 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Thông tin khách hàng & Dự án */}
                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl font-bold text-sm bg-primary text-primary-foreground shadow-xs">
                      {item.avatarText}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-base font-bold text-foreground">
                        {item.name}
                      </h4>
                      <p className="truncate text-sm text-muted-foreground">
                        {item.scale}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lời kêu gọi hành động phía dưới: Nền Xanh nhẹ + Nút Hotline Cam */}
        <ScrollReveal direction="up" delay={200} duration={700}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="max-w-2xl text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {t("cta.title")}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                {t("cta.desc")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {t("cta.hotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
              </a>
              <a
                href="#bao-gia"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm sm:text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-primary/50 cursor-pointer"
              >
                {t("cta.surveyBtn")}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
