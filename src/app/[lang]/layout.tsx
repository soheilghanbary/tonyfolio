import { i18n } from "../../../i18n-config";
import Layout from "~/components/templates/layout";
import "~/styles/app.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: "Soheil Ghanbary | Full Stack Web Developer",
  description:
    "hi, my name is soheil ghanbary. i am 20 years old. I was Working Web Programming with MERN Stack",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang || "en"} dir={params.lang === "fa" ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* @ts-ignore */}
        <Layout lang={params.lang}>{children}</Layout>
      </body>
    </html>
  );
}
