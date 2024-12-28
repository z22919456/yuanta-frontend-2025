import Image from 'next-image-export-optimizer';
import thumbImg from '../../assets/thumb.png';

const data = [
  {
    title: '資金安全',
    domestic: '極低',
    foreign: '高',
    good: true,
  },
  {
    title: '國際匯費',
    domestic: '有',
    foreign: '無',
    good: true,
  },
  {
    title: '出入金手續費',
    domestic: '高',
    foreign: '元大銀行、國泰世華\n銀行免手續費',
    good: true,
  },
  {
    title: '專屬窗口',
    domestic: '無',
    foreign: '有',
    good: true,
  },
];

const ComparisonTable = () => {
  return (
    <div>
      <table className="w-full table-auto text-center">
        <thead>
          <tr className="text-xl font-bold md:text-2xl">
            <th className="w-1/6"></th>
            <th className="border--2 w-5/12 items-stretch rounded-tl-lg border-b-2 border-white bg-blue-500 text-base text-white">
              海外券商
            </th>
            <th className="w-5/12 rounded-tr-lg border-b-2 border-white bg-[#FF842A] p-2 text-base text-white md:py-4">
              元大槓桿交易商
            </th>
          </tr>
        </thead>
        <tbody className="text-base text-gray-900 md:text-xl [&>tr:first-child>td:first-child]:rounded-tl-lg [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg [&>tr:last-child]:border-b-0">
          {data.map(({ title, foreign, domestic, good }, i) => (
            <tr className="border-b-2 border-white" key={i}>
              <td className="bg-gray-200 px-2 py-2 text-xs font-semibold md:px-4 md:text-base">
                {title}
              </td>
              <td className="border-l-2 border-white bg-[#EEF8FF] p-2 md:whitespace-pre-line md:px-4">
                {domestic}
              </td>
              <td className="relative border-l-2 border-white bg-[#FFDDC3] p-2 px-4 sm:whitespace-pre-line">
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
