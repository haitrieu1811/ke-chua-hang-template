"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Search,
  RotateCcw,
  SlidersHorizontal,
  Layers,
  Check,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import { Product } from "@/data/products";
import ProductItem from "@/components/product-item";

interface ProductListClientProps {
  initialProducts: Product[];
}

const CATEGORY_KEYS = ["all", "heavy", "medium", "floor"] as const;

export default function ProductListClient({
  initialProducts,
}: ProductListClientProps) {
  const t = useTranslations("ProductsPage.filter");
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const validCategories = React.useMemo(
    () => new Set<string>(CATEGORY_KEYS),
    [],
  );

  const urlCategory =
    categoryParam && validCategories.has(categoryParam) ? categoryParam : "all";

  const [prevUrlCategory, setPrevUrlCategory] =
    React.useState<string>(urlCategory);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>(urlCategory);

  if (prevUrlCategory !== urlCategory) {
    setPrevUrlCategory(urlCategory);
    setSelectedCategory(urlCategory);
  }

  const categoryTabs = CATEGORY_KEYS.map((key) => ({
    key,
    label: t(`categories.${key}`),
  }));

  const filteredProducts = React.useMemo(() => {
    return initialProducts.filter((prod) => {
      if (selectedCategory !== "all" && prod.category !== selectedCategory) {
        return false;
      }

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

      return true;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const isFiltered = searchQuery.trim() !== "" || selectedCategory !== "all";

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
      {/* CỘT BÊN TRÁI: TÌM KIẾM & DANH MỤC SẢN PHẨM */}
      <aside className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-5 text-orange-500" />
                <h3 className="text-base font-bold text-foreground">
                  {t("title")}
                </h3>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="size-3.5" />
                  <span>{t("reset")}</span>
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t("searchLabel")}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2.5">
                {t("groupLabel")}
              </label>
              <div className="space-y-1.5">
                {categoryTabs.map((tab) => {
                  const isActive = selectedCategory === tab.key;
                  const count =
                    categoryCounts[tab.key as keyof typeof categoryCounts] ?? 0;
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
                        {isActive && (
                          <Check className="size-4 shrink-0 text-orange-400" />
                        )}
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
          </div>
        </div>
      </aside>

      {/* CỘT BÊN PHẢI: DANH SÁCH SẢN PHẨM */}
      <main className="lg:col-span-8 xl:col-span-9 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              {categoryTabs.find((cat) => cat.key === selectedCategory)?.label ||
                t("categories.all")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("showing", { count: filteredProducts.length })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary">
                {
                  categoryTabs.find((cat) => cat.key === selectedCategory)
                    ?.label
                }
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-orange-500 cursor-pointer"
                  aria-label={t("removeCategory")}
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
                <span>{t("reset")}</span>
              </button>
            )}
          </div>
        </div>

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
          <div className="rounded-2xl border border-dashed border-border/80 bg-card p-12 text-center">
            <Layers className="mx-auto size-12 text-muted-foreground/60" />
            <h3 className="mt-4 text-lg font-bold text-foreground">
              {t("emptyTitle")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              {t("emptyDesc")}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <RotateCcw className="size-4 text-orange-400" />
              <span>{t("viewAll", { count: initialProducts.length })}</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
