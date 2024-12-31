import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { products } from '../data';
import MobileProductSwiper from './mobile-product-slider';
import ProductCard from './product-card';

const ProductsSlider = async () => {
  return (
    <Tabs defaultValue={products[0].code} className="w-full">
      <ScrollArea className="-mx-3 md:mx-0">
        <div className="w-[720px] md:w-auto">
          <BounceRightOnScroll>
            <TabsList className="mb-4 grid w-full grid-cols-5 px-3 md:px-0">
              {products.map((product) => (
                <TabsTrigger key={product.code} value={product.code}>
                  {product.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </BounceRightOnScroll>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {products.map((tab) => (
        <TabsContent key={tab.code} value={tab.code} className="">
          <div
            className={cn(
              'mx-auto hidden flex-wrap items-stretch justify-center gap-3 md:flex md:[&_>div]:basis-[calc(33.33%-12px)]',
              tab.products.length <= 4 &&
                'max-w-3xl lg:max-w-none md:[&_>div]:basis-[calc(50%-12px)] lg:[&_>div]:basis-[calc(25%-12px)]',
              tab.products.length > 4 &&
                tab.products.length < 6 &&
                'md:[&_>div]:basis-[calc(33.33%-12px)] lg:[&_>div]:basis-[calc(25%-12px)]',
              tab.products.length == 6 &&
                'max-w-4xl md:[&_>div]:basis-[calc(33.33%-12px)] lg:[&_>div]:basis-[calc(33.33%-12px)]',
              tab.products.length > 6 &&
                'md:[&_>div]:basis-[calc(33.33%-12px)] lg:[&_>div]:basis-[calc(25%-12px)]'
            )}
          >
            {tab.products.map((product, i) => (
              <ProductCard
                product={product}
                index={i}
                key={'code' in product ? product.code : product.name}
              />
            ))}
          </div>
          <div className="-mx-3 block md:hidden">
            <MobileProductSwiper
              products={tab.products}
              controlClassPrefix={tab.code}
            />
          </div>
          {tab.desc && (
            <p className="mt-3 text-left text-sm text-y-secondary">
              {tab.desc}
            </p>
          )}
        </TabsContent>
      ))}
      <p className="mt-3 text-left text-xs text-slate-500">
        以113/12/27盤後作為參考價
        <br />
        更詳細資訊請以元大期貨槓桿交易商官網發布的資訊為準
      </p>
    </Tabs>
  );
};

export default ProductsSlider;
