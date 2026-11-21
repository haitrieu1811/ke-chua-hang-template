"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CountUpProps {
  /** Giá trị đích cần đếm tới */
  value: number;
  /** Tiền tố đứng trước số (VD: "+") */
  prefix?: string;
  /** Hậu tố đứng sau số (VD: "%", "+", "m²", " Năm") */
  suffix?: string;
  /** Số chữ số thập phân (VD: 1 cho 99.2) */
  decimals?: number;
  /** Ký tự phân tách hàng nghìn (mặc định "." theo chuẩn Việt Nam: 1.500) */
  separator?: string;
  /** Ký tự thập phân (mặc định ".") */
  decimalPoint?: string;
  /** Thời gian chạy hiệu ứng (ms) */
  duration?: number;
  /** Độ trễ trước khi bắt đầu đếm (ms) */
  delay?: number;
  className?: string;
}

function formatNumber(
  num: number,
  decimals: number,
  separator: string,
  decimalPoint: string,
): string {
  const fixed = num.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const formattedInt = separator
    ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : intPart;
  return decPart !== undefined
    ? `${formattedInt}${decimalPoint}${decPart}`
    : formattedInt;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ".",
  decimalPoint = ".",
  duration = 1600,
  delay = 0,
  className,
}: CountUpProps) {
  const [current, setCurrent] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = React.useRef(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let rafId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion || duration <= 0) {
        rafId = requestAnimationFrame(() => setCurrent(value));
        return;
      }

      const run = () => {
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic cho cảm giác mượt và hạ cánh tự nhiên
          const eased = 1 - Math.pow(1 - progress, 3);
          const nextValue = value * eased;

          setCurrent(progress >= 1 ? value : nextValue);

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };

        rafId = requestAnimationFrame(tick);
      };

      if (delay > 0) {
        timeoutId = setTimeout(run, delay);
      } else {
        run();
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (timeoutId !== null) clearTimeout(timeoutId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(current, decimals, separator, decimalPoint)}
      {suffix}
    </span>
  );
}

export default CountUp;
