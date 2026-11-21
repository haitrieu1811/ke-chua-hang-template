import HomeCarousel from "@/app/(main)/_components/hero-carousel";
import BestSellingProducts from "@/app/(main)/_components/best-selling-products";
import TestimonialsSection from "@/app/(main)/_components/testimonials-section";
import FaqSection from "@/app/(main)/_components/faq-section";
import ArticlesSection from "@/app/(main)/_components/articles-section";
import ScrollReveal from "@/components/scroll-reveal";
import {
  BadgePercent,
  Ruler,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 1. HERO CAROUSEL COMPONENT (CLIENT COMPONENT TÁCH RIÊNG) */}
      <HomeCarousel />

      {/* 2. SẢN PHẨM BÁN CHẠY (BEST SELLING PRODUCTS VỚI TABS TỰ CODE & BỘ LỌC) */}
      <BestSellingProducts />

      {/* 3. HIỂN THỊ NỔI BẬT 4 ƯU ĐIỂM (HIỆU ỨNG ANIMATION XUẤT HIỆN KHI KÉO TỚI) */}
      <section className="relative border-b border-border/80 bg-muted/30 py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header của phần Ưu điểm với ScrollReveal */}
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Sparkles className="size-4 text-orange-500" />
                Cam kết giá trị vượt trội
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                4 Ưu Điểm Đột Phá Khi Lựa Chọn Chúng Tôi
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tối ưu chi phí, an tâm chất lượng và đảm bảo tiến độ bàn giao
                cho mọi dự án kho bãi của quý khách hàng.
              </p>
            </div>
          </ScrollReveal>

          {/* Lưới 4 Ưu điểm nổi bật (Animation trượt lên tuần tự từng thẻ) */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: BadgePercent,
                tag: "Tiết kiệm 20% - 30%",
                title: "Giá Gốc Trực Tiếp Tại Nhà Máy",
                desc: "Sản xuất và phân phối trực tiếp không qua trung gian thương mại, giúp tối ưu chi phí đầu tư ban đầu cho doanh nghiệp.",
                highlightTag: true,
              },
              {
                step: "02",
                icon: Ruler,
                tag: "Bản vẽ 2D/3D trong 24h",
                title: "Khảo Sát & Thiết Kế Miễn Phí",
                desc: "Kỹ sư kết cấu trực tiếp đến tận nhà kho đo đạc hiện trạng, lên bản vẽ 2D/3D mô phỏng luồng xe nâng hoàn toàn miễn phí.",
                highlightTag: false,
              },
              {
                step: "03",
                icon: Award,
                tag: "ISO 9001 & JIS G3101",
                title: "Thép Chuẩn & Sơn Tĩnh Điện",
                desc: "100% phôi thép cán nguội chất lượng cao có CO/CQ rõ ràng, xử lý bề mặt sơn tĩnh điện chống rỉ sét và hóa chất ăn mòn.",
                highlightTag: false,
              },
              {
                step: "04",
                icon: Clock,
                tag: "Bảo hành 5 năm",
                title: "Lắp Đặt Thần Tốc & Bảo Trì",
                desc: "Đội ngũ kỹ thuật lành nghề thi công nhanh gọn, cam kết bàn giao đúng tiến độ, bảo hành 5 năm và bảo trì trọn đời.",
                highlightTag: true,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 120}
                  duration={650}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                    {/* Số thứ tự watermark ở góc trên */}
                    <div className="absolute -top-3 -right-2 text-5xl font-black text-muted/20 select-none transition-colors group-hover:text-primary/10">
                      {item.step}
                    </div>

                    <div>
                      {/* Header: Icon Xanh + Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                          <Icon className="size-6" />
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
                            item.highlightTag
                              ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/30"
                              : "bg-primary/10 text-primary ring-1 ring-primary/20"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Tiêu đề & Diễn giải */}
                      <h3 className="mt-5 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer card tương tác */}
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-4 text-orange-500" />
                        Cam kết chất lượng
                      </span>
                      <ArrowUpRight className="size-4.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI (TESTIMONIALS SECTION) */}
      <TestimonialsSection />

      {/* 5. CÂU HỎI THƯỜNG GẶP (FAQ SECTION) */}
      <FaqSection />

      {/* 6. BÀI VIẾT & TIN TỨC CHUYÊN NGÀNH (ARTICLES SECTION) */}
      <ArticlesSection />
    </div>
  );
}
