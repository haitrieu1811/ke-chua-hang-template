import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Chivo as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kệ Chứa Hàng - Giải Pháp Lưu Trữ Kho Bãi Công Nghiệp",
  description:
    "Chuyên sản xuất và lắp đặt giá kệ kho hàng công nghiệp, kệ Selective, kệ Drive-In, kệ trung tải, sàn Mezzanine đạt chuẩn ISO 9001.",
};

async function IntlProvider({ children }: { children: React.ReactNode }) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", fontSans.className)}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            showSpinner={false}
            color="#ff6900"
            height={3}
            shadow={false}
          />
          <Suspense fallback={null}>
            <IntlProvider>{children}</IntlProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
