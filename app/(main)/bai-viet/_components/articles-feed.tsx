"use client";

import ScrollReveal from "@/components/scroll-reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Flame,
  Mail,
  PhoneCall,
  Search,
  Send,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import SHOP_INFO from "@/constants/info";

interface Article {
  id: number;
  title: string;
  category: "design" | "standard" | "compare" | "cold";
  categoryName: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  slug: string;
  isSpotlight?: boolean;
  views?: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title:
      "Bí quyết thiết kế layout kho bãi giúp xe nâng di chuyển an toàn và tăng 70% sức chứa",
    category: "design",
    categoryName: "Thiết Kế Layout",
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    readTime: "6 phút đọc",
    author: "Kỹ sư Trần Hải Long",
    authorRole: "Trưởng phòng Kết cấu Kho vận",
    excerpt:
      "Phân tích khoảng cách lối đi tối ưu cho xe nâng Reach Truck và Forklift counterbalanced, bố trí cửa xuất nhập hàng để tránh tắc nghẽn luồng vận chuyển và tối ưu hóa diện tích mặt bằng.",
    slug: "/bai-viet/thiet-ke-layout-kho-bai",
    isSpotlight: true,
    views: "3.240 lượt xem",
  },
  {
    id: 2,
    title:
      "So sánh chi tiết Kệ Selective và Kệ Drive-In: Doanh nghiệp nên đầu tư loại nào?",
    category: "compare",
    categoryName: "So Sánh Giải Pháp",
    image: "/images/blog-compare.jpg",
    date: "14/11/2026",
    readTime: "8 phút đọc",
    author: "Kỹ sư Nguyễn Quốc Tuấn",
    authorRole: "Kỹ sư Tư vấn Dự án",
    excerpt:
      "Bảng phân tích chi phí đầu tư trên từng pallet, mật độ lưu kho và khả năng tiếp cận hàng hóa giữa 2 hệ thống giá kệ công nghiệp phổ biến nhất hiện nay trên thị trường.",
    slug: "/bai-viet/so-sanh-ke-selective-va-drive-in",
    views: "2.850 lượt xem",
  },
  {
    id: 3,
    title:
      "Tiêu chuẩn kiểm định độ võng dầm beam và hệ số an toàn FEM 10.2.02 cho kệ pallet",
    category: "standard",
    categoryName: "Tiêu Chuẩn FEM",
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    readTime: "5 phút đọc",
    author: "ThS. Đỗ Quang Huy",
    authorRole: "Chuyên gia Thẩm định An toàn",
    excerpt:
      "Hướng dẫn nhận biết độ võng cho phép (L/200), cách kiểm tra định kỳ bu-lông chân trụ và tải trọng phân bố đều để ngăn ngừa rủi ro sập đổ giá kệ trong kho hàng công nghiệp.",
    slug: "/bai-viet/tieu-chuan-kiem-dinh-do-vong-beam",
    views: "2.410 lượt xem",
  },
  {
    id: 4,
    title:
      "Giải pháp kệ kho đông lạnh âm sâu (-25°C): Lựa chọn sơn tĩnh điện hay mạ kẽm nhúng nóng?",
    category: "cold",
    categoryName: "Kho Chuyên Dụng",
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    readTime: "7 phút đọc",
    author: "Kỹ sư Lê Hoàng Nam",
    authorRole: "Kỹ sư Vật liệu Kim loại",
    excerpt:
      "Đặc tính ăn mòn và đọng sương trong môi trường âm sâu. Vì sao lớp mạ kẽm nhúng nóng đạt độ bền gấp 3 lần sơn tĩnh điện tiêu chuẩn trong kho thủy hải sản xuất khẩu.",
    slug: "/bai-viet/giai-phap-ke-kho-dong-lanh",
    views: "1.980 lượt xem",
  },
  {
    id: 5,
    title:
      "Hệ thống kệ tự động Radio Shuttle Robot: Tối ưu 80% thời gian xuất nhập pallet",
    category: "compare",
    categoryName: "So Sánh Giải Pháp",
    image: "/images/racking-shuttle.jpg",
    date: "28/10/2026",
    readTime: "6 phút đọc",
    author: "Kỹ sư Trần Hải Long",
    authorRole: "Trưởng phòng Kết cấu Kho vận",
    excerpt:
      "Nguyên lý vận hành xe robot tự hành luân chuyển pallet trong đường ray hẹp. Phân tích điểm hòa vốn ROI khi chuyển đổi từ kho truyền thống sang kho bán tự động.",
    slug: "/bai-viet/ke-tu-dong-radio-shuttle",
    views: "1.750 lượt xem",
  },
  {
    id: 6,
    title:
      "Kệ sàn lửng Mezzanine Floor nhân đôi diện tích kho phụ tùng và linh kiện điện tử",
    category: "design",
    categoryName: "Thiết Kế Layout",
    image: "/images/racking-mezzanine.jpg",
    date: "22/10/2026",
    readTime: "5 phút đọc",
    author: "ThS. Đỗ Quang Huy",
    authorRole: "Chuyên gia Thẩm định An toàn",
    excerpt:
      "Giải pháp tận dụng tối đa chiều cao nhà xưởng mà không cần cơi nới diện tích đất. Cách tính toán kết cấu dầm chính, dầm phụ và tải trọng mặt sàn an toàn.",
    slug: "/bai-viet/ke-san-lung-mezzanine-floor",
    views: "1.520 lượt xem",
  },
  {
    id: 7,
    title:
      "Quy trình kiểm tra bảo dưỡng và thử tải định kỳ cho hệ thống giá kệ công nghiệp nặng",
    category: "standard",
    categoryName: "Tiêu Chuẩn FEM",
    image: "/images/racking-selective.jpg",
    date: "15/10/2026",
    readTime: "6 phút đọc",
    author: "Kỹ sư Nguyễn Quốc Tuấn",
    authorRole: "Kỹ sư Tư vấn Dự án",
    excerpt:
      "Danh mục checklist 10 điểm vàng cần rà soát hàng quý: chốt an toàn dầm beam, ốp bảo vệ chân trụ, độ nghiêng lệch và tải trọng phân bố trên từng tầng kệ.",
    slug: "/bai-viet/quy-trinh-bao-duong-dinh-ky",
    views: "1.340 lượt xem",
  },
];

const categoryTabs = [
  { key: "all", label: "Tất Cả Bài Viết" },
  { key: "design", label: "Thiết Kế Layout" },
  { key: "standard", label: "Tiêu Chuẩn FEM" },
  { key: "compare", label: "So Sánh Giải Pháp" },
  { key: "cold", label: "Kho Chuyên Dụng" },
] as const;

const popularTags = [
  "Kệ Selective",
  "Kệ Drive-In",
  "Sàn Mezzanine",
  "Tiêu Chuẩn FEM",
  "Kho Đông Lạnh",
  "Robot Shuttle",
  "Layout Xe Nâng",
  "Pallet Thép",
];

export default function ArticlesFeed() {
  const [activeTab, setActiveTab] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [ebookEmail, setEbookEmail] = React.useState("");
  const [ebookSuccess, setEbookSuccess] = React.useState(false);

  // Lọc bài viết theo tab và từ khóa tìm kiếm
  const filteredArticles = React.useMemo(() => {
    return articlesData.filter((article) => {
      const matchTab = activeTab === "all" || article.category === activeTab;
      const matchSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  const spotlightArticle = articlesData[0];
  const trendingArticles = articlesData.slice(1, 4);

  const handleEbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ebookEmail) return;
    setEbookSuccess(true);
  };

  return (
    <div className="space-y-12">
      {/* ========================================================================= */}
      {/* 1. KHU VỰC TÌM KIẾM & BỘ LỌC CHỦ ĐỀ NHANH */}
      {/* ========================================================================= */}
      <ScrollReveal direction="up" duration={600}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm">
          {/* Thanh tìm kiếm bài viết */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết, tiêu chuẩn, tên kệ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border/80 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Bộ lọc Tabs tự code (không icon, font size >= 14px) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 2. TOP SHOWCASE: 1 BÀI TÂM ĐIỂM LỚN + 3 BÀI THẺ NGANG XU HƯỚNG */}
      {/* ========================================================================= */}
      {activeTab === "all" && searchQuery.trim() === "" && (
        <ScrollReveal direction="up" duration={700}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Cột trái (7 cols): Bài viết tâm điểm lớn */}
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
                      Tâm Điểm Tuần Này
                    </span>
                    <span className="rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-sm font-bold text-primary border border-border/60">
                      {spotlightArticle.categoryName}
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
                      <div>
                        <div className="text-sm font-bold text-foreground">
                          {spotlightArticle.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {spotlightArticle.authorRole}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={spotlightArticle.slug}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-bold text-primary transition-colors"
                    >
                      <span>Đọc bài viết</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải (5 cols): 3 Bài viết xu hướng dạng danh sách ngang */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border/60">
                <TrendingUp className="size-5 text-orange-500" />
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Bài Viết Đọc Nhiều Nhất
                </h3>
              </div>

              {trendingArticles.map((art, idx) => (
                <div
                  key={art.id}
                  className="group relative flex gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  {/* Số thứ tự 01, 02, 03 */}
                  <div className="text-3xl font-black text-muted-foreground/30 group-hover:text-orange-500 transition-colors shrink-0 self-center">
                    0{idx + 1}
                  </div>

                  {/* Ảnh thumbnail */}
                  <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Nội dung bên phải */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <span className="text-sm font-bold text-primary block truncate">
                        {art.categoryName}
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

      {/* ========================================================================= */}
      {/* 3. BỐ CỤC 2 CỘT HIỆN ĐẠI: MAIN ARTICLES (8 COLS) + SIDEBAR TIỆN ÍCH (4 COLS) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ===================================================== */}
        {/* CỘT CHÍNH (8 COLS): DANH SÁCH BÀI VIẾT DẠNG THẺ NGANG */}
        {/* ===================================================== */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              <h3 className="text-lg sm:text-xl font-black text-foreground">
                Tất Cả Bài Viết Chuyên Ngành ({filteredArticles.length})
              </h3>
            </div>
            <span className="text-sm text-muted-foreground">
              Sắp xếp theo: Mới nhất
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <BookOpen className="mx-auto size-12 text-muted-foreground/40 mb-3" />
              <p className="text-base font-bold text-foreground">
                Không tìm thấy bài viết nào phù hợp
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Vui lòng thử tìm kiếm bằng từ khóa khác hoặc chuyển sang danh
                mục khác.
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
                  {/* Ảnh bài viết tỉ lệ chuẩn */}
                  <div className="relative aspect-16/10 sm:w-56 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-md bg-background/90 backdrop-blur-md px-2.5 py-0.5 text-sm font-bold text-primary shadow-xs border border-border/60">
                        {article.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Nội dung bài viết */}
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
                          {article.author}
                        </span>
                      </div>

                      <Link
                        href={article.slug}
                        className="inline-flex items-center gap-1 font-bold text-primary group-hover:text-orange-500 transition-colors"
                      >
                        <span>Đọc tiếp</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))
          )}
        </div>

        {/* ===================================================== */}
        {/* CỘT PHỤ (4 COLS): STICKY SIDEBAR TIỆN ÍCH & TÀI LIỆU */}
        {/* ===================================================== */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* Widget 1: Tải Cẩm Nang Ebook PDF Miễn Phí */}
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 shadow-md">
            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">
              <Download className="size-4" />
              <span>Tài Liệu Độc Quyền</span>
            </div>
            <h4 className="text-lg font-black text-foreground leading-snug">
              Ebook Cẩm Nang Thiết Kế & An Toàn Kho Bãi 2026
            </h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Hơn 80 trang phân tích chuyên sâu về tiêu chuẩn FEM 10.2.02, lối
              đi xe nâng và biểu giá kết cấu.
            </p>

            {ebookSuccess ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Đã gửi Ebook tới email của bạn!</span>
              </div>
            ) : (
              <form onSubmit={handleEbookSubmit} className="mt-4 space-y-2.5">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="Email nhận Ebook..."
                    value={ebookEmail}
                    onChange={(e) => setEbookEmail(e.target.value)}
                    className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
                >
                  <span>Tải Ebook Miễn Phí</span>
                  <Send className="size-3.5 text-orange-400" />
                </button>
              </form>
            )}
          </div>

          {/* Widget 2: Chủ Đề / Từ Khóa Quan Tâm Nhiều Nhất */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2 pb-3 border-b border-border/60">
              <Tag className="size-4.5 text-primary" />
              <span>Chủ Đề Quan Tâm Nhiều</span>
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="rounded-lg border border-border/80 bg-background hover:border-primary hover:bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground transition-all cursor-pointer"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Widget 3: Đội Ngũ Tác Giả Kỹ Sư */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2 pb-3 border-b border-border/60">
              <Award className="size-4.5 text-orange-500" />
              <span>Ban Chuyên Môn & Kỹ Sư</span>
            </h4>
            <div className="mt-4 space-y-3.5">
              {[
                {
                  name: "Kỹ sư Trần Hải Long",
                  role: "Trưởng phòng Kết cấu Kho vận",
                  exp: "12 năm kinh nghiệm",
                },
                {
                  name: "ThS. Đỗ Quang Huy",
                  role: "Chuyên gia Thẩm định An toàn FEM",
                  exp: "10 năm kinh nghiệm",
                },
                {
                  name: "Kỹ sư Nguyễn Quốc Tuấn",
                  role: "Kỹ sư Dự án Kho tự động AS/RS",
                  exp: "9 năm kinh nghiệm",
                },
              ].map((author, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {author.name.charAt(author.name.lastIndexOf(" ") + 1)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-foreground truncate">
                      {author.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {author.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 4: Hotline Hỗ Trợ Kỹ Thuật Nhanh */}
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6 shadow-xs text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-500 text-white mb-3">
              <PhoneCall className="size-5.5" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              Cần Khảo Sát Hiện Trạng Kho?
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Kỹ sư kết cấu sẽ có mặt tại kho của bạn trong 24h để đo đạc và lên
              bản vẽ 3D.
            </p>
            <a
              href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
            >
              <span>Gọi Ngay: {SHOP_INFO.HOTLINE.TEXT}</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
