"use client"
import { ReactNode } from "react";
import Navbar from "../modules/navbar";
import BottomNavigation from "../modules/bottom-navigation";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <section className="max-w-screen-xl mx-auto p-4">{children}</section>
      <BottomNavigation />
    </ThemeProvider>
  );
}
