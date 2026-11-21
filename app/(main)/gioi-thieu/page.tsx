import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Factory,
  Check,
  PhoneCall,
  ArrowRight,
  Target,
  Compass,
  Zap,
  Ruler,
  FileText,
  Truck,
  HeartHandshake,
  History,
  Cpu,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import SHOP_INFO from "@/constants/info";

const developmentMilestones = [
  {
    year: "2014",
    tag: "Khởi Nghiệp",
    highlight: "Xưởng 1.200m²",
    title: "Thành Lập & Khởi Nguồn Cơ Khí Kho Vận",
    desc: "Thành lập xưởng gia công cơ khí đầu tiên tại TP.HCM, chuyên chế tạo các dòng kệ sắt V lỗ và kệ trung tải phục vụ các doanh nghiệp bán lẻ và kho hàng vừa & nhỏ.",
    icon: Building2,
    isCurrent: false,
  },
  {
    year: "2017",
    tag: "Bứt Phá Sản Phẩm",
    highlight: "500+ Dự Án",
    title: "Mở Rộng Dây Chuyền Kệ Tải Nặng Công Nghiệp",
    desc: "Đầu tư hệ thống cán định hình chân trụ Omega tự động và đưa vào sản xuất hàng loạt kệ Pallet Selective, Drive-In chịu tải nặng lên đến 3.500kg/pallet.",
    icon: Zap,
    isCurrent: false,
  },
  {
    year: "2019",
    tag: "Chuẩn Hóa Quốc Tế",
    highlight: "ISO 9001:2015",
    title: "Đạt Chứng Nhận ISO 9001:2015 & Chuẩn Thép JIS G3101",
    desc: "Hoàn thiện quy trình kiểm soát chất lượng ISO 9001:2015, chuẩn hóa 100% nguyên liệu thép cán nguội JIS G3101 và tiêu chuẩn kết cấu an toàn FEM 10.2.02 châu Âu.",
    icon: Award,
    isCurrent: false,
  },
  {
    year: "2021",
    tag: "Mở Rộng Quy Mô",
    highlight: "1.200 Tấn / Tháng",
    title: "Khánh Thành Nhà Máy Tự Động Quy Mô 15.000m²",
    desc: "Đưa vào vận hành nhà máy mới tích hợp dây chuyền phun sơn tĩnh điện khép kín 10 bể xử lý, nâng công suất chế tạo đạt 1.200 tấn thép mỗi tháng.",
    icon: Factory,
    isCurrent: false,
  },
  {
    year: "2024",
    tag: "Chuyển Đổi Số Kho",
    highlight: "2.500+ Dự Án",
    title: "Tiên Phong Giải Pháp Kho Thông Minh Radio Shuttle & AS/RS",
    desc: "Triển khai thành công hàng loạt hệ thống kệ tự động Radio Shuttle, sàn lửng Mezzanine đa tầng cho các trung tâm logistics 3PL, kho lạnh âm sâu và kho E-Commerce.",
    icon: Cpu,
    isCurrent: false,
  },
  {
    year: "2026",
    tag: "Vị Thế Dẫn Đầu",
    highlight: "3.500+ Dự Án",
    title: "Chạm Mốc 3.500+ Dự Án & Phủ Sóng Toàn Quốc",
    desc: "Trở thành đối tác chiến lược của hàng nghìn doanh nghiệp sản xuất và phân phối trên khắp cả nước, hướng tới vị thế tổng thầu giải pháp kho vận thông minh hàng đầu Việt Nam.",
    icon: Globe,
    isCurrent: true,
  },
];

export const metadata: Metadata = {
  title: "Giới Thiệu Về Chúng Tôi | Kệ Chứa Hàng Công Nghiệp",
  description:
    "Tìm hiểu về năng lực sản xuất, dây chuyền công nghệ tự động, tầm nhìn sứ mệnh và 12+ năm kinh nghiệm cung cấp giải pháp giá kệ kho bãi hàng đầu Việt Nam.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB & HERO BANNER GIỚI THIỆU */}
      {/* ========================================================================= */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-20 overflow-hidden">
        {/* Nền hiệu ứng trang trí nhẹ */}
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
              <span className="text-foreground font-semibold">Giới thiệu</span>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Nội dung giới thiệu bên trái */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Sparkles className="size-4 text-orange-500" />
                  Hơn 12 năm kiến tạo không gian lưu trữ
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                  Chuyên Gia Sản Xuất & Lắp Đặt{" "}
                  <span className="text-primary">Giá Kệ Kho Hàng</span> Công Nghiệp
                </h1>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực nghiên cứu,
                  chế tạo cơ khí chính xác và thi công trọn gói hệ thống giá kệ chứa
                  hàng chịu tải từ nhẹ, trung tải đến tải trọng nặng cho hàng ngàn
                  nhà máy, kho logistics và trung tâm phân phối trên cả nước.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    <span>Yêu Cầu Khảo Sát Miễn Phí</span>
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

            {/* Ảnh minh họa dự án kho vận thực tế */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" duration={750} delay={200}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl">
                    <img
                      src="/images/hero-warehouse.jpg"
                      alt="Tổng quan kho bãi lắp đặt kệ công nghiệp hiện đại"
                      className="h-[360px] sm:h-[420px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-xs mb-2">
                        <Award className="size-4" />
                        Tiêu Chuẩn ISO 9001:2015
                      </div>
                      <p className="text-sm font-medium text-white/90">
                        Hệ thống kho bãi thông minh tối ưu 100% pallet và luồng xe nâng
                      </p>
                    </div>
                  </div>

                  {/* Thẻ nổi bật kinh nghiệm góc dưới */}
                  <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xl backdrop-blur-md">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-xl">
                      <CountUp value={12} suffix="+" duration={1400} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-foreground">
                        Năm Tiên Phong
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Chế tạo & lắp đặt giá kệ
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Lưới 4 Con Số Thống Kê Ấn Tượng */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              {
                value: 12,
                decimals: 0,
                suffix: "+",
                label: "Năm Kinh Nghiệm",
                desc: "Đồng hành cơ khí kho vận",
                icon: Clock,
              },
              {
                value: 3500,
                decimals: 0,
                suffix: "+",
                label: "Dự Án Bàn Giao",
                desc: "Kho xưởng trên toàn quốc",
                icon: Building2,
              },
              {
                value: 15000,
                decimals: 0,
                suffix: "m²",
                label: "Quy Mô Nhà Máy",
                desc: "Dây chuyền dập cuộn CNC",
                icon: Factory,
              },
              {
                value: 99.8,
                decimals: 1,
                suffix: "%",
                label: "Khách Hàng Hài Lòng",
                desc: "Cam kết chất lượng trọn đời",
                icon: HeartHandshake,
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                  duration={600}
                >
                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                      <Icon className="size-5 text-orange-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      <CountUp
                        value={stat.value}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        delay={idx * 120}
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
      {/* 2. CÂU CHUYỆN THƯƠNG HIỆU & TẦM NHÌN - SỨ MỆNH */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Ảnh xưởng gia công công nghệ cao */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="right" duration={700}>
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
                  <img
                    src="/images/factory-production.jpg"
                    alt="Dây chuyền sản xuất cơ khí giá kệ kho bãi hiện đại"
                    className="h-[380px] sm:h-[450px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm font-bold text-orange-400 uppercase tracking-wider block mb-1">
                      Nhà Máy Hiện Đại
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      Quy trình tự động hóa dập định hình & sơn tĩnh điện
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Văn bản Câu chuyện & Tầm nhìn Sứ mệnh */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Compass className="size-4 text-orange-500" />
                  Định Hướng Phát Triển
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  Hành Trình Khởi Nghiệp & Sứ Mệnh Giải Phóng Mặt Bằng Kho
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Xuất phát điểm từ niềm đam mê chế tạo cơ khí công nghiệp nặng,
                  chúng tôi nhận thấy bài toán nan giải của các doanh nghiệp Việt Nam:
                  chi phí thuê mặt bằng kho bãi ngày càng tăng cao trong khi diện tích
                  lưu trữ hàng hóa bị giới hạn do việc bố trí kệ chứa hàng chưa khoa học.
                </p>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Với đội ngũ kỹ sư kết cấu giàu nhiệt huyết, chúng tôi đã đầu tư bài bản
                  hệ thống máy móc dập cuộn CNC, dây chuyền phun sơn tĩnh điện tự động
                  để mang lại sản phẩm giá kệ đạt độ an toàn tải trọng tối đa, độ bền
                  trên 15 năm và mức giá tận gốc nhà máy.
                </p>

                {/* 2 Khối Tầm Nhìn & Sứ Mệnh */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 transition-colors hover:border-primary">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-3">
                      <Target className="size-5" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      Tầm Nhìn 2030
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Trở thành thương hiệu tổng thầu cung cấp giải pháp giá kệ lưu trữ
                      và hệ thống kho tự động thông minh (AS/RS) uy tín số 1 tại Việt Nam.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 transition-colors hover:border-orange-500">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-white mb-3">
                      <Zap className="size-5" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      Sứ Mệnh Phụng Sự
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Tối ưu hóa từng mét vuông kho bãi, đảm bảo an toàn tuyệt đối cho người
                      và hàng hóa, giúp doanh nghiệp tiết kiệm 20% - 30% chi phí đầu tư.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DÒNG THỜI GIAN PHÁT TRIỂN CÔNG TY (COMPANY TIMELINE) */}
      {/* ========================================================================= */}
      <section className="relative border-b border-border/80 bg-muted/30 py-16 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(59,130,246,0.06),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <History className="size-4 text-orange-500" />
                Chặng Đường Hình Thành & Bứt Phá
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                Các Cột Mốc Phát Triển Qua{" "}
                <span className="text-primary">
                  <CountUp value={12} suffix="+ Năm" duration={1400} />
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Từ xưởng cơ khí đầu tiên năm 2014 đến hệ thống nhà máy tự động
                15.000m² phục vụ hơn 3.500 dự án kho bãi công nghiệp trên toàn
                quốc.
              </p>
            </div>
          </ScrollReveal>

          {/* Trục thời gian dọc: giữa màn hình trên Desktop, bên trái trên Mobile */}
          <div className="relative mt-14 sm:mt-16">
            {/* Đường trục nối dọc */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-5 lg:left-1/2 lg:-translate-x-1/2 w-0.5 bg-linear-to-b from-primary/25 via-primary to-orange-500"
            />

            <div className="space-y-8 lg:space-y-12">
              {developmentMilestones.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center"
                  >
                    {/* Nút mốc năm nằm trên trục dọc */}
                    <div
                      className={`absolute left-5 lg:left-1/2 -translate-x-1/2 z-10 flex size-11 sm:size-12 items-center justify-center rounded-full border-4 border-background shadow-md font-black text-xs sm:text-sm ${
                        item.isCurrent
                          ? "bg-orange-500 text-white ring-4 ring-orange-500/20"
                          : "bg-primary text-primary-foreground ring-4 ring-primary/15"
                      }`}
                    >
                      {item.year}
                    </div>

                    {/* Thẻ nội dung cột mốc (xen kẽ trái / phải trên desktop) */}
                    <div
                      className={`pl-14 sm:pl-16 lg:pl-0 ${
                        isEven
                          ? "lg:col-start-1 lg:pr-4"
                          : "lg:col-start-2 lg:pl-4"
                      }`}
                    >
                      <ScrollReveal
                        direction={isEven ? "right" : "left"}
                        delay={idx * 80}
                        duration={650}
                      >
                        <div
                          className={`group rounded-2xl border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                            item.isCurrent
                              ? "border-orange-500/50 ring-1 ring-orange-500/20"
                              : "border-border/80 hover:border-primary/50"
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                                  item.isCurrent
                                    ? "bg-orange-500 text-white"
                                    : "bg-primary/10 text-primary"
                                }`}
                              >
                                <Icon
                                  className={`size-5 ${
                                    item.isCurrent
                                      ? "text-white"
                                      : "text-orange-500"
                                  }`}
                                />
                              </div>
                              <span
                                className={`text-sm font-bold uppercase tracking-wider ${
                                  item.isCurrent
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-primary"
                                }`}
                              >
                                {item.tag}
                              </span>
                            </div>

                            <span
                              className={`rounded-full px-3 py-1 text-xs sm:text-sm font-bold ${
                                item.isCurrent
                                  ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              {item.highlight}
                            </span>
                          </div>

                          <h3 className="mt-4 text-lg sm:text-xl font-black text-foreground leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NĂM GIÁ TRỊ CỐT LÕI (CORE VALUES) */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <ShieldCheck className="size-4 text-orange-500" />
                Nguyên Tắc Hành Động
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                5 Giá Trị Cốt Lõi Tạo Nên Uy Tín Thương Hiệu
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Kim chỉ nam định hướng cho mọi hành động từ khâu tư vấn, sản xuất
                cho đến dịch vụ hậu mãi của tập thể cán bộ công nhân viên.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Thép Chuẩn & An Toàn Tuyệt Đối",
                desc: "100% sản phẩm gia công từ thép cán nguội JIS G3101 có chứng nhận xuất xứ CO/CQ. Tính toán kết cấu chịu tải chuẩn hệ số FEM Châu Âu.",
                highlight: true,
              },
              {
                step: "02",
                title: "Giá Gốc Tại Xưởng Sản Xuất",
                desc: "Trực tiếp chế tạo và thi công, không qua trung gian phân phối giúp khách hàng tiết kiệm tối đa ngân sách đầu tư ban đầu.",
                highlight: false,
              },
              {
                step: "03",
                title: "Khảo Sát & Bản Vẽ 3D Trong 24h",
                desc: "Kỹ sư kết cấu trực tiếp đến tận nhà kho đo đạc thực tế, lên layout bản vẽ 2D/3D mô phỏng luồng xe nâng hoàn toàn miễn phí.",
                highlight: false,
              },
              {
                step: "04",
                title: "Lắp Đặt Thần Tốc Đúng Tiến Độ",
                desc: "Đội ngũ kỹ thuật lành nghề trang bị dụng cụ thi công tiêu chuẩn, cam kết bàn giao mặt bằng đúng theo hợp đồng cam kết.",
                highlight: false,
              },
              {
                step: "05",
                title: "Bảo Hành 5 Năm & Đồng Hành Trọn Đời",
                desc: "Chính sách bảo hành kết cấu lên đến 5 năm, hỗ trợ kiểm định định kỳ, di dời, nâng cấp mở rộng tầng kệ theo nhu cầu kinh doanh.",
                highlight: true,
              },
              {
                step: "06",
                title: "Tận Tâm Phục Vụ Vì Khách Hàng",
                desc: "Luôn lắng nghe và tìm giải pháp tối ưu nhất cho từng mặt hàng đặc thù: hàng nặng, kho lạnh, kho dược phẩm hay linh kiện điện tử.",
                highlight: false,
              },
            ].map((val, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                duration={600}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  {/* Watermark số thứ tự */}
                  <div className="absolute -top-3 -right-2 text-5xl font-black text-muted/25 select-none transition-colors group-hover:text-primary/10">
                    {val.step}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <CheckCircle2 className="size-5 text-orange-500" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">
                        Cam Kết #{val.step}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {val.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                    <span>Đạt tiêu chuẩn an toàn</span>
                    <Check className="size-4 text-orange-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NĂNG LỰC NHÀ MÁY & DÂY CHUYỀN SẢN XUẤT */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Cột thông tin năng lực */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="up" duration={700}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                  <Factory className="size-4 text-orange-500" />
                  Quy Trình Chế Tạo
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  Năng Lực Sản Xuất & Công Nghệ Sơn Tĩnh Điện Khép Kín
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Nhà máy của chúng tôi trang bị hệ thống máy móc dập cuộn tạo hình
                  chân trụ Omega (Ω), dập dầm beam hộp và mâm tole gân tăng cứng
                  với độ chuẩn xác tới từng milimet.
                </p>

                <div className="mt-6 space-y-3.5">
                  {[
                    {
                      title: "Dây Chuyền Cán Định Hình Tự Động",
                      desc: "Tạo biên dạng chân trụ Omega dập lỗ đa điểm, giúp tháo lắp và thay đổi khoảng cách tầng kệ cực kỳ linh hoạt.",
                    },
                    {
                      title: "Hệ Thống Sơn Tĩnh Điện Tự Động 10 Bể Xử Lý",
                      desc: "Tẩy dầu mỡ, định hình bề mặt phốt phát hóa và phủ sơn bột tĩnh điện nung ở 200°C chống ăn mòn và gỉ sét tối ưu.",
                    },
                    {
                      title: "Năng Suất 1.200 Tấn Thép / Tháng",
                      desc: "Đáp ứng mọi quy mô dự án từ kho vừa và nhỏ đến các đại siêu kho logistics hàng chục ngàn pallet.",
                    },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                        <Check className="size-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Cột ảnh & minh họa 2 dòng sản phẩm chủ lực */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={700}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
                    <img
                      src="/images/racking-selective.jpg"
                      alt="Hệ thống kệ tải nặng Selective hoàn thiện"
                      className="h-56 sm:h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-3 text-center bg-card border-t border-border/60">
                      <span className="text-sm font-bold text-foreground block">
                        Kệ Pallet Tải Nặng
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Chịu tải 1.000 - 3.500kg
                      </span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
                    <img
                      src="/images/racking-mezzanine.jpg"
                      alt="Hệ thống kệ sàn lửng Mezzanine Floor nhân đôi diện tích"
                      className="h-56 sm:h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-3 text-center bg-card border-t border-border/60">
                      <span className="text-sm font-bold text-foreground block">
                        Kệ Sàn Lửng Mezzanine
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Nhân đôi mặt sàn kho
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. QUY TRÌNH THI CÔNG TRỌN GÓI 5 BƯỚC */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-muted/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Ruler className="size-4 text-orange-500" />
                Chuẩn Hóa Kỹ Thuật
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                Quy Trình Triển Khai Chuyên Nghiệp 5 Bước
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Đảm bảo mỗi dự án từ khi khảo sát đến lúc bàn giao đều được kiểm soát
                nghiêm ngặt về tiến độ, chất lượng và thẩm mỹ.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                icon: Ruler,
                title: "Khảo Sát Hiện Trạng",
                desc: "Kỹ sư đến tận nơi đo đạc diện tích, kiểm tra độ phẳng nền kho và luồng xe nâng hoàn toàn miễn phí.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Lên Bản Vẽ 2D/3D",
                desc: "Thiết kế phương án tối ưu số lượng pallet, lối đi và gửi bản vẽ phối cảnh 3D trực quan trong 24h.",
              },
              {
                step: "03",
                icon: Factory,
                title: "Sản Xuất Tại Xưởng",
                desc: "Gia công thép cán nguội JIS G3101, sơn tĩnh điện công nghệ cao theo thông số kỹ thuật đã phê duyệt.",
              },
              {
                step: "04",
                icon: Truck,
                title: "Lắp Đặt Thần Tốc",
                desc: "Vận chuyển tận nơi, lắp ráp chuyên nghiệp, cân chỉnh độ thăng bằng dầm beam và neo chân trụ vững chắc.",
              },
              {
                step: "05",
                icon: ShieldCheck,
                title: "Nghiệm Thu & Bảo Hành",
                desc: "Tiến hành thử tải thực tế, bàn giao hồ sơ nghiệm thu kỹ thuật và kích hoạt bảo hành điện tử 5 năm.",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg">
                    <div>
                      {/* Huy hiệu số thứ tự */}
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-xs">
                          {step.step}
                        </span>
                        <Icon className="size-5 text-orange-500 transition-transform group-hover:scale-110" />
                      </div>

                      <h3 className="mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 text-sm font-semibold text-primary flex items-center gap-1">
                      <span>Đúng tiến độ</span>
                      <Check className="size-4 text-orange-500" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION: ĐẶT LỊCH KHẢO SÁT & TƯ VẤN */}
      {/* ========================================================================= */}
      <section className="relative bg-background py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 shadow-xl text-center">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-bold text-white shadow-xs">
                  <Sparkles className="size-4" />
                  ĐỒNG HÀNH CÙNG DOANH NGHIỆP BẠN
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  Sẵn Sàng Tối Ưu Hóa Diện Tích Kho Bãi Của Bạn?
                </h2>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Liên hệ ngay hôm nay để đội ngũ kỹ sư kết cấu hàng đầu đến tận nơi
                  khảo sát và lên bản vẽ mô phỏng 3D hoàn toàn miễn phí.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    <span>Đăng Ký Khảo Sát Kho Ngay</span>
                    <ArrowRight className="size-4.5" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-8 py-3.5 text-sm sm:text-base font-bold text-foreground hover:bg-muted transition-colors"
                  >
                    <PhoneCall className="size-4.5 text-orange-500" />
                    <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
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
