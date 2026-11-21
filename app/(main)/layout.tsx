import React from "react";

import MainHeader from "@/app/(main)/_components/header";
import MainFooter from "@/app/(main)/_components/footer";
import BackToTop from "@/app/(main)/_components/back-to-top";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1">{children}</main>
      <MainFooter />
      <BackToTop />
    </div>
  );
}
