import { ReactNode } from "react";
import { getDictionary } from "locales/getLocale";
import LayoutContent from "./layout-content";

interface LayoutProps {
  lang: string;
  children: ReactNode;
}

export default async function Layout({ children, lang }: LayoutProps) {
  const d = await getDictionary(lang === "en" ? "en" : "fa");
  return (
    <LayoutContent lang={lang} navItems={d.navbar}>
      {children}
    </LayoutContent>
  );
}
