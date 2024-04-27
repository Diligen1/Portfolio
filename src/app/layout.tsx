import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PORTFOLIO | CREATOR | KUBA",
  description:
    "Мета-заголовок — это HTML-тег, который определяет заголовок вашей страницы. Этот тег отображает заголовок вашей страницы в результатах поисковой системы, в верхней части браузера пользователя, а также когда ваша страница добавлена ​​в список избранного.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-straight/css/uicons-thin-straight.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.3.0/uicons-solid-straight/css/uicons-solid-straight.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.3.0/uicons-solid-straight/css/uicons-solid-straight.css"
        ></link>
      </head>
      <body data-theme="base">
        <div className="w-full h-[100vh]">{children}</div>
      </body>
    </html>
  );
}
