import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AOSInit } from './aos';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "y-ishida3 github pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // :TODO 動的にdirectoryが変わったら定義できるようにしたい
  const labels = ["Home", "About Me", "Works"];
  const urls = ["/", "about_me", "works"];

  return (
    <html lang="jp">
      <AOSInit />
      <body className={inter.className}>
        <Header labels={labels} urls={urls}/>
        {children}
        <Footer labels={labels} urls={urls}/>
      </body>
    </html>
  );
}
