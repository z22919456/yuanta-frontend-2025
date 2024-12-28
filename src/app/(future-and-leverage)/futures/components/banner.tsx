import cloudLeft from '@/assets/banner/cloud_left.png';
import cloudRight from '@/assets/banner/cloud_right.png';
import gat from '@/assets/banner/futures/gat.png';
import coinLeft from '@/assets/banner/home/coin_left.png';
import coinRight from '@/assets/banner/home/coin_right.png';
import leftCoin from '@/assets/banner/left-coin.png';
import moneyGodBlue from '@/assets/banner/money-god-blue.png';
import moneyGodGreen from '@/assets/banner/money-god-green.png';
import moneyGodOrange from '@/assets/banner/money-god-orange.png';
import moneyGodRed from '@/assets/banner/money-god-red.png';
import moneyGodYellow from '@/assets/banner/money-god-yellow.png';
import rightCoin from '@/assets/banner/right-coin.png';
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
        </div>
        <div className="absolute -bottom-10 z-20 flex items-end px-3 lg:-bottom-16 lg:px-20">
          <div className="grid grid-cols-[repeat(2,20.75fr)_27fr_repeat(2,20.75fr)] items-end">
            <Image
              placeholder="empty"
              priority
              src={moneyGodBlue}
              alt="HKEX 財神"
              className="origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodYellow}
              alt="EUREX 財神"
              className="origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodRed}
              alt="CME 財神"
              className="origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodGreen}
              alt="SGX 財神"
              className="origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGodOrange}
              alt="JPX 財神"
              className="origin-bottom animate-swing"
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
