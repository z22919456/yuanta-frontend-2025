import { Product } from '@/app/(yuanta)/(future-and-leverage)/leverage/data';
import Card from '@/components/card';
import { cn } from '@/lib/utils';

type Props = {
  product: Product['products'][0];
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="flex items-stretch md:block">
      <div
        className={cn(
          'flex w-[45%] shrink-0 flex-col border-y-bo bg-y-card-header text-2xl text-white md:-mx-3 md:-mt-3 md:mb-2 md:block md:w-auto md:border-b-4 md:border-r-0 md:px-3 md:py-2 md:text-center',
          '-mb-3 -ml-3 -mt-3 border-0 border-r-4 p-3 px-2 text-left'
        )}
      >
        <div>
          {product.name.length > 15 ? (
            <h2 className="font-default text-lg font-bold md:block md:text-lg md:leading-5 lg:leading-8">
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
              <span className="text-sm">{product.lastDate}收盤價</span>
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
  );
};

export default ProductCard;
