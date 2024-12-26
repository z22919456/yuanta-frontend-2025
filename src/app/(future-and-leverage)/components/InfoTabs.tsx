import read1Img from '@/app/(future-and-leverage)/assets/read1.png';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/lib/image';
import { infoContexts } from '../futures/data';

const InfoTabs = () => {
  const tabValues = [
    'whatIsFutures',
    'whyFutures',
    'whatIsOptions',
    'whyOptions',
  ] as const;
  return (
    <Tabs defaultValue="whatIsFutures" className="w-full">
      <ScrollArea>
        <div className="w-[650px] md:w-auto">
          <TabsList className="mb-4 grid w-full grid-cols-4">
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

      <TabsContent
        value="research"
        className="flex items-center justify-center"
      >
        <Image src={read1Img} alt="價值連城的研究報告下載" />
      </TabsContent>

      {tabValues.map((tab) => (
        <TabsContent key={tab} value={tab}>
          <div className="whitespace-pre-wrap text-left">
            <ul className="flex h-full flex-col justify-stretch">
              {infoContexts[tab].map((text, index) => (
                <li className="flex h-full items-center py-2" key={index}>
                  <p className="flex items-start">
                    <span className="mr-2 flex-shrink-0 text-lg text-amber-700">
                      ◆
                    </span>
                    <span>{text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InfoTabs;
