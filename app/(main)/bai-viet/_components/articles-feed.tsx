"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { BookOpen, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

type ArticleId = "1" | "2" | "3" | "4" | "5" | "6" | "7";

interface ArticleMeta {
  id: ArticleId;
  category: "blog" | "news" | "story";
  image: string;
  date: string;
  slug: string;
}

const articlesMeta: ArticleMeta[] = [
  {
    id: "1",
    category: "blog",
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    slug: "/bai-viet/thiet-ke-layout-kho-bai",
  },
  {
    id: "2",
    category: "blog",
    image: "/images/racking-selective.jpg",
    date: "14/11/2026",
    slug: "/bai-viet/so-sanh-ke-selective-va-drive-in",
  },
  {
    id: "3",
    category: "blog",
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    slug: "/bai-viet/tieu-chuan-kiem-dinh-do-vong-beam",
  },
  {
    id: "4",
    category: "news",
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    slug: "/bai-viet/giai-phap-ke-kho-dong-lanh",
  },
  {
    id: "5",
    category: "story",
    image: "/images/racking-medium.jpg",
    date: "28/10/2026",
    slug: "/bai-viet/ke-tu-dong-radio-shuttle",
  },
  {
    id: "6",
    category: "story",
    image: "/images/racking-v-lo.jpg",
    date: "22/10/2026",
    slug: "/bai-viet/ke-san-lung-mezzanine-floor",
  },
  {
    id: "7",
    category: "news",
    image: "/images/racking-selective.jpg",
    date: "15/10/2026",
    slug: "/bai-viet/quy-trinh-bao-duong-dinh-ky",
  },
];

const TAB_KEYS = ["all", "blog", "news", "story"] as const;

export default function ArticlesFeed() {
  const t = useTranslations("ArticlesPage.feed");
  const tList = useTranslations("ArticlesList");
  const [activeTab, setActiveTab] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredArticles = React.useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return articlesMeta.filter((article) => {
      const matchTab = activeTab === "all" || article.category === activeTab;
      if (!matchTab) return false;
      if (!q) return true;
      const title = tList(`items.${article.id}.title`).toLowerCase();
      const excerpt = tList(`items.${article.id}.excerpt`).toLowerCase();
      const categoryLabel = t(`tabs.${article.category}`).toLowerCase();
      return title.includes(q) || excerpt.includes(q) || categoryLabel.includes(q);
    });
  }, [activeTab, searchQuery, t, tList]);

  return (
    <div className="space-y-8">
      {/* Bộ lọc danh mục & tìm kiếm gọn gàng */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-3.5 sm:p-4 shadow-2xs">
        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
          {TAB_KEYS.map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t(`tabs.${key}`)}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/80 bg-background pl-10 pr-4 py-2 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Lưới bài viết hàng ngang 3 cột */}
      {filteredArticles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <BookOpen className="mx-auto size-12 text-muted-foreground/40 mb-3" />
          <p className="text-base font-bold text-foreground">
            {t("emptyTitle")}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t("emptyDesc")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => {
            const [day, month] = article.date.split("/");
            const title = tList(`items.${article.id}.title`);
            const excerpt = tList(`items.${article.id}.excerpt`);

            return (
              <ScrollReveal
                key={article.id}
                direction="up"
                delay={(index % 3) * 80}
                duration={550}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  <Link
                    href={article.slug}
                    className="relative block aspect-16/10 w-full overflow-hidden bg-muted"
                  >
                    <img
                      src={article.image}
                      alt={title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-col items-center justify-center rounded-lg bg-white/95 dark:bg-zinc-900/95 px-2.5 py-1 text-center shadow-sm border border-border/60 leading-tight">
                      <span className="text-sm font-black text-primary">
                        {day}
                      </span>
                      <span className="text-[11px] font-bold text-muted-foreground">
                        {tList("monthPrefix")}
                        {month}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 text-center">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      <Link href={article.slug}>{title}</Link>
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
