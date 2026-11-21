"use client";

import * as React from "react";
import SHOP_INFO from "@/constants/info";
import { Gift, CheckCircle2, PhoneCall, Send, Sparkles, Copy, Check } from "lucide-react";

const giftPackages = [
  {
    id: "voucher25",
    title: "Voucher Giảm 25% Giá Kệ",
    desc: "Giảm trực tiếp 25% giá thành kệ Selective & Drive-In cho hợp đồng từ 500 pallet.",
  },
  {
    id: "survey3d",
    title: "Gói Khảo Sát 3D Laser Trị Giá 15.000.000đ",
    desc: "Đo đạc thực tế, tối ưu lối đi xe nâng và xuất bản vẽ 2D/3D chi tiết trong 24h.",
  },
  {
    id: "protector",
    title: "Tặng 100% Ốp Bảo Vệ Chân Trụ",
    desc: "Trang bị miễn phí bộ ốp thép chữ U bảo vệ cột trụ chống va chạm xe nâng trị giá 10 triệu.",
  },
  {
    id: "maintenance",
    title: "Miễn Phí Thử Tải & Bảo Dưỡng 1 Năm",
    desc: "Cấp hồ sơ kiểm định kỹ thuật an toàn theo chuẩn FEM 10.2.02 và kiểm tra định kỳ.",
  },
];

export default function ClaimGiftForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    company: "",
    warehouseSize: "",
    selectedGift: "voucher25",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyCode = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("XMAS2026-VIP");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div id="dang-ky-uu-dai" className="rounded-3xl border-2 border-amber-400/50 bg-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Huy hiệu Noel trang trí góc trên */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/10 border border-red-600/30 px-3 py-1 text-sm font-bold text-red-600 dark:text-red-400">
            <Gift className="size-4" />
            Đăng Ký Nhận Quà Giáng Sinh 2026
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
            Kích Hoạt Gói Ưu Đãi Noel Cho Doanh Nghiệp
          </h3>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground">
            Chương trình áp dụng đến hết ngày 31/12/2026 cho 50 nhà kho đăng ký sớm nhất.
          </p>
        </div>

        <a
          href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-red-600/30 bg-red-600/10 hover:bg-red-600 hover:text-white px-4 py-2.5 text-sm font-bold text-red-600 dark:text-red-400 transition-all cursor-pointer"
        >
          <PhoneCall className="size-4.5" />
          <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
        </a>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-6">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg animate-bounce">
            <Gift className="size-8" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h4 className="text-2xl font-black text-foreground">
              Chúc Mừng Quý Khách Đã Nhận Quà Giáng Sinh Thành Công!
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Mã ưu đãi độc quyền của bạn đã được ghi nhận vào hệ thống. Kỹ sư kết cấu sẽ liên hệ qua số điện thoại <strong>{formData.phone || "của bạn"}</strong> trong vòng 15 phút để gửi bản vẽ và phương án chiết khấu.
            </p>
          </div>

          {/* Khung hiển thị Voucher */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-500/10 p-4 sm:p-5">
            <span className="text-sm font-bold text-foreground">MÃ VOUCHER CỦA BẠN:</span>
            <span className="font-mono text-xl sm:text-2xl font-black text-red-600 dark:text-red-400 tracking-wider">
              XMAS2026-VIP
            </span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-bold text-white shadow-xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  <span>Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  <span>Sao chép mã</span>
                </>
              )}
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  company: "",
                  warehouseSize: "",
                  selectedGift: "voucher25",
                  note: "",
                });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline cursor-pointer"
            >
              <span>Đăng ký thêm cho kho hàng khác</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Lựa chọn gói quà Giáng Sinh */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-3">
              1. Chọn Gói Quà Tặng Giáng Sinh Muốn Nhận <span className="text-red-600">*</span>
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {giftPackages.map((pkg) => {
                const isSelected = formData.selectedGift === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setFormData({ ...formData, selectedGift: pkg.id })}
                    className={`rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                      isSelected
                        ? "border-red-600 bg-red-600/5 shadow-md ring-2 ring-red-600/20"
                        : "border-border/80 bg-muted/20 hover:border-red-600/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          isSelected
                            ? "border-red-600 bg-red-600 text-white"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && <Check className="size-3" />}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-foreground">
                          {pkg.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {pkg.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-3">
              2. Thông Tin Doanh Nghiệp & Địa Điểm Kho Bãi
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Họ và tên của bạn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="VD: Nguyễn Văn Nam"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Số điện thoại Zalo nhận ưu đãi <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="VD: 0909 xxx xxx"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Tên công ty / Khu công nghiệp
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="VD: Công ty TNHH Logistics Đông Nam - KCN VSIP"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Diện tích nhà kho ước tính (Dài x Rộng x Cao)
                </label>
                <input
                  type="text"
                  value={formData.warehouseSize}
                  onChange={(e) => setFormData({ ...formData, warehouseSize: e.target.value })}
                  placeholder="VD: 40m x 20m x cao 8m (hoặc 800m²)"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Ghi chú thêm về yêu cầu thời gian hoàn thiện trước Tết
            </label>
            <textarea
              rows={2}
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              placeholder="VD: Cần lắp đặt hoàn thiện và nghiệm thu trước 20 tháng Chạp để kịp xuất hàng Tết..."
              className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              🎅 Cam kết bảo mật thông tin & áp dụng đúng chính sách ưu đãi công bố.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-700 via-rose-600 to-red-800 hover:from-red-800 hover:to-red-900 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-102 cursor-pointer disabled:opacity-70"
            >
              <Gift className="size-5 text-amber-300" />
              <span>{loading ? "Đang xử lý..." : "🎄 Kích Hoạt & Nhận Mã Quà Giáng Sinh"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
