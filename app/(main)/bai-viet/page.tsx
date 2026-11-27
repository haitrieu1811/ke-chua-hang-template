import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BookOpen, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import ArticlesFeed from "./_components/articles-feed";

export const metadata: Metadata = {
  title: "Kiến Thức, Tin Tức & Câu Chuyện Kim Phú | Kệ Kim Phú",
  description:
    "Nơi cập nhật kiến thức về kệ sắt và vật tư công nghiệp, tin tức thị trường, xu hướng ngành cùng những câu chuyện thực tế trong hành trình phục vụ khách hàng của Kim Phú.",
};

export default async function ArticlesPage() {
  const t = await getTranslations("ArticlesPage");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 1. BREADCRUMB & HERO BANNER TIN TỨC */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-16 overflow-hidden">
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

          <ScrollReveal direction="up" duration={700}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <BookOpen className="size-4 text-orange-500" />
                {t("hero.badge")}
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                {t("hero.titleStart")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("hero.desc")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. DANH SÁCH BÀI VIẾT HÀNG NGANG 3 CỘT */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ArticlesFeed />
        </div>
      </section>
    </div>
  );
}
