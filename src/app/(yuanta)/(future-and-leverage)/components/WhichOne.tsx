import LightBulbImg from '@/app/(yuanta)/(future-and-leverage)/assets/light.png';
import WhichOneImg from '@/app/(yuanta)/(future-and-leverage)/assets/which_one.png';
import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/lib/image';
import ListWithBlock from './listWithBlock';

const WhichOne = () => {
  return (
    <div>
      <div className="block lg:flex lg:space-x-5">
        {/* image */}
        <BounceOnScroll className="relative w-full lg:w-1/3">
          <Image
            src={WhichOneImg}
            alt="Which one to choose"
            className="mx-auto mb-5 object-contain object-center p-5"
          />
        </BounceOnScroll>

        {/* tabs */}
        <Tabs
          defaultValue="futures_trade"
          className="relative z-20 w-full grow lg:w-2/3"
        >
          {/* tabsTrigger */}
          <BounceOnScroll className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="h-16 w-full" value="futures_trade">
                期貨適合
              </TabsTrigger>
              <TabsTrigger className="h-16 w-full" value="options_trade">
                選擇權適合
              </TabsTrigger>
            </TabsList>
          </BounceOnScroll>

          {/* Content 1 */}
          <TabsContent className="mt-5 rounded-2xl" value="futures_trade">
            <div className="m-0 rounded-2xl bg-white/80 p-3">
              <div className="space-y-5 rounded-md border border-y-tab-active-bg p-3 md:p-6">
                <ListWithBlock
                  className="block grid-cols-2 gap-x-12 gap-y-4 md:grid md:space-y-0"
                  list={[
                    '風險承受能力高',
                    '希望利用槓桿',
                    '對市場有較深了解',
                    '目標是短期投機',
                  ]}
                />
                <p className="text-left text-xl font-bold text-[#EE7F00] md:text-2xl">
                  如果喜歡更高的風險回報並對市場變化有敏銳的洞察力，期貨可能更適合你。
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Content 2 */}
          <TabsContent className="mt-5 rounded-2xl" value="options_trade">
            <div className="m-0 rounded-2xl bg-white/80 p-3">
              <div className="space-y-5 rounded-md border border-y-tab-active-bg p-3 md:p-6">
                <ListWithBlock
                  list={[
                    '風險承受能力中等或較低',
                    '尋求靈活性',
                    '對市場預期有不確定性',
                    '目標是保護或增加收益',
                  ]}
                />
                <p className="text-left text-xl font-bold text-[#EE7F00] md:text-2xl">
                  如果傾向於控制風險、保持靈活性，並且希望有更大的策略選擇空間，選擇權可能是更好的選擇。
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* note */}
      <div className="relative mt-5 rounded-md bg-[#FFE0E0] p-5">
        <div className="absolute -left-3 bottom-5 hidden h-24 md:block">
          <Image
            src={LightBulbImg}
            alt="light"
            className="h-full object-contain"
          ></Image>
        </div>
        <p className="text-left text-xl font-semibold text-y-secondary md:pl-40 md:text-2xl">
          可以考慮從較小的資金投入開始，先試探不同投資工具的運作方式再決定是否要加大投入。
        </p>
      </div>
    </div>
  );
};

export default WhichOne;
