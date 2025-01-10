import Footer from '@/components/footer';
import { ArrowBigDown } from 'lucide-react';
import Background from '../(yuanta)/components/background';
import EventBanner from '../(yuanta)/components/banner';
import Logo from './assets/yoxi_yuanta.svg';
import Banner from './components/banner';
import { LoadingProvider } from './components/form/loading-context';
import Navbar from './components/navbar';

const YoxiLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <LoadingProvider>
      <Navbar />
      <main className="relative min-h-screen bg-gradient-taxi pb-1 pt-[64px]">
        <Banner />
        <div className="container relative z-10 mb-14">
          <section className="container rounded-xl border-2 border-[#513510] bg-white p-5 md:border-4 lg:rounded-3xl">
            <div className="mx-auto max-w-3xl space-y-5 py-5">
              <Logo
                className="mx-auto w-[200px] md:w-[300px]"
                alt="yoxi x 元大期貨"
              />
              {/* <Image
                placeholder="empty"
                src={logo}
                alt="yoxi x 元大期貨"
                className="mx-auto md:!mb-8 lg:w-[500px]"
              /> */}
              {children}
            </div>
          </section>
        </div>
        <section className="relative z-10 -mb-1">
          <div className="absolute left-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border-4 border-y-bo bg-gradient-band px-0 py-1 shadow-xl">
            <ArrowBigDown
              color="#472600"
              strokeWidth={2}
              fill="yellow"
              className="ml-3 mr-2 size-10 rounded-xl md:size-12"
            />
            <h1
              data-stroke="點選熱門活動"
              className="main-title font-title text-2xl leading-tight md:text-3xl lg:text-4xl lg:leading-normal"
            >
              點選熱門活動
            </h1>
            <ArrowBigDown
              color="#472600"
              strokeWidth={2}
              fill="yellow"
              className="ml-2 mr-3 size-10 rounded-xl md:size-12"
            />
          </div>
          <div className="overflow-hidden pt-6">
            <Background />
            <EventBanner />
          </div>
        </section>
      </main>
      <Footer />
    </LoadingProvider>
  );
};

export default YoxiLayout;
