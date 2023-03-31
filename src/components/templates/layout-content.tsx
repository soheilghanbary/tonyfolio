"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "../modules/navbar";
import BottomNavigation from "../modules/bottom-navigation";
import { ReactNode } from "react";

interface LayoutContentProps {
  children: ReactNode;
  navItems: any;
  lang: string
}

export default function LayoutContent({
  lang,
  navItems,
  children,
}: LayoutContentProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar lang={lang} navItems={navItems} />
      <section className="max-w-screen-xl mx-auto p-4">{children}</section>
      <BottomNavigation />
    </ThemeProvider>
  );
}
