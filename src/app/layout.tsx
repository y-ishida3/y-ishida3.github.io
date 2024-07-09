import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { AOSInit } from '../lib/aos';
import { GoogleAnalytics } from '../lib/gatag';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'y-ishida3 github pages',
  verification: {
    google: 'shKK7Veq-tVWZfS_UKqVPHDs80jYXMj_mKEa5OrAm1Y'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // :TODO 動的にdirectoryが変わったら定義できるようにしたい
  const labels: Array<string> = ['Home', 'About Me', 'Works'];
  const urls: Array<string> = ['/', 'about_me', 'works'];

  return (
    <html lang='jp'>
      <GoogleAnalytics />
      <AOSInit />
      <body className={inter.className}>
        <Header labels={labels} urls={urls}/>
        {children}
        <Footer labels={labels} urls={urls}/>
      </body>
    </html>
  );
}
