import * as React from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import SHOP_INFO from "@/constants/info";
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  Eye,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Info,
  PhoneCall,
  Share2,
  Bookmark,
  Award,
  Layers,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import { getLocalizedArticle } from "@/data/articles-i18n";
import ArticleShare from "./_components/article-share";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Không tìm thấy bài viết | Kệ Chứa Hàng Pro",
    };
  }

  return {
    title: `${article.title} | Cẩm Nang Kho Vận Chuyên Sâu`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const rawArticle = getArticleBySlug(slug);

  if (!rawArticle) {
    notFound();
  }

  const [locale, t, tList] = await Promise.all([
    getLocale(),
    getTranslations("ArticleDetailPage"),
    getTranslations("ArticlesList"),
  ]);

  const article = getLocalizedArticle(rawArticle, locale);

  const getArticleMeta = (id: number, fallbackTitle: string, fallbackCat: string) => {
    if (id >= 1 && id <= 7) {
      const key = String(id) as "1" | "2" | "3" | "4" | "5" | "6" | "7";
      return {
        title: tList(`items.${key}.title`),
        category: tList(`items.${key}.category`),
      };
    }
    return { title: fallbackTitle, category: fallbackCat };
  };

  const articleIdKey =
    article.id >= 1 && article.id <= 7
      ? (String(article.id) as "1" | "2" | "3" | "4" | "5" | "6" | "7")
      : null;

  const displayTitle = articleIdKey
    ? tList(`items.${articleIdKey}.title`)
    : article.title;
  const displayExcerpt = articleIdKey
    ? tList(`items.${articleIdKey}.excerpt`)
    : article.excerpt;
  const displayCategory = articleIdKey
    ? tList(`items.${articleIdKey}.category`)
    : article.categoryName;
  const displayReadTime = articleIdKey
    ? tList(`items.${articleIdKey}.readTime`)
    : article.readTime;

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const allArticles = getAllArticles();
  const trendingArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 4);

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="border-b border-border/80 bg-muted/30 py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <Link href="/bai-viet" className="hover:text-primary transition-colors">
              {t("breadcrumb.articles")}
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <span className="font-semibold text-foreground truncate max-w-xs sm:max-w-md">
              {displayTitle}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Tiêu Đề Bài Viết & Tác Giả */}
      <header className="border-b border-border/80 bg-linear-to-b from-primary/10 via-background to-background py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-primary px-3 py-1 text-sm font-bold text-white shadow-xs">
              {displayCategory}
            </span>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4 text-orange-500" />
                {article.date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-primary" />
                {displayReadTime}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="size-4 text-muted-foreground" />
                {article.views}
              </span>
            </div>
          </div>

          <h1 className="mt-4 text-2xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
            {displayTitle}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {displayExcerpt}
          </p>

          {/* Khối tác giả */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="size-6 text-orange-500" />
              </div>
              <div>
                <p className="text-base font-bold text-foreground">
                  {t("author")}
                </p>
              </div>
            </div>

            <a
              href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-bold text-primary transition-all cursor-pointer"
            >
              <PhoneCall className="size-4" />
              <span>
                {t("consultHotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. Thân Bài Viết (Layout 2 Cột: Nội dung chính 8/12 + Sidebar 4/12) */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Cột Trái (8/12): Nội dung bài viết */}
            <main className="lg:col-span-8 space-y-8">
              {/* Ảnh bìa bài viết */}
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-16/9 object-cover object-center"
                />
              </div>

              {/* Hộp Điểm Nhấn Kỹ Thuật (Key Takeaways) */}
              <div className="rounded-2xl border-2 border-orange-500/30 bg-orange-500/5 p-6 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Điểm Nhấn Kỹ Thuật Cần Nhớ Trong Bài
                  </h3>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-foreground font-medium">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mục Lục Nhanh (In-content Table of Contents) */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <BookOpen className="size-5 text-orange-500" />
                  <span>{t("tocTitle")}</span>
                </div>
                <nav className="mt-4 space-y-2">
                  {article.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-primary"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Các Phần Nội Dung Kỹ Thuật Chi Tiết */}
              <div className="space-y-10 text-foreground">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 space-y-4"
                  >
                    <h2 className="text-xl sm:text-2xl font-black text-foreground border-b border-border/80 pb-3">
                      {section.heading}
                    </h2>

                    {/* Đoạn văn */}
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base text-muted-foreground leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Danh sách gạch đầu dòng (nếu có) */}
                    {section.bullets && (
                      <ul className="space-y-2 rounded-xl bg-muted/30 p-4 border border-border/60">
                        {section.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-foreground"
                          >
                            <span className="text-orange-500 font-black shrink-0 mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Hộp Callout ghi chú / cảnh báo (nếu có) */}
                    {section.callout && (
                      <div
                        className={`rounded-xl border p-5 ${
                          section.callout.type === "warning"
                            ? "border-orange-500/40 bg-orange-500/10 text-foreground"
                            : section.callout.type === "tip"
                            ? "border-primary/40 bg-primary/10 text-foreground"
                            : "border-border/80 bg-muted/40 text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2 font-bold text-base mb-1.5">
                          {section.callout.type === "warning" && (
                            <AlertTriangle className="size-5 text-orange-500" />
                          )}
                          {section.callout.type === "tip" && (
                            <Lightbulb className="size-5 text-orange-500" />
                          )}
                          {section.callout.type === "note" && (
                            <Info className="size-5 text-primary" />
                          )}
                          <span>{section.callout.title}</span>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {section.callout.content}
                        </p>
                      </div>
                    )}

                    {/* Bảng thông số / so sánh kỹ thuật (nếu có) */}
                    {section.table && (
                      <div className="overflow-x-auto rounded-xl border border-border/80">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-muted/70 border-b border-border/80">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="px-4 py-3.5 font-bold text-foreground"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={
                                  rIdx % 2 === 0
                                    ? "bg-card"
                                    : "bg-muted/30"
                                }
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className="border-b border-border/60 px-4 py-3 text-muted-foreground font-medium"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Ảnh minh họa trong phần (nếu có) */}
                    {section.image && (
                      <figure className="overflow-hidden rounded-xl border border-border/80">
                        <img
                          src={section.image.src}
                          alt={section.image.caption}
                          className="w-full aspect-16/10 object-cover"
                        />
                        <figcaption className="bg-muted/50 p-3 text-center text-sm font-medium text-muted-foreground italic">
                          {section.image.caption}
                        </figcaption>
                      </figure>
                    )}
                  </section>
                ))}
              </div>

              {/* Nút chia sẻ bài viết (Client Component) */}
              <div className="pt-6">
                <ArticleShare title={article.title} slug={article.slug} />
              </div>

              {/* Khối giới thiệu tác giả & tư vấn */}
              <div className="rounded-2xl border border-border/80 bg-muted/20 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
                    {article.author.slice(0, 1)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {t("author")}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t("authorBio")}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-bold text-white transition-all cursor-pointer"
                      >
                        <PhoneCall className="size-4" />
                        <span>{t("bookConsult")}</span>
                      </a>
                      <Link
                        href="/lien-he"
                        className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-all"
                      >
                        <span>{t("sendRequest")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Cột Phải (4/12): Sidebar cố định (Hotline, Ebook, Bài xem nhiều) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Hộp Tư Vấn Kỹ Thuật Nhanh */}
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 shadow-sm">
                  <span className="inline-block rounded-md bg-orange-500 px-2.5 py-1 text-sm font-bold text-white">
                    {t("sidebar.badge")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {t("sidebar.title")}
                  </h3>

                  <div className="mt-5 space-y-2.5">
                    <a
                      href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-3 text-sm font-bold text-white shadow-xs transition-all cursor-pointer"
                    >
                      <PhoneCall className="size-4" />
                      <span>
                        {t("sidebar.hotline", {
                          hotline: SHOP_INFO.HOTLINE.TEXT,
                        })}
                      </span>
                    </a>

                    <Link
                      href="/lien-he"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-card hover:bg-muted px-4 py-3 text-sm font-bold text-foreground transition-all"
                    >
                      <span>{t("sidebar.quoteBtn")}</span>
                    </Link>
                  </div>
                </div>

                {/* Danh Sách Bài Viết Đọc Nhiều Nhất */}
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <h3 className="text-base font-bold text-foreground border-b border-border/60 pb-3">
                    {t("sidebar.mostRead")}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {trendingArticles.map((tArticle) => {
                      const meta = getArticleMeta(
                        tArticle.id,
                        tArticle.title,
                        tArticle.categoryName,
                      );
                      return (
                        <article key={tArticle.id} className="group">
                          <Link
                            href={`/bai-viet/${tArticle.slug}`}
                            className="flex items-start gap-3"
                          >
                            <img
                              src={tArticle.image}
                              alt={meta.title}
                              className="size-16 rounded-xl object-cover shrink-0 border border-border/60"
                            />
                            <div>
                              <span className="text-sm font-bold text-primary block">
                                {meta.category}
                              </span>
                              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-0.5">
                                {meta.title}
                              </h4>
                              <span className="text-sm text-muted-foreground block mt-1">
                                {tArticle.date}
                              </span>
                            </div>
                          </Link>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Bài Viết Liên Quan Khuyên Đọc */}
      <section className="border-t border-border/80 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                {t("related.badge")}
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-foreground">
                {t("related.title")}
              </h2>
            </div>

            <Link
              href="/bai-viet"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-orange-500 transition-colors"
            >
              <span>{t("related.viewAll")}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((rArticle, index) => {
              const rKey =
                rArticle.id >= 1 && rArticle.id <= 7
                  ? (String(rArticle.id) as "1" | "2" | "3" | "4" | "5" | "6" | "7")
                  : null;
              const rTitle = rKey ? tList(`items.${rKey}.title`) : rArticle.title;
              const rCat = rKey
                ? tList(`items.${rKey}.category`)
                : rArticle.categoryName;
              const rReadTime = rKey
                ? tList(`items.${rKey}.readTime`)
                : rArticle.readTime;
              const rExcerpt = rKey
                ? tList(`items.${rKey}.excerpt`)
                : rArticle.excerpt;

              return (
                <ScrollReveal
                  key={rArticle.id}
                  direction="up"
                  delay={index * 90}
                  duration={600}
                  className="h-full"
                >
                  <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                    <Link
                      href={`/bai-viet/${rArticle.slug}`}
                      className="relative block aspect-16/10 w-full overflow-hidden bg-muted"
                    >
                      <img
                        src={rArticle.image}
                        alt={rTitle}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-md bg-primary/90 px-2.5 py-1 text-sm font-bold text-white shadow-xs">
                          {rCat}
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="size-3.5 text-orange-500" />
                            {rArticle.date}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3.5 text-primary" />
                            {rReadTime}
                          </span>
                        </div>

                        <h3 className="mt-2 text-base font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                          <Link href={`/bai-viet/${rArticle.slug}`}>
                            {rTitle}
                          </Link>
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {rExcerpt}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-border/60 pt-4">
                        <Link
                          href={`/bai-viet/${rArticle.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-orange-500 transition-colors"
                        >
                          <span>{t("related.readMore")}</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
