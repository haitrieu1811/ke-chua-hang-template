"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProductImageDialogProps {
  images: string[];
  productName: string;
  tag: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function ProductImageDialog({
  images,
  productName,
  tag,
  isOpen,
  onOpenChange,
  currentIndex,
  onIndexChange,
}: ProductImageDialogProps) {
  const t = useTranslations("ProductDetailPage.gallery");
  const displayImages = images.length > 0 ? images : ["/images/racking-selective.jpg"];
  const safeIndex = Math.min(Math.max(currentIndex, 0), displayImages.length - 1);
  const currentImage = displayImages[safeIndex] || displayImages[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange(safeIndex === 0 ? displayImages.length - 1 : safeIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange(safeIndex === displayImages.length - 1 ? 0 : safeIndex + 1);
  };

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onIndexChange(safeIndex === 0 ? displayImages.length - 1 : safeIndex - 1);
      } else if (e.key === "ArrowRight") {
        onIndexChange(safeIndex === displayImages.length - 1 ? 0 : safeIndex + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, safeIndex, displayImages.length, onIndexChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-6 sm:p-8 bg-card border-border/80">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-orange-500/10 px-2.5 py-1 text-sm font-bold text-orange-600 dark:text-orange-400">
              {tag}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t("photoCounter", {
                current: safeIndex + 1,
                total: displayImages.length,
              })}
            </span>
          </div>
          <DialogTitle className="mt-1 text-xl sm:text-2xl font-black text-foreground">
            {productName}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {t("dialogDesc")}
          </DialogDescription>
        </DialogHeader>

        {/* Khung hiển thị ảnh lớn */}
        <div className="relative mt-2 aspect-16/10 w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/60 flex items-center justify-center">
          <img
            src={currentImage}
            alt={`${productName} - Ảnh phóng to ${safeIndex + 1}`}
            className="h-full w-full object-cover object-center select-none"
          />

          {/* Nút lùi ảnh trước */}
          {displayImages.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t("prevAria")}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-primary transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Nút tiến ảnh sau */}
          {displayImages.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label={t("nextAria")}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-primary transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="size-6" />
            </button>
          )}

          {/* Badge đếm góc dưới */}
          <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-3 py-1 text-sm font-bold text-white backdrop-blur-md">
            {safeIndex + 1} / {displayImages.length}
          </div>
        </div>

        {/* Dải thumbnail thu nhỏ bên dưới */}
        {displayImages.length > 1 && (
          <div className="mt-3 flex items-center justify-center gap-3 overflow-x-auto overflow-y-hidden px-1 py-1.5">
            {displayImages.map((img, idx) => {
              const isSelected = safeIndex === idx;
              return (
                <button
                  key={`${img}-${idx}`}
                  type="button"
                  onClick={() => onIndexChange(idx)}
                  className={`relative aspect-4/3 w-20 sm:w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/40 shadow-sm"
                      : "border-border/80 opacity-70 hover:opacity-100 hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              );
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
