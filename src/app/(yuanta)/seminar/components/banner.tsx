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
import Image from '@/lib/image';
const Banner = () => {
  return (
    <div className="relative">
      <div className="container relative w-full pt-[72%] sm:h-[29rem] sm:pt-0 md:h-[33rem] lg:h-[38rem] xl:h-[45rem]">
        <div className="absolute left-1/2 top-0 w-full -translate-x-[48%] -translate-y-[18%] lg:w-11/12">
          <Image
            placeholder="empty"
            priority
            src={title}
            alt="title"
            className="w-full"
          />
          <button className="sm:xl absolute left-[53%] top-[58.4%] z-50 flex h-[9.2%] w-[23%] animate-pulse items-center justify-center rounded-full border-2 border-y-tab-active-bo text-center font-bold text-white shadow-xl hover:border-y-tab-t hover:!bg-y-tab-bg hover:text-y-tab-t md:border-4 md:text-3xl lg:text-4xl">
            <a href="#form_top">免費報名</a>
          </button>
        </div>
        <div className="absolute -bottom-1 flex items-end px-3 lg:-bottom-16 lg:z-20 lg:px-20">
          <div className="grid grid-cols-[repeat(2,20.75fr)_27fr_repeat(2,20.75fr)] items-end md:grid-cols-[27fr_repeat(4,20.75fr)]">
            <Image
              placeholder="empty"
              priority
              src={moneyGod1}
              alt="moneyGod1"
              className="order-3 origin-bottom animate-swing md:order-1"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGod2}
              alt="moneyGod2"
              className="order-1 origin-bottom animate-swing md:order-2"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGod3}
              alt="moneyGod3"
              className="order-2 origin-bottom animate-swing md:order-3"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGod4}
              alt="moneyGod4"
              className="order-4 origin-bottom animate-swing"
            />
            <Image
              placeholder="empty"
              priority
              src={moneyGod5}
              alt="moneyGod5"
              className="order-5 origin-bottom animate-swing"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            placeholder="empty"
            priority
            src={moneyLeft}
            alt="moneyLeft"
            className="absolute -left-44 top-28 z-10 animate-floating"
          />
          <Image
            placeholder="empty"
            priority
            src={moneyRight}
            alt="moneyRight"
            className="absolute -right-24 top-20 z-10 animate-floating [animation-delay:1.5s]"
          />
        </div>
      </div>
      <div className="hidden md:block">
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
