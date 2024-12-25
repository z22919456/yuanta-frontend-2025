import gift1 from '@/assets/gift1.png';
import gift2 from '@/assets/gift2.png';
import gift3 from '@/assets/gift3.png';
import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import { cn } from '@/lib/utils';
import Image from 'next-image-export-optimizer';
import Background from './components/background';
import Banner from './components/banner';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen pb-5 pt-[64px]">
      <Background />
      <Banner />
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
  <BounceOnScroll delay={number / 10} className={cn('mx-auto', className)}>
    <div
      className={cn(
        'relative box-border flex aspect-square max-w-72 flex-col items-center justify-center space-y-3 rounded-lg border-4 border-y-bo bg-[#FFEEDC] p-2 text-center',
        primary && 'border-6 border-y-tab-active-bo'
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
