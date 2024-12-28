import { products } from '@/app/(yuanta)/(future-and-leverage)/futures/data';
import Card from '@/components/card';
import { cn } from '@/lib/utils';

type Props = {
  product: (typeof products)[0];
};

const ProductCard = ({ product }: Props) => {
  const { price, priceUnit, value, valueUnit } = product.tick;
  return (
    <Card className="flex items-stretch md:block">
      <div
        className={cn(
          'flex w-24 shrink-0 border-y-bo bg-y-card-header text-2xl text-white md:-mx-3 md:-mt-3 md:mb-2 md:block md:w-auto md:border-b-4 md:border-r-0 md:px-3 md:py-2 md:text-center',
          '-mb-3 -ml-3 -mt-3 border-0 border-r-4 p-3 px-2 text-left'
        )}
      >
        <h2 className="font-default text-lg font-bold leading-7 md:block md:text-2xl">
          {product.name}
          <br />({product.code})
        </h2>
      </div>
      <div className="pl-2 text-left text-lg font-bold md:pt-3 md:text-center md:text-2xl">
        <p>保證金</p>
        <p className="mb-3 text-y-secondary">
          ${product.margin.toLocaleString()}
        </p>
        <p className="text-xs md:-mx-3">
          最小跳動點：{value}
          {valueUnit}={price}
          {priceUnit}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
