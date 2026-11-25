"use client";

import ScrollReveal from "@/components/scroll-reveal";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Flame,
  PhoneCall,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";
import SHOP_INFO from "@/constants/info";

interface Article {
  id: number;
  title: string;
  category: "blog" | "news" | "story";
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  isSpotlight?: boolean;
}

const articlesData: Article[] = [
  {
    id: 1,
    title:
      "Bí quyết thiết kế layout kho bãi giúp xe nâng di chuyển an toàn và tăng 70% sức chứa",
    category: "blog",
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Phân tích khoảng cách lối đi tối ưu cho xe nâng Reach Truck và Forklift counterbalanced, bố trí cửa xuất nhập hàng để tránh tắc nghẽn luồng vận chuyển và tối ưu hóa diện tích mặt bằng.",
    slug: "/bai-viet/thiet-ke-layout-kho-bai",
    isSpotlight: true,
  },
  {
    id: 2,
    title:
      "So sánh chi tiết Kệ Selective và Kệ Drive-In: Doanh nghiệp nên đầu tư loại nào?",
    category: "blog",
    image: "/images/blog-compare.jpg",
    date: "14/11/2026",
    readTime: "8 phút đọc",
    excerpt:
      "Bảng phân tích chi phí đầu tư trên từng pallet, mật độ lưu kho và khả năng tiếp cận hàng hóa giữa các hệ thống giá kệ công nghiệp phổ biến nhất hiện nay.",
    slug: "/bai-viet/so-sanh-ke-selective-va-drive-in",
  },
  {
    id: 3,
    title:
      "Tiêu chuẩn kiểm định độ võng dầm beam và hệ số an toàn FEM 10.2.02 cho kệ pallet",
    category: "blog",
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Hướng dẫn nhận biết độ võng cho phép (L/200), cách kiểm tra định kỳ bu-lông chân trụ và tải trọng phân bố đều để đảm bảo an toàn trong kho hàng công nghiệp.",
    slug: "/bai-viet/tieu-chuan-kiem-dinh-do-vong-beam",
  },
  {
    id: 4,
    title:
      "Giải pháp kệ kho đông lạnh âm sâu (-25°C): Lựa chọn sơn tĩnh điện hay mạ kẽm nhúng nóng?",
    category: "news",
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    readTime: "7 phút đọc",
    excerpt:
      "Đặc tính ăn mòn và đọng sương trong môi trường âm sâu. Phân tích ưu điểm của từng phương pháp xử lý bề mặt thép trong kho bảo quản thực phẩm.",
    slug: "/bai-viet/giai-phap-ke-kho-dong-lanh",
  },
  {
    id: 5,
    title:
      "Cách bố trí kệ trung tải và kệ V lỗ giúp tối ưu không gian kho vật tư, linh kiện",
    category: "story",
    image: "/images/racking-medium.jpg",
    date: "28/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Chia sẻ thực tế quá trình sắp xếp lại kho vật tư, phân khu hàng hóa theo từng tầng kệ giúp doanh nghiệp rút ngắn thời gian tìm kiếm và kiểm kê tồn kho.",
    slug: "/bai-viet/ke-tu-dong-radio-shuttle",
  },
  {
    id: 6,
    title:
      "Kinh nghiệm lựa chọn kệ V lỗ đa năng cho cửa hàng và nhà xưởng quy mô vừa & nhỏ",
    category: "story",
    image: "/images/racking-v-lo.jpg",
    date: "22/10/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Những lưu ý về kích thước mâm tầng, độ dày thép và cách điều chỉnh khoảng cách tầng kệ để sắp xếp hàng hóa gọn gàng, thuận tiện quan sát.",
    slug: "/bai-viet/ke-san-lung-mezzanine-floor",
  },
  {
    id: 7,
    title:
      "Quy trình kiểm tra bảo dưỡng định kỳ cho hệ thống giá kệ kho hàng công nghiệp",
    category: "news",
    image: "/images/racking-selective.jpg",
    date: "15/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Danh mục kiểm tra định kỳ các chốt an toàn dầm beam, ốp bảo vệ chân trụ, độ thăng bằng và tải trọng phân bố trên từng tầng kệ.",
    slug: "/bai-viet/quy-trinh-bao-duong-dinh-ky",
  },
];

const TAB_KEYS = ["all", "blog", "news", "story"] as const;

export default function ArticlesFeed() {
  const t = useTranslations("ArticlesPage.feed");
  const [activeTab, setActiveTab] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredArticles = React.useMemo(() => {
    return articlesData.filter((article) => {
      const matchTab = activeTab === "all" || article.category === activeTab;
      const categoryLabel = t(`tabs.${article.category}`).toLowerCase();
      const matchSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        categoryLabel.includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery, t]);

  const spotlightArticle = articlesData[0];
  const trendingArticles = articlesData.slice(1, 4);

  return (
    <div className="space-y-12">
      {/* 1. KHU VỰC TÌM KIẾM & BỘ LỌC CHỦ ĐỀ */}
      <ScrollReveal direction="up" duration={600}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border/80 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

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
        </div>
      </ScrollReveal>

      {/* 2. TOP SHOWCASE */}
      {activeTab === "all" && searchQuery.trim() === "" && (
        <ScrollReveal direction="up" duration={700}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
                  <img
                    src={spotlightArticle.image}
                    alt={spotlightArticle.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-md">
                      <Flame className="size-3.5" />
                      {t("featuredBadge")}
                    </span>
                    <span className="rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-sm font-bold text-primary border border-border/60">
                      {t(`tabs.${spotlightArticle.category}`)}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {spotlightArticle.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {spotlightArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors leading-snug">
                      <Link href={spotlightArticle.slug}>
                        {spotlightArticle.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {spotlightArticle.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="size-4.5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        {t("author")}
                      </div>
                    </div>

                    <Link
                      href={spotlightArticle.slug}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-bold text-primary transition-colors"
                    >
                      <span>{t("readArticle")}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border/60">
                <TrendingUp className="size-5 text-orange-500" />
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {t("mostRead")}
                </h3>
              </div>

              {trendingArticles.map((art, idx) => (
                <div
                  key={art.id}
                  className="group relative flex gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="text-3xl font-black text-muted-foreground/30 group-hover:text-orange-500 transition-colors shrink-0 self-center">
                    0{idx + 1}
                  </div>

                  <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <span className="text-sm font-bold text-primary block truncate">
                        {t(`tabs.${art.category}`)}
                      </span>
                      <h4 className="mt-1 text-sm sm:text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={art.slug}>{art.title}</Link>
                      </h4>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                      <span>{art.date}</span>
                      <ArrowUpRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* 3. DANH SÁCH BÀI VIẾT + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              <h3 className="text-lg sm:text-xl font-black text-foreground">
                {t("allArticlesTitle", { count: filteredArticles.length })}
              </h3>
            </div>
            <span className="text-sm text-muted-foreground">
              {t("sortLatest")}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <BookOpen className="mx-auto size-12 text-muted-foreground/40 mb-3" />
              <p className="text-base font-bold text-foreground">
                {t("emptyTitle")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("emptyDesc")}
              </p>
            </div>
          ) : (
            filteredArticles.map((article, index) => (
              <ScrollReveal
                key={article.id}
                direction="up"
                delay={(index % 4) * 80}
                duration={550}
              >
                <article className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  <div className="relative aspect-16/10 sm:w-56 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-md bg-background/90 backdrop-blur-md px-2.5 py-0.5 text-sm font-bold text-primary shadow-xs border border-border/60">
                        {t(`tabs.${article.category}`)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        <Link href={article.slug} className="line-clamp-2">
                          {article.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <User className="size-3.5 text-primary" />
                        <span className="font-semibold text-foreground">
                          {t("author")}
                        </span>
                      </div>

                      <Link
                        href={article.slug}
                        className="inline-flex items-center gap-1 font-bold text-primary group-hover:text-orange-500 transition-colors"
                      >
                        <span>{t("readMore")}</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6 shadow-xs text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-500 text-white mb-3">
              <PhoneCall className="size-5.5" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              {t("sidebar.title")}
            </h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {t("sidebar.desc")}
            </p>
            <a
              href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
            >
              <span>
                {t("sidebar.callBtn", { hotline: SHOP_INFO.HOTLINE.TEXT })}
              </span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
