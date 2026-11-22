"use client";

import { type Locale, useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryFlagIcon } from "@/constants/icon";
import { cn } from "@/lib/utils";

const SUPPORTED_LOCALES = ["vi", "en", "zh"] as const;

interface LocaleSwitcherProps {
  changeLocaleAction: (locale: Locale) => Promise<void>;
  className?: string;
}

export default function LocaleSwitcher({
  changeLocaleAction,
  className,
}: LocaleSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = React.useTransition();

  const items = SUPPORTED_LOCALES.map((lang) => ({
    value: lang,
    label: t(lang),
  }));

  const handleValueChange = (value: string | null) => {
    if (!value || value === locale) return;
    startTransition(async () => {
      await changeLocaleAction(value as Locale);
      router.refresh();
    });
  };

  return (
    <Select
      value={locale}
      onValueChange={handleValueChange}
      items={items}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label={t("selectLanguage")}
        className={cn(
          "h-9 w-auto min-w-23 sm:min-w-36 gap-2 rounded-lg border-border/70 bg-background/60 px-2.5 sm:px-3 text-sm font-medium",
          className,
        )}
      >
        <div className="flex items-center gap-2 whitespace-nowrap">
          <CountryFlagIcon code={locale} />
          <span className="sm:hidden font-bold uppercase">{locale}</span>
          <SelectValue className="hidden sm:inline font-semibold whitespace-nowrap" />
        </div>
      </SelectTrigger>

      <SelectContent align="end" className="w-52">
        <SelectGroup>
          <SelectLabel className="text-xs uppercase tracking-wider">
            {t("selectLanguage")}
          </SelectLabel>
          <SelectSeparator />
          {SUPPORTED_LOCALES.map((lang) => (
            <SelectItem key={lang} value={lang} className="py-2">
              <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
                <CountryFlagIcon code={lang} className="h-4 w-6" />
                <span>{t(lang)}</span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
