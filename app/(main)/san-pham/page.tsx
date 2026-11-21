import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import SHOP_INFO from "@/constants/info";
import { getAllProducts } from "@/data/products";
import {
  Award,
  ChevronRight,
  Clock,
  FileText,
  Layers,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import * as React from "react";
import ProductListClient from "./_components/product-list-client";

export const metadata: Metadata = {
  title:
    "Danh Mục Kệ Chứa Hàng & Giá Kệ Kho Vận Công Nghiệp | Báo Giá Trực Tiếp Tại Xưởng",
  description:
    "Cung cấp trọn gói các hệ thống kệ chứa pallet Selective, Drive-In, kệ trung tải, sàn Mezzanine, kệ cantilever, xe Radio Shuttle và pallet thép. 100% thép JIS G3101, bảo hành kết cấu 5 năm.",
};

const serviceCommitments = [
  {
    icon: Clock,
    title: "Khảo Sát & Bản Vẽ 2D/3D Miễn Phí",
    description:
      "Kỹ sư kết cấu khảo sát hiện trạng thực tế và lên phương án bố trí mặt bằng kho trong 24h.",
  },
  {
    icon: Award,
    title: "Thép JIS G3101 Chuẩn Nhật Bản",
    description:
      "100% phôi thép tiêu chuẩn cán nguội SPCC/SS400, sơn tĩnh điện ngoài trời sấy 200°C chống ăn mòn.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo Hành Kết Cấu 5 Năm",
    description:
      "Cam kết đổi mới linh kiện chịu lực cong võng quá quy chuẩn, hỗ trợ bảo trì trọn đời hệ thống.",
  },
  {
    icon: Truck,
    title: "Giao Hàng & Thi Công Trọn Gói",
    description:
      "Đội ngũ kỹ thuật viên lắp đặt chuyên nghiệp toàn quốc, bàn giao đúng tiến độ cam kết.",
  },
];

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Banner & Breadcrumb */}
      <section className="relative overflow-hidden border-b border-border/80 bg-linear-to-b from-primary/10 via-background to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="size-4" />
            <span className="font-semibold text-foreground">
              Hệ Thống Sản Phẩm
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <Layers className="size-4 text-orange-500" />
              Danh Mục Thiết Bị Lưu Trữ Công Nghiệp
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              Hệ Thống Giá Kệ Chứa Hàng Nhà Kho Chuyên Dụng
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Giải pháp tối ưu hóa 100% không gian kho bãi từ kệ tải trọng nhẹ
              80kg/tầng đến kệ tải nặng 4.000kg/pallet. Sản xuất trực tiếp trên
              dây chuyền tự động hóa, đáp ứng tiêu chuẩn an toàn FEM 10.2.02
              châu Âu.
            </p>

            {/* Thống kê nhanh nổi bật */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-border/80 pt-6">
              <div>
                <p className="text-2xl font-black text-primary">
                  <CountUp value={8} suffix="+ Dòng" />
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Kệ chuyên dụng
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-600 dark:text-orange-400">
                  <CountUp value={80} /> -{" "}
                  <CountUp value={4000} suffix="kg" delay={120} />
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Tải trọng đa dạng
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-primary">
                  <CountUp value={5} suffix=" Năm" delay={200} />
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Bảo hành kết cấu
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-600 dark:text-orange-400">
                  <CountUp value={100} suffix="%" delay={300} />
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Thép JIS Nhật Bản
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Danh sách sản phẩm & Bộ lọc tương tác (Client Component) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <React.Suspense fallback={null}>
            <ProductListClient initialProducts={products} />
          </React.Suspense>
        </div>
      </section>

      {/* 3. Khối Cam Kết Chất Lượng & Dịch Vụ */}
      <section className="border-t border-border/80 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Quy Chuẩn Chuyên Nghiệp
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
                Vì Sao Doanh Nghiệp Lựa Chọn Kệ Chứa Hàng Của Chúng Tôi?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Chúng tôi không chỉ bán giá kệ, chúng tôi cung cấp giải pháp lưu
                kho an toàn và hiệu quả kinh tế cao nhất.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCommitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  delay={idx * 90}
                  duration={600}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-xs hover:border-primary/50 transition-all">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6 text-orange-500" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Banner Kêu Gọi Nhận Dự Toán & Tư Vấn Mặt Bằng */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={700}>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-blue-700 to-primary p-8 sm:p-12 text-white shadow-xl">
              <div className="relative z-10 max-w-3xl">
                <span className="inline-block rounded-full bg-orange-500 px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-white">
                  Tư Vấn Miễn Phí 24/7
                </span>
                <h2 className="mt-4 text-2xl sm:text-4xl font-black leading-tight">
                  Cần Dự Toán Chi Phí & Lên Layout 3D Cho Kho Của Bạn?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
                  Đội ngũ kỹ sư kết cấu của chúng tôi sẵn sàng đến tận nơi khảo
                  sát mặt bằng, tư vấn chủng loại kệ tối ưu nhất và gửi bảng dự
                  toán chi tiết trong vòng 24 giờ làm việc.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer"
                  >
                    <PhoneCall className="size-5" />
                    <span>Hotline Kỹ Sư: {SHOP_INFO.HOTLINE.TEXT}</span>
                  </a>

                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white hover:text-primary px-6 py-3.5 text-base font-bold text-white shadow-xs transition-all cursor-pointer"
                  >
                    <FileText className="size-5" />
                    <span>Gửi Yêu Cầu Khảo Sát</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
