import Image from '@/lib/image';
import cityImg from '../assets/city-bg.png';
import Customer from '../assets/customer.svg';
import Hand from '../assets/hand.svg';
import Taxi from '../assets/taxi.svg';
import Title from '../assets/title.svg';

const Banner = () => {
  return (
    <section className="container relative z-10 aspect-[1.5] md:aspect-[2]">
      <Image
        src={cityImg}
        alt="city"
        placeholder="empty"
        className="absolute -bottom-1 left-1/2 -translate-x-1/2"
      />
      <div className="absolute right-1/2 top-1 w-[90%] max-w-96 !translate-x-1/2 delay-700 sm:top-5 md:right-[34%] md:top-10 md:max-w-[26rem] lg:max-w-[34rem]">
        <Title className="animate-bounce-in" alt="開戶成功 送400元搭車金" />
        {/* <Image
          placeholder="empty"
          src={titleImg}
          alt="title"
          className="animate-bounce-in"
        /> */}
      </div>
      <Taxi className="absolute -right-5 bottom-0 w-[90%] animate-car md:w-[75%]" />
      {/* <Image
        placeholder="empty"
        src={taxiImg}
        alt="taxi"
        className="absolute -right-5 bottom-0 w-[90%] animate-car md:w-[75%]"
      /> */}
      <div className="absolute bottom-0 w-[43%] md:w-[36%]">
        <Customer
          className="relative z-20 -mb-2 w-full origin-bottom lg:-mb-4"
          alt="customer"
        />
        {/* <Image
          placeholder="empty"
          src={customerImg}
          alt="customer"
          className="relative z-20 -mb-2 origin-bottom lg:-mb-4"
        /> */}
        <Hand
          className="animate-hand absolute bottom-[29.5%] left-[40%] w-[53%] origin-left animate-swing xl:bottom-[31%] xl:left-[36%] xl:w-[43%]"
          alt="hand"
        />
        {/* <Image
          placeholder="empty"
          src={handImg}
          alt="hand"
          className="animate-hand absolute bottom-[29.5%] left-[40%] w-[53%] origin-left animate-swing xl:bottom-[31%] xl:left-[36%] xl:w-[43%]"
        /> */}
      </div>
    </section>
  );
};

export default Banner;
