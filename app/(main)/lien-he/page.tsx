import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  Factory,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Liên Hệ & Đăng Ký Khảo Sát Kho | Kệ Chứa Hàng",
  description:
    "Liên hệ trực tiếp với nhà máy sản xuất và văn phòng kỹ thuật Kệ Chứa Hàng. Miễn phí 100% khảo sát đo đạc hiện trạng và bản vẽ thiết kế 3D layout kho bãi.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB & HERO BANNER LIÊN HỆ */}
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
              <span className="text-foreground font-semibold">Liên hệ</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={700}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Sparkles className="size-4 text-orange-500" />
                Hỗ Trợ Kỹ Thuật 24/7
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                Liên Hệ Tư Vấn &{" "}
                <span className="text-primary">Khảo Sát Mặt Bằng Kho</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Đội ngũ kỹ sư kết cấu của chúng tôi luôn sẵn sàng có mặt tại nhà
                kho của quý khách trong vòng 24h để đo đạc hiện trạng, tính toán
                luồng di chuyển xe nâng và lên phương án bản vẽ 3D hoàn toàn
                miễn phí.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Thẻ Thông Tin Liên Hệ Trực Tiếp */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Thẻ 1: Trụ sở văn phòng & Showroom */}
            <ScrollReveal direction="up" delay={100} duration={600}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Building2 className="size-6 text-orange-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Trụ Sở & Showroom Trưng Bày
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{SHOP_INFO.ADDRESS}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="size-4 text-primary shrink-0" />
                      <span>Thứ 2 - Thứ 7: 08:00 - 17:30</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-sm font-semibold text-primary">
                  Có bãi đỗ xe ô tô & mẫu kệ thực tế
                </div>
              </div>
            </ScrollReveal>

            {/* Thẻ 2: Nhà máy sản xuất & Xưởng sơn */}
            <ScrollReveal direction="up" delay={200} duration={600}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 mb-4">
                    <Factory className="size-6 text-orange-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Nhà Máy Sản Xuất Tự Động
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <MapPin className="size-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>
                        Lô CN-08, KCN Yên Phong II-C, Huyện Yên Phong, Tỉnh Bắc
                        Ninh
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="size-4 text-orange-500 shrink-0" />
                      <span>Quy mô 15.000m² - Dây chuyền dập cuộn CNC</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Năng suất 1.200 tấn thép/tháng
                </div>
              </div>
            </ScrollReveal>

            {/* Thẻ 3: Hotline & Email hỗ trợ */}
            <ScrollReveal direction="up" delay={300} duration={600}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Headphones className="size-6 text-orange-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Hotline & Email Kỹ Thuật
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <PhoneCall className="size-4 text-primary shrink-0" />
                      <a
                        href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                        className="font-bold text-orange-600 dark:text-orange-400 hover:underline"
                      >
                        Hotline: {SHOP_INFO.HOTLINE.TEXT}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="size-4 text-primary shrink-0" />
                      <a
                        href={`mailto:${SHOP_INFO.EMAIL}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {SHOP_INFO.EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-sm font-semibold text-primary">
                  Tư vấn kỹ thuật 24/7 toàn quốc
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. KHU VỰC FORM ĐĂNG KÝ KHẢO SÁT & BẢN ĐỒ VỊ TRÍ */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Form đăng ký bên trái */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" duration={700}>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Bản đồ & Cam kết dịch vụ bên phải */}
            <div className="lg:col-span-5 space-y-6">
              {/* Google Maps Embed */}
              <ScrollReveal direction="left" duration={700}>
                <div className="overflow-hidden rounded-3xl border border-border/80 bg-card p-2 shadow-xl">
                  <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-muted">
                    <iframe
                      title={`Bản đồ chỉ đường tới ${SHOP_INFO.ADDRESS}`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(SHOP_INFO.ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="size-full"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-sm font-bold text-foreground block">
                      Vị trí Showroom & Văn Phòng Kỹ Thuật
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {SHOP_INFO.ADDRESS}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* 4 Cam Kết Vàng Khi Đặt Hàng */}
              <ScrollReveal direction="up" delay={200} duration={700}>
                <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                    <ShieldCheck className="size-5 text-orange-500" />
                    <span>Cam Kết Dịch Vụ Của Chúng Tôi</span>
                  </h4>

                  <div className="mt-4 space-y-3">
                    {[
                      "Khảo sát hiện trạng kho miễn phí trong 24 giờ",
                      "Bản vẽ 2D kỹ thuật và 3D phối cảnh xe nâng trong 24h",
                      "100% phôi thép cán nguội đạt chuẩn JIS G3101",
                      "Bảo hành kết cấu 5 năm và bảo trì trọn đời dự án",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
                      >
                        <CheckCircle2 className="size-4 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
