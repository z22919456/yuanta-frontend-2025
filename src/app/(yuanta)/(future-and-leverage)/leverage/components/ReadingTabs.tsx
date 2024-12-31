import BounceLeftOnScroll from '@/components/animation-container/bounce-left-on-scroll';
import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/lib/image';
import { readContexts } from '../data';

const ReadingTabs = () => {
  const tabValues = ['CFD', 'JPA', 'GOLD'] as const;
  return (
    <Tabs defaultValue="CFD" className="w-full">
      <ScrollArea className="-mx-3 md:mx-0">
        <div className="w-[487px] md:w-auto">
          <BounceRightOnScroll delay={0.4}>
            <TabsList className="mb-4 grid w-full grid-cols-3 px-3 md:px-0">
              <TabsTrigger value={tabValues[0]}>
                每果CFD 升溫的新趨勢
              </TabsTrigger>
              <TabsTrigger value={tabValues[1]}>
                注意到了嗎？ 日本的崛起！
              </TabsTrigger>
              <TabsTrigger value={tabValues[2]}>
                黃金創高！ 吸引交易者目光
              </TabsTrigger>
            </TabsList>
          </BounceRightOnScroll>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {tabValues.map((tab) => (
        <TabsContent
          key={tab}
          value={tab}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          <div className="col-span-1">
            <BounceRightOnScroll>
              <Image src={readContexts[tab].image} alt="小資族首選" />
            </BounceRightOnScroll>
          </div>
          <div className="col-span-1 whitespace-pre-wrap text-left">
            <BounceLeftOnScroll className="h-full">
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
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ReadingTabs;
