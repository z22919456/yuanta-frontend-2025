import { products } from '@/app/(future-and-leverage)/futures/data';
import Card, { CardHeader } from './card';

type Props = {
  product: (typeof products)[0];
};

const ProductCard = ({ product }: Props) => {
  const { price, priceUnit, value, valueUnit } = product.tick;
  return (
    <Card>
      <CardHeader>
        <h2 className="font-default text-2xl font-bold leading-7">
          {product.name}
          <br />({product.code})
        </h2>
      </CardHeader>
      <div className="pt-3 text-2xl font-bold">
        <p>保證金</p>
        <p className="mb-3 text-y-secondary">
          ${product.margin.toLocaleString()}
        </p>
        <p className="-mx-3 text-xs">
          最小跳動點：{value}
          {valueUnit}={price}
          {priceUnit}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
