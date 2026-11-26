"use client";

import ScrollReveal from "@/components/scroll-reveal";
import {
  industrySolutions,
  solutionSectorTabs,
  type SolutionSectorKey,
} from "@/data/solutions";
import { cn } from "@/lib/utils";
import { AlertCircle, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function SolutionsExplorer() {
  const t = useTranslations("SolutionsPage.explorer");
  const [activeSector, setActiveSector] =
    React.useState<SolutionSectorKey>("all");

  const filteredSolutions = React.useMemo(() => {
    if (activeSector === "all") return industrySolutions;
    return industrySolutions.filter((item) => item.sector === activeSector);
  }, [activeSector]);

  return (
    <section
      id="giai-phap-theo-nhu-cau"
      className="border-b border-border/80 bg-background py-16 sm:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <Layers className="size-4 text-orange-500" />
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

        {/* Thanh Tabs lọc theo nhu cầu */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-border/80 bg-card p-1.5 shadow-2xs">
              {solutionSectorTabs.map((tab) => {
                const isActive = activeSector === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveSector(tab.key)}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {t(`tabs.${tab.key}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Danh sách bài giải pháp */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredSolutions.map((sol, idx) => {
            const k = sol.sector;
            const challenges = [
              t(`items.${k}.c1`),
              t(`items.${k}.c2`),
              t(`items.${k}.c3`),
            ];
            const benefits = [
              t(`items.${k}.b1`),
              t(`items.${k}.b2`),
              t(`items.${k}.b3`),
            ];

            return (
              <ScrollReveal
                key={sol.id}
                direction="up"
                delay={(idx % 2) * 100}
                duration={650}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-muted">
                    <Image
                      src={sol.image}
                      alt={t(`items.${k}.title`)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-primary px-3 py-1 text-xs sm:text-sm font-bold text-primary-foreground shadow-xs uppercase">
                        {t(`items.${k}.sectorLabel`)}
                      </span>
                      <span className="rounded-lg bg-orange-500 px-3 py-1 text-xs sm:text-sm font-bold text-white shadow-xs">
                        {t(`items.${k}.badge`)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-foreground leading-snug group-hover:text-primary transition-colors">
                        {t(`items.${k}.title`)}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t(`items.${k}.summary`)}
                      </p>

                      <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                          <AlertCircle className="size-4 shrink-0" />
                          {t("challengesTitle")}
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-sm text-muted-foreground">
                          {challenges.map((ch, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                          <CheckCircle2 className="size-4 shrink-0" />
                          {t("benefitsTitle")}
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-sm text-foreground/90">
                          {benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                        {t("recommendedTitle")}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        {sol.recommendedSystems.map((sys) => (
                          <Link
                            key={sys.slug}
                            href={`/san-pham/${sys.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            <span>{t(`systems.${sys.slug}`)}</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/lien-he"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all cursor-pointer uppercase"
                      >
                        <span>{t("cardCta")}</span>
                        <ArrowRight className="size-4" />
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
