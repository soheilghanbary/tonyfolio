import { ReactNode } from "react";
import Navbar from "../modules/navbar";
import BottomNavigation from "../modules/bottom-navigation";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <section className="max-w-screen-xl mx-auto p-4">{children}</section>
      <BottomNavigation />
    </>
  );
}
