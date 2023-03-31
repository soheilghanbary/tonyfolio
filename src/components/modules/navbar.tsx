import styles from "~/styles/modules/navbar.module.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface NavbarProps {
  lang: string;
  navItems: any;
}

export default function Navbar({ lang, navItems }: NavbarProps) {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <Logo />
        <Menu navItems={navItems} />
        <Settings lang={lang} />
      </nav>
    </header>
  );
}

function Logo() {
  return <h2 className={styles.logo}>SoheilGhanbary</h2>;
}

function Menu({ navItems }: any) {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="#">{navItems.l1}</a>
      </li>
      <li>
        <a href="#skills">{navItems.l2}</a>
      </li>
      <li>
        <a href="#portfolio">{navItems.l3}</a>
      </li>
      <li>
        <a href="#about">{navItems.l4}</a>
      </li>
      <li>
        <a href="#contact">{navItems.l5}</a>
      </li>
    </ul>
  );
}

function Settings({ lang }: { lang: string }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const router = useRouter();

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="py-2 px-4 rtl:rounded-r-full ltr:rounded-l-full bg-indigo-500 text-white"
      >
        <MoonIcon />
      </button>
      <button
        onClick={(_) => router.push(lang === "en" ? "/fa" : "/en")}
        className="py-2 px-4 rtl:rounded-l-full ltr:rounded-r-full bg-teal-500 text-white"
      >
        <LangIcon />
      </button>
    </div>
  );
}

const LangIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);
