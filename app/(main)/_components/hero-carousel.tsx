"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SHOP_INFO from "@/constants/info";

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    badge: "GIẢI PHÁP TẢI TRỌNG NẶNG",
    title: "Hệ Thống Kệ Pallet Selective & Drive-In",
    highlight: "Tối Ưu 85% Kho Bãi",
    desc: "Khả năng chịu tải vượt trội từ 1,000kg - 4,000kg/tầng, thép cán nguội tiêu chuẩn JIS G3101 sơn tĩnh điện bền bỉ trên 15 năm.",
    tags: [
      "Tiếp cận 100% vị trí pallet",
      "Phù hợp mọi dòng xe nâng",
      "Khảo sát bản vẽ 3D miễn phí",
    ],
    primaryCta: "Nhận dự toán & Báo giá nhanh",
    secondaryCta: `Hotline: ${SHOP_INFO.HOTLINE.TEXT}`,
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    badge: "KHO THÔNG MINH TỰ ĐỘNG HÓA",
    title: "Hệ Thống Kệ Kho Tự Động AS/RS",
    highlight: "Mật Độ Lưu Trữ Cực Đại",
    desc: "Hệ thống truy xuất pallet tự động hóa 100% với tốc độ cao, tích hợp phần mềm quản lý kho WMS/WCS chuyên sâu cho trung tâm logistics.",
    tags: [
      "Vận hành tự động hóa 24/7",
      "Tiết kiệm 70% nhân công",
      "Tối ưu thể tích kho trên cao",
    ],
    primaryCta: "Tư vấn hệ thống tự động",
    secondaryCta: "Xem video mô phỏng",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    badge: "TỐI ƯU MẶT BẰNG SẢN XUẤT",
    title: "Kệ Sàn Lửng Mezzanine & Kệ Trung Tải",
    highlight: "Nhân Đôi Diện Tích Chứa",
    desc: "Giải pháp mở rộng gấp 2 - 3 lần diện tích sàn mà không cần cơi nới xây dựng mới, linh hoạt tháo lắp và di dời khi cần.",
    tags: [
      "Tải trọng sàn 300 - 1,000 kg/m²",
      "Bảo hành kết cấu 5 năm",
      "Giá gốc trực tiếp nhà máy",
    ],
    primaryCta: "Đăng ký khảo sát sàn kho",
    secondaryCta: "Báo giá kệ trung tải",
  },
];

export default function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Cập nhật chỉ số slide hiện tại
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
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
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] w-full flex items-center justify-center overflow-hidden">
                {/* Ảnh nền slide thực tế độ phân giải cao */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 scale-102"
                />

                {/* Lớp phủ Gradient đa tầng để làm nổi bật nội dung chữ */}
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/45" />
                <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />

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
                      <span className="text-orange-400">
                        {slide.highlight}
                      </span>
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
                        className="h-12 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="size-5" />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
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
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-8 bg-orange-400"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Đi tới slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
