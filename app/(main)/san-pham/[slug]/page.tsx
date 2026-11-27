import ScrollReveal from "@/components/scroll-reveal";
import SHOP_INFO from "@/constants/info";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { getLocalizedProduct } from "@/data/products-i18n";
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
import { getLocale, getTranslations } from "next-intl/server";
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
  const rawProduct = getProductBySlug(slug);

  if (!rawProduct) {
    notFound();
  }

  const [locale, t, tCard] = await Promise.all([
    getLocale(),
    getTranslations("ProductDetailPage"),
    getTranslations("ProductCard"),
  ]);

  const product = getLocalizedProduct(rawProduct, locale);
  const relatedProducts = getRelatedProducts(product.slug, 4);
  const shouldShowPrice = product.showPrice ?? true;
  const trimmedPrice = product.price?.trim();
  const hasPrice = Boolean(trimmedPrice);
  const displayPrice = trimmedPrice || t("contactPrice");

  const coreSlug =
    product.slug === "ke-selective" ||
    product.slug === "ke-trung-tai" ||
    product.slug === "ke-v-lo"
      ? product.slug
      : null;

  const displayName = coreSlug ? tCard(`items.${coreSlug}.name`) : product.name;
  const displayCategory = coreSlug
    ? tCard(`items.${coreSlug}.categoryLabel`)
    : product.categoryLabel;
  const displayTag = coreSlug ? tCard(`items.${coreSlug}.tag`) : product.tag;
  const displayLoad = coreSlug
    ? tCard(`items.${coreSlug}.loadCapacity`)
    : product.loadCapacity;
  const displaySteel = coreSlug
    ? tCard(`items.${coreSlug}.steelStandard`)
    : product.steelStandard;
  const displayShortDesc = coreSlug
    ? tCard(`items.${coreSlug}.shortDescription`)
    : product.shortDescription;

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
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <Link
              href="/san-pham"
              className="hover:text-primary transition-colors"
            >
              {t("breadcrumb.products")}
            </Link>
            <ChevronRight className="size-4 shrink-0" />
            <span className="font-semibold text-foreground truncate max-w-xs sm:max-w-md">
              {displayName}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Tổng Quan Sản Phẩm */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <ProductGallery
                images={product.gallery}
                productName={displayName}
                tag={displayTag}
                isHot={product.isHot}
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">
                    {displayCategory}
                  </span>
                  <span className="rounded-md bg-orange-500/10 px-3 py-1 text-sm font-bold text-orange-600 dark:text-orange-400">
                    #{product.slug.toUpperCase()}
                  </span>
                </div>

                <h1 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl leading-tight">
                  {displayName}
                </h1>

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
                    {t("reviewsLabel", { count: product.reviewCount })}
                  </span>
                </div>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {displayShortDesc}
                </p>

                {shouldShowPrice && (
                  <div className="mt-6 rounded-2xl border border-border/80 bg-muted/40 p-5">
                    <span className="text-sm font-medium text-muted-foreground block">
                      {t("priceLabel")}
                    </span>
                    <div className="mt-1 flex flex-wrap items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">
                        {hasPrice ? displayPrice : t("contactPrice")}
                      </span>
                      {hasPrice && product.oldPrice && (
                        <span className="text-base text-muted-foreground line-through">
                          {product.oldPrice}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground font-normal">
                        {t("priceNote")}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <CheckCircle2 className="size-5 text-orange-500 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        {t("specs.loadCapacity")}
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words">
                        {displayLoad}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <ShieldCheck className="size-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        {t("specs.steelStandard")}
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words block">
                        {displaySteel}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <Award className="size-5 text-orange-500 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        {t("specs.warranty")}
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words">
                        {t("specs.warrantyValue")}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-2xs">
                    <Layers className="size-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-muted-foreground block">
                        {t("specs.origin")}
                      </span>
                      <strong className="text-sm font-bold text-foreground break-words block">
                        {t("specs.originValue")}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/70 pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>{t("cta.quoteBtn")}</span>
                    <ArrowRight className="size-4.5" />
                  </Link>

                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground px-6 py-3.5 text-base font-bold text-primary transition-all cursor-pointer"
                  >
                    <PhoneCall className="size-4.5" />
                    <span>
                      {t("cta.hotline", { hotline: SHOP_INFO.HOTLINE.TEXT })}
                    </span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-orange-500" />
                    {t("commitments.c1")}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="size-4 text-primary" />
                    {t("commitments.c2")}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="size-4 text-orange-500" />
                    {t("commitments.c3")}
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
          <div className="border-b border-border/80 pb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              {t("sections.techBadge")}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-foreground">
              {t("sections.detailTitle", { name: displayName })}
            </h2>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FileText className="size-5 text-orange-500" />
              <span>{t("sections.overviewTitle")}</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="size-5 text-orange-500" />
              <span>{t("sections.featuresTitle")}</span>
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

          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="size-5 text-primary" />
              <span>{t("sections.specsTableTitle")}</span>
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

          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="size-5 text-orange-500" />
              <span>{t("sections.applicationsTitle")}</span>
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
                {t("sections.relatedBadge")}
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-foreground">
                {t("sections.relatedTitle")}
              </h2>
            </div>

            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-orange-500 transition-colors"
            >
              <span>{t("sections.viewAllProducts")}</span>
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
