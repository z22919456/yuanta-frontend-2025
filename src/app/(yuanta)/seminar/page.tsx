import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import Card, { CardHeader } from '@/components/card';
import StarBackground from '@/components/start-background';
import Wall, { WallContent } from '@/components/wall';
import Image from '@/lib/image';
import { Suspense } from 'react';
import freeImg from './assets/free.png';
import AgendaDialog from './components/agenda-dialog';
import Banner from './components/banner';
import EventForm from './components/event-form';
import FireworksBG from './components/fireworks-bg';
import { kaohsiungTeacherData, taipeiTeacherData } from './teacher';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-gradient-main pb-5 pt-[64px]">
      <StarBackground />
      <Banner />
      <FireworksBG />
      <div className="container">
        <Wall title="想為2025年 鋪上投資之路嗎？">
          <WallContent className="space-y-5 px-2 !pt-16 sm:!pt-20 md:px-8 lg:!pt-28">
            <div className="mx-auto w-fit">
              <p className="text-center font-title text-lg leading-3 text-y-tab-bo md:text-left">
                \僅兩場/
              </p>
              <h2
                className="main-title-secondary relative block text-3xl sm:text-4xl md:text-5xl"
                data-stroke="百萬師資陣容  免費參加"
              >
                百萬師資陣容 <span className="text-[#FF7700]">免費</span>
                參加
              </h2>
            </div>
            {/* 台北場 */}
            <BounceOnScroll>
              <Card className="x-2">
                <CardHeader className="bg-[#007CC9]">
                  <h3
                    className="main-title-secondary relative mb-1 block text-2xl md:text-3xl"
                    data-stroke="01.08 台北"
                  >
                    01.08 台北
                  </h3>
                  <p className="mb-1 text-lg">犇亞會議中心</p>
                </CardHeader>
                <div className="flex flex-wrap px-3 md:px-0 [&_>div:first-child]:border-b-4 md:[&_>div:first-child]:border-b-0 md:[&_>div:first-child]:border-r-4">
                  {taipeiTeacherData.map((teacher, i) => (
                    <div
                      className="w-full border-[#F9E1C2] py-5 md:my-8 md:w-1/2 md:p-8 md:py-0"
                      key={i}
                    >
                      <div className="mb-3 flex items-center space-x-3">
                        <Image
                          src={teacher.img}
                          alt={teacher.name}
                          className="w-24 rounded-full border-4 border-y-wall bg-white"
                        />
                        <div className="w-full text-left font-extrabold">
                          <h4 className="font-default text-lg leading-tight">
                            {teacher.title}
                            <br />
                            {teacher.name}
                          </h4>
                        </div>
                      </div>
                      <div className="text-left">
                        <p>{teacher.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </BounceOnScroll>

            {/* 高雄場 */}
            <BounceOnScroll>
              <Card>
                <CardHeader className="bg-[#EE7F00]">
                  <h3
                    className="main-title-secondary relative mb-1 block text-3xl"
                    data-stroke="01.10 高雄"
                  >
                    01.10 高雄
                  </h3>
                  <p className="mb-1 text-lg">思博客商務中心</p>
                </CardHeader>
                <div className="flex flex-wrap px-3 md:px-0 [&_>div:first-child]:border-b-4 md:[&_>div:first-child]:border-b-0 md:[&_>div:first-child]:border-r-4">
                  {kaohsiungTeacherData.map((teacher, i) => (
                    <div
                      className="w-full border-[#F9E1C2] py-5 md:my-8 md:w-1/2 md:p-8 md:py-0"
                      key={i}
                    >
                      <div className="mb-3 flex items-center space-x-3">
                        <Image
                          src={teacher.img}
                          alt={teacher.name}
                          className="w-24 rounded-full border-4 border-y-wall"
                        />
                        <div className="w-full text-left font-extrabold">
                          <h4 className="font-default text-lg leading-tight">
                            {teacher.title}
                            <br />
                            {teacher.name}
                          </h4>
                        </div>
                      </div>
                      <div className="text-left">
                        <p>{teacher.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </BounceOnScroll>
            <div className="text-center">
              <AgendaDialog />
            </div>
          </WallContent>
        </Wall>
        <Wall>
          <WallContent className="flex flex-wrap gap-y-10 p-5 lg:p-10">
            <Image
              src={freeImg}
              alt="免費課程！"
              className="order-2 w-full shrink pb-0 md:order-1 md:w-6/12 md:pb-12 md:pr-3 lg:w-1/2 lg:pb-0"
            />
            <div className="order-1 flex w-full shrink flex-col justify-between space-y-5 font-extrabold md:order-2 md:w-6/12 md:space-y-0 md:px-5 lg:w-1/2">
              <h2
                className="main-title-secondary relative block text-3xl font-normal lg:text-5xl"
                data-stroke="3大重點不可錯過！"
              >
                <span className="text-[#FF7700]">3大</span>
                重點不可錯過！
              </h2>
              {/*  */}
              <div className="relative ml-4 bg-white py-3 pl-7">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">1</span>
                </p>
                <p>
                  <strong className="text-xl text-[#FF7700]">2025年</strong>
                  全球經濟趨勢
                </p>
              </div>
              <div className="relative ml-4 bg-white py-3 pl-7">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">2</span>
                </p>
                <p>
                  <strong className="text-xl text-[#FF7700]">川普2.0</strong>
                  大解析市場展望
                </p>
              </div>
              <div className="relative ml-4 bg-white py-3 pl-7">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">3</span>
                </p>
                <p>
                  從<strong className="text-xl text-[#FF7700]">當沖</strong>到
                  <strong className="text-xl text-[#FF7700]">波段</strong>
                  交易全攻略
                </p>
              </div>
            </div>
          </WallContent>
        </Wall>
        <Wall title="報名入口" id="form_top">
          <WallContent className="space-y-4 text-left">
            <Suspense>
              <EventForm />
            </Suspense>
          </WallContent>
        </Wall>
      </div>
    </main>
  );
};

export default Page;
