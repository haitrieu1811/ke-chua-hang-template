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

export default function HomeCarousel() {
  const t = useTranslations("HomePage.hero");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/hero-banner-selective.jpg",
      alt: t("slides.slide1.title"),
    },
    {
      id: 2,
      image: "/images/hero-banner-trung-tai.jpg",
      alt: t("slides.slide2.title"),
    },
    {
      id: 3,
      image: "/images/hero-banner-v-lo.jpg",
      alt: t("slides.slide3.title"),
    },
  ];

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

  React.useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="relative w-full bg-white dark:bg-zinc-950">
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
              <div className="relative w-full aspect-3/2 overflow-hidden bg-white">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="block h-full w-full object-contain object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng Carousel */}
        <div className="hidden sm:block">
          <CarouselPrevious className="left-5 size-11 border-border/80 bg-white/85 text-foreground shadow-md backdrop-blur-md hover:bg-primary hover:text-white" />
          <CarouselNext className="right-5 size-11 border-border/80 bg-white/85 text-foreground shadow-md backdrop-blur-md hover:bg-primary hover:text-white" />
        </div>

        {/* Chỉ số Dots chuyển slide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs ${
                current === index
                  ? "w-8 bg-red-600"
                  : "w-2.5 bg-zinc-400/70 hover:bg-zinc-600"
              }`}
              aria-label={t("goToSlide", { index: index + 1 })}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
