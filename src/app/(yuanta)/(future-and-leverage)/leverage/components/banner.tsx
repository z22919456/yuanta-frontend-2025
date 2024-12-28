import cloudLeft from '@/assets/banner/cloud_left.png';
import cloudRight from '@/assets/banner/cloud_right.png';
import coinLeft from '@/assets/banner/home/coin_left.png';
import coinRight from '@/assets/banner/home/coin_right.png';
import leftCoin from '@/assets/banner/left-coin.png';
import gat from '@/assets/banner/leverage/gat.png';
import moneyGodBlue from '@/assets/banner/leverage/money-god-blue.png';
import moneyGodGreen from '@/assets/banner/leverage/money-god-green.png';
import moneyGodOrange from '@/assets/banner/leverage/money-god-orange.png';
import moneyGodRed from '@/assets/banner/leverage/money-god-red.png';
import moneyGodYellow from '@/assets/banner/leverage/money-god-yellow.png';
import redEnvelope from '@/assets/banner/red-envelope.png';
import rightCoin from '@/assets/banner/right-coin.png';
import yenbauImg from '@/assets/banner/yenbau.png';
import Image from '@/lib/image';

const Banner = () => {
  return (
    <div className="relative">
      <div className="container relative z-20 w-full pt-[60%] sm:h-[24rem] sm:pt-0 md:h-[29rem] lg:h-[36rem] xl:h-[42rem]">
        <div className="absolute left-1/2 top-0 w-10/12 -translate-x-1/2 -translate-y-[12%] lg:w-[73%]">
          <Image
            placeholder="empty"
            priority
            src={gat}
            alt="大門"
            className="w-full"
          />
          <Image
            src={redEnvelope}
            alt="紅包"
            className="animate-float-deco absolute -right-20 top-[40%] hidden w-16 sm:block"
          />
          <Image
            src={yenbauImg}
            alt="元寶"
            className="animate-float-deco absolute -left-24 top-[50%] hidden w-20 animation-delay-[-2s] sm:block"
          />
        </div>
        <div className="lg:px-auto absolute -bottom-10 left-1/2 z-20 flex min-w-[100%] -translate-x-1/2 items-end px-3 lg:-bottom-16 lg:min-w-[85%]">
          <div className="grid w-full grid-cols-[repeat(2,20.75fr)_27fr_repeat(2,20.75fr)] items-end">
            <Image
              placeholder="empty"
              priority
              src={moneyGodBlue}
              alt="HKEX 財神"
              className="mx-auto origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodYellow}
              alt="EUREX 財神"
              className="mx-auto origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodRed}
              alt="CME 財神"
              className="mx-auto origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodGreen}
              alt="SGX 財神"
              className="mx-auto origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodOrange}
              alt="JPX 財神"
              className="mx-auto origin-bottom animate-swing"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            placeholder="empty"
            priority
            src={coinLeft}
            alt="moneyLeft"
            className="absolute -left-72 top-36 z-10 animate-floating"
          />
          <Image
            placeholder="empty"
            priority
            src={coinRight}
            alt="moneyRight"
            className="absolute -right-80 top-36 animate-floating [animation-delay:1.5s]"
          />
          <Image
            placeholder="empty"
            priority
            src={leftCoin}
            alt="moneyLeft"
            className="absolute -left-10 top-28 z-10 animate-floating [animation-delay:1.5s]"
          />
          <Image
            placeholder="empty"
            priority
            src={rightCoin}
            alt="moneyRight"
            className="absolute -right-20 top-24 animate-floating"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        {/* left down */}
        <Image
          placeholder="empty"
          priority
          src={cloudLeft}
          alt="cloudLeft"
          className="absolute -bottom-20 -left-2 max-w-[35vw] animate-sliding [animation-delay:0s]"
        />
        {/* left top */}
        <Image
          placeholder="empty"
          priority
          src={cloudLeft}
          alt="cloudLeft"
          className="absolute -left-48 bottom-40 max-w-[35vw] animate-sliding [animation-delay:1s]"
        />
        {/* right down */}
        <Image
          placeholder="empty"
          priority
          src={cloudRight}
          alt="cloudRight"
          className="absolute -bottom-20 -right-2 max-w-[35vw] animate-sliding [animation-delay:2s]"
        />
        {/* right top */}
        <Image
          placeholder="empty"
          priority
          src={cloudRight}
          alt="cloudRight"
          className="absolute -right-48 bottom-40 max-w-[35vw] animate-sliding [animation-delay:3s]"
        />
      </div>
    </div>
  );
};

export default Banner;
