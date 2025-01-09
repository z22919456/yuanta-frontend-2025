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
      { name: '澳幣(AD)', price: '$ 1,485', star: false },
      { name: '微澳幣(M6A)', price: '$ 149', star: false },
      { name: '英鎊(BP)', price: '$ 1,925', star: false },
      { name: '微英鎊(M6B)', price: '$ 193', star: false },
      { name: '加幣(CD)', price: '$ 1,100', star: false },
      { name: '微加幣(MCD)', price: '$ 110', star: false },
      { name: '瑞朗(SF)', price: '$ 4,070', star: false },
      { name: '歐元(EC)', price: '$ 2,530', star: false },
      { name: '小歐元(E7)', price: '$ 1,265', star: false },
      { name: '微歐元(ECM)', price: '$ 253', star: false },
      { name: '日元(JY)', price: '$ 3,190', star: false },
      { name: '歐元兌日元(RY)', price: '¥ 605,000', star: false },
      { name: '歐元兌英鎊(UE)', price: '£ 1,870', star: false },
      { name: '紐幣(NE)', price: '$ 1,430', star: false },
      { name: '墨西哥披索(MP)', price: '$ 1,540', star: false },
      { name: '南非幣(RA)', price: '$ 1,540', star: false },
      { name: '巴西幣(BR)$', price: '$ 935', star: false },
      { name: '俄羅斯盧布(RU)$', price: '$ 6,820', star: false },
      { name: '盧比(SIR)$', price: '$ 770', star: false },
      {
        name: '澳幣選擇權(ADU)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '英鎊選擇權(GBU)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '加幣選擇權(CAU)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '歐元選擇權(EUU)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '日元選擇權(JPU)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
    ],
  },
  {
    name: '金屬',
    key: 'metal',
    values: [
      { name: '白金(PL)', price: '$ 3,388', star: false },
      { name: '鈀金(PA)', price: '$ 13,750', star: false },
      { name: '黃金(GC)', price: '$ 12,650', star: false },
      { name: '小黃金(QO)$', price: '$ 6,325', star: false },
      { name: '微黃金(MGC)', price: '$ 1,265', star: false },
      { name: '白銀(SI)', price: '$ 13,915', star: false },
      { name: '微白銀(SIL)', price: '$ 2,783', star: false },
      { name: '銅(HG)', price: '$ 6,600', star: false },
      { name: '微銅(MHG)', price: '$ 660', star: false },
      { name: '鋁(ALI)', price: '$ 3,850', star: false },
      {
        name: '黃金選擇權(GC)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '白銀選擇權(SI)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
    ],
  },
  {
    name: '指數',
    key: 'index',
    values: [
      { name: '小羅素2000(RTY)$', price: '$ 8,360', star: false },
      { name: '微羅素2000(M2K)$', price: '$ 836', star: false },
      { name: '小道瓊指數(YM)$', price: '$ 11,440', star: false },
      { name: '微道瓊指數(MYM)$', price: '$ 1,144', star: false },
      { name: '小那斯達克(NQ)$', price: '$ 24,420', star: false },
      { name: '微那斯達克(MNQ)$', price: '$ 2,442', star: false },
      { name: '小SP指數(ES)$', price: '$ 16,060', star: false },
      { name: '微SP指數(MES)$', price: '$ 1,606', star: false },
      { name: '小SP ESG指數(ESG)$', price: '$ 10,450', star: false },
      { name: '小SP衛保(XAV)$', price: '$ 7,370', star: false },
      { name: '道瓊房地產(RE)$', price: '$ 2,310', star: false },
      { name: '美元日經(NK)$', price: '$ 14,300', star: false },
      { name: '日元日經(NY)$', price: '¥ 1,430,000', star: false },
      { name: '小標普400(ME)$', price: '$ 20,240', star: false },
      {
        name: '小道瓊指數選擇權(YM)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '小SP指數選擇權(ES)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '微SP指數選擇權(MES)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '小那斯達克指數選擇權(NQ)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '微那斯達克指數選擇權(MNQ)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
    ],
  },
  {
    name: '債券(含利率)',
    key: 'bond',
    values: [
      { name: '美國二年債(TU)', price: '$ 1,320', star: false },
      { name: '美國五年債(FV)', price: '$ 1,430', star: false },
      { name: '美國十年債(TY)', price: '$ 2,200', star: false },
      { name: '微10年殖利率(10Y)$', price: '$ 352', star: false },
      { name: '美國長期十年債(UN)', price: '$ 3,080', star: false },
      { name: '美國三十年債(US)', price: '$ 4,070', star: false },
      { name: '美國超長債(UB)', price: '$ 6,050', star: false },
      { name: '30天聯邦基金(ZQ)$', price: '$ 633', star: false },
      { name: '一個月SOFR(SR1)$', price: '$ 1,375', star: false },
      { name: '三個月SOFR(SR3)$', price: '$ 825', star: false },
      {
        name: '美國三十年債選擇權(US)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '美國十年債選擇權(TY)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
    ],
  },
  {
    name: '能源',
    key: 'energy',
    values: [
      { name: '輕原油(CL)', price: '$ 5,720', star: false },
      { name: '小輕原油(QM)$', price: '$ 2,860', star: false },
      { name: '微輕原油(MCL)$', price: '$ 572', star: false },
      { name: '熱燃油(HO)', price: '$ 6,820', star: false },
      { name: '天然氣(NG)', price: '$ 6,050', star: false },
      { name: '小天然氣(QG)$', price: '$ 1,513', star: false },
      { name: '無鉛汽油(RB)', price: '$ 6,050', star: false },
      { name: 'CME布侖特(BZ)$', price: '$ 5,170', star: false },
      {
        name: '輕原油選擇權(CL)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
      {
        name: '天然氣選擇權(NG)',
        price: '原始保證金×1.25 ＋權利金市值',
        star: true,
      },
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
                <div className="p-1 text-left md:px-4">
                  <p className="text-xs">*資料日期 2025.1.9</p>
                  <p className="text-xs">*實際保證金金額 請以交易所公告為準</p>
                  <p className="mb-2 text-xs text-y-wall">
                    *選擇權賣方保證金=MAX(原始保證金*1.25－1/2價外值，1/2原始保證)＋權利金市值
                  </p>
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
                              <div
                                className="grid grid-cols-2 items-center gap-2 border-b pb-2 pt-1 last-of-type:border-none"
                                key={i}
                              >
                                <p className="text-left text-lg">
                                  {value.star && (
                                    <span className="text-y-wall">*</span>
                                  )}
                                  {value.name}
                                </p>

                                <p className="text-right text-base">
                                  {value.price}
                                </p>
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
