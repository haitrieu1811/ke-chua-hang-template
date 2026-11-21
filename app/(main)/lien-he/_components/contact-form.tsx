"use client";

import * as React from "react";
import { Send, CheckCircle2, Sparkles, Building, Phone, Mail, MapPin, Layers } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    rackType: "selective",
    area: "",
    loadCapacity: "",
    note: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Giả lập gửi thông tin khảo sát
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md mb-4">
          <CheckCircle2 className="size-8 text-orange-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-foreground">
          Đăng Ký Khảo Sát Thành Công!
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          Cảm ơn quý khách <strong className="text-foreground">{formData.fullName}</strong> ({formData.company || "Doanh nghiệp"}). Đội ngũ kỹ sư kết cấu của chúng tôi sẽ liên hệ lại qua số điện thoại <strong className="text-primary">{formData.phone}</strong> trong vòng 15 phút để xác nhận lịch hẹn khảo sát thực tế.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              company: "",
              phone: "",
              email: "",
              address: "",
              rackType: "selective",
              area: "",
              loadCapacity: "",
              note: "",
            });
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
        >
          <span>Gửi Thêm Yêu Cầu Khác</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="flex size-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
          <Sparkles className="size-4.5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-black text-foreground">
            Đăng Ký Khảo Sát & Nhận Bản Vẽ 3D
          </h3>
          <p className="text-sm text-muted-foreground">
            Miễn phí 100% chi phí đo đạc hiện trạng kho và mô phỏng luồng xe nâng
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Họ và tên */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Họ và tên của bạn <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ví dụ: Nguyễn Văn An"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Tên công ty / Doanh nghiệp */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Tên công ty / Đơn vị
          </label>
          <input
            type="text"
            placeholder="Ví dụ: Công ty Logistics ABC"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Số điện thoại liên hệ <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Ví dụ: 0987.654.321"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Địa chỉ Email
          </label>
          <input
            type="email"
            placeholder="Ví dụ: contact@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Địa chỉ nhà kho */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Địa chỉ nhà kho cần lắp đặt <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ví dụ: KCN Sài Đồng B, Long Biên, Hà Nội"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Dòng kệ quan tâm */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Hệ thống kệ quan tâm
          </label>
          <select
            value={formData.rackType}
            onChange={(e) => setFormData({ ...formData, rackType: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="selective">Kệ Chứa Pallet Selective</option>
            <option value="drive-in">Kệ Kho Drive-In / Drive-Thru</option>
            <option value="medium">Kệ Trung Tải (Medium Duty)</option>
            <option value="mezzanine">Kệ Sàn Lửng Mezzanine Floor</option>
            <option value="v-lo">Kệ Sắt V Lỗ Đa Năng</option>
            <option value="cantilever">Kệ Tay Đỡ Cantilever</option>
            <option value="shuttle">Hệ Thống Kệ Radio Shuttle Robot</option>
            <option value="pallet-thep">Pallet Thép Sơn Tĩnh Điện</option>
          </select>
        </div>

        {/* Diện tích kho / Tải trọng */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Diện tích kho & Tải trọng dự kiến
          </label>
          <input
            type="text"
            placeholder="Ví dụ: 500m², tải 1.500kg/pallet"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Ghi chú chi tiết */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            Yêu cầu kỹ thuật hoặc câu hỏi chi tiết
          </label>
          <textarea
            rows={4}
            placeholder="Mô tả chiều cao trần kho, loại xe nâng đang sử dụng, loại hàng hóa lưu trữ..."
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-orange-500 shrink-0" />
          <span>Bảo mật thông tin dự án 100%</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span>Đang gửi thông tin...</span>
          ) : (
            <>
              <span>Gửi Yêu Cầu Khảo Sát & Báo Giá</span>
              <Send className="size-4 text-orange-400" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
