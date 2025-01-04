import Card from './card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

type TData = {
  tradeType: 0 | 1;
  name: string;
  accumulatedTransactionPoints: number;
  lotteryDrawCount: number;
  isRedEnvelopeEligible: boolean;
  transactionLevel: number;
  crossCMETradeTypes: number;
  cmeContractCount: number;
};

type TType = 'leverage' | 'futures';

type Props = {
  type: TType;
  data?: TData;
  onClose?: () => void;
};

const levelPrice: Record<TType, Record<number, number>> = {
  futures: {
    1: 2000,
    2: 6000,
    3: 15_000,
    4: 22_000,
    5: 30_000,
    6: 40_000,
    7: 50_000,
  },
  leverage: {
    1: 1_000,
    2: 10_000,
    3: 35_000,
    4: 50_000,
  },
};

const isGold = (type: TType, value: number) => {
  if (
    (type === 'futures' && value === 7) ||
    (type === 'leverage' && value === 4)
  ) {
    return true;
  }
};

const isAdd = (countType: number, count: number) => {
  if (countType === 5 && count >= 288) {
    return 1500;
  } else if (countType >= 3 && count >= 188) {
    return 1000;
  }
  return 0;
};

const Record = ({ type, data, onClose }: Props) => {
  if (data === undefined) {
    return null;
  }

  const {
    name,
    accumulatedTransactionPoints,
    lotteryDrawCount,
    isRedEnvelopeEligible,
    transactionLevel,
    crossCMETradeTypes,
    cmeContractCount,
  } = data;
  const typeName = type === 'leverage' ? '槓桿' : '外期';
  const unit = type === 'leverage' ? '點' : '口';
  const add = isAdd(crossCMETradeTypes, cmeContractCount);
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose?.()}>
      <DialogContent
        className="max-h-full rounded-lg border-4 border-y-tab-bo bg-y-wall"
        whiteButton
      >
        <DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <p className="text-center text-white">
            親愛的{name}您好
            <br />
            以下是您{typeName}春節的成績：
          </p>
        </DialogHeader>
        <DialogDescription
          className="max-h-full rounded-2xl border-4 border-y-bo bg-[#FFEEDC] p-2 text-y-t-base"
          asChild
        >
          <ScrollArea className="max-h-[calc(100vh-130px)] overflow-y-auto">
            <Card className="relative mt-10 box-content overflow-visible border-2 pt-20 md:border-4">
              <Title title="五告平安拉！" word="抽" />
              <div className="-mt-8 h-full w-full">
                <p className="mb-5 text-center text-xl">
                  春節活動期間，
                  <br className="block sm:hidden" />
                  您累積交易{unit}數為
                  <span className="text-xl font-bold text-y-secondary">
                    {accumulatedTransactionPoints}
                  </span>
                  {unit} <br />
                  可抽{' '}
                  <span className="text-xl font-bold text-y-secondary">
                    {lotteryDrawCount}
                  </span>{' '}
                  次
                  <span className="text-xl font-bold text-[#EE7F00]">
                    【蘋果好禮】
                  </span>
                </p>
                {type === 'futures' && (
                  <p className="mx-auto my-2 flex max-w-fit items-center justify-center rounded-lg bg-green-100 px-3 py-2">
                    <span className="mr-2 text-2xl">💡</span>{' '}
                    {'日盤/ 微日經期、微日經選 >> 交易 2口=1口 計算'}
                  </p>
                )}
              </div>
            </Card>
            <Card className="relative mt-10 box-content overflow-visible border-2 pt-20 md:border-4">
              <Title title="新春送紅包" word="送" />
              <div className="-mt-8 h-full w-full">
                <p className="mb-5 text-center text-xl">
                  春節活動期間，
                  <br className="block sm:hidden" />
                  您累積交易{unit}數為
                  <span className="font-bold text-y-secondary">
                    {accumulatedTransactionPoints}
                  </span>
                  {unit}
                  <br />
                  {isRedEnvelopeEligible ? (
                    <span className="font-bold text-green-600">符合</span>
                  ) : (
                    <span className="font-bold">不符合</span>
                  )}{' '}
                  獲得
                  <span className="text-xl font-bold text-[#EE7F00]">
                    【200元享樂券】
                  </span>
                </p>
                <ol className="ml-6 list-decimal space-y-2 text-sm">
                  <li>
                    新開戶資格-2025/01/01-02/28期間於元大期貨或所屬券商合作夥伴完成新開立期貨帳戶或從未開過期貨戶，首次交易即為符合資格。
                  </li>
                  <li>
                    靜止戶資格-已於元大期貨或所屬券商合作夥伴完成開立期帳戶，且2024/06/01-2024/12/31從未交易國外活動商品者，交易即符合資格。
                  </li>
                </ol>
              </div>
            </Card>
            <Card className="relative mt-10 box-content overflow-visible border-2 pt-20 md:border-4">
              <Title title="步行萬里 滿額送禮" word="滿" />
              <div className="-mt-8 h-full w-full">
                <p className="mb-5 text-center text-xl">
                  新春期間，
                  <br className="block sm:hidden" />
                  您累積交易{unit}數
                  <span className="font-bold text-y-secondary">
                    {accumulatedTransactionPoints}
                  </span>
                  {unit}
                  <br />
                  {transactionLevel > 0 ? (
                    <>
                      交易獎勵達到
                      <span className="font-bold text-y-secondary">
                        第{transactionLevel}獎
                      </span>
                      <br />
                      目前可獲得 <br className="block sm:hidden" />
                      <span className="text-xl font-bold text-[#EE7F00]">
                        【{levelPrice[type][transactionLevel].toLocaleString()}
                        元享樂券】
                      </span>{' '}
                      {isGold(type, transactionLevel) && (
                        <>
                          <br />
                          以及
                          <span className="text-xl font-bold text-[#EE7F00]">
                            【黃金牌】
                          </span>
                        </>
                      )}
                    </>
                  ) : (
                    <>交易獎勵尚未達標，請再接再厲</>
                  )}
                </p>
              </div>
            </Card>
            {type == 'futures' && (
              <Card className="relative mt-10 box-content overflow-visible border-2 pt-20 md:border-4">
                <Title title="五燈獎期聚CME" word="加" rightWord="碼" />
                <div className="-mt-8 h-full w-full">
                  <p className="mb-5 text-center text-xl">
                    新春期間，
                    <br className="block sm:hidden" />
                    您累積跨
                    <span className="font-bold text-y-secondary">
                      {crossCMETradeTypes}
                    </span>
                    類CME商品
                    <br />
                    並符合CME口數
                    <span className="text-xl font-bold text-[#EE7F00]">
                      {cmeContractCount}
                    </span>
                    口
                    <br />
                    {add > 0 ? (
                      <span className="font-bold text-green-600">符合</span>
                    ) : (
                      <span className="font-bold">不符合</span>
                    )}{' '}
                    獲得
                    <span className="text-xl font-bold text-[#EE7F00]">
                      {(add > 0 ? add : 1000).toLocaleString()} 元享樂券
                    </span>
                  </p>
                </div>
              </Card>
            )}
            <ScrollBar />
          </ScrollArea>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

type TitleProps = {
  title: string;
  word: string;
  rightWord?: string;
};

const Title = ({ title, word, rightWord }: TitleProps) => (
  <div className="absolute left-1/2 top-0 z-10 mx-auto w-[calc(100%-5rem)] -translate-x-1/2 -translate-y-[calc(50%+1px)] border-4 border-y-bo bg-gradient-band pt-1 text-center md:-translate-y-[calc(50%+2px)]">
    <div className="absolute -left-6 top-1 flex aspect-square h-11 rotate-45 items-center justify-center border-4 border-y-bo bg-[#D73A3A] text-white">
      <p
        className="main-title -rotate-45 font-title text-2xl leading-none text-white [--stroke-color:#472600] [--stroke-width:1px]"
        data-stroke="送"
      >
        {word}
      </p>
    </div>
    <div className="flex h-10 w-full items-center justify-center text-center">
      <h1
        className="main-title my-1 mb-[0.375rem] font-title text-xl leading-tight sm:text-2xl"
        data-stroke={title}
      >
        {title}
      </h1>
    </div>
    <div className="w-full border-t-4 border-y-bo bg-y-bg pt-1"></div>
    <div className="absolute -right-6 top-1 flex aspect-square h-11 rotate-45 items-center justify-center border-4 border-y-bo bg-[#D73A3A] text-white">
      <p
        className="main-title -rotate-45 font-title text-2xl leading-none text-white [--stroke-color:#472600] [--stroke-width:1px]"
        data-stroke="送"
      >
        {rightWord || word}
      </p>
    </div>
  </div>
);

export default Record;
