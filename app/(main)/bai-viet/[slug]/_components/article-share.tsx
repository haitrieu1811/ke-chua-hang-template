"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Share2, Copy, Check, Bookmark, MessageCircle } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

interface ArticleShareProps {
  title: string;
  slug: string;
}

const LABELS = {
  vi: {
    shareTitle: "Chia sẻ bài viết này:",
    copied: "Đã sao chép link!",
    copy: "Copy link",
    saved: "Đã lưu",
    save: "Lưu đọc sau",
  },
  en: {
    shareTitle: "Share this article:",
    copied: "Link copied!",
    copy: "Copy link",
    saved: "Saved",
    save: "Save for later",
  },
  zh: {
    shareTitle: "分享此文章：",
    copied: "已复制链接！",
    copy: "复制链接",
    saved: "已收藏",
    save: "稍后阅读",
  },
} as const;

export default function ArticleShare({ title, slug }: ArticleShareProps) {
  void title;
  void slug;
  const locale = useLocale();
  const labels =
    locale === "en" ? LABELS.en : locale === "zh" ? LABELS.zh : LABELS.vi;

  const [copied, setCopied] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFacebookShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const handleZaloShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://sp.zalo.me/share?url=${url}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/80 bg-muted/30 p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <Share2 className="size-5 text-orange-500" />
        <span className="text-sm font-bold text-foreground">
          {labels.shareTitle}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card px-3.5 py-2 text-sm font-semibold text-foreground hover:bg-muted hover:border-primary/50 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="size-4 text-orange-500" />
              <span className="text-orange-500 font-bold">{labels.copied}</span>
            </>
          ) : (
            <>
              <Copy className="size-4 text-muted-foreground" />
              <span>{labels.copy}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleFacebookShare}
          className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/10 px-3.5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
        >
          <FacebookIcon className="size-4" />
          <span>Facebook</span>
        </button>

        <button
          type="button"
          onClick={handleZaloShare}
          className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/10 px-3.5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
        >
          <MessageCircle className="size-4" />
          <span>Zalo</span>
        </button>

        <button
          type="button"
          onClick={() => setSaved(!saved)}
          className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all cursor-pointer ${
            saved
              ? "border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-400"
              : "border-border/80 bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Bookmark className={`size-4 ${saved ? "fill-current" : ""}`} />
          <span>{saved ? labels.saved : labels.save}</span>
        </button>
      </div>
    </div>
  );
}
