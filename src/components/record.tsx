import Card from './card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from './ui/dialog';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const Record = () => {
  return (
    <Dialog open={true}>
      <DialogContent className="max-h-full rounded-lg border-4 border-y-tab-bo bg-y-wall">
        <DialogHeader>
          <p className="text-center text-white">
            親愛的XXX您好
            <br />
            以下是您槓桿春節的成績：
          </p>
        </DialogHeader>
        <DialogDescription className="rounded-2xl border-4 border-y-bo bg-[#FFEEDC] p-2">
          <ScrollArea>
            <Card className="relative mt-10 box-content overflow-visible rounded-t-none border-t-0 pt-20">
              <Title title="新春送紅包" word="送" />
              <div className="-mt-8 h-full w-full">
                <p className="mb-5 text-center text-xl">
                  春節活動期間，您累積交易口數為XXX口
                  <br /> <span className="font-bold text-green-600">符合</span>
                  <span className="font-bold">不符合</span> 獲得
                  <span className="text-[#EE7F00]">【200元享樂券】</span>
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
            <Card className="relative mt-10 box-content overflow-visible rounded-t-none border-t-0 pt-20">
              <Title title="步行萬里，滿額送禮" word="滿" />
              <div className="-mt-8 h-full w-full">
                <p className="mb-5 text-center text-xl">
                  新春期間，您累積交易口數XXX口
                  <br />
                  <span className="font-bold text-[#EE7F00]">第幾獎</span>
                  <span className="font-bold text-green-600">符合</span>
                  <span className="font-bold">不符合</span> 獲得
                  <span className="text-[#EE7F00]">【200元享樂券】</span>
                </p>
              </div>
            </Card>

            <Card className="relative mt-10 box-content overflow-visible rounded-t-none border-t-0 pt-20">
              <Title title="新春送紅包" word="送" />
            </Card>
            <Card className="relative mt-10 box-content overflow-visible rounded-t-none border-t-0 pt-20">
              <Title title="新春送紅包" word="送" />
            </Card>
            <Card className="relative mt-10 box-content overflow-visible rounded-t-none border-t-0 pt-20">
              <Title title="新春送紅包" word="送" />
            </Card>
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
  <div className="absolute left-1/2 top-0 z-10 mx-auto w-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2 border-4 border-y-bo bg-gradient-band pt-1 text-center">
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
        className="main-title my-1 mb-[0.375rem] font-title text-2xl leading-tight"
        data-stroke="新春送紅包"
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
