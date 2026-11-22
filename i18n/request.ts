import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["vi", "en", "zh"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(value: string | undefined): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const rawLocale = store.get("locale")?.value;
  const locale: SupportedLocale = isSupportedLocale(rawLocale)
    ? rawLocale
    : "vi";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
