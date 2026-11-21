import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import ArticlesFeed from "./_components/articles-feed";

export const metadata: Metadata = {
  title: "Bài Viết & Cẩm Nang Kỹ Thuật Kho Bãi | Kệ Chứa Hàng",
  description:
    "Tổng hợp các bài viết chuyên sâu về tính toán tải trọng giá kệ, tiêu chuẩn an toàn FEM 10.2.02, giải pháp thiết kế layout lối đi xe nâng và cẩm nang vận hành kho bãi hiện đại.",
};

export default function ArticlesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB & HERO BANNER BÀI VIẾT */}
      {/* ========================================================================= */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-16 overflow-hidden">
        {/* Nền hiệu ứng trang trí nhẹ */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={500}>
            <nav
              aria-label="Đường dẫn trang"
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors font-medium"
              >
                Trang chủ
              </Link>
              <ChevronRight className="size-4 opacity-50" />
              <span className="text-foreground font-semibold">Bài viết</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={700}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <BookOpen className="size-4 text-orange-500" />
                Chuyên San & Bài Viết Kỹ Thuật
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                Cẩm Nang & <span className="text-primary">Bài Viết Chuyên Ngành</span> Giá Kệ
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Nơi hội tụ những kiến thức thực chiến, nghiên cứu vật liệu thép cán nguội,
                quy chuẩn an toàn FEM Châu Âu và giải pháp tối ưu hóa từng mét vuông mặt sàn kho
                được đúc kết từ hơn 3.500+ dự án của Kệ Chứa Hàng.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. KHU VỰC FEED BÀI VIẾT (SHOWCASE + SPLIT 2 CỘT + SIDEBAR) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ArticlesFeed />
        </div>
      </section>
    </div>
  );
}
