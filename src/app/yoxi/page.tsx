import FadeInOnScroll from '@/components/animation-container/fade-in-on-scroll';
import Image from '@/lib/image';
import Background from '../(yuanta)/components/background';
import EventBanner from '../(yuanta)/components/banner';
import logo from './assets/yoxi_yuanta.png';
import Banner from './components/banner';
import Navbar from './components/navbar';
import YoxiForm from './yoxi-form';

const Page = () => {
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
              {/* 紅匡 */}
              <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2">
                {/* 200 */}
                <FadeInOnScroll>
                  <div className="rounded-lg border-4 border-taxi-red p-5">
                    <h1 className="text-2xl">開戶成功</h1>
                    <h1
                      className="main-title-secondary text-3xl text-taxi-red [--stroke-color:#fff] [--stroke-shadow-color:#E6001D]"
                      data-stroke="送200元搭車金"
                    >
                      送200元搭車金
                    </h1>
                  </div>
                </FadeInOnScroll>
                {/* 200 */}
                <FadeInOnScroll delay={0.3}>
                  <div className="rounded-lg border-4 border-taxi-red p-5">
                    <h1 className="text-2xl">
                      差價契約
                      <br className="md:hidden" />
                      CFD開戶成功
                    </h1>
                    <h1
                      className="main-title-secondary text-3xl text-taxi-red [--stroke-color:#fff] [--stroke-shadow-color:#E6001D]"
                      data-stroke="送200元搭車金"
                    >
                      送200元搭車金
                    </h1>
                  </div>
                </FadeInOnScroll>
              </div>
              {/* 藍背景 */}
              <FadeInOnScroll delay={0.6}>
                <div className="rounded-lg bg-[#EFF2FF] p-5">
                  <ul className="space-y-3 pl-6">
                    <li className="before:absolute before:-ml-6 before:mr-2 before:text-lg before:text-red-500 before:content-['●']">
                      請留下資料，後續由您所選擇地區專人聯繫協助(線上或線下)開戶，如開戶成功，可獲得搭車金！
                    </li>
                    <li className="before:absolute before:-ml-6 before:mr-2 before:text-lg before:text-red-500 before:content-['●']">
                      開戶成功，1個月內將發送搭車序號至您簡訊，請留意訊息！
                    </li>
                  </ul>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.6}>
                <YoxiForm />
              </FadeInOnScroll>
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

export default Page;
