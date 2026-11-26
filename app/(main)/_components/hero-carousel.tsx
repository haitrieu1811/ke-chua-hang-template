"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import SHOP_INFO from "@/constants/info";
import PATH from "@/constants/path";

export default function HomeCarousel() {
  const t = useTranslations("HomePage.hero");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/hero-slide-1.jpg",
      badge: t("slides.slide1.badge"),
      title: t("slides.slide1.title"),
      highlight: t("slides.slide1.highlight"),
      desc: t("slides.slide1.desc"),
      tags: [
        t("slides.slide1.tag1"),
        t("slides.slide1.tag2"),
        t("slides.slide1.tag3"),
      ],
      primaryCta: t("slides.slide1.primaryCta"),
      secondaryCta: t("slides.slide1.secondaryCta", {
        hotline: SHOP_INFO.HOTLINE.TEXT,
      }),
    },
    {
      id: 2,
      image: "/images/hero-slide-2.jpg",
      badge: t("slides.slide2.badge"),
      title: t("slides.slide2.title"),
      highlight: t("slides.slide2.highlight"),
      desc: t("slides.slide2.desc"),
      tags: [t("slides.slide2.tag1"), t("slides.slide2.tag2")],
      primaryCta: t("slides.slide2.primaryCta"),
      secondaryCta: t("slides.slide1.secondaryCta", {
        hotline: SHOP_INFO.HOTLINE.TEXT,
      }),
    },
    {
      id: 3,
      image: "/images/hero-slide-3.jpg",
      badge: t("slides.slide3.badge"),
      title: t("slides.slide3.title"),
      highlight: t("slides.slide3.highlight"),
      desc: t("slides.slide3.desc"),
      tags: [t("slides.slide3.tag1"), t("slides.slide3.tag2")],
      primaryCta: t("slides.slide3.primaryCta"),
      secondaryCta: t("slides.slide1.secondaryCta", {
        hotline: SHOP_INFO.HOTLINE.TEXT,
      }),
    },
  ];

  // Cập nhật chỉ số slide hiện tại
  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  // Tự động chuyển slide sau mỗi 6 giây
  React.useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0 items-stretch">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative h-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] w-full flex items-center justify-center overflow-hidden">
                {/* Ảnh nền slide thực tế độ phân giải cao */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 scale-102"
                />

                {/* Lớp phủ Gradient nhẹ để giữ ảnh sáng rõ và chữ vẫn nổi bật */}
                <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/10" />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Nội dung chính của Slide (Font size >= 14px) */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 w-full text-white">
                  <div className="max-w-3xl">
                    {/* Badge phân loại chuẩn Xanh chủ đạo với icon Cam phụ trợ */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-primary/90 px-4 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                      <Sparkles className="size-4 text-orange-400" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Tiêu đề Slide với điểm nhấn Cam nổi bật */}
                    <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.12]">
                      {slide.title} <br />
                      <span className="text-orange-400">{slide.highlight}</span>
                    </h1>

                    {/* Đoạn mô tả */}
                    <p className="mt-4 text-sm text-zinc-200 sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                      {slide.desc}
                    </p>

                    {/* Điểm nổi bật nhanh (Tags) */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-200">
                      {slide.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
                        >
                          <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                    {/* Nút kêu gọi hành động: Nút chính màu Cam phụ trợ, nút phụ Kính mờ */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                      <Button
                        size="lg"
                        nativeButton={false}
                        render={<Link href={PATH.CONTACT} />}
                        className="h-12 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="size-5" />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        nativeButton={false}
                        render={<a href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`} />}
                        className="h-12 rounded-xl border-white/25 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white cursor-pointer"
                      >
                        <PhoneCall className="size-4 text-orange-400" />
                        <span>{slide.secondaryCta}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng Carousel */}
        <div className="hidden sm:block">
          <CarouselPrevious className="left-6 size-12 border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:text-white" />
          <CarouselNext className="right-6 size-12 border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:text-white" />
        </div>

        {/* Chỉ số Dots chuyển slide */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-8 bg-orange-400"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={t("goToSlide", { index: index + 1 })}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
