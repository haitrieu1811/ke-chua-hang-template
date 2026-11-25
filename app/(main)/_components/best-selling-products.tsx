"use client";

import ProductItem from "@/components/product-item";
import ScrollReveal from "@/components/scroll-reveal";
import { productsData as products } from "@/data/products";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const CORE_SLUGS = new Set(["ke-selective", "ke-trung-tai", "ke-v-lo"]);
const coreProducts = products.filter((p) => CORE_SLUGS.has(p.slug));

const categoryTabs = [
  { key: "all", label: "Tất cả sản phẩm" },
  { key: "heavy", label: "Kệ Selective" },
  { key: "medium", label: "Kệ Trung tải" },
  { key: "floor", label: "Kệ V lỗ" },
] as const;

export default function BestSellingProducts() {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const filteredProducts = React.useMemo(() => {
    if (activeTab === "all") return coreProducts;
    return coreProducts.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section className="relative border-b border-border/80 bg-muted/20 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <TrendingUp className="size-4 text-orange-500" />
              Sản Phẩm Chủ Lực
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              SẢN PHẨM GIÁ KỆ TẠI KIM PHÚ
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Cung cấp đa dạng các dòng kệ Selective, kệ trung tải và kệ V lỗ.
              Tư vấn lựa chọn sản phẩm theo nhu cầu lưu trữ, quy cách hàng hóa
              và không gian sử dụng.
            </p>
          </div>
        </ScrollReveal>

        {/* Tự code Tabs Lọc Sản Phẩm (Không phụ thuộc shadcn tabs, màu Xanh chủ đạo) */}
        <ScrollReveal direction="up" delay={120} duration={600}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-card p-1 shadow-2xs">
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Lưới sản phẩm (3 sản phẩm tiêu biểu: Kệ Selective, Kệ Trung tải, Kệ V lỗ) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {filteredProducts.map((prod, index) => (
            <ScrollReveal
              key={prod.id}
              direction="up"
              delay={(index % 3) * 90}
              duration={650}
              className="h-full"
            >
              <ProductItem product={prod} />
            </ScrollReveal>
          ))}
        </div>

        {/* Nút xem toàn bộ danh mục sản phẩm */}
        <ScrollReveal direction="up" delay={200} duration={700}>
          <div className="mt-12 text-center">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-card hover:bg-primary/10 px-8 py-3 text-sm sm:text-base font-bold text-primary shadow-xs transition-all hover:scale-105 cursor-pointer uppercase"
            >
              <span>XEM THÊM SẢN PHẨM</span>
              <ArrowRight className="size-4.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
