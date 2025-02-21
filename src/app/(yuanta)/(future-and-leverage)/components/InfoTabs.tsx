import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import BounceRightOnScroll from '@/components/animation-container/bounce-right-on-scroll';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { infoContexts } from '../future/data';

const InfoTabs = () => {
  const tabValues = [
    'whatIsFutures',
    'whyFutures',
    'whatIsOptions',
    'whyOptions',
  ] as const;
  return (
    <Tabs defaultValue="whatIsFutures" className="w-full">
      <BounceRightOnScroll>
        <ScrollArea className="-mx-3 md:mx-0">
          <div className="w-[650px] md:w-auto">
            <TabsList className="mb-4 grid w-full grid-cols-4 px-3 md:px-0">
              <TabsTrigger value="whatIsFutures">什麼是期貨</TabsTrigger>
              <TabsTrigger value="whyFutures">
                <p>
                  為什麼
                  <br className="" />
                  選擇
                  <span className="text-yuan-red font-semibold text-y-secondary group-data-[state=active]:text-y-tab-bg">
                    期貨
                  </span>
                </p>
              </TabsTrigger>
              <TabsTrigger value="whatIsOptions">什麼是選擇權</TabsTrigger>
              <TabsTrigger value="whyOptions">
                <p>
                  為什麼
                  <br className="" />
                  選擇
                  <span className="text-yuan-red group-[]: font-semibold text-y-secondary group-data-[state=active]:text-y-tab-bg">
                    選擇權
                  </span>
                </p>
              </TabsTrigger>
            </TabsList>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </BounceRightOnScroll>

      {tabValues.map((tab) => (
        <TabsContent key={tab} value={tab}>
          <div className="whitespace-pre-wrap text-left">
            <ul className="flex h-full flex-col justify-stretch">
              {infoContexts[tab].map((text, index) => (
                <BounceOnScroll delay={0.1 + index * 0.1} key={index}>
                  <li className="flex h-full items-center py-2" key={index}>
                    <p className="flex items-start">
                      <span className="mr-2 flex-shrink-0 text-lg text-amber-700">
                        ◆
                      </span>
                      <span>{text}</span>
                    </p>
                  </li>
                </BounceOnScroll>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InfoTabs;
