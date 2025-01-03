import airPodsImg from '@/app/(yuanta)/(future-and-leverage)/assets/airpods.png';
import envelopeImg from '@/app/(yuanta)/(future-and-leverage)/assets/envelope.png';
import iphoneImg from '@/app/(yuanta)/(future-and-leverage)/assets/iphone.png';
import LightBulbImg from '@/app/(yuanta)/(future-and-leverage)/assets/light.png';
import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import Card from '@/components/card';
import { WallContent } from '@/components/wall';
import Image from '@/lib/image';

type Props = {
  type: 'futures' | 'leverage';
};

const data = {
  futures: {
    word: '口',
    point: '交易10口',
    airPods: 2,
    iphone: 5,
    redEnvelope: '交易1筆',
  },
  leverage: {
    word: '點',
    point: '交易1點',
    airPods: 2,
    iphone: 3,
    redEnvelope: '交易2點',
  },
};

const FiveApple = ({ type }: Props) => {
  return (
    <WallContent className="space-y-4">
      <p>
        活動期間，
        <strong className="text-xl text-y-secondary">{data[type].point}</strong>
        獲一次抽獎機會，抽獎機會無上限！
      </p>
      <div className="mx-auto mt-5 flex max-w-md rounded-lg bg-[#FFE0E0] p-3">
        <div className="hidden w-20 items-center justify-center sm:flex">
          <Image
            src={LightBulbImg}
            alt="light"
            className="object-contain"
          ></Image>
        </div>
        <p className="ml-3 text-left md:text-xl">
          <small>
            *抽獎次數，依照整個活動期間計算！
            <br />
            *第一次中獎者，{data[type].word}數將重新計算！
          </small>
        </p>
      </div>
      <p className="mt-3 text-base leading-4"></p>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
        {/* AirPods */}
        <BounceRightOnScroll className="col-span-2">
          <Card className="relative h-full overflow-visible p-3">
            <p className="absolute left-full top-1/2 z-10 hidden -translate-y-1/2 text-3xl text-y-bo md:-ml-1 md:block md:text-4xl">
              ▶︎
            </p>
            <p className="absolute left-1/2 top-full z-10 -mt-2 -translate-x-1/2 text-4xl text-y-bo md:hidden">
              ▼
            </p>
            <h2 className="mb-2 text-2xl leading-tight md:text-3xl">
              第一次抽獎
              <br className="hidden md:block" />
              【封關前】
            </h2>
            <p className="text-base">
              先抽{' '}
              <strong className="text-2xl font-black text-y-secondary">
                {data[type].airPods}
              </strong>{' '}
              名
            </p>
            <div className="-mb-2 grid grid-cols-2 items-center md:mb-0 md:block">
              <Image
                src={airPodsImg}
                className="mx-auto my-1 w-[80%] max-w-32 md:my-2"
                alt="AirPods Pro 2"
              />
              <div>
                <h3 className="text-xl leading-tight md:text-2xl">
                  AirPods <br /> Pro2
                </h3>
                <p className="text-sm">(價值7,490元)</p>
              </div>
            </div>
          </Card>
        </BounceRightOnScroll>

        {/* Iphone */}
        <BounceRightOnScroll className="col-span-2" delay={0.4}>
          <Card className="col-span-2 h-full p-3">
            <h2 className="mb-2 text-2xl leading-tight md:text-3xl">
              第二次抽獎
              <br className="hidden md:block" />
              【活動結束】
            </h2>
            <p className="text-base">
              後抽{' '}
              <strong className="text-2xl font-black text-y-secondary">
                {data[type].iphone}
              </strong>{' '}
              名
            </p>
            <div className="-mb-2 grid grid-cols-2 items-center md:mb-0 md:block">
              <Image
                src={iphoneImg}
                className="mx-auto my-1 w-[80%] max-w-32 md:my-2"
                alt="Iphone 16 Pro Max 256G"
              />
              <div>
                <h3 className="text-xl leading-tight md:text-2xl">
                  iPhone 16 <br className="block md:hidden" /> Pro{' '}
                  <br className="hidden md:block" />
                  Max <br className="block md:hidden" />
                  256G
                </h3>
                <p className="text-sm">(價值44,900元)</p>
              </div>
            </div>
          </Card>
        </BounceRightOnScroll>
        {/* em */}
        <BounceRightOnScroll className="col-span-2 md:col-span-4" delay={0.6}>
          <Card className="h-full border-y-tab-active-bo">
            <h1
              className="main-title-secondary my-2 mb-6 text-5xl"
              data-stroke="新春送紅包"
            >
              新春送紅包
            </h1>
            <p className="mb-3">
              活動期間，新戶/靜止戶
              <strong className="text-y-secondary">
                {data[type].redEnvelope}
              </strong>{' '}
              可獲
              <strong className="text-y-secondary">200元獎勵金</strong>！
            </p>
            <Image
              src={envelopeImg}
              alt="200元獎勵金"
              className="mx-auto mt-5 animate-bounce animate-infinite"
            />
          </Card>
        </BounceRightOnScroll>
      </div>
    </WallContent>
  );
};

export default FiveApple;
