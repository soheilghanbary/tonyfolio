import Layout from "~/components/templates/layout";
import "~/styles/app.css";

export const metadata = {
  title: "Soheil Ghanbary | Full Stack Web Developer",
  description:
    "hi, my name is soheil ghanbary. i am 20 years old. I was Working Web Programming with MERN Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
