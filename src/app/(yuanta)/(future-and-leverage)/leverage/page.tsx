import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import Card, { CardHeader } from '@/components/card';
import StarBackground from '@/components/start-background';
import { Button } from '@/components/ui/button';
import Wall, { WallContent } from '@/components/wall';
import Image from '@/lib/image';
import LoginDialog from '../../components/buttons/login-dialog';
import FiveApple from '../components/five-apple';
import stepImgMobile from './assets/stage4-mobil.png';
import stepImg from './assets/stage4.png';
import Banner from './components/banner';
import ComparisonTable from './components/comparison-table';
import ProductsSlider from './components/products-slider';
import ReadingTabs from './components/ReadingTabs';
import { advantages, steps } from './data';

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-main2 pb-5 pt-[64px]">
      <StarBackground />
      <Banner />
      <div className="container">
        {/* 五告蘋安啦！ */}
        <Wall title="五告蘋安啦！">
          <FiveApple type="leverage" />
        </Wall>
        {/* 步行萬里，滿額送禮 */}
        <Wall title="步行萬里 滿額送禮" titleClassName="whitespace-nowrap">
          <WallContent className="space-y-4">
            <p>
              活動期間，
              <strong className="text-xl font-semibold text-y-secondary">
                不論新舊戶累積交易達指定點數門檻
              </strong>
              ，即可獲得指定好禮！ 
            </p>
            <p className="text-base leading-5">
              <small>(每ID限領乙次)</small>
            </p>
            <BounceOnScroll>
              <div className="grid gap-4">
                {/* 我達到地幾步 */}
                <Card className="mx-auto w-full max-w-3xl">
                  <CardHeader className="items-be flex justify-center gap-2 px-1 py-3">
                    <h2 className="font-default text-xl">
                      我己經達到地{' '}
                      <span className="text-2xl font-extrabold text-y-t-light">
                        {' '}
                        ???{' '}
                      </span>{' '}
                      步
                    </h2>
                    <LoginDialog>
                      <Button
                        size="rounded"
                        className="ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-5 py-4 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
                      >
                        點我查詢
                      </Button>
                    </LoginDialog>
                  </CardHeader>
                  <div className="w-full px-0 py-3 md:px-8">
                    <Image
                      src={stepImgMobile}
                      alt="我達到地幾步"
                      className="mx-auto block md:hidden"
                    />
                    <Image
                      src={stepImg}
                      alt="我達到地幾步"
                      className="mx-auto -mb-6 hidden md:block"
                    />
                  </div>
                </Card>
              </div>
            </BounceOnScroll>
          </WallContent>
        </Wall>
        {/* 大家都在做什麼價差交易？ */}
        <Wall title="大家都在做什麼價差交易？">
          <WallContent className="relative mb-4">
            <ProductsSlider />
          </WallContent>
        </Wall>
        {/* 交易外期請先參閱 */}
        <Wall title="交易槓桿請先參閱">
          <WallContent>
            <div className="mx-auto w-full max-w-3xl p-0 md:p-4">
              <ReadingTabs />
            </div>
          </WallContent>
        </Wall>
        <Wall title="速懂！差價契約的特性">
          <WallContent className="!pt-20 md:!pt-12">
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 md:py-3 lg:grid-cols-4 lg:py-5 lg:pt-6">
              {advantages.map((a, i) => (
                <BounceOnScroll key={a.count} delay={i * 0.1}>
                  <div
                    key={a.count}
                    className="rounded-2xl border-4 border-y-bo bg-white p-4 text-left"
                  >
                    <div className="flex items-center space-x-4 text-left md:justify-center md:space-x-0">
                      <Image
                        src={a.img}
                        alt={a.title}
                        className="block w-1/3 max-w-28 shrink-0 md:hidden"
                      />
                      <div className="flex flex-col items-start justify-between text-left md:items-center md:space-y-2 md:text-center">
                        <p className="">{a.count}</p>
                        <h3 className="text-3xl">{a.title}</h3>
                        <Image
                          src={a.img}
                          alt={a.title}
                          className="hidden md:block"
                        />
                        <div className="flex h-14 items-start justify-center md:items-center">
                          <p>{a.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </BounceOnScroll>
              ))}
            </div>
          </WallContent>
        </Wall>
        <Wall title="元大槓桿交易商&#8203;的優勢超級棒">
          <WallContent className="!pt-16 md:!pt-24">
            <BounceOnScroll className="mx-auto w-full max-w-3xl py-3 drop-shadow-lg md:p-5 lg:py-8">
              <ComparisonTable />
            </BounceOnScroll>
          </WallContent>
        </Wall>
        <Wall title="還沒開戶嗎？">
          <WallContent className="!pt-20 md:!pt-12">
            <div className="md:mb- mx-auto mb-3 grid w-full max-w-2xl grid-cols-1 gap-3 md:mt-5 md:grid-cols-3 lg:grid-cols-3">
              {steps.map((a, i) => (
                <BounceOnScroll
                  key={a.count}
                  delay={i * 0.1}
                  className="relative rounded-2xl border-4 border-y-bo bg-white p-4 text-left"
                >
                  {steps.length !== i + 1 && (
                    <>
                      <p className="absolute left-full top-1/2 z-10 hidden -translate-y-1/2 text-3xl text-y-bo md:-ml-1 md:block md:text-4xl">
                        ▶︎
                      </p>
                      <p className="absolute left-1/2 top-full z-10 -mt-2 -translate-x-1/2 text-4xl text-y-bo md:hidden">
                        ▼
                      </p>
                    </>
                  )}
                  <div className="flex items-center justify-center space-x-4 text-left md:space-x-0">
                    <Image
                      src={a.img}
                      alt={a.title}
                      className="block w-20 shrink-0 md:hidden"
                    />
                    <div className="flex flex-col items-center justify-between text-left md:space-y-2 md:text-center">
                      <p className="leading-none">{a.count}</p>
                      <h3 className="text-3xl text-y-t-main">{a.title}</h3>
                      <Image
                        src={a.img}
                        alt={a.title}
                        className="ml-3 hidden md:block"
                      />
                    </div>
                  </div>
                </BounceOnScroll>
              ))}
            </div>
            <Button
              size="rounded"
              className="ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-16 py-5 text-xl font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
            >
              <a
                href="https://ltm.yuantafutures.com.tw/custom/30"
                target="_blank"
                rel="noreferrer noopener"
              >
                立即開戶
              </a>
            </Button>
          </WallContent>
        </Wall>
      </div>
    </main>
  );
};

export default Page;
