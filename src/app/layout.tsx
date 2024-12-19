import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const mantouSans = localFont({
  display: 'swap',
  src: [
    {
      path: '../font/MantouSans-Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-title',
});

const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-default',
  weight: ['900', '300', '400', '500', '600', '700', '800'],
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
        className={`${noto.variable} ${mantouSans.variable} font-default relative overflow-x-clip text-y-t-base antialiased`}
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
