import read1Img from '@/app/(yuanta)/(future-and-leverage)/assets/read1.png';
import BounceLeftOnScroll from '@/components/animation-container/bounce-left-on-scroll';
import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/lib/image';
import DownloadDialog from '../../components/buttons/download-dialog';
import { readContexts } from '../future/data';

const ReadingTabs = () => {
  const tabValues = ['stocks', 'review', 'trends'] as const;
  return (
    <Tabs defaultValue="research" className="w-full">
      <BounceRightOnScroll>
        <ScrollArea>
          <div className="w-[650px] md:w-auto">
            <TabsList className="mb-4 grid w-full grid-cols-4">
              <TabsTrigger value="research">價值連城的研究報告</TabsTrigger>
              <TabsTrigger value="stocks">小資族首選</TabsTrigger>
              <TabsTrigger value="review">來！回顧一下</TabsTrigger>
              <TabsTrigger value="trends">熱門話題帶來的交易波動</TabsTrigger>
            </TabsList>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </BounceRightOnScroll>

      <TabsContent
        value="research"
        className="flex items-center justify-center"
      >
        <BounceRightOnScroll>
          <div className="relative w-fit">
            <Image src={read1Img} alt="價值連城的研究報告下載" />
            <DownloadDialog>
              <button className="absolute left-[12%] top-[25.4%] z-50 flex animate-pulse items-center justify-center rounded-full border-2 border-y-tab-active-bo px-3 py-2 text-center font-bold text-white shadow-xl hover:border-y-tab-t hover:!bg-y-tab-bg hover:text-y-tab-t md:border-4 md:text-3xl">
                免費下載
              </button>
            </DownloadDialog>
          </div>
        </BounceRightOnScroll>
      </TabsContent>

      {tabValues.map((tab) => (
        <TabsContent
          key={tab}
          value={tab}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          <div className="col-span-1">
            <BounceRightOnScroll>
              <Image
                src={readContexts[tab].image}
                alt="小資族首選"
                className="mx-auto"
              />
            </BounceRightOnScroll>
          </div>
          <BounceLeftOnScroll className="col-span-1 whitespace-pre-wrap text-left">
            <ul className="flex h-full flex-col justify-stretch">
              {readContexts[tab].text.map((text, index) => (
                <li
                  className="flex h-full items-center border-b border-dashed border-gray-500 pb-2"
                  key={index}
                >
                  <p className="flex items-start">
                    <span className="mr-2 flex-shrink-0 text-lg text-amber-700">
                      ◆
                    </span>
                    <span>{text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </BounceLeftOnScroll>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ReadingTabs;
