"use client";

import * as React from "react";
import { Clock, Sparkles } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 14,
    hours: 8,
    minutes: 45,
    seconds: 30,
  });

  React.useEffect(() => {
    // Đếm ngược tự động mỗi giây
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="rounded-2xl border border-amber-400/40 bg-black/40 p-5 sm:p-6 backdrop-blur-md shadow-xl text-center max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-bold uppercase tracking-wider mb-4">
        <Clock className="size-4 animate-pulse" />
        <span>Ưu Đãi Kết Thúc Sau:</span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {/* Ngày */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
          <span className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {formatNum(timeLeft.days)}
          </span>
          <span className="text-sm font-semibold text-amber-200 mt-1">Ngày</span>
        </div>

        {/* Giờ */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
          <span className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {formatNum(timeLeft.hours)}
          </span>
          <span className="text-sm font-semibold text-amber-200 mt-1">Giờ</span>
        </div>

        {/* Phút */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
          <span className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {formatNum(timeLeft.minutes)}
          </span>
          <span className="text-sm font-semibold text-amber-200 mt-1">Phút</span>
        </div>

        {/* Giây */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
          <span className="text-2xl sm:text-4xl font-black text-orange-400 tracking-tight">
            {formatNum(timeLeft.seconds)}
          </span>
          <span className="text-sm font-semibold text-amber-200 mt-1">Giây</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-amber-100/90 font-medium">
        🎅 Chỉ còn <strong>12 suất ưu đãi</strong> đặc quyền trong tháng 12/2026
      </p>
    </div>
  );
}
