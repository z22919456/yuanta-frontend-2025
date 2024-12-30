'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Group, Product, ProductGroup } from '../data';
import ProductCard from './product-card';

type Props = { products: ProductGroup['products']; controlClassPrefix: string };

const MobileProductSwiper = ({ products, controlClassPrefix }: Props) => {
  const nextEl = `${controlClassPrefix}swiper-button-next`;
  const prevEl = `${controlClassPrefix}swiper-button-prev`;
  // 四個一組
  const productsGroup = products.reduce<Array<(Product | Group)[]>>(
    (acc, product, i) => {
      const groupIndex = Math.floor(i / 4);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(product);
      return acc;
    },
    []
  );
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        className="mt-3 w-full max-w-sm !pb-5"
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: `#${nextEl}`,
          prevEl: `#${prevEl}`,
        }}
      >
        {productsGroup.map((products, i) => (
          <SwiperSlide key={i} className="space-y-3">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={'code' in product ? product.code : product.name}
              />
            ))}
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

export default MobileProductSwiper;
