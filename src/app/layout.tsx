import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '元大期貨｜台美交易決勝AI戰地',
  description:
    '寬鬆降息、美國大選，衝浪好時機～來元大「台美交易競賽 爭奪百萬獎金」！',
  openGraph: {
    title: '元大期貨｜台美交易決勝AI戰地',
    description:
      '寬鬆降息、美國大選，衝浪好時機～來元大「台美交易競賽 爭奪百萬獎金」！',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <GoogleTagManager gtmId="GTM-KSVRB2H" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-default relative overflow-x-clip antialiased`}
        monica-locale="zh_TW"
      >
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
