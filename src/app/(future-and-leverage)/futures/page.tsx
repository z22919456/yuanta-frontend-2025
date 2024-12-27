import airPodsImg from '@/app/(future-and-leverage)/assets/airpods.png';
import envelopeImg from '@/app/(future-and-leverage)/assets/envelope.png';
import iphoneImg from '@/app/(future-and-leverage)/assets/iphone.png';
import stage7 from '@/app/(future-and-leverage)/assets/stage7.png';
import Card, { CardHeader } from '@/components/card';
import Wall, { WallContent } from '@/components/wall';
import Image from '@/lib/image';
import flowerImg from '../assets/flower.png';
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
      <Banner />
      <div className="container">
        {/* 五告蘋安啦！ */}
        <Wall title="五告蘋安啦！">
          <WallContent className="space-y-4">
            <p>
              活動期間，<strong className="text-y-secondary">交易10口</strong>
              獲一次抽獎機會，抽獎機會無上限！
            </p>
            <p className="text-base leading-4">
              <small>
                *抽獎次數，依照整個活動期間計算！
                <br />
                *第一次中獎者，口數將重新計算！
              </small>
            </p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-7 md:gap-3">
              {/* AirPods */}
              <Card className="relative overflow-visible p-1 md:col-span-2 md:p-3">
                <p className="absolute left-full top-1/2 z-10 -translate-y-1/2 text-3xl text-y-bo md:-ml-1 md:text-4xl">
                  ▶︎
                </p>
                <h2 className="mb-2 text-xl leading-tight md:text-2xl">
                  第一次抽獎
                  <br />
                  【封關前】
                </h2>
                <p className="text-base">
                  先抽{' '}
                  <strong className="text-2xl font-semibold text-y-secondary">
                    2
                  </strong>{' '}
                  名
                </p>

                <Image
                  src={airPodsImg}
                  className="mx-auto my-2 w-[80%] max-w-32"
                  alt="AirPods Pro 2"
                />
                <h3 className="text-base leading-tight sm:text-lg md:text-xl">
                  AirPod <br /> Pro2
                </h3>
                <p className="text-sm">(價值7,490元)</p>
              </Card>

              {/* Iphone */}
              <Card className="p-1 md:col-span-2 md:p-3">
                <h2 className="mb-2 text-xl leading-tight md:text-2xl">
                  第二次抽獎
                  <br />
                  【活動結束】
                </h2>
                <p className="text-base">
                  後抽{' '}
                  <strong className="text-2xl font-semibold text-y-secondary">
                    5
                  </strong>{' '}
                  名
                </p>
                <Image
                  src={iphoneImg}
                  className="mx-auto my-2 w-[80%] max-w-32"
                  alt="Iphone 16 Pro Max 256G"
                />
                <h3 className="text-base leading-tight sm:text-lg md:text-xl">
                  iPhone 16 Pro <br />
                  Max 256G
                </h3>
                <p className="text-sm">(價值44,900元)</p>
              </Card>
              {/* em */}
              <Card className="col-span-2 border-y-tab-active-bo md:col-span-3">
                <h1
                  className="main-title-secondary my-2 mb-6 text-4xl"
                  data-stroke="新春送紅包"
                >
                  新春送紅包
                </h1>
                <p className="mb-3">
                  活動期間，新戶/靜止戶
                  <strong className="text-y-secondary">交易1筆</strong> 可獲
                  <strong className="text-y-secondary">200元獎勵金</strong>！
                </p>
                <Image
                  src={envelopeImg}
                  alt="200元獎勵金"
                  className="mx-auto mt-5"
                />
              </Card>
            </div>
          </WallContent>
        </Wall>

        {/* 步行萬里，滿額送禮 */}
        <Wall title="步行萬里 滿額送禮" titleClassName="whitespace-nowrap">
          <WallContent className="space-y-4">
            <p>
              活動期間，不論新舊戶累積交易達指定口數門檻，即可獲得指定好禮！ 
            </p>
            <p className="text-base leading-4">
              <small>(每ID限領乙次)</small>
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* 我達到地幾步 */}
              <Card>
                <CardHeader>
                  <h2 className="font-default text-xl">
                    我己經達到地{' '}
                    <span className="text-2xl font-extrabold text-y-t-light">
                      {' '}
                      ???{' '}
                    </span>{' '}
                    步
                  </h2>
                </CardHeader>
                <div className="w-full px-0 py-3 md:px-8">
                  <Image src={stage7} alt="我達到地幾步" className="mx-auto" />
                </div>
              </Card>

              {/* 齊聚五燈獎 */}
              <Card>
                <CardHeader>
                  <h2
                    className="main-title-secondary -mt-1 mb-0 text-3xl"
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
                    <p className="font-title text-y-tab-active-bg">贈1,000元</p>
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
                    <p className="font-title text-y-tab-active-bg">贈1,500元</p>
                  </Card>
                </div>
              </Card>
            </div>
          </WallContent>
        </Wall>

        {/* 大家都在交易什麼？ */}
        <Wall title="大家都在交易什麼？">
          <WallContent className="relative mb-4">
            {/* <div className="hidden grid-cols-8 gap-5 lg:grid">
              {products.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div> */}
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
            <ComparisonTable />
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
