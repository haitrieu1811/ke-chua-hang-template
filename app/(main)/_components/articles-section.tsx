"use client";

import * as React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Bí quyết thiết kế layout kho bãi giúp xe nâng di chuyển an toàn và tăng 70% sức chứa",
    category: "Tư Vấn Thiết Kế",
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    readTime: "6 phút đọc",
    author: "Ban biên tập Kim Phú",
    excerpt:
      "Phân tích khoảng cách lối đi tối ưu cho xe nâng Reach Truck và Forklift counterbalanced, bố trí cửa xuất nhập hàng để tránh tắc nghẽn luồng vận chuyển.",
    slug: "/bai-viet/thiet-ke-layout-kho-bai",
  },
  {
    id: 2,
    title: "So sánh chi tiết Kệ Selective và Kệ Drive-In: Doanh nghiệp nên đầu tư loại nào?",
    category: "So Sánh Kỹ Thuật",
    image: "/images/blog-compare.jpg",
    date: "14/11/2026",
    readTime: "8 phút đọc",
    author: "Ban biên tập Kim Phú",
    excerpt:
      "Bảng phân tích chi phí đầu tư trên từng pallet, mật độ lưu kho và khả năng tiếp cận hàng hóa giữa 2 hệ thống giá kệ công nghiệp phổ biến nhất hiện nay.",
    slug: "/bai-viet/so-sanh-ke-selective-va-drive-in",
  },
  {
    id: 3,
    title: "Tiêu chuẩn kiểm định độ võng dầm beam và hệ số an toàn FEM 10.2.02 cho kệ pallet",
    category: "Tiêu Chuẩn Kỹ Thuật",
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    readTime: "5 phút đọc",
    author: "Ban biên tập Kim Phú",
    excerpt:
      "Hướng dẫn nhận biết độ võng cho phép (L/200), cách kiểm tra định kỳ bu-lông chân trụ và tải trọng phân bố đều để ngăn ngừa rủi ro sập đổ giá kệ.",
    slug: "/bai-viet/tieu-chuan-kiem-dinh-do-vong-beam",
  },
  {
    id: 4,
    title: "Giải pháp kệ kho đông lạnh âm sâu (-25°C): Lựa chọn sơn tĩnh điện hay mạ kẽm nhúng nóng?",
    category: "Kho Lạnh Chuyên Dụng",
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    readTime: "7 phút đọc",
    author: "Ban biên tập Kim Phú",
    excerpt:
      "Đặc tính ăn mòn và đọng sương trong môi trường âm sâu. Vì sao lớp mạ kẽm nhúng nóng đạt độ bền gấp 3 lần sơn tĩnh điện tiêu chuẩn trong kho thủy sản.",
    slug: "/bai-viet/giai-phap-ke-kho-dong-lanh",
  },
];

export default function ArticlesSection() {
  return (
    <section className="relative border-b border-border/80 bg-background py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
                BLOG - TIN TỨC
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                href="/bai-viet"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-primary hover:text-orange-500 transition-colors"
              >
                <span>Xem tất cả bài viết</span>
                <ArrowRight className="size-4.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Lưới 4 bài viết nổi bật */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={(index % 4) * 90}
              duration={650}
              className="h-full"
            >
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                {/* Ảnh bài viết có hiệu ứng zoom khi hover */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge danh mục bài viết */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-primary/90 backdrop-blur-md px-2.5 py-1 text-sm font-semibold text-white shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Nội dung bài viết */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Ngày đăng & thời gian đọc */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-orange-500" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-primary" />
                        {item.readTime}
                      </span>
                    </div>

                    {/* Tiêu đề bài viết */}
                    <h3 className="mt-3 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2 leading-snug">
                      <Link href={item.slug}>{item.title}</Link>
                    </h3>

                    {/* Đoạn trích dẫn ngắn */}
                    <p className="mt-2.5 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Tác giả & Link đọc tiếp */}
                  <div className="mt-5 border-t border-border/60 pt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <User className="size-3.5 text-primary" />
                      {item.author}
                    </span>

                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-orange-500 transition-colors"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
