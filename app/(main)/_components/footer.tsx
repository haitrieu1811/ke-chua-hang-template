"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterLinkColumn {
  key: string;
  title: string;
  colSpan: string;
  links: FooterLinkItem[];
}

interface ContactItem {
  key: string;
  icon: LucideIcon;
  iconClassName: string;
  alignTop?: boolean;
  label: string;
  href?: string;
  linkClassName?: string;
}

const socialLinks = [
  {
    name: "Facebook",
    href: SHOP_INFO.FACEBOOK_URL,
    hoverClassName: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    svgPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "TikTok",
    href: SHOP_INFO.TIKTOK_URL,
    hoverClassName:
      "hover:bg-zinc-900 hover:border-zinc-900 dark:hover:bg-zinc-800 dark:hover:border-zinc-700",
    svgPath:
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    name: "YouTube",
    href: SHOP_INFO.YOUTUBE_URL,
    hoverClassName: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    svgPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function MainFooter() {
  const t = useTranslations("Footer");

  const companyMeta = [
    { key: "taxCode", label: t("taxCodeLabel"), value: "0109887766" },
    {
      key: "certification",
      label: t("certificationLabel"),
      value: "ISO 9001:2015 & JIS G3101",
    },
  ];

  const footerLinkColumns: FooterLinkColumn[] = [
    {
      key: "policies",
      title: t("policiesTitle"),
      colSpan: "lg:col-span-3",
      links: [
        { label: t("policies.sales"), href: "/chinh-sach-ban-hang" },
        { label: t("policies.returns"), href: "/chinh-sach-doi-tra" },
        { label: t("policies.privacy"), href: "/chinh-sach-bao-mat" },
        { label: t("policies.payment"), href: "/huong-dan-thanh-toan" },
        { label: t("policies.terms"), href: "/dieu-khoan-su-dung" },
      ],
    },
    {
      key: "about",
      title: t("aboutTitle"),
      colSpan: "lg:col-span-3",
      links: [
        { label: t("about.company"), href: "/gioi-thieu" },
        { label: t("about.factory"), href: "/nang-luc-san-xuat" },
        { label: t("about.projects"), href: "/du-an-tieu-bieu" },
        { label: t("about.warranty"), href: "/chinh-sach-bao-hanh" },
        { label: t("about.news"), href: "/bai-viet" },
        { label: t("about.contact"), href: "/lien-he" },
      ],
    },
  ];

  const contactItems: ContactItem[] = [
    {
      key: "address",
      icon: MapPin,
      iconClassName: "text-primary mt-0.5",
      alignTop: true,
      label: SHOP_INFO.ADDRESS,
    },
    {
      key: "hotline",
      icon: Phone,
      iconClassName: "text-amber-500",
      label: t("hotline", { hotline: SHOP_INFO.HOTLINE.TEXT }),
      href: `tel:${SHOP_INFO.HOTLINE.NUMBER}`,
      linkClassName:
        "font-bold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition-colors",
    },
    {
      key: "email",
      icon: Mail,
      iconClassName: "text-primary",
      label: SHOP_INFO.EMAIL,
      href: `mailto:${SHOP_INFO.EMAIL}`,
      linkClassName:
        "text-zinc-700 hover:text-primary dark:text-zinc-300 dark:hover:text-primary transition-colors",
    },
    {
      key: "hours",
      icon: Clock,
      iconClassName: "text-primary",
      label: t("hours"),
    },
  ];

  const bottomLinks: FooterLinkItem[] = [
    { label: t("bottom.privacy"), href: "/chinh-sach-bao-mat" },
    { label: t("bottom.terms"), href: "/dieu-khoan-su-dung" },
    { label: t("bottom.standards"), href: "/quy-chuan-ky-thuat" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-100 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
      {/* MAIN FOOTER CONTENT (4 COLUMNS - HỖ TRỢ LIGHT & DARK MODE) */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={700}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* CỘT 1: THƯƠNG HIỆU & GIỚI THIỆU */}
            <div className="lg:col-span-3">
              <Logo theme="light" />

              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t("description")}
              </p>

              {/* Mạng xã hội */}
              <div className="mt-5 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`flex size-9 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 transition-all ${social.hoverClassName}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d={social.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                {companyMeta.map((meta) => (
                  <div key={meta.key}>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                      {meta.label}
                    </span>{" "}
                    <span>{meta.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CỘT 2 & 3: THÔNG TIN CHÍNH SÁCH & VỀ CHÚNG TÔI */}
            {footerLinkColumns.map((column) => (
              <div key={column.key} className={column.colSpan}>
                <h3 className="text-base font-bold tracking-wider text-zinc-900 dark:text-white uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-primary dark:hover:text-white flex items-center gap-2"
                      >
                        <ArrowRight className="size-3.5 text-primary shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CỘT 4: THÔNG TIN LIÊN HỆ & FORM ĐĂNG KÝ BÁO GIÁ */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-bold tracking-wider text-zinc-900 dark:text-white uppercase">
                {t("contactTitle")}
              </h3>
              <div className="mt-4 flex flex-col gap-3.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.key}
                      className={`flex gap-2.5 ${item.alignTop ? "items-start" : "items-center"}`}
                    >
                      <Icon className={`size-4.5 shrink-0 ${item.iconClassName}`} />
                      {item.href ? (
                        <a href={item.href} className={item.linkClassName}>
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Form nhận catalogue báo giá nhanh */}
              <div className="mt-6 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/90 p-4 shadow-sm">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {t("newsletter.title")}
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {t("newsletter.desc")}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(t("newsletter.successAlert"));
                  }}
                  className="mt-3.5 flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder={t("newsletter.placeholder")}
                    className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <Button
                    type="submit"
                    size="default"
                    className="h-10 px-4 shrink-0 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-xs shadow-orange-500/20"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-zinc-200 bg-zinc-200/70 dark:border-zinc-800/80 dark:bg-black/40 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
          <div>{t("copyright")}</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
            {bottomLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && (
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                )}
                <Link
                  href={link.href}
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
