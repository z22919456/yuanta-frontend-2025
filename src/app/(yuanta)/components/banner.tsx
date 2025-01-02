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
import redEnvelope from '@/assets/banner/red-envelope.png';
import moneyGod1 from '@/assets/banner/seminar/money_god1.png';
import moneyGod2 from '@/assets/banner/seminar/money_god2.png';
import moneyGod3 from '@/assets/banner/seminar/money_god3.png';
import moneyGod4 from '@/assets/banner/seminar/money_god4.png';
import moneyGod5 from '@/assets/banner/seminar/money_god5.png';
import yenbauImg from '@/assets/banner/yenbau.png';
import Coin from '@/assets/coin.svg';
import Image from 'next-image-export-optimizer';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative">
      <div className="container w-full">
        <Image
          placeholder="empty"
          src={img2025}
          alt="2025"
          className="mx-auto mt-6 lg:mt-10"
        />

        {/* title block */}
        <div className="relative pt-3 lg:pt-6">
          {/* laser */}
          <div className="absolute left-1/2 top-1/2 -z-10 size-[1000px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-10 lg:size-[2000px] lg:opacity-5">
            <Image
              placeholder="empty"
              src={laser}
              alt="laser"
              className="animate- h-full w-full animate-[spin_40s_linear_infinite] object-fill"
            />
          </div>
          <div className="relative mx-auto w-fit">
            {/* firework */}
            <Image
              placeholder="empty"
              src={firework}
              alt="firework"
              className="absolute -left-10 -top-1 w-[48%] animate-spin animate-duration-[20s]"
            />
            {/* firework */}
            <Image
              placeholder="empty"
              src={firework}
              alt="firework"
              className="absolute -right-10 -top-3 w-[52%] animate-spin animate-duration-[20s]"
            />
            {/* title image */}
            <Image
              placeholder="empty"
              src={title}
              alt="元大期貨 春節不打烊"
              className="relative z-20 mx-auto w-80 sm:w-[25rem] lg:w-[30rem]"
            />
            {/* dialog */}
            <Image
              placeholder="empty"
              src={dialog}
              alt="過年台盤關盤 好想做交易"
              className="absolute -top-5 right-5 z-30 w-24 translate-x-1/2 sm:w-32 md:-right-5 md:top-0 lg:-right-10 lg:w-44"
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
        </div>

        {/* door */}
        <div className="relative grid w-full scale-110 grid-cols-2 pt-6">
          <Link href="/future" className="relative z-10">
            <Image
              placeholder="empty"
              src={leftDoor}
              alt="外期財門"
              className="z-10 animate-brightness cursor-pointer hover:brightness-125 hover:[animation:none]"
            />
          </Link>
          <Link href="/leverage" className="relative z-10">
            <Image
              placeholder="empty"
              src={rightDoor}
              alt="槓桿財門"
              className="z-10 animate-brightness cursor-pointer [animation-delay:-1500ms] hover:brightness-125 hover:[animation:none]"
            />
          </Link>
          {/* 屋簷上的財神 */}
          <Image
            placeholder="empty"
            src={moneyGod3}
            alt="橘財神"
            className="absolute right-16 hidden h-[40%] w-auto origin-bottom rotate-6 animate-swing md:-top-14 md:block lg:-top-24 lg:right-32"
          />
          <Image
            placeholder="empty"
            src={moneyGod5}
            alt="藍財神"
            className="absolute left-16 hidden h-[40%] w-auto origin-bottom -rotate-6 animate-swing animation-delay-[-2.5s] md:-top-14 md:block lg:-top-24 lg:left-32"
          />
          {/* 門邊的財神 */}
          <Image
            placeholder="empty"
            src={moneyGod2}
            alt="綠財神"
            className="absolute bottom-0 right-10 z-20 hidden h-[43%] w-auto origin-bottom animate-swing md:block"
          />
          <Image
            placeholder="empty"
            src={moneyGod4}
            alt="黃財神"
            className="absolute bottom-0 left-10 z-20 hidden h-[43%] w-auto origin-bottom animate-swing animation-delay-[-2.5s] md:block"
          />
          {/* 中間的財神 */}
          <Image
            placeholder="empty"
            src={moneyGod1}
            alt="紅財神"
            className="absolute -bottom-2 left-1/2 z-20 h-[70%] w-auto -translate-x-1/2"
          />
          <Image
            src={redEnvelope}
            alt="紅包"
            className="absolute -right-12 top-[20%] hidden w-10 animate-float-deco md:block"
          />
          <Image
            src={yenbauImg}
            alt="元寶"
            className="absolute -left-16 top-[40%] hidden w-20 animate-float-deco animation-delay-[-2s] md:block"
          />
        </div>

        {/* Desktop Only */}
        <div className="container absolute inset-0 -z-10 hidden md:block">
          <Image
            placeholder="empty"
            src={coinLeft}
            alt="moneyLeft"
            className="absolute -left-72 top-10 -z-10 animate-floating lg:-left-48 xl:-left-14"
          />
          <Image
            placeholder="empty"
            src={coinRight}
            alt="moneyRight"
            className="absolute -right-72 top-16 -z-10 animate-floating [animation-delay:1.5s] lg:-right-48 xl:right-10"
          />
        </div>
        <div className="absolute inset-0 -z-10 hidden md:block">
          {/* Cloud */}
          <Image
            placeholder="empty"
            src={cloudLeft}
            alt="cloudLeft"
            className="absolute -left-44 bottom-10 -z-10 max-w-[35vw] animate-sliding opacity-80 [animation-delay:0s]"
          />
          <Image
            placeholder="empty"
            src={cloudLeft}
            alt="cloudLeft"
            className="absolute -left-72 bottom-60 -z-10 max-w-[35vw] animate-sliding opacity-80 [animation-delay:-1s]"
          />
          <Image
            placeholder="empty"
            src={cloudRight}
            alt="cloudRight"
            className="absolute -right-40 bottom-10 -z-10 max-w-[35vw] animate-sliding opacity-80 [animation-delay:-2s]"
          />
          <Image
            placeholder="empty"
            src={cloudRight}
            alt="cloudRight"
            className="absolute -right-72 bottom-60 -z-10 max-w-[35vw] animate-sliding opacity-80 [animation-delay:-3s]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
