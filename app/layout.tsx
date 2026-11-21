import type { Metadata } from "next";
import { Bricolage_Grotesque as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kệ Chứa Hàng - Giải Pháp Lưu Trữ Kho Bãi Công Nghiệp",
  description:
    "Chuyên sản xuất và lắp đặt giá kệ kho hàng công nghiệp, kệ Selective, kệ Drive-In, kệ trung tải, sàn Mezzanine đạt chuẩn ISO 9001.",
};

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
