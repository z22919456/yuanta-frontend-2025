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
      <div className="container relative h-[38rem]">
        <div className="absolute -bottom-16 z-20 flex items-end px-20">
          <Image src={moneyGod1} alt="moneyGod1" className="w-[27%]" />
          <div className="flex items-end">
            <Image src={moneyGod2} alt="moneyGod2" className="w-1/4" />
            <Image src={moneyGod3} alt="moneyGod3" className="w-1/4" />
            <Image src={moneyGod4} alt="moneyGod4" className="w-1/4" />
            <Image src={moneyGod5} alt="moneyGod5" className="w-1/4" />
          </div>
        </div>
        <Image
          src={title}
          alt="title"
          className="absolute -top-16 left-1/2 w-11/12 -translate-x-1/2"
        />
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
  );
};

export default Banner;
