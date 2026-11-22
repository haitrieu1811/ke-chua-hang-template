import { Locale } from "next-intl";
import { cookies } from "next/headers";
import React from "react";

import BackToTop from "@/app/(main)/_components/back-to-top";
import MainFooter from "@/app/(main)/_components/footer";
import MainHeader from "@/app/(main)/_components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  async function changeLocaleAction(locale: Locale) {
    "use server";
    const store = await cookies();
    store.set("locale", locale);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <MainHeader changeLocaleAction={changeLocaleAction} />
      <main className="flex-1">{children}</main>
      <MainFooter />
      <BackToTop />
    </div>
  );
}
