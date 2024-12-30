import { ProductGroup } from '@/app/(yuanta)/(future-and-leverage)/leverage/data';
import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import Card from '@/components/card';
import { cn } from '@/lib/utils';

type Props = {
  product: ProductGroup['products'][0];
  index?: number;
};

const ProductCard = ({ product, index = 0 }: Props) => {
  if ('code' in product) {
    return (
      <BounceRightOnScroll className="h-full items-stretch">
        <Card className="flex h-full md:block">
          <div
            className={cn(
              'flex w-[45%] shrink-0 flex-col border-y-bo bg-y-card-header text-2xl text-white md:-mx-3 md:-mt-3 md:mb-2 md:block md:w-auto md:border-b-4 md:border-r-0 md:px-3 md:py-2 md:text-center',
              '-mb-3 -ml-3 -mt-3 border-0 border-r-4 p-3 px-2 text-left'
            )}
          >
            <div>
              {product.name.length > 15 ? (
                <h2 className="mb-4 font-default text-base font-bold md:block md:text-sm md:leading-5 lg:mb-0 lg:text-lg lg:leading-8">
                  {product.name}
                  <br />
                  {!product.lastDate && (
                    <span className="text-base">({product.code})</span>
                  )}
                </h2>
              ) : (
                <h2 className="font-default text-lg font-bold leading-7 md:block md:text-2xl">
                  {product.name}
                  <br />
                  {!product.lastDate && (
                    <span className="text-base">({product.code})</span>
                  )}
                </h2>
              )}
              {/* 收盤價 */}
              {product.lastDate && product.lastPrice && (
                <div className="my-1 w-fit rounded-lg bg-white/20 px-3 leading-4 md:mx-auto">
                  <span className="text-xs sm:text-sm">
                    {product.lastDate}收盤價
                  </span>
                  <br />
                  <span className="text-sm">{product.lastPrice}</span>
                </div>
              )}
            </div>
          </div>
          <div className="pl-2 text-left text-lg font-bold md:pt-3 md:text-center md:text-2xl">
            <p>保證金</p>
            <p className="mb-3 text-y-secondary">
              ${product.margin.toLocaleString()}
            </p>
            <p className="text-xs md:-mx-3">{product.desc}</p>
          </div>
        </Card>
      </BounceRightOnScroll>
    );
  }
  return (
    <BounceRightOnScroll className="items-stretch" delay={index * 0.1}>
      <Card className="flex h-full items-stretch md:block">
        <div
          className={cn(
            'flex w-[45%] shrink-0 flex-col border-y-bo bg-y-card-header text-2xl text-white md:-mx-3 md:-mt-3 md:mb-2 md:block md:w-auto md:border-b-4 md:border-r-0 md:px-3 md:py-2 md:text-center',
            '-mb-3 -ml-3 -mt-3 border-0 border-r-4 p-3 px-2 text-left'
          )}
        >
          <div>
            <h2 className="font-default text-lg font-bold leading-7 md:block md:text-2xl">
              {product.name}
            </h2>
          </div>
        </div>
        <div className="pl-2 text-left text-lg font-bold md:pt-3 md:text-center">
          <p className="mb-3">{product.desc}</p>
        </div>
      </Card>
    </BounceRightOnScroll>
  );
};

export default ProductCard;
