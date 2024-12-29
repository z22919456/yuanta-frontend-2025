import Image from '@/lib/image';
import Background from '../(yuanta)/components/background';
import EventBanner from '../(yuanta)/components/banner';
import logo from './assets/yoxi_yuanta.png';
import Banner from './components/banner';
import Navbar from './components/navbar';

const YoxiLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-gradient-taxi pb-1 pt-[64px]">
        <Banner />
        <div className="container relative z-10 mb-5">
          <section className="container rounded-xl border-2 border-[#513510] bg-white p-5 md:border-4 lg:rounded-3xl">
            <div className="mx-auto max-w-3xl space-y-5 py-5">
              <Image
                placeholder="empty"
                src={logo}
                alt="yoxi x 元大期貨"
                className="mx-auto md:!mb-8 lg:w-[500px]"
              />
              {children}
            </div>
          </section>
        </div>
        <section className="relative z-10 overflow-hidden">
          <Background />
          <EventBanner />
        </section>
      </main>
    </>
  );
};

export default YoxiLayout;
