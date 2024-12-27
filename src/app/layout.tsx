import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const mantouSans = localFont({
  display: 'swap',
  src: [
    {
      path: '../font/MantouSans-Regular.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-title',
});

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-default',
  preload: true,
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '元大期貨｜2025春節不打烊',
  description:
    '台股休市11天，元大期貨春節不打烊，回饋好禮達百萬元！交易選擇豐富(國外期權或CFD槓桿)商品，指定戶交易一筆送200元，還有機會獲得黃金牌及蘋果好禮。',
  openGraph: {
    title: '元大期貨｜2025春節不打烊',
    description:
      '台股休市11天，元大期貨春節不打烊，回饋好禮達百萬元！交易選擇豐富(國外期權或CFD槓桿)商品，指定戶交易一筆送200元，還有機會獲得黃金牌及蘋果好禮。',
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
        className={`${noto.variable} ${mantouSans.variable} relative overflow-x-hidden font-default text-y-t-base antialiased`}
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
