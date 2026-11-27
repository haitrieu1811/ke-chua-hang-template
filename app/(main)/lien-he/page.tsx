import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Liên Hệ Tư Vấn & Báo Giá | Kệ Kim Phú",
  description:
    "Kim Phú sẵn sàng hỗ trợ quý khách tìm hiểu sản phẩm, lựa chọn quy cách phù hợp và cung cấp thông tin báo giá kệ sắt theo nhu cầu sử dụng.",
};

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 1. BREADCRUMB & HERO BANNER LIÊN HỆ */}
      <section className="relative border-b border-border/80 bg-muted/30 py-12 sm:py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={500}>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors font-medium"
              >
                {t("breadcrumb.home")}
              </Link>
              <ChevronRight className="size-4 opacity-50" />
              <span className="text-foreground font-semibold">
                {t("breadcrumb.current")}
              </span>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={700}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Sparkles className="size-4 text-orange-500" />
                {t("hero.badge")}
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                {t("hero.titleStart")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("hero.desc")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THÔNG TIN LIÊN HỆ (TRÁI) & FORM ĐĂNG KÝ TƯ VẤN (PHẢI) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Cột trái: Thông tin liên hệ + Bản đồ */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="up" duration={600}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-border" />
                  <h2 className="text-lg sm:text-xl font-black text-primary text-center uppercase">
                    KỆ KIM PHÚ
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Địa chỉ */}
                  <div className="space-y-2">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-5 text-orange-500" />
                    </div>
                    <h3 className="text-sm font-black text-primary uppercase">
                      {t("info.officeTitle")}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {SHOP_INFO.ADDRESS}
                    </p>
                  </div>

                  {/* Thời gian làm việc */}
                  <div className="space-y-2">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-5 text-orange-500" />
                    </div>
                    <h3 className="text-sm font-black text-primary uppercase">
                      {t("info.hoursTitle")}
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-semibold text-foreground">
                        {t("info.hoursDays")}
                      </p>
                      <p>{t("info.hoursMorning")}</p>
                      <p>{t("info.hoursAfternoon")}</p>
                    </div>
                  </div>

                  {/* Hotline & Email */}
                  <div className="sm:col-span-2 space-y-2 pt-4 border-t border-border/60">
                    <h3 className="text-sm font-black text-primary uppercase">
                      {t("info.contactTitle")}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
                      <a
                        href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                        className="inline-flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400 hover:underline"
                      >
                        <PhoneCall className="size-4 text-primary shrink-0" />
                        <span>
                          {t("info.hotlineLabel")} {SHOP_INFO.HOTLINE.TEXT}
                        </span>
                      </a>
                      <a
                        href={`mailto:${SHOP_INFO.EMAIL}`}
                        className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                      >
                        <Mail className="size-4 text-primary shrink-0" />
                        <span>
                          {t("info.emailLabel")} {SHOP_INFO.EMAIL}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Bản đồ Google Maps */}
              <ScrollReveal direction="up" delay={120} duration={650}>
                <div className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden bg-muted">
                    <iframe
                      title={SHOP_INFO.ADDRESS}
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
                      {t("map.title")}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {SHOP_INFO.ADDRESS}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Cột phải: Form đăng ký tư vấn & báo giá */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={80} duration={650}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
