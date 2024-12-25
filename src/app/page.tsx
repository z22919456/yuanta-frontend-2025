import cloudLeft from '@/assets/banner/cloud_left.png';
import cloudRight from '@/assets/banner/cloud_right.png';
import img2025 from '@/assets/banner/home/2025.png';
import coinLeft from '@/assets/banner/home/coin_left.png';
import coinRight from '@/assets/banner/home/coin_right.png';
import dialog from '@/assets/banner/home/dialog.png';
import firework from '@/assets/banner/home/firework.png';
import laser from '@/assets/banner/home/laser.png';
import leftDoor from '@/assets/banner/home/left_door.png';
import rightDoor from '@/assets/banner/home/right_door.png';
import title from '@/assets/banner/home/title.png';
import moneyGod1 from '@/assets/banner/seminar/money_god1.png';
import moneyGod2 from '@/assets/banner/seminar/money_god2.png';
import moneyGod3 from '@/assets/banner/seminar/money_god3.png';
import moneyGod4 from '@/assets/banner/seminar/money_god4.png';
import moneyGod5 from '@/assets/banner/seminar/money_god5.png';
import Coin from '@/assets/coin.svg';
import gift1 from '@/assets/gift1.png';
import gift2 from '@/assets/gift2.png';
import gift3 from '@/assets/gift3.png';
import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import { cn } from '@/lib/utils';
import Image from 'next-image-export-optimizer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen pb-5 pt-[64px]">
      {/* bg */}
      <div className="absolute left-0 top-0 -z-10 h-full w-1/2 bg-gradient-home-red"></div>
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-home-blue"></div>
      {/* banner */}
      <div className="relative">
        <div className="container w-full">
          <Image src={img2025} alt="2025" className="mx-auto mt-6 lg:mt-10" />

          {/* title block */}
          <div className="relative pt-3 lg:pt-6">
            {/* laser */}
            <div className="absolute left-1/2 top-1/2 -z-10 size-[1000px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-10 lg:size-[2000px] lg:opacity-5">
              <Image
                src={laser}
                alt="laser"
                className="animate-spin h-full w-full object-fill [animation-duration:20000ms]"
              />
            </div>
            <div className="relative mx-auto w-fit">
              {/* firework */}
              <Image
                src={firework}
                alt="firework"
                className="absolute -left-10 -top-1 w-[48%]"
              />
              {/* firework */}
              <Image
                src={firework}
                alt="firework"
                className="absolute -right-10 -top-3 w-[52%]"
              />
              {/* title image */}
              <Image
                src={title}
                alt="元大期貨 春節不打烊"
                className="relative z-20 mx-auto w-64 lg:w-[30rem]"
              />
            </div>
            {/* 選擇財門 文字 */}
            <div className="relative z-20 mx-auto w-72 -translate-y-2 border-4 border-y-bo bg-gradient-band pt-1 text-center md:w-[30rem] lg:-translate-y-4">
              <div className="flex items-center justify-between">
                <Coin className="ml-3 mr-2 w-5 md:ml-5 md:mr-2" />
                <h1
                  className="main-title mb-1 font-title text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl lg:leading-normal"
                  data-stroke="請選擇你想要的財門"
                >
                  請選擇你想要的財門
                </h1>
                <Coin className="ml-2 mr-3 w-5 md:mr-5" />
              </div>
              <div className="border-t-4 border-y-bo bg-y-bg pt-1"></div>
            </div>
            <Image
              src={dialog}
              alt="過年台盤關盤 好想做交易"
              className="absolute right-0 top-0 w-24 lg:right-[17%] lg:w-44"
            />
          </div>

          {/* door */}
          <div className="relative grid w-full scale-110 grid-cols-2 pt-6">
            <Image src={leftDoor} alt="外期財門" className="z-10" />
            <Image src={rightDoor} alt="槓桿財門" className="z-10" />
            {/* 屋簷上的財神 */}
            <Image
              src={moneyGod3}
              alt="橘財神"
              className="absolute -top-24 right-32 hidden h-[40%] w-auto rotate-6 md:block"
            />
            <Image
              src={moneyGod5}
              alt="藍財神"
              className="absolute -top-24 left-32 hidden h-[40%] w-auto -rotate-6 md:block"
            />
            {/* 門邊的財神 */}
            <Image
              src={moneyGod2}
              alt="綠財神"
              className="absolute bottom-0 right-10 z-20 hidden h-[43%] w-auto md:block"
            />
            <Image
              src={moneyGod4}
              alt="黃財神"
              className="absolute bottom-0 left-10 z-20 hidden h-[43%] w-auto md:block"
            />
            {/* 中間的財神 */}
            <Image
              src={moneyGod1}
              alt="紅財神"
              className="absolute -bottom-2 left-1/2 z-20 h-[65%] w-auto -translate-x-1/2"
            />
          </div>

          {/* Desktop Only */}
          <div className="hidden lg:block">
            <Image
              src={coinLeft}
              alt="moneyLeft"
              className="absolute left-24 top-10 z-10"
            />
            <Image
              src={coinRight}
              alt="moneyRight"
              className="absolute right-24 top-16"
            />
            {/* Cloud */}
            <Image
              src={cloudLeft}
              alt="cloudLeft"
              className="absolute -left-40 bottom-10 -z-10 max-w-[35vw] opacity-80"
            />
            <Image
              src={cloudLeft}
              alt="cloudLeft"
              className="absolute -left-72 bottom-60 -z-10 max-w-[35vw] opacity-80"
            />
            <Image
              src={cloudRight}
              alt="cloudRight"
              className="absolute -right-40 bottom-10 -z-10 max-w-[35vw] opacity-80"
            />
            <Image
              src={cloudRight}
              alt="cloudRight"
              className="absolute -right-72 bottom-60 -z-10 max-w-[35vw] opacity-80"
            />
          </div>
        </div>
      </div>
      <section className="container relative z-10">
        <div className="grid grid-cols-1 gap-3 rounded-xl border-2 border-y-wall-bo bg-y-wall p-5 md:grid-cols-3 md:border-4">
          <Card number={2} className="order-1 lg:order-2">
            <div>
              <h2 className="text-2xl">封關前+活動結束</h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="抽蘋果好禮"
              >
                抽蘋果好禮
              </h2>
            </div>
            <Image
              src={gift1}
              alt="iPhone 16 Pro Max, AirPods Pro"
              className="w-4/5"
            />
          </Card>
          <Card number={1} primary className="order-2 lg:order-1">
            <div>
              <h2 className="text-2xl">指定交易</h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="送黃金牌"
              >
                送黃金牌
              </h2>
            </div>
            <div className="relative w-full">
              <Image src={gift2} alt="黃金牌" className="w-4/5" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs">
                (價值13,000元)
              </span>
            </div>
          </Card>
          <Card number={3} className="order-3">
            <div>
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
            <Image src={gift3} alt="獎勵金200元" className="!mt-0 w-4/5" />
          </Card>
        </div>
      </section>
    </main>
  );
}

type CardProps = {
  children: React.ReactNode;
  primary?: boolean;
  number: number;
  className?: string;
};

const Card = ({ children, primary = false, number, className }: CardProps) => (
  <BounceOnScroll delay={number / 10} className="mx-0 sm:mx-auto md:mx-0">
    <div
      className={cn(
        'relative box-border flex aspect-square max-w-72 flex-col items-center justify-center space-y-3 rounded-lg border-4 border-y-bo bg-[#FFEEDC] p-2 text-center',
        primary && 'border-6 border-y-tab-active-bo',
        className
      )}
    >
      <div
        className={cn(
          'absolute -left-1 -top-1 z-10 flex size-[4.5rem] items-center justify-center rounded-tl-lg bg-gradient-triangle',
          primary && '-left-2 -top-2'
        )}
      >
        <h1
          className={cn(
            'shadow-number mb-3 mr-3',
            primary && '!text-5xl !text-y-t-light'
          )}
          data-stroke={number}
        >
          {number}
        </h1>
      </div>
      {children}
    </div>
  </BounceOnScroll>
);
