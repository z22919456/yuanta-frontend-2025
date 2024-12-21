import cloudLeft from '@/assets/banner/cloud_left.png';
import cloudRight from '@/assets/banner/cloud_right.png';
import moneyGod1 from '@/assets/banner/seminar/money_god1.png';
import moneyGod2 from '@/assets/banner/seminar/money_god2.png';
import moneyGod3 from '@/assets/banner/seminar/money_god3.png';
import moneyGod4 from '@/assets/banner/seminar/money_god4.png';
import moneyGod5 from '@/assets/banner/seminar/money_god5.png';
import moneyLeft from '@/assets/banner/seminar/money_left.png';
import moneyRight from '@/assets/banner/seminar/money_right.png';
import title from '@/assets/banner/seminar/title.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative">
      <div className="container relative w-full pt-[65%] sm:pt-[70%] lg:h-[38rem] lg:pt-0">
        <Image
          src={title}
          alt="title"
          className="absolute -top-12 left-1/2 w-full -translate-x-[48%] lg:-top-16 lg:w-11/12"
        />
        <div className="absolute -bottom-1 flex items-end px-3 lg:-bottom-16 lg:z-20 lg:px-20">
          <div className="grid grid-cols-[repeat(2,20.75fr)_27fr_repeat(2,20.75fr)] items-end md:grid-cols-[27fr_repeat(4,20.75fr)]">
            <Image
              src={moneyGod1}
              alt="moneyGod1"
              className="order-3 md:order-1"
            />
            <Image
              src={moneyGod2}
              alt="moneyGod2"
              className="order-1 md:order-2"
            />
            <Image
              src={moneyGod3}
              alt="moneyGod3"
              className="order-2 md:order-3"
            />
            <Image src={moneyGod4} alt="moneyGod4" className="order-4" />
            <Image src={moneyGod5} alt="moneyGod5" className="order-5" />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={moneyLeft}
            alt="moneyLeft"
            className="absolute -left-44 top-28 z-10"
          />
          <Image
            src={moneyRight}
            alt="moneyRight"
            className="absolute -right-24 top-20"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={cloudLeft}
          alt="cloudLeft"
          className="absolute -bottom-20 left-0 max-w-[35vw]"
        />
        <Image
          src={cloudLeft}
          alt="cloudLeft"
          className="absolute -left-48 bottom-40 max-w-[35vw]"
        />
        <Image
          src={cloudRight}
          alt="cloudRight"
          className="absolute -bottom-20 right-0 max-w-[35vw]"
        />
        <Image
          src={cloudRight}
          alt="cloudRight"
          className="absolute -right-48 bottom-40 max-w-[35vw]"
        />
      </div>
    </div>
  );
};

export default Banner;
