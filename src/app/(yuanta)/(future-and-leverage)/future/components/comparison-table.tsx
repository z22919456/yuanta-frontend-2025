import Image from 'next-image-export-optimizer';
import thumbImg from '../../assets/thumb.png';

const data = [
  {
    title: '商品特性',
    domestic: '股票(張)',
    foreign: '國外期貨(口)',
    good: true,
  },
  {
    title: '春節交易',
    domestic: '台股關盤',
    foreign: '元大期貨不打烊！',
    good: true,
  },
  {
    title: '合約規格',
    domestic: '1張=1,000股',
    foreign: '• 槓桿倍數較大\n• 可依照不同合約做交易選擇',
    good: true,
  },
  {
    title: '所需資金',
    domestic: '股價 x 1,000元',
    domesticDesc: '(需支付股價全額)',
    foreign: '保證金通常為合約價值的5%-15%',
    good: true,
  },
  {
    title: '手續費',
    domestic: '依股票市價%計算',
    foreign: '每口手續費固定',
  },
  {
    title: '交易稅',
    domestic: '來回千分之三',
    domesticDesc: '(0.003)',
    foreign: '無交易稅',
    good: true,
  },
  {
    title: '當沖',
    domestic: '需申請資格',
    foreign: '需申請資格 (保證金減半)',
  },
  {
    title: '交易方式',
    domestic: 'T+2交割',
    foreign: '保證金',
  },
  {
    title: '交易時間',
    domestic: '09:00~13:30',
    foreign: '07:00-次日06:00',
  },
  {
    title: '交易特性',
    domestic: '以做多為主，放空有限制',
    foreign: '交易成本低，具槓桿效果，小資金可操作',
  },
  {
    title: '交易限制',
    domestic: '做空、當沖等交易限制多',
    foreign: '商品有到期限制，到期後需轉倉',
  },
];

const ComparisonTable = () => {
  return (
    <div>
      <table className="w-full table-auto text-center">
        <thead>
          <tr className="text-xl font-bold md:text-2xl">
            <th className="w-1/6"></th>
            <th className="">
              <div className="rounded-tl-lg bg-blue-500 p-2 text-base text-white md:py-4">
                股票(張)
              </div>
            </th>
            <th>
              <div className="rounded-tr-lg bg-[#FF842A] p-2 text-base text-white md:py-4">
                國外期貨(口)
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-base text-gray-900 md:text-xl [&>tr:first-child>td:first-child]:rounded-tl-lg [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg [&>tr:last-child]:border-b-0">
          {data.map(({ title, foreign, domestic, domesticDesc, good }, i) => (
            <tr className="border-b-2 border-white" key={i}>
              <td className="bg-gray-200 px-2 py-2 text-xs font-semibold md:px-4 md:text-base">
                {title}
              </td>
              <td className="border-l-2 border-white bg-[#EEF8FF] p-2 md:px-4">
                {domestic}
                <br />
                <span className="text-xs text-gray-500">{domesticDesc}</span>
              </td>
              <td className="relative border-l-2 border-white bg-[#FFDDC3] p-2 md:px-4">
                {foreign}
                {good && (
                  <Image
                    src={thumbImg}
                    alt="比較優"
                    className="absolute -right-2 top-1/2 z-30 h-10 w-10 -translate-y-1/2 translate-x-1/2"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
