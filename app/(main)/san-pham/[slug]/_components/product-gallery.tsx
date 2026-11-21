"use client";

import * as React from "react";
import { ZoomIn } from "lucide-react";
import ProductImageDialog from "./product-image-dialog";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  tag: string;
  isHot?: boolean;
}

export default function ProductGallery({
  images,
  productName,
  tag,
  isHot,
}: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const displayImages =
    images.length > 0 ? images : ["/images/racking-selective.jpg"];
  const currentImage = displayImages[activeImageIndex] || displayImages[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Khung ảnh chính - Click vào sẽ mở Dialog phóng to xem rõ */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsDialogOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsDialogOpen(true);
          }
        }}
        aria-label={`Xem phóng to ${productName}`}
        className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 select-none"
      >
        <img
          src={currentImage}
          alt={`${productName} - Ảnh ${activeImageIndex + 1}`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Huy hiệu sản phẩm */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          <span
            className={`inline-block rounded-lg px-3 py-1.5 text-sm font-bold text-white shadow-md ${
              isHot ? "bg-orange-500" : "bg-primary"
            }`}
          >
            {tag}
          </span>
        </div>

        {/* Nút chỉ báo xem phóng to */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-xl bg-black/60 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:bg-primary transition-all duration-300 shadow-md">
          <ZoomIn className="size-4" />
          <span>Nhấn xem ảnh phóng to</span>
        </div>
      </div>

      {/* Dải ảnh Thumbnail thu nhỏ */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {displayImages.map((img, idx) => {
            const isSelected = activeImageIndex === idx;
            return (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-4/3 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/30 shadow-sm"
                    : "border-border/80 hover:border-primary/50 opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Dialog xem ảnh chi tiết kích thước lớn */}
      <ProductImageDialog
        images={displayImages}
        productName={productName}
        tag={tag}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentIndex={activeImageIndex}
        onIndexChange={setActiveImageIndex}
      />
    </div>
  );
}
