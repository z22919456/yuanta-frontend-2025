import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Building, Clock, MapPin } from 'lucide-react';
import { Fragment } from 'react';

const data = [
  {
    city: '台北',
    date: '114/1/8(三)',
    time: '14:30 - 16:00',
    location: {
      name: '犇亞會議中心',
      address: '台北市復興北路99號\n2樓201廳',
      map: 'https://maps.app.goo.gl/paQotu1RWLw6gGf66',
    },
    sessions: [
      {
        start: '14:30',
        end: '14:40',
        topic: '長官致詞',
        content: '長官開場致詞\n春節活動介紹',
        moderator: '林妙鴒',
      },
      {
        start: '14:40',
        end: '15:20',
        topic: '川普2.0下全球經濟與市場展望',
        content: '1.全球經濟展望\n2.川普2.0大解析市場展望',
        moderator: '元大投顧\n顏承暉 博士',
      },
      {
        start: '15:20',
        end: '16:00',
        topic: ' 高波動金融市場善用策略訊號',
        content: '1.價格通道及均線的結合\n2.相關標的的交易策略',
        moderator: '通路暨顧問事業部\n曾崇銘經理',
      },
    ],
  },
  {
    city: '高雄',
    date: '114/1/10(五)',
    time: '19:30 - 21:00',
    location: {
      name: '思博客商務中心',
      address: '高雄市新興區\n民生一路56號B1-1',
      map: 'https://maps.app.goo.gl/rVRMgu7FXaGhyz9i9',
    },
    topic: '從當沖到波段\n期貨交易全攻略',
    sessions: [
      {
        start: '19:00',
        end: '19:50',
        topic: '川普2.0的台美經濟展望',
        content: '1.2025台美經濟展望\n2.海內外熱門期貨前景\n3.春節活動介紹',
        moderator: '陳冠豪\n期貨分析師',
      },
      {
        start: '19:50',
        end: '20:30',
        topic: '高波動金融市場\n善用策略訊號',
        content: '1.價格通道及均線的結合\n2.相關標的的交易策略',
        moderator: '通路暨顧問事業部\n曾崇銘經理',
      },
    ],
  },
];

const Agenda = () => {
  return (
    <>
      <div className="block space-y-4 py-4 text-gray-600 lg:hidden">
        {data.map((item, index) => (
          <div className="block rounded-lg border p-3 shadow" key={index}>
            <div className="flex items-start justify-between">
              <p className="mb-2 rounded bg-y-tab-active-bo/40 p-1 text-3xl font-medium">
                {item.city}
              </p>
              <p className="text-gray-500">
                {item.date} {item.time}
              </p>
            </div>
            <p className="mb-1">
              <Building className="mr-2 inline" strokeWidth="1" />
              {item.location.name}
            </p>
            <p>
              <MapPin className="mr-2 inline" strokeWidth="1" />
              <a
                href={item.location.map}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.location.address}
              </a>
            </p>
            <p className="pb-1 pt-2 font-medium">論壇主題： {item.topic}</p>
            <ScrollArea className="w-full">
              <div className="flex space-x-2">
                {item.sessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex w-11/12 shrink-0 flex-col rounded bg-y-wall/10 px-4 py-3"
                  >
                    <div className="font-medium">{session.topic}</div>
                    <div className="text-left text-sm">
                      <Clock
                        className="mr-1 inline"
                        strokeWidth="1"
                        size="16"
                      />
                      {session.start} - {session.end}
                    </div>
                    <hr className="my-1 border-gray-400" />
                    <div className="mb-auto">
                      {session.content.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-3 text-right text-sm">
                      {session.moderator}
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {/* <td className="border border-black px-3 py-3 text-center">
              {session.networkTime}
            </td>
            <td className="border border-black px-3 py-3">{session.topic}</td>
            <td className="border border-black px-3 py-3">
              {session.content.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </td>
            <td className="border border-black px-3 py-3">
              {session.moderator.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </td> */}
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <table className="w-full table-auto overflow-clip text-clip rounded-2xl text-gray-600">
          <thead>
            <tr className="rounded-t-lg bg-blue-500 text-white [&_th]:border-b-2 [&_th]:border-l-2 [&_th]:border-white [&_th]:px-6 [&_th]:py-4 first:[&_th]:border-l-0">
              <th className="w-1/12">場次</th>
              <th className="w-1/12">時間</th>
              <th className="w-1/6">地點</th>
              <th className="w-1/12">網路時間</th>
              <th className="w-1/6">論壇主題</th>
              <th className="w-1/4">論壇內容</th>
              <th className="w-1/6">主持人及講師</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {data.map((item, index) => (
              <Fragment key={index}>
                <tr className="bg-table-blue [&_td]:border-b-2 [&_td]:border-l-2 [&_td]:border-white first:[&_td]:border-l-0">
                  <td
                    rowSpan={item.sessions.length + 1}
                    className="p-3 text-center"
                  >
                    <p className="text-2xl font-bold">{item.city}</p>
                  </td>
                  <td
                    rowSpan={item.sessions.length + 1}
                    className="p-3 text-center"
                  >
                    {item.date}
                    <br />
                    {item.time}
                  </td>
                  <td
                    rowSpan={item.sessions.length + 1}
                    className="p-3 text-center"
                  >
                    <p className="text-xl">{item.location.name}</p>
                    <br />
                    <a
                      href={item.location.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.location.address.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </a>
                  </td>
                </tr>
                {item.sessions.map((session, index) => (
                  <tr
                    key={index}
                    className="bg-table-orange [&_td]:border-b-2 [&_td]:border-l-2 [&_td]:border-white"
                  >
                    <td className="p-3 text-center">
                      {session.start} <br />| <br /> {session.end}
                    </td>
                    {item.topic ? (
                      index == 0 && (
                        <td className="p-3" rowSpan={item.sessions.length}>
                          {item.topic}
                        </td>
                      )
                    ) : (
                      <td className="p-3">{session.topic}</td>
                    )}
                    <td className="p-3">
                      {session.content.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </td>
                    <td className="p-3">
                      {session.moderator.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Agenda;
