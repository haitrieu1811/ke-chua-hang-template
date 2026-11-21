"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  RotateCcw,
  SlidersHorizontal,
  Banknote,
  ArrowUpDown,
  Layers,
  PhoneCall,
  Check,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import { Product } from "@/data/products";
import ProductItem from "@/components/product-item";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface ProductListClientProps {
  initialProducts: Product[];
}

const categoryTabs = [
  { key: "all", label: "Tất Cả Sản Phẩm" },
  { key: "heavy", label: "Kệ Tải Nặng (1 - 4 Tấn)" },
  { key: "medium", label: "Kệ Trung Tải (300 - 800kg)" },
  { key: "floor", label: "Kệ Sàn & Đa Năng" },
];

const capacityOptions = [
  { value: "all", label: "Tất Cả Tải Trọng" },
  { value: "under500", label: "Tải nhẹ (Dưới 500kg)" },
  { value: "500to1500", label: "Trung tải (500kg - 1.500kg)" },
  { value: "over1500", label: "Tải siêu nặng (Trên 1.500kg)" },
];

const priceOptions = [
  { value: "all", label: "Tất Cả Mức Giá" },
  { value: "under1m", label: "Dưới 1.000.000đ" },
  { value: "1mTo2m", label: "Từ 1.000.000đ - 2.000.000đ" },
  { value: "over2m", label: "Trên 2.000.000đ" },
  { value: "quote", label: "Liên hệ / Báo giá theo dự án" },
];

const sortOptions = [
  { value: "default", label: "Mặc Định Phổ Biến" },
  { value: "reviews", label: "Đánh Giá Nhiều Nhất" },
  { value: "priceAsc", label: "Giá: Thấp Đến Cao" },
  { value: "priceDesc", label: "Giá: Cao Đến Thấp" },
];

export default function ProductListClient({ initialProducts }: ProductListClientProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const validCategories = React.useMemo(
    () => new Set(categoryTabs.map((t) => t.key)),
    [],
  );

  const urlCategory =
    categoryParam && validCategories.has(categoryParam) ? categoryParam : "all";

  const [prevUrlCategory, setPrevUrlCategory] =
    React.useState<string>(urlCategory);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>(urlCategory);
  const [selectedCapacity, setSelectedCapacity] = React.useState<string>("all");
  const [selectedPrice, setSelectedPrice] = React.useState<string>("all");
  const [sortBy, setSortBy] = React.useState<string>("default");

  if (prevUrlCategory !== urlCategory) {
    setPrevUrlCategory(urlCategory);
    setSelectedCategory(urlCategory);
  }

  const filteredProducts = React.useMemo(() => {
    return initialProducts
      .filter((prod) => {
        // 1. Lọc theo danh mục
        if (selectedCategory !== "all" && prod.category !== selectedCategory) {
          return false;
        }

        // 2. Lọc theo từ khóa tìm kiếm
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = prod.name.toLowerCase().includes(q);
          const matchDesc = prod.shortDescription.toLowerCase().includes(q);
          const matchCap = prod.loadCapacity.toLowerCase().includes(q);
          const matchStandard = prod.steelStandard.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCap && !matchStandard) {
            return false;
          }
        }

        // 3. Lọc theo khoảng tải trọng
        if (selectedCapacity === "under500") {
          const isLight =
            prod.slug === "ke-v-lo" ||
            prod.loadCapacity.includes("80kg") ||
            prod.loadCapacity.includes("120kg");
          if (!isLight) return false;
        } else if (selectedCapacity === "500to1500") {
          const isMedium =
            prod.slug === "ke-trung-tai" ||
            prod.slug === "ke-san-mezzanine" ||
            prod.slug === "ke-shuttle" ||
            prod.loadCapacity.includes("300kg") ||
            prod.loadCapacity.includes("800kg");
          if (!isMedium) return false;
        } else if (selectedCapacity === "over1500") {
          const isHeavy =
            prod.slug === "ke-selective" ||
            prod.slug === "ke-drive-in" ||
            prod.slug === "ke-cantilever" ||
            prod.slug === "pallet-thep" ||
            prod.loadCapacity.includes("3.500kg") ||
            prod.loadCapacity.includes("4.000kg") ||
            prod.loadCapacity.includes("5.000kg");
          if (!isHeavy) return false;
        }

        // 4. Lọc theo mức giá
        if (selectedPrice !== "all") {
          const priceStr = prod.price?.trim() ?? "";
          const priceNum = parseInt(priceStr.replace(/\D/g, ""), 10) || 0;
          const isQuote =
            !priceStr ||
            priceNum === 0 ||
            priceStr.toLowerCase().includes("liên hệ");

          if (selectedPrice === "under1m") {
            if (isQuote || priceNum >= 1000000) return false;
          } else if (selectedPrice === "1mTo2m") {
            if (isQuote || priceNum < 1000000 || priceNum > 2000000) return false;
          } else if (selectedPrice === "over2m") {
            if (isQuote || priceNum <= 2000000) return false;
          } else if (selectedPrice === "quote") {
            if (!isQuote) return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "reviews") {
          return b.reviewCount - a.reviewCount;
        }
        if (sortBy === "priceAsc") {
          const priceA = parseInt((a.price ?? "").replace(/\D/g, ""), 10) || 0;
          const priceB = parseInt((b.price ?? "").replace(/\D/g, ""), 10) || 0;
          if (priceA === 0) return 1;
          if (priceB === 0) return -1;
          return priceA - priceB;
        }
        if (sortBy === "priceDesc") {
          const priceA = parseInt((a.price ?? "").replace(/\D/g, ""), 10) || 0;
          const priceB = parseInt((b.price ?? "").replace(/\D/g, ""), 10) || 0;
          return priceB - priceA;
        }
        return a.id - b.id;
      });
  }, [
    initialProducts,
    selectedCategory,
    searchQuery,
    selectedCapacity,
    selectedPrice,
    sortBy,
  ]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedCapacity("all");
    setSelectedPrice("all");
    setSortBy("default");
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedCapacity !== "all" ||
    selectedPrice !== "all" ||
    sortBy !== "default";

  // Đếm số lượng sản phẩm theo từng nhóm danh mục để hiển thị badge
  const categoryCounts = React.useMemo(() => {
    return {
      all: initialProducts.length,
      heavy: initialProducts.filter((p) => p.category === "heavy").length,
      medium: initialProducts.filter((p) => p.category === "medium").length,
      floor: initialProducts.filter((p) => p.category === "floor").length,
    };
  }, [initialProducts]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* =========================================================================
          CỘT BÊN TRÁI (3/12 trên Desktop): BỘ LỌC TÌM KIẾM & DANH MỤC CỐ ĐỊNH
      ========================================================================== */}
      <aside className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-24 space-y-6">
          {/* Hộp Bộ Lọc Chính */}
          <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm space-y-6">
            {/* Header Bộ Lọc */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-5 text-orange-500" />
                <h3 className="text-base font-bold text-foreground">Bộ Lọc Sản Phẩm</h3>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>

            {/* 1. Ô Tìm Kiếm Từ Khóa */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Tìm kiếm sản phẩm
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Dòng kệ, tải trọng..."
                  className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* 2. Danh Mục Sản Phẩm (Dạng danh sách dọc trực quan) */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2.5">
                Nhóm danh mục
              </label>
              <div className="space-y-1.5">
                {categoryTabs.map((tab) => {
                  const isActive = selectedCategory === tab.key;
                  const count = categoryCounts[tab.key as keyof typeof categoryCounts] ?? 0;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setSelectedCategory(tab.key)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all cursor-pointer select-none ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isActive && <Check className="size-4 shrink-0 text-orange-400" />}
                        <span className="truncate">{tab.label}</span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-sm font-medium ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Lọc Theo Khoảng Tải Trọng (Shadcn Select) */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Phân loại tải trọng
              </label>
              <Select
                value={selectedCapacity}
                onValueChange={(val: string | null) => {
                  if (val) setSelectedCapacity(val);
                }}
                items={capacityOptions}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tải trọng" />
                </SelectTrigger>
                <SelectContent>
                  {capacityOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 4. Lọc Theo Mức Giá (Shadcn Select) */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Khoảng giá tham khảo
              </label>
              <Select
                value={selectedPrice}
                onValueChange={(val: string | null) => {
                  if (val) setSelectedPrice(val);
                }}
                items={priceOptions}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-1.5 truncate">
                    <Banknote className="size-4 text-orange-500 shrink-0" />
                    <SelectValue placeholder="Khoảng giá" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {priceOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 5. Sắp Xếp Sản Phẩm (Shadcn Select) */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Sắp xếp hiển thị
              </label>
              <Select
                value={sortBy}
                onValueChange={(val: string | null) => {
                  if (val) setSortBy(val);
                }}
                items={sortOptions}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-1.5 truncate">
                    <ArrowUpDown className="size-4 text-primary shrink-0" />
                    <SelectValue placeholder="Sắp xếp" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hộp Hotline Hỗ Trợ Kỹ Thuật Nhanh */}
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 shadow-xs text-center space-y-3">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary text-white">
              <PhoneCall className="size-5 text-orange-400" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              Cần Khảo Sát Hiện Trạng Kho?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kỹ sư kết cấu hỗ trợ đo đạc thực tế và lên bản vẽ layout 2D/3D miễn phí trong 24 giờ.
            </p>
            <a
              href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all cursor-pointer"
            >
              <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          CỘT BÊN PHẢI (9/12 trên Desktop): DANH SÁCH SẢN PHẨM & BỘ ĐẾM KẾT QUẢ
      ========================================================================== */}
      <main className="lg:col-span-8 xl:col-span-9 space-y-6">
        {/* Thanh trạng thái bộ lọc trên cùng của danh sách */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              {categoryTabs.find((t) => t.key === selectedCategory)?.label || "Tất Cả Sản Phẩm"}
            </h2>
            <p className="text-sm text-muted-foreground">
              Tìm thấy <strong className="text-primary font-bold">{filteredProducts.length}</strong> hệ thống kệ phù hợp tiêu chuẩn
            </p>
          </div>

          {/* Chips trạng thái lọc đang kích hoạt */}
          <div className="flex flex-wrap items-center gap-2">
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary">
                {categoryTabs.find((t) => t.key === selectedCategory)?.label}
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-orange-500 cursor-pointer"
                  aria-label="Xóa lọc danh mục"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            )}

            {selectedCapacity !== "all" && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-orange-500/10 px-2.5 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
                {capacityOptions.find((o) => o.value === selectedCapacity)?.label}
                <button
                  type="button"
                  onClick={() => setSelectedCapacity("all")}
                  className="hover:text-foreground cursor-pointer"
                  aria-label="Xóa lọc tải trọng"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            )}

            {selectedPrice !== "all" && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-orange-500/10 px-2.5 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
                {priceOptions.find((o) => o.value === selectedPrice)?.label}
                <button
                  type="button"
                  onClick={() => setSelectedPrice("all")}
                  className="hover:text-foreground cursor-pointer"
                  aria-label="Xóa lọc giá"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            )}

            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 rounded-lg border border-border/80 bg-muted px-2.5 py-1 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <RotateCcw className="size-3" />
                <span>Đặt lại</span>
              </button>
            )}
          </div>
        </div>

        {/* Lưới sản phẩm (Tái sử dụng Component ProductItem) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
            {filteredProducts.map((prod, index) => (
              <ScrollReveal
                key={prod.id}
                direction="up"
                delay={(index % 3) * 80}
                duration={600}
                className="h-full"
              >
                <ProductItem product={prod} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Trạng thái không tìm thấy sản phẩm */
          <div className="rounded-2xl border border-dashed border-border/80 bg-card p-12 text-center">
            <Layers className="mx-auto size-12 text-muted-foreground/60" />
            <h3 className="mt-4 text-lg font-bold text-foreground">
              Không tìm thấy hệ thống kệ phù hợp
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Không có sản phẩm nào khớp với bộ lọc hiện tại. Vui lòng thử chọn khoảng giá khác hoặc bấm đặt lại toàn bộ bộ lọc.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <RotateCcw className="size-4 text-orange-400" />
              <span>Xem tất cả {initialProducts.length} sản phẩm</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
