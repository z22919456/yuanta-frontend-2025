'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const data = [
  {
    name: '匯率',
    key: 'exchange',
    values: [
      '澳幣(AD)',
      '微澳幣(M6A)',
      '英鎊(BP)',
      '微英鎊(M6B)',
      '加幣(CD)',
      '微加幣(MCD)',
      '瑞朗(SF)',
      '歐元(EC)',
      '小歐元(E7)',
      '微歐元(ECM)',
      '日元(JY)',
      '歐元兌日元(RY)',
      '歐元兌英鎊(UE)',
      '紐幣(NE)',
      '墨西哥披索(MP)',
      '南非幣(RA)',
      '巴西幣(BR)$',
      '俄羅斯盧布(RU)$',
      '盧比(SIR)$',
      '澳幣選擇權(ADU)',
      '英鎊選擇權(GBU)',
      '加幣選擇權(CAU)',
      '歐元選擇權(EUU)',
      '日元選擇權(JPU)',
    ],
  },
  {
    name: '金屬',
    key: 'metal',
    values: [
      '白金(PL)',
      '鈀金(PA)',
      '黃金(GC)',
      '小黃金(QO)$',
      '微黃金(MGC)',
      '白銀(SI)',
      '微白銀(SIL)',
      '銅(HG)',
      '微銅(MHG)$',
      '鋁(ALI)',
      '黃金選擇權(GC)',
      '白銀選擇權(SI)',
    ],
  },
  {
    name: '指數',
    key: 'index',
    values: [
      '小羅素2000(RTY)$',
      '微羅素2000(M2K)$',
      '小道瓊指數(YM)$',
      '微道瓊指數(MYM)$',
      '小那斯達克(NQ)$',
      '微那斯達克(MNQ)$',
      '小SP指數(ES)$',
      '微SP指數(MES)$',
      '小SP ESG指數(ESG)$',
      '小SP衛保(XAV)$',
      '道瓊不動產指數(RE)$',
      '美元日經(NK)$',
      '日元日經(NY)$',
      '小標普400(ME)$',
      '小道瓊指數選擇權(YM)',
      '小SP指數選擇權(ES)',
      '微SP指數選擇權(MES)',
      '小那斯達克指數選擇權(NQ)',
      '微那斯達克指數選擇權(MNQ)',
    ],
  },
  {
    name: '債券(有含利率)',
    key: 'bond',
    values: [
      '美國二年債(TU)',
      '美國五年債(FV)',
      '美國十年債(TY)',
      '微10年殖利率(10Y)$',
      '美國長期十年債(UN)',
      '美國三十年債(US)',
      '美國超長債(UB)',
      '30天聯邦基金(ZQ)$',
      '一個月SOFR(SR1)$',
      '三個月SOFR(SR3)$',
      '美國三十年債選擇權(US)',
      '美國十年債選擇權(TY)',
    ],
  },
  {
    name: '能源',
    key: 'energy',
    values: [
      '輕原油(CL)',
      '小輕原油(QM)$',
      '微輕原油(MCL)$',
      '熱燃油(HO)',
      '天然氣(NG)',
      '小天然氣(QG)$',
      '無鉛汽油(RB)',
      'CME布侖特(BZ)$',
      '輕原油選擇權(CL)',
      '天然氣選擇權(NG)',
    ],
  },
];

const FiveTypeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="rounded"
          className="absolute right-0 top-0 ml-2 border-4 border-y-tab-bo bg-[#007CC9] px-3 py-2 text-xl font-semibold hover:bg-[#007CC9]/50 hover:text-y-tab-t lg:right-3 lg:top-3 lg:px-7 lg:py-6"
        >
          分類列表
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg border-4 border-y-tab-bo bg-y-bg">
        <DialogHeader>
          <DialogTitle
            className="mx-auto mb-5 w-fit text-center text-3xl !font-normal text-y-tab-t"
            asChild
          >
            <div>
              <h1
                className="shadow-number text-3xl [--stroke-width:5px]"
                data-stroke="分類列表"
              >
                分類列表
              </h1>
            </div>
          </DialogTitle>
          <DialogDescription className="text-yuan-blue-800 space-y-6 text-base">
            {/* h-[calc(100vh-108px)] */}
            <div>
              <ScrollArea className="max-h-[calc(100vh-160px)] overflow-y-auto">
                <div className="p-3 text-center md:px-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-3"
                  >
                    {data.map((item) => (
                      <AccordionItem
                        value={item.key}
                        key={item.name}
                        className="border-none"
                      >
                        <AccordionTrigger className="gap-3 rounded-xl border-2 border-y-bo bg-y-card px-3 font-default text-xl shadow-lg hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:bg-y-tab-active-bg data-[state=open]:text-white [&[data-state=open]>svg]:stroke-white [&_svg]:size-5">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="-mt-3 rounded-b-lg border-2 border-y-bo bg-y-card p-3 pt-6">
                          <div className="space-y-2">
                            {item.values.map((value, i) => (
                              <div className="border-b pb-2 pt-1" key={i}>
                                <p className="text-lg">{value}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollArea>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FiveTypeDialog;
