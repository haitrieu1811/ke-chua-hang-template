"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 650,
  threshold = 0.1,
  className,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (direction) {
      case "up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none";
      case "down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8 pointer-events-none";
      case "left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8 pointer-events-none";
      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8 pointer-events-none";
      case "zoom":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none";
      case "none":
        return isVisible ? "opacity-100" : "opacity-0 pointer-events-none";
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "transition-all will-change-[transform,opacity]",
        getAnimationClasses(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
