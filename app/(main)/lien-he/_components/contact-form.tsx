"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

const PRODUCT_OPTION_IDS = [
  "ke-selective",
  "ke-trung-tai",
  "ke-v-lo",
  "chua-xac-dinh",
] as const;

export default function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const [formData, setFormData] = React.useState({
    fullName: "",
    company: "",
    address: "",
    phone: "",
    email: "",
    interestedProducts: [] as string[],
    quantityAndSpec: "",
    note: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const toggleProduct = (id: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(id);
      return {
        ...prev,
        interestedProducts: exists
          ? prev.interestedProducts.filter((item) => item !== id)
          : [...prev.interestedProducts, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md mb-4">
          <CheckCircle2 className="size-8 text-orange-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-foreground">
          {t("successTitle")}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          {t("successDesc", {
            name: formData.fullName,
            company: formData.company,
            phone: formData.phone,
          })}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              company: "",
              address: "",
              phone: "",
              email: "",
              interestedProducts: [],
              quantityAndSpec: "",
              note: "",
            });
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
        >
          <span>{t("sendAnother")}</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
          <Sparkles className="size-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-black text-foreground uppercase">
            {t("title")}
          </h3>
          <p className="text-sm text-muted-foreground">{t("desc")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f1Label")} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            placeholder={t("f1Placeholder")}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f2Label")} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            placeholder={t("f2Placeholder")}
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f3Label")} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            placeholder={t("f3Placeholder")}
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f4Label")} <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder={t("f4Placeholder")}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f5Label")} <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            required
            placeholder={t("f5Placeholder")}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <span className="block text-sm font-semibold text-foreground mb-2">
            {t("f6Label")}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PRODUCT_OPTION_IDS.map((id) => {
              const checked = formData.interestedProducts.includes(id);
              return (
                <label
                  key={id}
                  className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors cursor-pointer select-none ${
                    checked
                      ? "border-primary bg-primary/10 text-primary font-semibold"
                      : "border-border/80 bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleProduct(id)}
                    className="size-4 accent-primary rounded cursor-pointer"
                  />
                  <span>{t(`products.${id}`)}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f7Label")}
          </label>
          <input
            type="text"
            placeholder={t("f7Placeholder")}
            value={formData.quantityAndSpec}
            onChange={(e) =>
              setFormData({ ...formData, quantityAndSpec: e.target.value })
            }
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-1.5">
            {t("f8Label")}
          </label>
          <textarea
            rows={4}
            placeholder={t("f8Placeholder")}
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-orange-500 shrink-0" />
          <span>{t("privacyNote")}</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span>{t("submitting")}</span>
          ) : (
            <>
              <span>{t("submitBtn")}</span>
              <Send className="size-4 text-orange-400" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
