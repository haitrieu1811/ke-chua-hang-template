import ProductItem from "@/components/product-item";
import ScrollReveal from "@/components/scroll-reveal";
import { getAllProducts } from "@/data/products";
import {
  ArrowRight,
  Award,
  ChevronRight,
  FileText,
  Gift,
  Percent,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SHOP_INFO from "@/constants/info";
import ClaimGiftForm from "./_components/claim-gift-form";
import CountdownTimer from "./_components/countdown-timer";

export const metadata: Metadata = {
  title: "Đại Tiệc Khuyến Mãi Giáng Sinh 2026 | Giảm Tới 25% Giá Kệ Chứa Hàng",
  description:
    "Chương trình tri ân Giáng Sinh & Năm Mới 2027: Giảm tới 25% hệ thống giá kệ pallet Selective, Drive-In, Kệ Trung Tải. Tặng gói bản vẽ 3D Laser 15 triệu đồng và ốp bảo vệ chân trụ.",
};

const exclusiveGifts = [
  {
    badge: "QUÀ TẶNG 01",
    title: "Voucher Giảm 25% Chi Phí Kệ Kho",
    value: "Tiết kiệm đến 50.000.000đ",
    desc: "Áp dụng trực tiếp vào hợp đồng sản xuất kệ Selective, Drive-In hoặc Sàn Mezzanine từ 500 vị trí pallet.",
    icon: Percent,
    highlight: true,
  },
  {
    badge: "QUÀ TẶNG 02",
    title: "Gói Khảo Sát 3D Laser Trị Giá 15 Triệu",
    value: "Miễn Phí 100%",
    desc: "Kỹ sư trực tiếp đến tận nhà xưởng đo đạc thực tế, xuất bản vẽ bố trí lối đi xe nâng tối ưu trong 24 giờ.",
    icon: FileText,
  },
  {
    badge: "QUÀ TẶNG 03",
    title: "Tặng Trọn Bộ Ốp Bảo Vệ Chân Trụ",
    value: "Trị giá 10.000.000đ",
    desc: "Bọc thép chịu lực chữ U bảo vệ 100% cột góc và chân kệ ngoài cùng, triệt tiêu rủi ro va chạm xe nâng.",
    icon: ShieldCheck,
  },
  {
    badge: "QUÀ TẶNG 04",
    title: "Gói Thử Tải Tĩnh & Kiểm Định 1 Năm",
    value: "Tiêu chuẩn FEM",
    desc: "Cấp chứng chỉ nghiệm thu tải trọng và hồ sơ kiểm định an toàn kết cấu phục vụ phòng cháy chữa cháy.",
    icon: Award,
  },
];

const threeSteps = [
  {
    step: "01",
    title: "Đăng Ký & Nhận Mã Voucher",
    desc: "Điền thông tin kích thước kho bãi và chọn gói quà tặng Noel muốn nhận trong form bên dưới.",
  },
  {
    step: "02",
    title: "Kỹ Sư Khảo Sát 3D Trong 24 Giờ",
    desc: "Đội ngũ kỹ sư đến tận nơi đo đạc hiện trạng, gửi bản vẽ AutoCAD và bảng bóc tách chiết khấu ưu đãi.",
  },
  {
    step: "03",
    title: "Gia Công & Bàn Giao Kịp Tiến Độ Tết",
    desc: "Sản xuất tự động bằng thép JIS G3101, lắp đặt hoàn thiện và nghiệm thu trước Tết Nguyên Đán.",
  },
];

export default function ChristmasPromoPage() {
  const allProducts = getAllProducts();
  // Chọn 4 dòng kệ chủ lực cho Flash sale Giáng Sinh
  const promoProducts = allProducts.filter((p) =>
    [
      "ke-selective",
      "ke-drive-in",
      "ke-trung-tai",
      "ke-san-mezzanine",
    ].includes(p.slug),
  );

  return (
    <div className="bg-background min-h-screen">
      {/* 1. HERO BANNER MÙA GIÁNG SINH RỰC RỠ */}
      <section className="relative overflow-hidden border-b border-amber-400/30 bg-gradient-to-b from-red-950 via-red-900 to-background py-16 sm:py-24 text-white">
        {/* Hạt tuyết và hiệu ứng ánh sao mờ */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-amber-200 backdrop-blur-md"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="size-4" />
            <span className="font-semibold text-white">
              Ưu Đãi Giáng Sinh 2026
            </span>
          </nav>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-red-600/50 px-4 py-1.5 text-sm font-bold text-amber-200 tracking-wider uppercase backdrop-blur-md shadow-md">
              <Gift className="size-4 text-amber-300" />
              🎄 ĐẠI TIỆC TRI ÂN KHÁCH HÀNG - GIÁNG SINH & NĂM MỚI 2027
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Bùng Nổ Siêu Ưu Đãi Noel: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
                Giảm Tới 25% Toàn Bộ Kệ Chứa Hàng
              </span>
            </h1>

            <p className="text-base sm:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
              Cơ hội vàng mở rộng sức chứa kho bãi đón mùa cao điểm xuất nhập
              khẩu Tết. Tặng 50 suất đo đạc 3D Laser trị giá 15.000.000đ và gói
              phụ kiện bảo vệ an toàn cho nhà xưởng.
            </p>

            {/* Đồng hồ đếm ngược Giáng Sinh */}
            <div className="pt-4">
              <CountdownTimer />
            </div>

            {/* Nút hành động chính */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#dang-ky-uu-dai"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 px-8 py-4 text-base font-black text-slate-950 shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <Gift className="size-5" />
                <span>Đăng Ký Nhận Quà Noel Ngay</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 hover:bg-white hover:text-red-950 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all cursor-pointer"
              >
                <PhoneCall className="size-5 text-amber-300" />
                <span>Hotline Kỹ Sư: {SHOP_INFO.HOTLINE.TEXT}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KHỐI 4 HỘP QUÀ GIÁNG SINH ĐỘC QUYỀN */}
      <section className="py-16 sm:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-red-600/10 border border-red-600/20 px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                Gói Quà Tặng Doanh Nghiệp
              </span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-black text-foreground">
                4 Đặc Quyền Giáng Sinh Dành Riêng Cho Bạn
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tất cả khách hàng đăng ký trong đợt ưu đãi Noel sẽ được nhận
                đồng thời các chính sách hỗ trợ kỹ thuật cao cấp nhất.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exclusiveGifts.map((gift, idx) => {
              const Icon = gift.icon;
              return (
                <ScrollReveal
                  key={gift.title}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                  className="h-full"
                >
                  <div
                    className={`h-full rounded-3xl border-2 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm ${
                      gift.highlight
                        ? "border-red-600/70 bg-gradient-to-b from-red-600/10 via-card to-card ring-2 ring-red-600/20 shadow-md"
                        : "border-border/80 bg-card hover:border-red-600/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {gift.badge}
                        </span>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-red-600/10 text-red-600 dark:text-red-400">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-foreground leading-snug">
                        {gift.title}
                      </h3>

                      <div className="mt-2 text-base font-black text-orange-600 dark:text-orange-400">
                        {gift.value}
                      </div>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {gift.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <a
                        href="#dang-ky-uu-dai"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                      >
                        <span>Nhận gói quà này</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DÒNG KỆ CHỦ LỰC KHUYẾN MÃI (FLASH SALE GRID TÁI SỬ DỤNG PRODUCT ITEM) */}
      <section className="py-16 sm:py-20 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Sản Phẩm Áp Dụng Ưu Đãi
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-black text-foreground">
                Hệ Thống Kệ Kho Giảm Giá Mùa Giáng Sinh
              </h2>
            </div>

            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-orange-500 transition-colors"
            >
              <span>Xem toàn bộ 8 dòng kệ</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {promoProducts.map((prod, index) => (
              <ScrollReveal
                key={prod.id}
                direction="up"
                delay={index * 90}
                duration={600}
                className="h-full"
              >
                <ProductItem
                  product={prod}
                  buttonText="Xem Chi Tiết & Nhận Quà"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORM ĐĂNG KÝ KÍCH HOẠT QUÀ GIÁNG SINH (INTERACTIVE CLIENT COMPONENT) */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t border-border/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ClaimGiftForm />
        </div>
      </section>

      {/* 5. QUY TRÌNH 3 BƯỚC NHẬN ƯU ĐÃI & BÀN GIAO TRƯỚC TẾT */}
      <section className="py-16 sm:py-20 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Tiến Độ Thần Tốc
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
              Quy Trình 3 Bước Triển Khai Kịp Bàn Giao Trước Tết
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {threeSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs relative space-y-4"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-red-600 text-xl font-black text-white shadow-md">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANNER CAM KẾT CHẤT LƯỢNG TIÊU CHUẨN */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-r from-red-800 via-rose-700 to-red-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block rounded-full bg-amber-400 text-slate-950 font-black px-3.5 py-1 text-sm uppercase tracking-wide">
                Cam Kết Uy Tín
              </span>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight">
                Dù Giảm Giá Lớn - Chất Lượng Luôn Đạt Chuẩn 100% Thép JIS Nhật
                Bản
              </h2>
              <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                Chúng tôi cam kết không cắt giảm quy cách hay độ dày thép. Toàn
                bộ hệ thống kệ trong chương trình khuyến mãi Giáng Sinh vẫn được
                bảo hành kết cấu 5 năm và hỗ trợ kỹ thuật trọn đời.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#dang-ky-uu-dai"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-red-950 hover:bg-amber-100 px-6 py-3.5 text-base font-bold shadow-md transition-all cursor-pointer"
                >
                  <Gift className="size-5 text-red-600" />
                  <span>Kích Hoạt Ưu Đãi Ngay</span>
                </a>
                <a
                  href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-base font-bold text-white transition-all cursor-pointer"
                >
                  <PhoneCall className="size-5 text-amber-300" />
                  <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
