import Card, { CardHeader } from '@/components/card';
import Wall, { WallContent } from '@/components/wall';
import Image from 'next/image';
import freeImg from './assets/free.png';
import AgendaDialog from './components/agenda-dialog';
import EventForm from './components/event-form';
import { kaohsiungTeacherData, taipeiTeacherData } from './teacher';

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-main pb-5 pt-[64px]">
      <div className="container">
        <Wall title="想為2025年 鋪上投資之路嗎？">
          <WallContent className="space-y-5 px-8 pt-24">
            <div className="mx-auto w-fit">
              <p className="text-left font-title text-lg leading-3 text-y-tab-bo">
                \僅兩場/
              </p>
              <h2
                className="main-title-secondary relative block text-5xl"
                data-stroke="百萬師資陣容 免費參加"
              >
                百萬師資陣容 免費參加
              </h2>
            </div>
            {/* 台北場 */}
            <Card>
              <CardHeader className="bg-[#007CC9]">
                <h3
                  className="main-title-secondary relative mb-1 block text-3xl"
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

            {/* 高雄場 */}
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
              <h3
                className="main-title-secondary text-4xl"
                data-stroke="3大重點不可錯過！"
              >
                <span className="text-y-tab-active-bo">3大</span>重點不可錯過！
              </h3>
              {/*  */}
              <div className="relative ml-4 bg-white py-3">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">1</span>
                </p>
                <p>2025年全球經濟趨勢</p>
              </div>
              <div className="relative ml-4 bg-white py-3">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">2</span>
                </p>
                <p>川普2.0大解析市場展望</p>
              </div>
              <div className="relative ml-4 bg-white py-3">
                <p className="absolute -left-4 top-0 flex aspect-square w-11 rotate-45 items-center justify-center border-4 border-[#FFAA49] bg-y-wall text-white">
                  <span className="-rotate-45 font-title text-2xl">3</span>
                </p>
                <p>從當沖到波段交易全攻略</p>
              </div>
            </div>
          </WallContent>
        </Wall>
        <Wall title="報名入口">
          <WallContent className="space-y-4 text-left">
            <EventForm />
          </WallContent>
        </Wall>
      </div>
    </main>
  );
};

export default Page;
