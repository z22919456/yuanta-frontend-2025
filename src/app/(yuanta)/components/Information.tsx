'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Triangle } from 'lucide-react';
import { useState } from 'react';

const Information = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'relative z-20 mt-10 w-full bg-white text-gray-600',
        open ? '' : 'relative max-h-96 overflow-hidden'
      )}
    >
      <div className="container mx-auto space-y-5 text-base [&_h1]:font-default [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:font-default [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-3 [&_h3]:font-default [&_h3]:text-xl [&_h3]:font-bold">
        <h1 className="text-center">注意事項</h1>
        <h2>外期規則</h2>
        <hr />
        <div className="section">
          <h3>★ 活動資格</h3>
          <ol className="list-decimal space-y-1 pl-6">
            <li>交易本活動以每人(ID歸戶)作為交易量統計及獎品兌換單位。</li>
            <li>
              新開戶資格
              2025/01/01-02/28期間於元大期貨或所屬券商合作夥伴完成新開立期貨帳戶，且從未於元大期貨開過期貨戶。
            </li>
            <li>
              靜止戶資格 已於元大期貨或所屬券商合作夥伴完成開立期貨帳戶，
              且2024/06/01-2024/12/31從未交易國外活動商品者。
            </li>
            <li>
              本活動資格包含員工戶，但不包含法人戶以及中華民國稅法規定非中華民國境內居住之個人(即在中華民國境內居住未達183天之本國人及外國人)。
            </li>
          </ol>
        </div>

        <div className="section">
          <h3>★ 活動商品</h3>
          <p>指定交易所商品(CME、SGX、HKEX、JPX與EUREX)</p>
          <p className="my-2 max-w-fit rounded-lg bg-yellow-100 px-3 py-2">
            {'💡 日盤/ 微日經期、微日經選 >> 交易 2口=1口 計算'}
          </p>
        </div>

        <div className="section">
          <h3>★ 外期春節活動說明：</h3>

          <ol className="list-decimal space-y-1 pl-6">
            <li>
              <strong className="text-lg">五告蘋安啦</strong>
              <br />
              活動期間，交易10口獲一次抽獎機會，抽獎機會無上限。本次活動分2階段抽獎，封關前1/22抽出AirPods
              Pro 2兩名、活動結束後抽出iPhone 16 Pro Max
              256G五名。抽獎次數，依照整個活動期間計算，第一次封關前中獎者，口數將重新計算。
            </li>
            <li>
              <strong className="text-lg">新春送紅包</strong>
              <br />
              活動期間，新戶/靜止戶交易1筆，可獲 200元獎勵金！
            </li>
            <li>
              <strong className="text-lg">步行萬里，滿額送禮</strong>
              <br />
              活動期間，不論新舊戶累積交易達指定口數門檻，即可獲得指定好禮！
              (每ID限領乙次)
            </li>
          </ol>
        </div>

        <h2>槓桿規則</h2>
        <hr />
        <div className="section">
          <h3>★ 活動資格</h3>
          <ol className="list-decimal space-y-1 pl-6">
            <li>交易本活動以每人(ID歸戶)作為交易量統計及獎品兌換單位。</li>
            <li>
              新開戶資格
              2025/01/01-02/28期間，於元大期貨完成開立槓桿交易帳戶，且從未於元大期貨槓桿交易商開立帳戶。
            </li>
            <li>
              靜止戶資格
              已於元大期貨完成開立槓桿交易帳戶，且2024/06/01-2024/12/31從未交易活動商品者。
            </li>
            <li>
              本活動資格包含員工戶，但不包含法人戶以及中華民國稅法規定非中華民國境內居住之個人(即在中華民國境內居住未達183天之本國人及外國人)。
            </li>
          </ol>
        </div>

        <div className="section">
          <h3>★ 活動商品</h3>
          <p>指定元大期貨槓桿交易商之差價契約商品</p>
          <table className="border [&_td]:border [&_td]:px-3 [&_td]:py-1">
            <thead>
              <tr className="border [&_th]:border [&_th]:px-3 [&_th]:py-1">
                <th>活動商品類別</th>
                <th>活動點數計算</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>外匯型、白銀、黃金、原油交易1手</td>
                <td>1點</td>
              </tr>
              <tr>
                <td>國外股指商品成交金額達100,000元美金</td>
                <td>1點</td>
              </tr>
              <tr>
                <td>國外個股商品成交金額達10,000元美金</td>
                <td>1點</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <h3>★ 贈品兌獎說明</h3>
          <ol className="list-decimal space-y-1 pl-6">
            <li>
              本活動所有贈品(含電子票券)，於活動結束後由所屬業代進行聯繫，客戶需填寫得獎確認單後，於活動結束後
              <strong>兩個月</strong>
              內寄至客戶指定地址。如遇天候、雨量過大致道路封閉或郵運不便等不可抗力因素，或市場因素，如延後上市、延長預售或通路貨源影響等，導致送達時間遲延者則不在此限。
            </li>
            <li>
              本次抽獎獎品規格為iPhone 16 Pro Max 256G、AirPods Pro
              2，不可挑選顏色，如遇贈品缺貨、斷貨等不可抗力之事由導致獎品內容須變更，本公司有權變更贈品為同款不同色之商品。
            </li>
            <li>
              本活動所贈送&lt;品牌面額享樂券&gt;，皆為「PayEasy康迅數位整合股份有限公司」所販售之電子票券，發送兌換贈品序號至開戶時註冊之電子信箱與手機簡訊。若開戶資料中未提供手機號碼或電子信箱之客戶，視為放棄本活動得獎資格，後不補發兌獎簡訊與贈品序號，且贈品序號須於指定兌換期限內完成領取，如逾期將視同放棄活動贈品獎項，後亦不另行補發。電子兌換憑證為不記名，任何人持有皆可兌換，請自行妥善保管，如遭他人盜用，恕不補發。
            </li>
            <li>
              元大期貨之電子兌換券由「PayEasy禮贈平台」提供，與本公司並無任何代理關係，如因使用兌換或服務產生任何爭議，將由PayEasy負責，電子兌換券若有任何疑問，請於台灣時間週一至週五上午9:00至下午6:00電洽PayEasy客服專線：02-5569-1616。
            </li>
            <li>
              本活動電子禮券之贈品使用方式與相關限制，悉依該獎項所載附之使用說明及相關須知為準，若有疑問請洽商品廠商或服務提供者，如因使用本獎項而引起之爭議、糾紛、損害賠償，由商品廠商或服務提供者負責。
            </li>
          </ol>
        </div>

        <div className="section">
          <h3>★ 其他注意事項</h3>
          <ol className="list-decimal space-y-1 pl-6">
            <li>
              本活動依中華民國稅法規定，得獎人如在中華民國境內有固定營業場所之營利事業，或為中華民國境內居住之個人，且獎項超過新台幣2萬元，本公司將代扣繳10%所得稅。如非中華民國境內居住之個人，或在中華民國境內無固定營業場所之營利事業，不論得獎人所得之金額，將代扣繳20%稅金
            </li>
            <li>
              參加本活動所提供之個人資料，視同個人資料保護法授權同意可做本公司於本活動之得獎資料核對、領獎聯絡通知、獎品兌換領取等使用，無法提供個人資料的參加者或得獎者視同放棄獎項，不再另行通知，亦不補發。
            </li>
            <li>
              中獎人(納稅義務人)於本公司(扣繳義務人)之全年中獎總金額超過新台幣1,000元(含)以上，年底時元大期貨將依稅法相關規定辦理開立扣繳憑單。
            </li>
            <li>
              本活動之贈品不得轉讓，不得要求更換其他款式、規格或以現金折抵贈品價格，亦不適用其他促銷專案，本公司就活動獎項內容得依實際狀況斟酌調整，並保留隨時修改、變更、終止或暫停本活動及替換其他等值贈品之權利，得獎者應配合元大期貨相關公關活動宣傳，若有任何疑問，請洽元大期貨24小時客服專線
              0800-333-338。
            </li>
            <li>
              本活動係以客戶實際成交資料為統計依據，參加活動者需自負盈虧，報名前應先了解相關法令及風險預告書，且投資具有一定之風險，參加者不得以不知其規定為由，提出任何主張，亦不得請求活動期間產生損失之賠償。
            </li>
          </ol>
        </div>
      </div>
      <div
        className={cn(
          open
            ? 'pt-5 text-center'
            : 'absolute bottom-0 flex h-1/2 w-full items-end justify-center bg-gradient-to-t from-white via-white to-transparent'
        )}
      >
        <Button
          className="mb-4 mt-auto"
          onClick={() => setOpen((t) => !t)}
          variant="ghost"
        >
          {open ? (
            <>
              <Triangle size="16" fill="" className="mr-1" />
              關閉注意事項
              <Triangle size="16" fill="" className="mr-1" />
            </>
          ) : (
            <>
              <Triangle size="16" fill="" className="mr-1 rotate-180" />
              展開看更多
              <Triangle size="16" fill="" className="mr-1 rotate-180" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Information;
