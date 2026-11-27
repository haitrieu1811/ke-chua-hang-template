"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Calendar, Clock, ArrowRight, User, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const homeArticles = [
  {
    id: "1" as const,
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    slug: "/bai-viet/thiet-ke-layout-kho-bai",
  },
  {
    id: "2" as const,
    image: "/images/racking-selective.jpg",
    date: "14/11/2026",
    slug: "/bai-viet/so-sanh-ke-selective-va-drive-in",
  },
  {
    id: "3" as const,
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    slug: "/bai-viet/tieu-chuan-kiem-dinh-do-vong-beam",
  },
  {
    id: "4" as const,
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    slug: "/bai-viet/giai-phap-ke-kho-dong-lanh",
  },
];

export default function ArticlesSection() {
  const t = useTranslations("HomeArticles");
  const tList = useTranslations("ArticlesList");

  return (
    <section className="relative border-b border-border/80 bg-background py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
                {t("title")}
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                href="/bai-viet"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-primary hover:text-orange-500 transition-colors"
              >
                <span>{t("viewAll")}</span>
                <ArrowRight className="size-4.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Lưới 4 bài viết nổi bật */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeArticles.map((item, index) => {
            const title = tList(`items.${item.id}.title`);
            const category = tList(`items.${item.id}.category`);
            const readTime = tList(`items.${item.id}.readTime`);
            const excerpt = tList(`items.${item.id}.excerpt`);

            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={(index % 4) * 90}
                duration={650}
                className="h-full"
              >
                <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  <Link
                    href={item.slug}
                    className="relative block aspect-16/10 w-full overflow-hidden bg-muted"
                  >
                    <img
                      src={item.image}
                      alt={title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-primary/90 backdrop-blur-md px-2.5 py-1 text-sm font-semibold text-white shadow-xs">
                        {category}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-orange-500" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-primary" />
                          {readTime}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2 leading-snug">
                        <Link href={item.slug}>{title}</Link>
                      </h3>

                      <p className="mt-2.5 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {excerpt}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border/60 pt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        <User className="size-3.5 text-primary" />
                        {t("author")}
                      </span>

                      <Link
                        href={item.slug}
                        className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-orange-500 transition-colors"
                      >
                        <span>{t("readMore")}</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
