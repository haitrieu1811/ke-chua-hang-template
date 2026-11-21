"use client";

import { Product } from "@/data/products";
import { cn } from "cn";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
  showDescription?: boolean;
  showPrice?: boolean;
  className?: string;
  buttonText?: string;
}

export default function ProductItem({
  product,
  showDescription = true,
  showPrice,
  className,
  buttonText = "Xem Chi Tiết",
}: ProductItemProps) {
  const shouldShowPrice = showPrice ?? product.showPrice ?? true;
  const trimmedPrice = product.price?.trim();
  const hasPrice = Boolean(trimmedPrice);
  const displayPrice = trimmedPrice || "Liên hệ";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl",
        className,
      )}
    >
      {/* Ảnh sản phẩm với hiệu ứng zoom nhẹ */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Huy hiệu nổi bật góc trên bên trái */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1">
          <span
            className={`inline-block rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-bold text-white shadow-xs ${
              product.isHot ? "bg-orange-500" : "bg-primary/95"
            }`}
          >
            {product.tag}
          </span>
        </div>

        {/* Đánh giá sao ⭐ */}
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-1 rounded-md bg-black/70 px-1.5 py-0.5 sm:px-2 text-xs sm:text-sm text-white backdrop-blur-md">
          <Star className="size-3 sm:size-3.5 fill-orange-400 text-orange-400" />
          <span className="font-bold">5.0</span>
          <span className="text-zinc-300">({product.reviewCount})</span>
        </div>
      </div>

      {/* Nội dung thông số kỹ thuật sản phẩm */}
      <div className="flex flex-1 flex-col justify-between p-3 sm:p-5">
        <div className="min-w-0">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary block truncate">
            {product.categoryLabel}
          </span>

          <h3 className="mt-1 sm:mt-1.5 text-sm sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2">
            <Link
              href={`/san-pham/${product.slug}`}
              className="hover:underline focus:outline-none"
            >
              {product.name}
            </Link>
          </h3>

          {showDescription && (
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          )}

          {/* Thông số kỹ thuật nhanh */}
          <div className="mt-2.5 sm:mt-3.5 space-y-1 sm:space-y-1.5 border-t border-border/60 pt-2.5 sm:pt-3 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <CheckCircle2 className="size-3.5 sm:size-4 text-orange-500 shrink-0" />
              <span className="truncate font-medium">
                {product.loadCapacity}
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <ShieldCheck className="size-3.5 sm:size-4 text-primary shrink-0" />
              <span className="truncate">{product.steelStandard}</span>
            </div>
          </div>
        </div>

        {/* Giá và nút hành động */}
        <div className="mt-3.5 sm:mt-5 border-t border-border/60 pt-3 sm:pt-4">
          {shouldShowPrice && (
            <div className="mb-3 sm:mb-4 flex items-baseline justify-between gap-2">
              <div className="min-w-0">
                <span className="text-xs sm:text-sm text-muted-foreground block">
                  Đơn giá tham khảo:
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-base sm:text-xl font-black text-orange-600 dark:text-orange-400">
                    {displayPrice}
                  </span>
                  {hasPrice && product.oldPrice && (
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          <div>
            <Link
              href={`/san-pham/${product.slug}`}
              className="inline-flex w-full items-center justify-center gap-1 sm:gap-1.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary hover:text-primary-foreground px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm font-bold text-primary shadow-xs transition-all duration-200 cursor-pointer group/btn text-center"
            >
              <span className="truncate">{buttonText}</span>
              <ArrowRight className="size-3.5 sm:size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
