import read1Img from '@/app/(future-and-leverage)/assets/read1.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next-image-export-optimizer';
import { readContexts } from '../futures/data';

const ReadingTabs = () => {
  const tabValues = ['stocks', 'review', 'trends'] as const;
  return (
    <Tabs defaultValue="research" className="w-full">
      <TabsList className="mb-4 grid w-full grid-cols-4">
        <TabsTrigger value="research">價值連城的研究報告</TabsTrigger>
        <TabsTrigger value="stocks">小資族首選</TabsTrigger>
        <TabsTrigger value="review">來！回顧一下</TabsTrigger>
        <TabsTrigger value="trends">熱門話題帶來的交易波動</TabsTrigger>
      </TabsList>

      <TabsContent
        value="research"
        className="flex items-center justify-center"
      >
        <Image src={read1Img} alt="價值連城的研究報告下載" />
      </TabsContent>

      {tabValues.map((tab) => (
        <TabsContent
          key={tab}
          value={tab}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          <div className="col-span-1">
            <Image src={readContexts[tab].image} alt="小資族首選" />
          </div>
          <div className="col-span-1 whitespace-pre-wrap text-left">
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
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ReadingTabs;
