import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { products } from '../data';
import MobileProductSwiper from './mobile-product-slider';
import ProductCard from './product-card';

const ProductsSlider = () => {
  return (
    <Tabs defaultValue="CFD" className="w-full">
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
              'mx-auto hidden flex-wrap items-center justify-center md:flex md:[&_>div]:w-1/3',
              tab.products.length == 6
                ? 'max-w-4xl [&_>div]:w-1/3'
                : 'lg:[&_>div]:w-1/4'
            )}
          >
            {tab.products.map((product) => (
              <div key={product.code} className="p-2">
                <ProductCard product={product} />
              </div>
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
