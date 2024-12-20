'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../futures/data';
import ProductCard from './product-card';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = { products: typeof products; controlClassPrefix: string };

const ProductSwiper = ({ products, controlClassPrefix }: Props) => {
  const nextEl = `${controlClassPrefix}swiper-button-next`;
  const prevEl = `${controlClassPrefix}swiper-button-prev`;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        className="mt-3 w-full !pb-5"
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `#${nextEl}`,
          prevEl: `#${prevEl}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.code}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id={prevEl}
        className="absolute -left-6 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-4 border-y-bo bg-y-card-header p-1 text-white"
      >
        <ArrowLeft />
      </button>
      <button
        id={nextEl}
        className="absolute -right-6 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-4 border-y-bo bg-y-card-header p-1 text-white"
      >
        <ArrowRight />
      </button>
    </>
  );
};

export default ProductSwiper;
