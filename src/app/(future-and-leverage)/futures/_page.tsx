import airPodsImg from '@/app/(future-and-leverage)/assets/airpods.png';
import envelopeImg from '@/app/(future-and-leverage)/assets/envelope.png';
import iphoneImg from '@/app/(future-and-leverage)/assets/iphone.png';
import Card, { CardHeader } from '@/components/card';
import Wall, { WallContent } from '@/components/wall';
import Image from 'next-image-export-optimizer';
import InfoTabs from '../components/InfoTabs';
import ProductCard from '../components/product-card';
import ProductSwiper from '../components/product-swiper';
import ReadingTabs from '../components/ReadingTabs';
import WhichOne from '../components/WhichOne';
import Step from './components/Step';
import { products, products2 } from './data';

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-main pb-5 pt-[64px]">
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
              {/* AirPods */}
              <Card className="md:col-span-2">
                <h2 className="mb-2 text-2xl leading-tight">
                  第一次抽獎
                  <br />
                  【封關前】
                </h2>
                <p>
                  先抽{' '}
                  <strong className="text-3xl font-semibold text-y-secondary">
                    2
                  </strong>{' '}
                  名
                </p>

                <Image
                  src={airPodsImg}
                  className="mx-auto my-2"
                  alt="AirPods Pro 2"
                />
                <h3 className="text-2xl leading-tight">
                  AirPod <br /> Pro2
                </h3>
                <p className="text-sm">(價值7,490元)</p>
              </Card>

              {/* Iphone */}
              <Card className="md:col-span-2">
                <h2 className="mb-2 text-2xl leading-tight">
                  第二次抽獎
                  <br />
                  【活動結束】
                </h2>
                <p>
                  後抽{' '}
                  <strong className="text-3xl font-semibold text-y-secondary">
                    5
                  </strong>{' '}
                  名
                </p>
                <Image
                  src={iphoneImg}
                  className="mx-auto my-2"
                  alt="Iphone 16 Pro Max 256G"
                />
                <h3 className="text-2xl leading-tight">
                  iPhone 16 Pro <br />
                  Max 256G
                </h3>
                <p className="text-sm">(價值44,900元)</p>
              </Card>
              {/* em */}
              <Card className="border-y-tab-active-bo md:col-span-3">
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
        <Wall title="步行萬里，滿額送禮">
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
              </Card>
            </div>
          </WallContent>
        </Wall>

        {/* 大家都在交易什麼？ */}
        <Wall title="大家都在交易什麼？">
          <WallContent className="relative mb-4">
            <div className="hidden grid-cols-8 gap-5 lg:grid">
              {products.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
            <div className="lg:hidden">
              <ProductSwiper products={products} controlClassPrefix="p1" />
            </div>
          </WallContent>
          <WallContent className="relative pt-5">
            <div className="hidden grid-cols-8 gap-5 lg:grid [&_>div:nth-child(5)]:col-start-2">
              {products2.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
            <div className="lg:hidden">
              <ProductSwiper products={products2} controlClassPrefix="p2" />
            </div>
          </WallContent>
        </Wall>

        {/* 交易外期請先參閱 */}
        <Wall title="交易外期請先參閱">
          <WallContent>
            <div className="mx-auto w-full max-w-3xl p-4">
              <ReadingTabs />
            </div>
          </WallContent>
        </Wall>

        {/* 期貨選擇權  投資新趨勢*/}
        <Wall title="期貨選擇權 投資新趨勢">
          <WallContent className="mb-4">
            <div className="mx-auto w-full max-w-3xl p-4">
              <InfoTabs />
            </div>
          </WallContent>
          <WallContent>
            <WhichOne />
            <p className="text-yuan-red -mb-2 mt-2 text-right text-xs font-bold">
              * 期貨交易一定有風險，交易前請謹慎做好風險管理
            </p>
          </WallContent>
        </Wall>

        {/* 春節不打烊外  還有很多優勢*/}
        <Wall title="春節不打烊外 還有很多優勢">
          <WallContent>
            <></>
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
