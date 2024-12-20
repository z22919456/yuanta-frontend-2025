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
    <div className="relative h-[30rem]">
      <div className="container relative h-[30rem]">
        <div className="absolute -bottom-20 z-10 flex items-end px-20">
          <Image src={moneyGod1} alt="moneyGod1" className="w-3/12" />
          <div className="flex w-9/12 items-end">
            <Image src={moneyGod2} alt="moneyGod2" className="w-1/4" />
            <Image src={moneyGod3} alt="moneyGod3" className="w-1/4" />
            <Image src={moneyGod4} alt="moneyGod4" className="w-1/4" />
            <Image src={moneyGod5} alt="moneyGod5" className="w-1/4" />
          </div>
        </div>
        <Image
          src={title}
          alt="title"
          className="absolute -top-20 left-1/2 w-9/12 -translate-x-1/2"
        />
        <Image
          src={moneyLeft}
          alt="moneyLeft"
          className="absolute -left-20 top-20"
        />
        <Image
          src={moneyRight}
          alt="moneyRight"
          className="absolute -right-20 top-10"
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
        className="absolute -left-48 bottom-32 max-w-[35vw]"
      />
      <Image
        src={cloudRight}
        alt="cloudRight"
        className="absolute -bottom-20 right-0 max-w-[35vw]"
      />
      <Image
        src={cloudRight}
        alt="cloudRight"
        className="absolute -right-48 bottom-32 max-w-[35vw]"
      />
    </div>
  );
};

export default Banner;
