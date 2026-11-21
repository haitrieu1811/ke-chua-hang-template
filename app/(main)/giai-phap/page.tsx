import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Factory,
  FileText,
  Layers,
  MapPin,
  PhoneCall,
  Ruler,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import SHOP_INFO from "@/constants/info";
import {
  featuredCaseStudies,
  solutionComparisonRows,
} from "@/data/solutions";
import SolutionsExplorer from "./_components/solutions-explorer";

export const metadata: Metadata = {
  title: "Giải Pháp Lưu Trữ Kho Bãi Công Nghiệp | Thiết Kế Layout 2D/3D Miễn Phí",
  description:
    "Giải pháp giá kệ chứa hàng toàn diện theo từng ngành hàng: Logistics 3PL, kho lạnh âm sâu, nhà máy sản xuất, thương mại điện tử, dược phẩm và vật liệu dài. Tư vấn khảo sát & bản vẽ 2D/3D trong 24h.",
};

const heroMetrics = [
  {
    value: 80,
    prefix: "+",
    suffix: "%",
    label: "Mật Độ Lưu Trữ",
    desc: "Tối ưu diện tích sàn & chiều cao kho",
    icon: TrendingUp,
  },
  {
    value: 24,
    prefix: "",
    suffix: " Giờ",
    label: "Bản Vẽ Layout 2D/3D",
    desc: "Mô phỏng luồng xe nâng miễn phí",
    icon: Ruler,
  },
  {
    value: 6,
    prefix: "",
    suffix: "+ Ngành",
    label: "Giải Pháp Chuyên Sâu",
    desc: "Từ kho lạnh đến thương mại điện tử",
    icon: Layers,
  },
  {
    value: 5,
    prefix: "",
    suffix: " Năm",
    label: "Bảo Hành Kết Cấu",
    desc: "Đạt chuẩn FEM 10.2.02 & ISO 9001",
    icon: ShieldCheck,
  },
];

const implementationSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Khảo Sát & Phân Tích Kho",
    duration: "Trong 24h",
    desc: "Đo đạc mặt bằng, kiểm tra mác nền bê tông, chiều cao trần, thông số xe nâng và phân tích tần suất xuất nhập từng nhóm SKU.",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Thiết Kế Layout 2D / 3D",
    duration: "Miễn phí 100%",
    desc: "Lên từ 2 - 3 phương án bố trí kệ trực quan, tính toán sức chứa pallet và tải trọng chịu lực theo tiêu chuẩn châu Âu FEM 10.2.02.",
  },
  {
    step: "03",
    icon: Factory,
    title: "Sản Xuất Chuẩn JIS G3101",
    duration: "7 - 12 ngày",
    desc: "Gia công trên dây chuyền cán nguội CNC tự động, xử lý bề mặt tẩy rỉ 4 bể và sơn tĩnh điện sấy 200°C hoặc mạ kẽm nhúng nóng.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Thi Công & Thử Tải An Toàn",
    duration: "3 - 5 ngày",
    desc: "Đội ngũ kỹ thuật viên lắp đặt trọn gói toàn quốc, căn chỉnh độ phẳng laser, neo hóa chất chân trụ và kiểm định thử tải tĩnh.",
  },
  {
    step: "05",
    icon: Award,
    title: "Bàn Giao & Bảo Hành 5 Năm",
    duration: "Đồng hành trọn đời",
    desc: "Cung cấp đầy đủ hồ sơ CO/CQ, hướng dẫn vận hành an toàn kho và cam kết bảo hành kết cấu 5 năm, kiểm tra bảo trì định kỳ.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB & HERO BANNER GIẢI PHÁP */}
      {/* ========================================================================= */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
              <span className="text-foreground font-semibold">Giải pháp</span>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Nội dung bên trái */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Sparkles className="size-4 text-orange-500" />
                  Giải Pháp Kho Vận Toàn Diện
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                  Giải Pháp Lưu Trữ{" "}
                  <span className="text-primary">Tối Ưu Không Gian</span> Cho
                  Mọi Mô Hình Kho Bãi
                </h1>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Từ kho phân phối Logistics 3PL, kho lạnh âm sâu -30°C đến trung
                  tâm hoàn tất đơn hàng E-Commerce — đội ngũ kỹ sư kết cấu của
                  chúng tôi thiết kế phương án giá kệ may đo theo đúng bài toán
                  tải trọng, xe nâng và ngân sách đầu tư của doanh nghiệp.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    <span>Nhận Tư Vấn & Bản Vẽ 3D Miễn Phí</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                  >
                    <PhoneCall className="size-4 text-orange-500" />
                    <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Hình ảnh mô phỏng layout kho bên phải */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" duration={750} delay={150}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative h-[340px] sm:h-[400px] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl">
                    <Image
                      src="/images/blog-layout.jpg"
                      alt="Thiết kế layout giải pháp lưu trữ kho bãi công nghiệp"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      loading="eager"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-xs mb-2">
                        <Ruler className="size-4" />
                        Thiết Kế Chìa Khóa Trao Tay
                      </div>
                      <p className="text-sm font-medium text-white/95">
                        Khảo sát trực tiếp • Mô phỏng 3D • Tối ưu 100% luồng xuất
                        nhập kho
                      </p>
                    </div>
                  </div>

                  {/* Thẻ KPI nổi bật góc dưới trái */}
                  <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xl backdrop-blur-md">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-lg">
                      <CountUp value={80} prefix="+" suffix="%" duration={1400} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-foreground">
                        Công Suất Lưu Trữ
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tiết kiệm đến 35% chi phí thuê kho
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 4 Con số hiệu quả giải pháp */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {heroMetrics.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={stat.label}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                >
                  <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                      <Icon className="size-5 text-orange-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      <CountUp
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        delay={idx * 100}
                      />
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {stat.desc}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2 & 3. KHÁM PHÁ GIẢI PHÁP THEO NGÀNH + BỘ GỢI Ý NHANH (CLIENT COMPONENT) */}
      {/* ========================================================================= */}
      <SolutionsExplorer />

      {/* ========================================================================= */}
      {/* 4. BẢNG SO SÁNH NHANH CÁC HỆ THỐNG GIẢI PHÁP GIÁ KỆ */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <CheckCircle2 className="size-4 text-orange-500" />
                So Sánh Thông Số Trực Quan
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                Bảng So Sánh Các Giải Pháp Kệ Kho Phổ Biến
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Đánh giá nhanh sự khác biệt về mật độ lưu trữ, nguyên tắc xuất
                nhập và tải trọng giữa các hệ thống giá kệ công nghiệp.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={700}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/60 text-foreground">
                      <th className="px-5 py-4 font-bold">Hệ thống giải pháp</th>
                      <th className="px-5 py-4 font-bold">Mật độ lưu trữ</th>
                      <th className="px-5 py-4 font-bold">Khả năng tiếp cận</th>
                      <th className="px-5 py-4 font-bold">Xuất nhập</th>
                      <th className="px-5 py-4 font-bold">Tải trọng</th>
                      <th className="px-5 py-4 font-bold">Phù hợp nhất</th>
                      <th className="px-5 py-4 font-bold text-right">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solutionComparisonRows.map((row, idx) => (
                      <tr
                        key={row.slug}
                        className={`border-b border-border/60 transition-colors hover:bg-muted/40 ${
                          idx % 2 === 0 ? "bg-card" : "bg-muted/20"
                        }`}
                      >
                        <td className="px-5 py-4 font-bold text-foreground">
                          {row.name}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold ${
                              row.densityLevel === "Rất cao"
                                ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                                : row.densityLevel === "Cao"
                                  ? "bg-primary/15 text-primary"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {row.density}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground font-medium">
                          {row.accessibility}
                        </td>
                        <td className="px-5 py-4 font-semibold text-foreground">
                          {row.flowMethod}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground font-medium">
                          {row.loadCapacity}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {row.bestFor}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Link
                            href={`/san-pham/${row.slug}`}
                            className="inline-flex items-center gap-1 font-bold text-primary hover:text-orange-500 transition-colors"
                          >
                            <span>Xem</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. QUY TRÌNH TRIỂN KHAI GIẢI PHÁP 5 BƯỚC CHÌA KHÓA TRAO TAY */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Clock className="size-4 text-orange-500" />
                Quy Trình Chuẩn Kỹ Thuật
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                5 Bước Triển Khai Giải Pháp Kho Bãi Trọn Gói
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Kiểm soát chặt chẽ từ khâu khảo sát thực địa, thiết kế kỹ thuật,
                sản xuất tại nhà máy đến kiểm định bàn giao vận hành.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {implementationSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.step}
                  direction="up"
                  delay={idx * 90}
                  duration={600}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                    <div className="absolute -top-2 -right-1 text-5xl font-black text-muted/25 select-none group-hover:text-primary/15 transition-colors">
                      {item.step}
                    </div>

                    <div>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <span className="mt-4 inline-block rounded-md bg-orange-500/10 px-2.5 py-0.5 text-sm font-bold text-orange-600 dark:text-orange-400">
                        {item.duration}
                      </span>
                      <h3 className="mt-2.5 text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DỰ ÁN GIẢI PHÁP TIÊU BIỂU (CASE STUDIES) */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <ScrollReveal direction="up" duration={700}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Building2 className="size-4 text-orange-500" />
                  Hiệu Quả Đã Chứng Minh
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight text-foreground">
                  Dự Án Triển Khai Giải Pháp Tiêu Biểu
                </h2>
              </div>
            </ScrollReveal>

            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-orange-500 transition-colors shrink-0"
            >
              <span>Khám phá toàn bộ hệ kệ</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((cs, idx) => (
              <ScrollReveal
                key={cs.id}
                direction="up"
                delay={idx * 100}
                duration={650}
                className="h-full"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                    <span className="absolute top-3.5 left-3.5 rounded-lg bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-xs">
                      {cs.resultBadge}
                    </span>
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-1.5 text-sm font-medium text-white/95">
                      <MapPin className="size-4 text-orange-400 shrink-0" />
                      <span className="truncate">{cs.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-primary">
                        {cs.sector}
                      </span>
                      <h3 className="mt-1.5 text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {cs.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                        {cs.summary}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border/60 pt-4 space-y-2 text-sm">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-muted-foreground">Quy mô:</span>
                        <span className="font-semibold text-foreground text-right">
                          {cs.scale}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-muted-foreground">Giải pháp:</span>
                        <Link
                          href={`/san-pham/${cs.productSlug}`}
                          className="font-bold text-primary hover:underline text-right"
                        >
                          {cs.solutionUsed}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BANNER CTA ĐĂNG KÝ KHẢO SÁT & LÊN LAYOUT 3D MIỄN PHÍ */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-blue-700 to-primary p-8 sm:p-12 text-white shadow-xl">
              <div className="relative z-10 max-w-3xl">
                <span className="inline-block rounded-full bg-orange-500 px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-white">
                  Khảo Sát Thực Tế Miễn Phí Toàn Quốc
                </span>
                <h2 className="mt-4 text-2xl sm:text-4xl font-black leading-tight">
                  Sẵn Sàng Tối Ưu Hóa Công Suất Kho Bãi Của Bạn Ngay Hôm Nay?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
                  Gửi diện tích mặt bằng hoặc yêu cầu lưu trữ cho chúng tôi — đội
                  ngũ kỹ sư kết cấu sẽ đề xuất giải pháp giá kệ tối ưu, gửi bản vẽ
                  2D/3D và bảng dự toán chi tiết chỉ trong 24 giờ làm việc.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer"
                  >
                    <FileText className="size-5" />
                    <span>Đăng Ký Khảo Sát & Lên Layout 3D</span>
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white hover:text-primary px-6 py-3.5 text-base font-bold text-white shadow-xs transition-all cursor-pointer"
                  >
                    <PhoneCall className="size-5" />
                    <span>Hotline Kỹ Sư: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
