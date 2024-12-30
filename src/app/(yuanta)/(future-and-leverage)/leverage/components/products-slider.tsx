import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { products } from '../data';
import MobileProductSwiper from './mobile-product-slider';
import ProductCard from './product-card';

const ProductsSlider = async () => {
  return (
    <Tabs defaultValue={products[0].code} className="w-full">
      <ScrollArea>
        <div className="w-[720px] md:w-auto">
          <TabsList className="mb-4 grid w-full grid-cols-5">
            {products.map((product) => (
              <TabsTrigger key={product.code} value={product.code}>
                {product.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {products.map((tab) => (
        <TabsContent key={tab.code} value={tab.code} className="">
          <div
            className={cn(
              'mx-auto hidden flex-wrap items-stretch justify-center gap-3 md:flex md:[&_>div]:basis-[calc(33.33%-12px)]',
              tab.products.length > 4
                ? 'md:[&_>div]:basis-[calc(33.33%-12px)] lg:[&_>div]:basis-[calc(25%-12px)]'
                : 'max-w-3xl lg:max-w-none md:[&_>div]:basis-[calc(50%-12px)] lg:[&_>div]:basis-[calc(25%-12px)]'
              // tab.products.length == 6
              //   ? 'max-w-4xl [&_>div]:basis-[calc(33.33%-12px)]'
              //   : 'lg:[&_>div]:basis-[calc(25%-12px)]'
            )}
          >
            {tab.products.map((product) => (
              <ProductCard
                product={product}
                key={'code' in product ? product.code : product.name}
              />
            ))}
          </div>
          <div className="block md:hidden">
            <MobileProductSwiper
              products={tab.products}
              controlClassPrefix={tab.code}
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProductsSlider;
