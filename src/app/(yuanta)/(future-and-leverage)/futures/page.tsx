import stage7 from '@/app/(yuanta)/(future-and-leverage)/assets/stage7.png';
import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import Card, { CardHeader } from '@/components/card';
import StarBackground from '@/components/start-background';
import { Button } from '@/components/ui/button';
import Wall, { WallContent } from '@/components/wall';
import Image from '@/lib/image';
import flowerImg from '../assets/flower.png';
import FiveApple from '../components/five-apple';
import InfoTabs from '../components/InfoTabs';
import ProductSwiper, {
  MobileProductSwiper,
} from '../components/product-swiper';
import ReadingTabs from '../components/ReadingTabs';
import WhichOne from '../components/WhichOne';
import Banner from './components/banner';
import ComparisonTable from './components/comparison-table';
import Start from './components/star.svg';
import Step from './components/Step';
import { products } from './data';

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-main pb-5 pt-[64px]">
      <StarBackground />
      <Banner />
      <div className="container">
        {/* 五告蘋安啦！ */}
        <Wall title="五告蘋安啦！">
          <FiveApple type="futures" />
        </Wall>

        {/* 步行萬里，滿額送禮 */}
        <Wall title="步行萬里 滿額送禮" titleClassName="whitespace-nowrap">
          <WallContent className="space-y-4">
            <BounceOnScroll>
              <p>
                活動期間，
                <strong className="text-xl font-semibold text-y-secondary">
                  不論新舊戶累積交易達指定口數門檻
                </strong>
                ，即可獲得指定好禮！
              </p>
              <p className="text-base leading-4">
                <small>(每ID限領乙次)</small>
              </p>
            </BounceOnScroll>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* 我達到地幾步 */}
              <BounceOnScroll className="md:col-span-2">
                <Card>
                  <CardHeader className="items-be flex justify-center gap-2 px-1 py-3">
                    <h2 className="font-default text-xl">
                      我己經達到地{' '}
                      <span className="text-2xl font-extrabold text-y-t-light">
                        {' '}
                        ???{' '}
                      </span>{' '}
                      步
                    </h2>
                    <Button
                      size="rounded"
                      className="ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-5 py-4 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
                    >
                      點我查詢
                    </Button>
                  </CardHeader>
                  <div className="w-full px-0 py-3 md:px-8">
                    <Image
                      src={stage7}
                      alt="我達到地幾步"
                      className="mx-auto"
                    />
                  </div>
                </Card>
              </BounceOnScroll>

              {/* 齊聚五燈獎 */}
              <BounceOnScroll delay={0.4} className="md:col-span-2">
                <Card className="h-full">
                  <CardHeader className="py-4">
                    <h2
                      className="main-title-secondary -mt-1 mb-0 text-4xl"
                      data-stroke="齊聚五燈獎"
                    >
                      齊聚五燈獎
                    </h2>
                  </CardHeader>

                  <div className="flex h-full flex-col justify-around p-5">
                    {/* 五種交易類型 */}
                    <Image
                      src={flowerImg}
                      alt="金屬｜能源｜匯率｜指數｜債券"
                      className="mx-auto w-4/5"
                    />

                    <div className="text-left">
                      <p className="lg:text-2xl">
                        活動期間，交易跨美盤(CME) 商品種類，加碼再送指定好禮！ 
                      </p>
                      <p>
                        <small>(每ID限領乙次)</small>
                      </p>
                    </div>

                    {/* 188口 */}
                    <Card>
                      <CardHeader className="bg-[#007CC9]">
                        <h3
                          className="main-title z-10 -mt-1 mb-0 text-xl [--stroke-width:3px]"
                          data-stroke="美盤188口以上"
                        >
                          美盤188口以上
                        </h3>
                        <div className="mt-1 flex justify-center space-x-2">
                          <Start className="size-5" />
                          <Start className="size-5" />
                          <Start className="size-5" />
                        </div>
                      </CardHeader>
                      <p className="font-default">交易三類商品</p>
                      <p className="font-title text-y-tab-active-bg">
                        贈1,000元
                      </p>
                    </Card>

                    {/* 288口 */}
                    <Card className="mb-10">
                      <CardHeader className="bg-[#007CC9]">
                        <h3
                          className="main-title z-10 -mt-1 mb-0 text-xl [--stroke-width:3px]"
                          data-stroke="美盤288口以上"
                        >
                          美盤288口以上
                        </h3>
                        <div className="mt-1 flex justify-center space-x-2">
                          <Start className="size-5" />
                          <Start className="size-5" />
                          <Start className="size-5" />
                          <Start className="size-5" />
                          <Start className="size-5" />
                        </div>
                      </CardHeader>
                      <p className="font-default">交易五類商品</p>
                      <p className="font-title text-y-tab-active-bg">
                        贈1,500元
                      </p>
                    </Card>
                  </div>
                </Card>
              </BounceOnScroll>
            </div>
          </WallContent>
        </Wall>

        {/* 大家都在交易什麼？ */}
        <Wall title="大家都在交易什麼？">
          <WallContent className="relative mb-4">
            <div className="hidden md:block">
              <ProductSwiper products={products} controlClassPrefix="p1" />
            </div>
            <div className="block md:hidden">
              <MobileProductSwiper
                products={products}
                controlClassPrefix="p2"
              />
            </div>
          </WallContent>
        </Wall>

        {/* 交易外期請先參閱 */}
        <Wall title="交易外期請先參閱">
          <WallContent>
            <div className="mx-auto w-full max-w-3xl p-0 md:p-4">
              <ReadingTabs />
            </div>
          </WallContent>
        </Wall>

        {/* 期貨選擇權  投資新趨勢*/}
        <Wall title="期貨選擇權 投資新趨勢">
          <WallContent className="mb-4 !pt-16 md:!pt-10">
            <div className="mx-auto w-full max-w-3xl p-0 md:p-4">
              <InfoTabs />
            </div>
          </WallContent>
          <WallContent>
            <WhichOne />
            <p className="text-yuan-red -mb-2 mt-2 text-left text-xs font-bold sm:text-right">
              * 期貨交易一定有風險，交易前請謹慎做好風險管理
            </p>
          </WallContent>
        </Wall>

        {/* 春節不打烊外  還有很多優勢*/}
        <Wall title="股票vs國外期貨">
          <WallContent>
            <BounceOnScroll className="mx-auto w-full max-w-3xl py-3 drop-shadow-lg md:p-5 lg:py-8">
              <ComparisonTable />
            </BounceOnScroll>
          </WallContent>
        </Wall>

        {/* 工欲善其事  必先利其器*/}
        <Wall title="工欲善其事 必先利其器 如何快速下單？">
          <WallContent>
            <Step />
          </WallContent>
          <p className="-mb-3 text-sm font-normal text-white">
            ＊截圖僅為操作步驟示例，非推介相關標的，交易人下單前應審慎評估並自負風險。
          </p>
        </Wall>
      </div>
    </main>
  );
};

export default Page;
