"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  PhoneCall,
  Sparkles,
  Wrench,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import {
  industrySolutions,
  solutionSectorTabs,
  type SolutionSectorKey,
} from "@/data/solutions";
import { cn } from "@/lib/utils";

type LoadOption = "light" | "medium" | "heavy" | "long";
type PriorityOption = "access" | "density" | "floor" | "automation";
type EnvironmentOption = "normal" | "cold" | "outdoor";

interface RecommendationResult {
  title: string;
  subtitle: string;
  productSlug: string;
  productName: string;
  secondarySlug?: string;
  secondaryName?: string;
  efficiencyBadge: string;
  reasons: string[];
}

function getRecommendedSolution(
  load: LoadOption,
  priority: PriorityOption,
  env: EnvironmentOption,
): RecommendationResult {
  if (load === "long") {
    return {
      title: "Giải Pháp Kệ Tay Đỡ Cantilever Chuyên Dụng",
      subtitle:
        env === "outdoor"
          ? "Phiên bản mạ kẽm nhúng nóng chống ăn mòn thời tiết ngoài trời trên 20 năm."
          : "Thiết kế không cột chắn phía trước cho ống thép, nhôm thanh và ván gỗ dài.",
      productSlug: "ke-cantilever",
      productName: "Kệ Tay Đỡ Cantilever",
      efficiencyBadge: "Tải tới 4.000kg / tầng",
      reasons: [
        "Lưu trữ vật tư dài 6m - 12m liên tục mà không bị vướng khung trụ giữa",
        "Tay đỡ có chốt chặn an toàn, điều chỉnh bước cao linh hoạt 100mm",
        env === "outdoor"
          ? "Xử lý mạ kẽm nhúng nóng đạt chuẩn ASTM A123 chịu mưa nắng"
          : "Tối ưu tốc độ xe nâng bốc xếp hàng dài trong lối đi kho xưởng",
      ],
    };
  }

  if (priority === "floor") {
    return {
      title: "Giải Pháp Sàn Lửng Mezzanine Kết Hợp Kệ Tầng",
      subtitle:
        "Tận dụng chiều cao nhà xưởng để mở rộng thêm 1 - 2 tầng sàn mà không cần thuê thêm mặt bằng.",
      productSlug: "ke-san-mezzanine",
      productName: "Kệ Sàn Lửng Mezzanine Floor",
      secondarySlug: load === "light" ? "ke-v-lo" : "ke-trung-tai",
      secondaryName:
        load === "light" ? "Kệ Sắt V Lỗ Đa Năng" : "Kệ Trung Tải Medium Duty",
      efficiencyBadge: "+100% đến 200% diện tích",
      reasons: [
        "Hệ kết cấu thép đứng độc lập, dễ tháo rời di dời khi chuyển nhà xưởng",
        "Tầng dưới làm khu đóng gói/lưu trữ, tầng trên làm kho SKU hoặc văn phòng",
        "Trang bị đầy đủ cầu thang, lan can 1.1m và cửa cẩu hàng an toàn",
      ],
    };
  }

  if (load === "light") {
    return {
      title: "Giải Pháp Kệ Sắt V Lỗ & Chia Chọn Nhanh",
      subtitle:
        "Tối ưu chi phí đầu tư cho kho hàng nhẹ, hồ sơ chứng từ, cửa hàng bán lẻ và kho phụ kiện.",
      productSlug: "ke-v-lo",
      productName: "Kệ Sắt V Lỗ Đa Năng",
      secondarySlug: "ke-trung-tai",
      secondaryName: "Kệ Trung Tải Medium Duty",
      efficiencyBadge: "Tiết kiệm chi phí nhất",
      reasons: [
        "Chịu tải ổn định 80 - 120kg/tầng, thay đổi khoảng cách mâm theo bước 10mm",
        "Sơn tĩnh điện 2 mặt chống gỉ sét, tuổi thọ sử dụng trên 10 năm",
        "Hàng có sẵn nhiều quy cách, lắp đặt hoàn thiện ngay trong ngày",
      ],
    };
  }

  if (load === "medium") {
    return {
      title: "Giải Pháp Kệ Trung Tải Lắp Ngàm Không Ốc Vít",
      subtitle:
        "Lý tưởng cho kho phụ tùng, linh kiện, may mặc và hoàn tất đơn hàng thương mại điện tử.",
      productSlug: "ke-trung-tai",
      productName: "Kệ Trung Tải Medium Duty",
      secondarySlug: "ke-san-mezzanine",
      secondaryName: "Kệ Sàn Lửng Mezzanine",
      efficiencyBadge: "300 - 800kg / tầng mâm",
      reasons: [
        "Lấy hàng thủ công 100% bằng tay hoặc xe thang mà không cần xe nâng pallet",
        "Kết cấu ngàm cài tự khóa giúp tháo lắp, điều chỉnh tầng chỉ trong vài phút",
        "Có thể ghép nối tiếp nhiều dãy giúp giảm 15 - 25% chi phí khung cột",
      ],
    };
  }

  // Heavy load (pallet)
  if (priority === "automation" || (env === "cold" && priority === "density")) {
    return {
      title: "Giải Pháp Kho Thông Minh Radio Shuttle Robot",
      subtitle:
        env === "cold"
          ? "Vận hành ổn định trong kho lạnh âm sâu -30°C, cắt giảm điện năng và tăng tốc xuất nhập."
          : "Bán tự động hóa xuất nhập hàng mật độ cao, triệt tiêu va chạm xe nâng vào chân kệ.",
      productSlug: "ke-shuttle",
      productName: "Kệ Tự Động Radio Shuttle",
      secondarySlug: "ke-drive-in",
      secondaryName: "Kệ Drive-In / Drive-Thru",
      efficiencyBadge: "Mật độ cực cao • Tự động hóa",
      reasons: [
        "Làn chứa sâu từ 20 - 50 pallet, chuyển đổi FIFO/LIFO chỉ với 1 nút bấm",
        "Tài xế không phải lái xe nâng vào lòng kệ, giảm 99% rủi ro va đập",
        "Tăng tốc độ xuất nhập kho lên tới 80%, tối ưu chi phí vận hành dài hạn",
      ],
    };
  }

  if (priority === "density") {
    return {
      title: "Giải Pháp Kệ Mật Độ Cao Drive-In / Drive-Thru",
      subtitle:
        "Triệt tiêu lối đi xe nâng trung gian để tối đa sức chứa cho các lô hàng đồng nhất số lượng lớn.",
      productSlug: "ke-drive-in",
      productName: "Kệ Drive-In / Drive-Thru",
      secondarySlug: "ke-shuttle",
      secondaryName: "Kệ Tự Động Radio Shuttle",
      efficiencyBadge: "Tối ưu 80% diện tích sàn",
      reasons: [
        "Tăng gấp đôi sức chứa pallet trên cùng một diện tích kho so với kệ truyền thống",
        "Ray dẫn pallet nguyên khối kèm ốp bảo vệ chân trụ dẫn hướng xe nâng an toàn",
        env === "cold"
          ? "Phù hợp hoàn hảo cho kho lạnh bảo quản thực phẩm, giảm thất thoát nhiệt"
          : "Chi phí đầu tư trên mỗi vị trí pallet thấp nhất cho hàng sản xuất theo lô",
      ],
    };
  }

  return {
    title: "Giải Pháp Kệ Pallet Selective Tiêu Chuẩn Quốc Tế",
    subtitle:
      "Hệ thống kệ tải nặng linh hoạt nhất cho kho có nhiều mã SKU và yêu cầu tiếp cận 100% pallet.",
    productSlug: "ke-selective",
    productName: "Kệ Chứa Pallet Selective",
    secondarySlug: "pallet-thep",
    secondaryName: "Pallet Thép Sơn Tĩnh Điện",
    efficiencyBadge: "Tiếp cận 100% • Chuẩn FIFO",
    reasons: [
      "Chọn lấy trực tiếp bất kỳ pallet nào ngay lập tức, tương thích mọi dòng xe nâng",
      "Chịu tải 1.000 - 3.500kg/pallet, thép JIS G3101 đạt tiêu chuẩn FEM 10.2.02",
      env === "outdoor"
        ? "Tùy chọn mạ kẽm nhúng nóng kết hợp pallet thép chống ăn mòn ngoài trời"
        : "Dễ dàng điều chỉnh khoảng cách tầng beam khi thay đổi chiều cao kiện hàng",
    ],
  };
}

export default function SolutionsExplorer() {
  const [activeSector, setActiveSector] =
    React.useState<SolutionSectorKey>("all");

  // State cho công cụ gợi ý giải pháp nhanh
  const [selectedLoad, setSelectedLoad] = React.useState<LoadOption>("heavy");
  const [selectedPriority, setSelectedPriority] =
    React.useState<PriorityOption>("access");
  const [selectedEnv, setSelectedEnv] =
    React.useState<EnvironmentOption>("normal");

  const filteredSolutions = React.useMemo(() => {
    if (activeSector === "all") return industrySolutions;
    return industrySolutions.filter((item) => item.sector === activeSector);
  }, [activeSector]);

  const recommendation = React.useMemo(
    () => getRecommendedSolution(selectedLoad, selectedPriority, selectedEnv),
    [selectedLoad, selectedPriority, selectedEnv],
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* PHẦN A: DANH SÁCH GIẢI PHÁP THEO NGÀNH HÀNG (CÓ TABS LỌC TƯƠNG TÁC) */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Layers className="size-4 text-orange-500" />
                Giải Pháp Chuyên Biệt Theo Ngành
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                Thiết Kế Hệ Thống Lưu Trữ Đúng Đặc Thù Kho Của Bạn
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Mỗi ngành nghề có đặc thù về tải trọng, tần suất xuất nhập và điều
                kiện môi trường khác nhau. Chọn lĩnh vực của bạn để xem phương án
                tối ưu nhất.
              </p>
            </div>
          </ScrollReveal>

          {/* Thanh Tabs lọc ngành hàng */}
          <ScrollReveal direction="up" delay={100} duration={600}>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-border/80 bg-card p-1.5 shadow-2xs">
                {solutionSectorTabs.map((tab) => {
                  const isActive = activeSector === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveSector(tab.key)}
                      className={cn(
                        "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Lưới các thẻ Giải pháp ngành hàng */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredSolutions.map((sol, index) => (
              <ScrollReveal
                key={sol.id}
                direction="up"
                delay={(index % 2) * 100}
                duration={650}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  {/* Hình ảnh minh họa + Badges */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-muted">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-primary/95 px-3 py-1 text-sm font-bold text-white shadow-xs">
                        {sol.badge}
                      </span>
                      <span className="rounded-lg bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-xs">
                        {sol.metricHighlight}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                        {sol.sectorLabel}
                      </span>
                      <h3 className="mt-1 text-lg sm:text-xl font-black leading-snug text-white">
                        {sol.title}
                      </h3>
                    </div>
                  </div>

                  {/* Nội dung phân tích bài toán & giải pháp */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-5">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {sol.summary}
                      </p>

                      {/* Bài toán thường gặp */}
                      <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
                          <AlertCircle className="size-4 text-orange-500 shrink-0" />
                          <span>Bài toán kho thường gặp</span>
                        </div>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {sol.challenges.map((challenge) => (
                            <li
                              key={challenge}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-1.5 size-1.5 rounded-full bg-orange-500 shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Giá trị mang lại */}
                      <div>
                        <div className="text-sm font-bold text-foreground mb-2.5">
                          Hiệu quả triển khai thực tế:
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {sol.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="mt-0.5 size-4 text-primary shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Hệ kệ đề xuất & CTA */}
                    <div className="mt-6 border-t border-border/70 pt-5 space-y-4">
                      <div>
                        <span className="text-sm font-semibold text-muted-foreground block mb-2">
                          Hệ thống giá kệ đề xuất:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {sol.recommendedSystems.map((sys) => (
                            <Link
                              key={sys.slug}
                              href={`/san-pham/${sys.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <span>{sys.name}</span>
                              <ArrowRight className="size-3.5" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/lien-he"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all cursor-pointer"
                      >
                        <span>Nhận Tư Vấn & Layout 3D Ngành Này</span>
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN B: CÔNG CỤ GỢI Ý GIẢI PHÁP NHANH TRONG 30 GIÂY */}
      {/* ========================================================================= */}
      <section className="border-b border-border/80 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
                <Compass className="size-4 text-orange-500" />
                Gợi Ý Phương Án Tức Thì
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                Chưa Biết Chọn Loại Kệ Nào? Thử Bộ Gợi Ý Nhanh
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Chọn 3 thông số cơ bản về hàng hóa và mục tiêu vận hành kho, hệ
                thống sẽ đề xuất ngay cấu hình giá kệ phù hợp nhất.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={700}>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Cột Trái (7/12): 3 Bước chọn tiêu chí */}
              <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm space-y-7">
                {/* Tiêu chí 1 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                      1
                    </span>
                    <span>Quy cách hàng hóa & tải trọng lưu trữ</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      {
                        value: "heavy" as const,
                        label: "Hàng Pallet nặng",
                        sub: "1.000 - 3.500kg / pallet",
                      },
                      {
                        value: "medium" as const,
                        label: "Hàng trung tải bốc tay",
                        sub: "300 - 800kg / tầng mâm",
                      },
                      {
                        value: "light" as const,
                        label: "Hàng nhẹ, hồ sơ, tạp hóa",
                        sub: "80 - 120kg / tầng",
                      },
                      {
                        value: "long" as const,
                        label: "Ống thép, gỗ, hàng dài",
                        sub: "Chiều dài 6m - 12m",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSelectedLoad(opt.value)}
                        className={cn(
                          "flex flex-col items-start rounded-xl border p-3.5 text-left transition-all cursor-pointer",
                          selectedLoad === opt.value
                            ? "border-primary bg-primary/10 ring-1 ring-primary"
                            : "border-border/80 bg-background hover:border-primary/40 hover:bg-muted/50",
                        )}
                      >
                        <span className="text-sm font-bold text-foreground">
                          {opt.label}
                        </span>
                        <span className="mt-0.5 text-sm text-muted-foreground">
                          {opt.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tiêu chí 2 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                      2
                    </span>
                    <span>Ưu tiên hàng đầu của nhà kho</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      {
                        value: "access" as const,
                        label: "Tiếp cận 100% mã hàng",
                        sub: "Nhiều SKU, xuất nhập FIFO",
                      },
                      {
                        value: "density" as const,
                        label: "Tối đa mật độ chứa hàng",
                        sub: "Ít SKU, số lượng mỗi lô lớn",
                      },
                      {
                        value: "floor" as const,
                        label: "Mở rộng thêm tầng sàn",
                        sub: "Tận dụng trần kho cao > 6m",
                      },
                      {
                        value: "automation" as const,
                        label: "Tự động hóa giảm nhân công",
                        sub: "Robot xuất nhập tốc độ cao",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSelectedPriority(opt.value)}
                        className={cn(
                          "flex flex-col items-start rounded-xl border p-3.5 text-left transition-all cursor-pointer",
                          selectedPriority === opt.value
                            ? "border-primary bg-primary/10 ring-1 ring-primary"
                            : "border-border/80 bg-background hover:border-primary/40 hover:bg-muted/50",
                        )}
                      >
                        <span className="text-sm font-bold text-foreground">
                          {opt.label}
                        </span>
                        <span className="mt-0.5 text-sm text-muted-foreground">
                          {opt.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tiêu chí 3 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                      3
                    </span>
                    <span>Điều kiện môi trường lưu trữ</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {[
                      { value: "normal" as const, label: "Kho nhiệt độ thường" },
                      { value: "cold" as const, label: "Kho lạnh (-30°C)" },
                      { value: "outdoor" as const, label: "Bãi ngoài trời" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSelectedEnv(opt.value)}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-sm font-bold transition-all cursor-pointer",
                          selectedEnv === opt.value
                            ? "border-primary bg-primary text-primary-foreground shadow-xs"
                            : "border-border/80 bg-background text-foreground hover:border-primary/40 hover:bg-muted/50",
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cột Phải (5/12): Kết quả đề xuất trực quan */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border-2 border-primary/30 bg-linear-to-b from-primary/10 via-card to-card p-6 sm:p-8 shadow-md">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                      <Sparkles className="size-3.5" />
                      Phương Án Đề Xuất
                    </span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-sm font-bold text-primary">
                      {recommendation.efficiencyBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
                      {recommendation.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {recommendation.subtitle}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-card/90 p-4 space-y-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Wrench className="size-4 text-primary" />
                      <span>Lý do phù hợp với kho của bạn:</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {recommendation.reasons.map((reason) => (
                        <li key={reason} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-orange-500 shrink-0" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/70 space-y-3">
                  <Link
                    href={`/san-pham/${recommendation.productSlug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all"
                  >
                    <span>Xem chi tiết {recommendation.productName}</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  {recommendation.secondarySlug &&
                    recommendation.secondaryName && (
                      <Link
                        href={`/san-pham/${recommendation.secondarySlug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/15 px-5 py-2.5 text-sm font-bold text-primary transition-all"
                      >
                        <span>
                          Kết hợp cùng: {recommendation.secondaryName}
                        </span>
                        <ArrowRight className="size-4" />
                      </Link>
                    )}

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background hover:bg-muted px-5 py-2.5 text-sm font-bold text-foreground transition-colors"
                  >
                    <PhoneCall className="size-4 text-orange-500" />
                    <span>Gọi kỹ sư tư vấn miễn phí: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
