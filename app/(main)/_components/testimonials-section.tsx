"use client";

import * as React from "react";
import SHOP_INFO from "@/constants/info";
import {
  Star,
  Quote,
  Building2,
  CheckCircle2,
  ThumbsUp,
  Warehouse,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";

interface Testimonial {
  id: number;
  name: string;
  category: "all" | "logistics" | "cold" | "factory" | "retail";
  categoryLabel: string;
  avatarText: string;
  scale: string;
  rating: number;
  quote: string;
  metrics: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anh Trần Quốc Tuấn",
    category: "logistics",
    categoryLabel: "Logistics 3PL",
    avatarText: "TQ",
    scale: "Dự án kho 6.500m² - 8.200 Pallet",
    rating: 5,
    quote:
      "Đội ngũ kỹ sư khảo sát rất cẩn trọng, mô phỏng luồng di chuyển của xe nâng Reach Truck cực kỳ chi tiết. Hệ thống kệ Selective kết hợp Drive-in giúp sức chứa kho của chúng tôi tăng gấp 2,5 lần mà chi phí tiết kiệm hơn 25% so với việc thuê kho ngoài.",
    metrics: "Tăng 250% dung lượng kho",
  },
  {
    id: 2,
    name: "Chị Nguyễn Mai Lan",
    category: "cold",
    categoryLabel: "Kho Đông Lạnh (-25°C)",
    avatarText: "ML",
    scale: "Hệ thống Kệ Drive-in mạ kẽm nhúng nóng",
    rating: 5,
    quote:
      "Kho lạnh âm sâu -25°C đòi hỏi chất lượng thép và công nghệ mạ kẽm cực kỳ khắt khe để chống đọng sương, gỉ sét. Sau hơn 3 năm vận hành liên tục, kết cấu chân trụ vẫn vững chãi, các tầng beam phẳng tuyệt đối, lấy hàng an toàn 100%.",
    metrics: "Chống gỉ sét chuẩn âm sâu",
  },
  {
    id: 3,
    name: "Anh Lê Hoàng Nam",
    category: "retail",
    categoryLabel: "TMĐT & Bán Lẻ",
    avatarText: "HN",
    scale: "Sàn Lửng Mezzanine 3 Tầng + Kệ Trung Tải",
    rating: 5,
    quote:
      "Giải pháp sàn lửng Mezzanine kết hợp kệ trung tải nhiều tầng giúp chúng tôi nhân đôi mặt sàn phân loại đơn hàng mà không phải cơi nới trần nhà xưởng. Thi công thần tốc chỉ 12 ngày là bàn giao hoàn chỉnh, không làm gián đoạn việc giao hàng.",
    metrics: "Hoàn thiện chỉ trong 12 ngày",
  },
  {
    id: 4,
    name: "Ông Trịnh Viết Hưng",
    category: "factory",
    categoryLabel: "Nhà Máy Sản Xuất",
    avatarText: "VH",
    scale: "Kệ Tự Động Radio Shuttle 10.000m²",
    rating: 5,
    quote:
      "Hệ thống kệ thông minh Radio Shuttle con thoi tự động là bước ngoặt tối ưu hóa kho của chúng tôi. Mật độ lưu kho đạt mức tối đa, loại bỏ hoàn toàn rủi ro va chạm xe nâng vào khung kệ, tốc độ xuất nhập hàng nhanh gấp 3 lần.",
    metrics: "Xuất nhập hàng nhanh gấp 3",
  },
  {
    id: 5,
    name: "Bà Đỗ Thu Hằng",
    category: "retail",
    categoryLabel: "Dược Phẩm Chuẩn GSP",
    avatarText: "TH",
    scale: "Kệ Trượt Carton Flow & Kệ V Lỗ",
    rating: 5,
    quote:
      "Tiêu chuẩn kho GSP ngành dược đòi hỏi giá kệ phải cực kỳ sạch sẽ, kiểm soát hạn sử dụng theo nguyên tắc FIFO (vào trước ra trước). Hệ thống ray con lăn carton flow hoạt động trơn tru, chính xác tuyệt đối, nhân viên nhặt hàng rất nhàn.",
    metrics: "Quản lý FIFO chính xác 100%",
  },
  {
    id: 6,
    name: "Anh Phạm Minh Đức",
    category: "factory",
    categoryLabel: "Cơ Khí Hạng Nặng",
    avatarText: "MĐ",
    scale: "Kệ Tay Đỡ Cantilever Tải Trọng 3 Tấn/Tầng",
    rating: 5,
    quote:
      "Lưu trữ các bó ống thép dài 6m và khuôn dập nặng vài tấn luôn là bài toán đau đầu. Kệ tay đỡ Cantilever có kết cấu chân trụ I-beam đúc cực kỳ vững chắc, cẩu trục và xe nâng lấy vật tư dễ dàng, giảm 70% thời gian tìm kiếm phôi thép.",
    metrics: "Chịu tải 3.000kg/khoang",
  },
];

const categories = [
  { key: "all", label: "Tất Cả Dự Án" },
  { key: "logistics", label: "Logistics & Kho Vận" },
  { key: "cold", label: "Kho Lạnh Âm Sâu" },
  { key: "factory", label: "Nhà Máy & Cơ Khí" },
  { key: "retail", label: "TMĐT & Bán Lẻ" },
] as const;

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredTestimonials = React.useMemo(() => {
    if (activeCategory === "all") return testimonials;
    return testimonials.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative border-b border-border/80 bg-background py-16 sm:py-24 overflow-hidden">
      {/* Nền hiệu ứng trang trí nhẹ */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section với ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <ThumbsUp className="size-4 text-orange-500" />
              Đánh Giá Thực Tế Từ Khách Hàng
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              Khách Hàng Nói Gì Về Chúng Tôi?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Hơn 1.500+ doanh nghiệp logistics, kho lạnh, tập đoàn sản xuất trên
              toàn quốc đã đồng hành và khẳng định chất lượng giải pháp kệ chứa
              hàng của chúng tôi.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Thước đo uy tín đồng bộ (Animation tuần tự từng chỉ số) */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {[
            {
              value: 99.2,
              decimals: 1,
              suffix: "%",
              title: "Hài Lòng Về Chất Lượng",
              desc: "Cam kết chuẩn tải trọng 100%",
              icon: ShieldCheck,
            },
            {
              value: 1500,
              decimals: 0,
              suffix: "+",
              title: "Dự Án Đã Bàn Giao",
              desc: "Trải rộng khắp cả nước",
              icon: Warehouse,
            },
            {
              value: 10,
              decimals: 0,
              suffix: "+ Năm",
              title: "Kinh Nghiệm Chuyên Sâu",
              desc: "Đội ngũ kỹ sư kết cấu hàng đầu",
              icon: Building2,
            },
            {
              value: 100,
              decimals: 0,
              suffix: "%",
              title: "Đúng Tiến Độ Cam Kết",
              desc: "Bảo hành 5 năm toàn diện",
              icon: TrendingUp,
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                duration={600}
              >
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-muted/40 p-4 text-center sm:p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-md h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5.5" />
                  </div>
                  <div className="mt-3 text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      delay={idx * 100}
                    />
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-bold text-foreground">
                    {stat.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.desc}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tabs tự code gọn gàng (Animation xuất hiện nhẹ) */}
        <ScrollReveal direction="up" delay={150} duration={600}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-muted/70 p-1 shadow-2xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Lưới danh sách đánh giá khách hàng (Animation so le stagger mượt mà) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={(index % 3) * 120}
              duration={650}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                {/* Watermark Quote Icon */}
                <Quote className="absolute top-5 right-5 size-10 text-muted/30 transition-colors group-hover:text-primary/20" />

                <div>
                  {/* Header: Star Rating màu Cam + Badge Xanh */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-orange-500">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="size-4.5 fill-orange-500" />
                      ))}
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Highlight metric badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="size-4 text-orange-500" />
                    {item.metrics}
                  </div>

                  {/* Nội dung đánh giá */}
                  <p className="mt-3.5 text-sm sm:text-base text-foreground/90 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Thông tin khách hàng & Dự án */}
                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl font-bold text-sm bg-primary text-primary-foreground shadow-xs">
                      {item.avatarText}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-base font-bold text-foreground">
                        {item.name}
                      </h4>
                      <p className="truncate text-sm text-muted-foreground">
                        {item.scale}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lời kêu gọi hành động phía dưới: Nền Xanh nhẹ + Nút Hotline Cam */}
        <ScrollReveal direction="up" delay={200} duration={700}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="max-w-2xl text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Bạn Cần Tư Vấn Thiết Kế Kệ Kho Phù Hợp Với Doanh Nghiệp?
              </h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                Liên hệ ngay để nhận bản vẽ layout 2D/3D và báo giá gốc trực tiếp
                tại nhà máy trong vòng 24 giờ.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Hotline: {SHOP_INFO.HOTLINE.TEXT}
              </a>
              <a
                href="#bao-gia"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm sm:text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-primary/50 cursor-pointer"
              >
                Đăng Ký Khảo Sát
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
