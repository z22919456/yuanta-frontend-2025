'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import gift1 from '@/assets/gift1.png';
import gift2 from '@/assets/gift2.png';
import gift3 from '@/assets/gift3.png';

import Image from '@/lib/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './card';

type Props = { controlClassPrefix?: string };

const GiftSwiper = ({ controlClassPrefix }: Props) => {
  const nextEl = `${controlClassPrefix}swiper-button-next`;
  const prevEl = `${controlClassPrefix}swiper-button-prev`;
  return (
    <>
      <Swiper
        modules={[Navigation]}
        className="-my-5 w-full"
        pagination={{ clickable: true }}
        loop
        navigation={{
          nextEl: `#${nextEl}`,
          prevEl: `#${prevEl}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {/* 黃金 */}
        <SwiperSlide className="py-5">
          <Card number={1} primary className="">
            <div className="h-24 w-full sm:w-1/2 md:w-full">
              <h2 className="text-2xl">指定交易</h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="送黃金牌"
              >
                送黃金牌
              </h2>
              <span className="mt-1 hidden text-base sm:inline-block lg:hidden">
                (價值13,000元)
              </span>
            </div>
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image src={gift2} alt="黃金牌" className="mx-auto max-h-48" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs sm:hidden lg:inline-block">
                (價值13,000元)
              </span>
            </div>
          </Card>
        </SwiperSlide>

        {/* 蘋果 */}
        <SwiperSlide className="py-5">
          <Card number={2}>
            <div className="h-24 w-full sm:w-1/2 md:w-full">
              <h2 className="text-2xl">封關前+活動結束</h2>
              <h2
                className="main-title-secondary text-3xl"
                data-stroke="抽蘋果好禮"
              >
                抽蘋果好禮
              </h2>
            </div>
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image
                src={gift1}
                alt="iPhone 16 Pro Max, AirPods Pro"
                className="max-h-48"
              />
            </div>
          </Card>
        </SwiperSlide>

        {/* 禮券 */}
        <SwiperSlide className="py-5">
          <Card number={3}>
            <div className="h-24 w-full sm:w-1/2 md:w-full">
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
            <div className="relative flex w-full items-center justify-center sm:w-1/2 lg:w-full">
              <Image src={gift3} alt="獎勵金200元" className="!mt-0 max-h-48" />
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
      <button
        id={prevEl}
        className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-4 border-y-bo bg-y-card-header p-1 text-white lg:hidden"
      >
        <ArrowLeft />
      </button>
      <button
        id={nextEl}
        className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-4 border-y-bo bg-y-card-header p-1 text-white lg:hidden"
      >
        <ArrowRight />
      </button>
    </>
  );
};

export default GiftSwiper;
