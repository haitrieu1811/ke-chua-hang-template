import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck2,
  FileText,
  Layers,
  PhoneCall,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "./_components/product-gallery";
import ProductItem from "@/components/product-item";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm | Kệ Chứa Hàng Pro",
    };
  }

  return {
    title: `${product.name} | Báo Giá Trực Tiếp Nhà Máy`,
    description: `${product.shortDescription} Tải trọng: ${product.loadCapacity}. Thép ${product.steelStandard}. Bảo hành 5 năm kết cấu. Khảo sát 2D/3D miễn phí 24h.`,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 4);
  const shouldShowPrice = product.showPrice ?? true;
  const trimmedPrice = product.price?.trim();
  const hasPrice = Boolean(trimmedPrice);
  const displayPrice = trimmedPrice || "Liên hệ";

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Breadcrumbs Navigation */}
      <div className="border-b border-border/80 bg-muted/30 py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <Link
              href="/san-pham"
              className="hover:text-primary transition-colors"
            >
              Hệ Thống Sản Phẩm
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <span className="font-semibold text-foreground truncate max-w-xs sm:max-w-md">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Tổng Quan Sản Phẩm: Gallery (Có Dialog Phóng To) + Tóm Tắt Thông Số & Mua Hàng */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Cột Trái (5/12): Gallery hình ảnh với Dialog click mở to */}
            <div className="lg:col-span-5">
              <ProductGallery
                images={product.gallery}
                productName={product.name}
                tag={product.tag}
                isHot={product.isHot}
              />
            </div>

            {/* Cột Phải (7/12): Tiêu đề, thông số cốt lõi, giá và CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">
                    {product.categoryLabel}
                  </span>
                  <span className="rounded-md bg-orange-500/10 px-3 py-1 text-sm font-bold text-orange-600 dark:text-orange-400">
                    Mã sản phẩm: #{product.slug.toUpperCase()}
                  </span>
                </div>

                <h1 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl leading-tight">
                  {product.name}
                </h1>

                {/* Đánh giá sao & lượt nhận xét */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4.5 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-foreground">5.0</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount} đánh giá từ kỹ sư & dự án kho)
                  </span>
                </div>

                {/* Đoạn mô tả ngắn */}
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Khối giá bán tham khảo */}
                {shouldShowPrice && (
                  <div className="mt-6 rounded-2xl border border-border/80 bg-muted/40 p-5">
                    <span className="text-sm font-medium text-muted-foreground block">
                      Đơn giá gia công tham khảo tại xưởng:
                    </span>
                    <div className="mt-1 flex flex-wrap items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">
                        {displayPrice}
                      </span>
                      {hasPrice && product.oldPrice && (
                        <span className="text-base text-muted-foreground line-through">
                          {product.oldPrice}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground font-normal">
                        (Tùy chỉnh theo khẩu độ dầm, chiều cao và quy cách kho)
                      </span>
                    </div>
                  </div>
                )}

                {/* Lưới 4 thông số kỹ thuật cốt lõi */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <CheckCircle2 className="size-5 text-orange-500 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        Tải trọng thiết kế:
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words">
                        {product.loadCapacity}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <ShieldCheck className="size-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        Quy chuẩn thép:
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words block">
                        {product.steelStandard}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <Award className="size-5 text-orange-500 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        Thời hạn bảo hành:
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words">
                        {product.warranty}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <Layers className="size-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        Nguồn gốc sản xuất:
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words block">
                        {product.origin}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Các nút hành động chính */}
              <div className="border-t border-border/70 pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Yêu Cầu Báo Giá Dự Toán</span>
                    <ArrowRight className="size-4.5" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground px-6 py-3.5 text-base font-bold text-primary transition-all cursor-pointer"
                  >
                    <PhoneCall className="size-4.5" />
                    <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>
                </div>

                {/* Cam kết dịch vụ bổ sung */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-orange-500" />
                    Bản vẽ 2D/3D trong 24h
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="size-4 text-primary" />
                    Chứng chỉ CO/CQ & kiểm định
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="size-4 text-orange-500" />
                    Lắp đặt bàn giao toàn quốc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Khối Mô Tả Sản Phẩm Chi Tiết */}
      <section className="py-12 border-t border-border/80 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Tiêu đề phần mô tả */}
          <div className="border-b border-border/80 pb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Thông Tin Kỹ Thuật Toàn Diện
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-foreground">
              Mô Tả Chi Tiết Sản Phẩm: {product.name}
            </h2>
          </div>

          {/* Đoạn văn bản mô tả chuyên sâu */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FileText className="size-5 text-orange-500" />
              <span>Tổng Quan & Cấu Tạo Kết Cấu</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Lưới Đặc điểm nổi bật */}
          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="size-5 text-orange-500" />
              <span>Đặc Điểm & Ưu Thế Vượt Trội</span>
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {product.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-border/80 bg-muted/20 p-5 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="size-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">
                        {feat.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bảng Thông số kỹ thuật chi tiết */}
          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="size-5 text-primary" />
              <span>Bảng Thông Số Kỹ Thuật Đạt Chuẩn FEM 10.2.02</span>
            </h3>
            <div className="overflow-hidden rounded-2xl border border-border/80 shadow-xs">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr
                      key={spec.label}
                      className={idx % 2 === 0 ? "bg-muted/30" : "bg-card"}
                    >
                      <th
                        scope="row"
                        className="w-1/3 border-b border-border/60 px-5 py-4 font-bold text-foreground"
                      >
                        {spec.label}
                      </th>
                      <td className="border-b border-border/60 px-5 py-4 text-muted-foreground font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ứng dụng thực tế */}
          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="size-5 text-orange-500" />
              <span>Ngành Nghề & Lĩnh Vực Ứng Dụng Thực Tế</span>
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.applications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 rounded-xl border border-border/80 bg-card p-4 shadow-2xs"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Khối Danh Sách Sản Phẩm Cùng Danh Mục */}
      <section className="border-t border-border/80 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Cùng Phân Khúc Giải Pháp
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-foreground">
                Sản Phẩm Cùng Danh Mục
              </h2>
            </div>

            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-orange-500 transition-colors"
            >
              <span>Xem tất cả sản phẩm</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((relProd, index) => (
              <ScrollReveal
                key={relProd.id}
                direction="up"
                delay={index * 90}
                duration={600}
                className="h-full"
              >
                <ProductItem product={relProd} showDescription={false} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
