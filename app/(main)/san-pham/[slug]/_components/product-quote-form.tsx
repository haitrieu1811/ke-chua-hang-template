"use client";

import * as React from "react";
import { Send, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import SHOP_INFO from "@/constants/info";

interface ProductQuoteFormProps {
  productName: string;
}

export default function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    company: "",
    warehouseSize: "",
    desiredCapacity: "",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div id="bao-gia" className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
        <div>
          <span className="inline-block rounded-md bg-orange-500/10 px-2.5 py-1 text-sm font-bold text-orange-600 dark:text-orange-400">
            Dự Toán Báo Giá Nhanh
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-black text-foreground">
            Nhận Báo Giá Dự Toán: {productName}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Điền kích thước hoặc thông số kho, kỹ sư sẽ lập bảng bóc tách chi phí chi tiết gửi bạn trong 15 phút.
          </p>
        </div>

        <a
          href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary hover:text-primary-foreground px-4 py-2.5 text-sm font-bold text-primary transition-all cursor-pointer"
        >
          <PhoneCall className="size-4" />
          <span>Hotline: {SHOP_INFO.HOTLINE.TEXT}</span>
        </a>
      </div>

      {isSubmitted ? (
        <div className="py-10 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-8 text-orange-500" />
          </div>
          <h4 className="mt-4 text-xl font-bold text-foreground">
            Đã Tiếp Nhận Thông Tin Thành Công!
          </h4>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Cảm ơn quý khách đã gửi yêu cầu tư vấn cho hệ thống <strong>{productName}</strong>. Kỹ sư kết cấu phụ trách khu vực sẽ liên hệ qua số điện thoại <strong>{formData.phone || "của bạn"}</strong> trong vòng 15 phút để hỗ trợ.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                company: "",
                warehouseSize: "",
                desiredCapacity: "",
                note: "",
              });
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-xs hover:bg-primary/90 transition-all cursor-pointer"
          >
            <span>Gửi thêm yêu cầu khác</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Họ và tên của bạn <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="VD: Nguyễn Văn Nam"
                className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Số điện thoại Zalo <span className="text-orange-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="VD: 0909 xxx xxx"
                className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Tên công ty / Địa điểm kho
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="VD: Công ty TNHH Logistics Nam An - KCN VSIP"
                className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Kích thước nhà kho (Dài x Rộng x Cao)
              </label>
              <input
                type="text"
                value={formData.warehouseSize}
                onChange={(e) => setFormData({ ...formData, warehouseSize: e.target.value })}
                placeholder="VD: 30m x 15m x cao 7.5m"
                className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Tải trọng hàng hóa dự kiến trên mỗi tầng / pallet
            </label>
            <input
              type="text"
              value={formData.desiredCapacity}
              onChange={(e) => setFormData({ ...formData, desiredCapacity: e.target.value })}
              placeholder="VD: 1.000kg - 1.500kg / pallet, dùng xe nâng Reach Truck"
              className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Ghi chú thêm về yêu cầu kỹ thuật
            </label>
            <textarea
              rows={3}
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              placeholder="Ghi chú thêm về mặt sàn, thời gian cần lắp đặt hoàn thiện hoặc yêu cầu khảo sát đo đạc thực tế..."
              className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              Cam kết bảo mật thông tin và không làm phiền nếu không phù hợp.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-7 py-3 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer disabled:opacity-70"
            >
              <Send className="size-4" />
              <span>{loading ? "Đang xử lý..." : "Gửi Yêu Cầu Nhận Báo Giá"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
