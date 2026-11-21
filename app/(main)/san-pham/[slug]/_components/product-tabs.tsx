"use client";

import * as React from "react";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Building2,
  HelpCircle,
  Truck,
  Wrench,
  ChevronDown,
  Layers,
} from "lucide-react";
import { Product } from "@/data/products";

interface ProductTabsProps {
  product: Product;
}

const engineeringSteps = [
  {
    step: "01",
    title: "Khảo Sát Hiện Trạng & Đo Đạc 3D",
    desc: "Kỹ sư trực tiếp đến tận nhà kho đo đạc kích thước sàn, kiểm tra mác bê tông và lối ra vào của xe nâng.",
  },
  {
    step: "02",
    title: "Lên Bản Vẽ AutoCAD 2D & Phối Cảnh 3D",
    desc: "Tính toán tối ưu mật độ pallet, bề rộng lối đi an toàn và gửi phương án thiết kế chi tiết trong 24h.",
  },
  {
    step: "03",
    title: "Sản Xuất Tại Nhà Máy Chuẩn JIS Nhật Bản",
    desc: "Đột dập CNC tự động, tẩy rỉ 4 bể hóa chất và sơn tĩnh điện công nghiệp ngoài trời nung 200°C.",
  },
  {
    step: "04",
    title: "Vận Chuyển & Lắp Đặt Hoàn Thiện",
    desc: "Đội ngũ cơ khí chuyên nghiệp lắp ráp, siết bu-lông lực, neo bản mã chân trụ xuống sàn bê tông.",
  },
  {
    step: "05",
    title: "Thử Tải Tĩnh, Bàn Giao & Bảo Hành 5 Năm",
    desc: "Kiểm tra độ võng dầm beam theo chuẩn FEM 10.2.02, bàn giao hồ sơ CO/CQ xuất xưởng và phiếu bảo hành.",
  },
];

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = React.useState<
    "specs" | "features" | "apps" | "process" | "faq"
  >("specs");
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const tabs = [
    { id: "specs", label: "Thông Số Kỹ Thuật", icon: FileText },
    { id: "features", label: "Ưu Điểm Nổi Bật", icon: CheckCircle2 },
    { id: "apps", label: "Ứng Dụng Thực Tế", icon: Building2 },
    { id: "process", label: "Quy Trình & Bảo Hành", icon: Wrench },
    { id: "faq", label: "Câu Hỏi Thường Gặp", icon: HelpCircle },
  ] as const;

  return (
    <div className="rounded-2xl border border-border/80 bg-card shadow-sm overflow-hidden">
      {/* Thanh chuyển Tabs */}
      <div className="flex border-b border-border/80 bg-muted/40 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-primary bg-card text-primary shadow-xs"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              <Icon
                className={`size-4.5 ${
                  isActive ? "text-orange-500" : "text-muted-foreground"
                }`}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Nội dung tương ứng từng Tab */}
      <div className="p-6 sm:p-8">
        {/* TAB 1: THÔNG SỐ KỸ THUẬT */}
        {activeTab === "specs" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Bảng Thông Số Kỹ Thuật Chi Tiết - {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Toàn bộ thông số được tính toán và kiểm định theo tiêu chuẩn kết cấu FEM 10.2.02 châu Âu.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/80">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr
                      key={spec.label}
                      className={idx % 2 === 0 ? "bg-muted/30" : "bg-card"}
                    >
                      <th
                        scope="row"
                        className="w-1/3 border-b border-border/60 px-5 py-3.5 font-bold text-foreground"
                      >
                        {spec.label}
                      </th>
                      <td className="border-b border-border/60 px-5 py-3.5 text-muted-foreground font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground flex items-center gap-3">
              <ShieldCheck className="size-5 text-orange-500 shrink-0" />
              <span>
                <strong>Ghi chú:</strong> Chúng tôi nhận khảo sát và sản xuất theo quy cách kích thước và tải trọng riêng phù hợp với từng layout nhà xưởng.
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: ƯU ĐIỂM NỔI BẬT */}
        {activeTab === "features" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Đặc Điểm & Lợi Thế Cạnh Tranh Vượt Trội
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Được nghiên cứu và cải tiến liên tục dựa trên thực tế vận hành tại hàng trăm nhà máy Việt Nam.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {product.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-xl border border-border/80 bg-muted/20 p-5 hover:border-primary/40 transition-all"
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

            <div className="rounded-xl bg-muted/40 p-5 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground block mb-1">Mô tả cấu tạo chuyên sâu:</strong>
              {product.description}
            </div>
          </div>
        )}

        {/* TAB 3: ỨNG DỤNG THỰC TẾ */}
        {activeTab === "apps" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Lĩnh Vực & Ngành Nghề Ứng Dụng Hàng Đầu
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Phù hợp cho các doanh nghiệp đang tìm kiếm giải pháp nâng cấp hiệu quả lưu trữ.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.applications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 rounded-xl border border-border/80 bg-card p-4 shadow-2xs hover:border-primary/40 transition-all"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {app}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
              <h4 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Khuyến nghị từ Kỹ sư Kết cấu
              </h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Nếu kho bãi của bạn thuộc ngành đặc thù như kho mát (15°C - 20°C), kho đông lạnh âm sâu (-25°C) hoặc kho hóa chất có tính ăn mòn cao, kỹ sư của chúng tôi sẽ tư vấn phủ mạ kẽm nhúng nóng toàn phần để đảm bảo tuổi thọ trên 15 năm.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: QUY TRÌNH & BẢO HÀNH */}
        {activeTab === "process" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Quy Trình Triển Khai Trọn Gói 5 Bước
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Quy trình khép kín từ khảo sát, sản xuất đến bàn giao nghiệm thu đưa vào vận hành.
              </p>
            </div>

            <div className="space-y-4">
              {engineeringSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-black text-primary-foreground">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/10 p-5">
              <h4 className="text-base font-bold text-primary">
                Chính Sách Bảo Hành & Bảo Trì 5 Năm
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Cam kết bảo hành kết cấu chịu lực 5 năm. Trong thời hạn bảo hành, nếu có bất kỳ hiện tượng cong võng dầm beam hay biến dạng cột vượt tiêu chuẩn FEM do lỗi sản xuất, chúng tôi sẽ tiến hành thay mới chi tiết 100% trong vòng 48 giờ làm việc.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: CÂU HỎI THƯỜNG GẶP (FAQ) */}
        {activeTab === "faq" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Giải Đáp Thắc Mắc Kỹ Thuật Thường Gặp
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Những thắc mắc phổ biến nhất của các chủ kho và giám đốc logistics khi chọn dòng kệ này.
              </p>
            </div>

            <div className="space-y-3">
              {product.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-border/80 bg-card transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`size-4.5 text-primary shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-orange-500" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/20 px-5 py-4 text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
