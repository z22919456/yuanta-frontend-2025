import gift1 from '@/assets/gift1.png';
import gift2 from '@/assets/gift2.png';
import gift3 from '@/assets/gift3.png';
import Image from 'next-image-export-optimizer';
import Background from './components/background';
import Banner from './components/banner';
import Card from './components/card';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen pb-5 pt-[64px]">
      <Background />
      <Banner />
      <section className="container relative z-10">
        <div className="grid grid-cols-1 gap-3 rounded-xl border-2 border-y-wall-bo bg-y-wall p-5 md:grid-cols-[1fr_1fr] md:border-4 lg:grid-cols-3">
          {/* 黃金 */}
          <Card
            number={1}
            primary
            className="md:col-span-2 lg:col-span-1 lg:col-start-2"
          >
            <div className="h-24 w-full sm:h-auto sm:w-1/2 lg:h-24 lg:w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
                指定交易
              </h2>
              <h2
                className="main-title-secondary text-3xl sm:text-4xl md:text-5xl lg:text-3xl"
                data-stroke="送黃金牌"
              >
                送黃金牌
              </h2>
              <span className="mt-1 hidden text-base sm:inline-block lg:hidden">
                (價值13,000元)
              </span>
            </div>
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image src={gift2} alt="黃金牌" className="mx-auto max-h-48" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs sm:hidden lg:inline-block">
                (價值13,000元)
              </span>
            </div>
          </Card>

          {/* 蘋果 */}
          <Card
            number={2}
            className="md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-1"
          >
            <div className="h-24 w-full sm:w-1/2 md:w-full">
              <h2 className="text-2xl">封關前+活動結束</h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="抽蘋果好禮"
              >
                抽蘋果好禮
              </h2>
            </div>
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image
                src={gift1}
                alt="iPhone 16 Pro Max, AirPods Pro"
                className="max-h-48"
              />
            </div>
          </Card>

          {/* 禮券 */}
          <Card
            number={3}
            className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1"
          >
            <div className="h-24 w-full sm:w-1/2 md:w-full">
              <h2 className="text-2xl leading-none">
                新開戶/靜止戶
                <br />
                交易送
              </h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="200元禮券"
              >
                200元禮券
              </h2>
            </div>
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image src={gift3} alt="獎勵金200元" className="!mt-0 max-h-48" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
