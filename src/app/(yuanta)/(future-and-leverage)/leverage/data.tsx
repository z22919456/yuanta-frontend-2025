import read1Img from './assets/read1.png';
import read2Img from './assets/read2.png';
import read3Img from './assets/read3.png';

import sp1 from './assets/sp1.png';
import sp2 from './assets/sp2.png';
import sp3 from './assets/sp3.png';
import sp4 from './assets/sp4.png';

import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';

export const advantages = [
  {
    count: '優勢一',
    title: '規格彈性',
    text: '最小至0.01不受限於一口或一張',
    img: sp1,
  },
  {
    count: '優勢二',
    title: '進場門檻',
    text: '進場需求保證金低',
    img: sp2,
  },
  {
    count: '優勢三',
    title: '雙向持倉',
    text: '多空可同時持有策略組合更多元',
    img: sp3,
  },
  {
    count: '優勢四',
    title: '雙向交易',
    text: '市場漲跌都可做多空雙向輕鬆交易',
    img: sp4,
  },
];

export const steps = [
  {
    count: 'SETP1',
    title: '填寫資料',
    img: step1,
  },
  {
    count: 'SETP2',
    title: '線上簽署',
    img: step2,
  },
  {
    count: 'SETP3',
    title: '完成開戶',
    img: step3,
  },
];

export const products = [
  {
    name: '微那斯達克',
    code: 'MNQ',
    margin: 2442,
    tick: {
      value: 0.25,
      valueUnit: '點',
      price: 0.5,
      priceUnit: '美元',
    },
  },
  {
    name: '小那斯達克',
    code: 'NQ',
    margin: 24420,
    tick: {
      value: 0.25,
      valueUnit: '點',
      price: 5,
      priceUnit: '美元',
    },
  },
  {
    name: '微歐元',
    code: 'ECM',
    margin: 253,
    tick: {
      value: 1,
      valueUnit: '點',
      price: 1.25,
      priceUnit: '美元',
    },
  },
  {
    name: '日元',
    code: 'JY',
    margin: 3190,
    tick: {
      value: 0.5,
      valueUnit: '點',
      price: 6.25,
      priceUnit: '美元',
    },
  },
  {
    name: '微SP指數',
    code: 'MES',
    margin: 1606,
    tick: {
      value: 0.25,
      valueUnit: '點',
      price: 1.25,
      priceUnit: '美元',
    },
  },
  {
    name: '微道瓊指數',
    code: 'MYM',
    margin: 1144,
    tick: {
      value: 1,
      valueUnit: '點',
      price: 0.5,
      priceUnit: '美元',
    },
  },
  {
    name: '小道瓊指數',
    code: 'YM',
    margin: 11440,
    tick: {
      value: 1,
      valueUnit: '點',
      price: 5,
      priceUnit: '美元',
    },
  },
  {
    name: '輕原油',
    code: 'CL',
    margin: 5720,
    tick: {
      value: 0.01,
      valueUnit: '美元/桶',
      price: 10,
      priceUnit: '美元',
    },
  },
  {
    name: '微黃金',
    code: 'MGC',
    margin: 1265,
    tick: {
      value: 0.1,
      valueUnit: '美元/盎司',
      price: 1,
      priceUnit: '美元',
    },
  },
  {
    name: '黃金',
    code: 'GC',
    margin: 12650,
    tick: {
      value: 0.1,
      valueUnit: '美元/盎司',
      price: 10,
      priceUnit: '美元',
    },
  },
  {
    name: 'H50指數',
    code: 'SFCH',
    margin: 2420,
    tick: {
      value: 2.5,
      valueUnit: '點',
      price: 5,
      priceUnit: '美元',
    },
  },
  {
    name: '富時台灣',
    code: 'STWN',
    margin: 5280,
    tick: {
      value: 0.25,
      valueUnit: '點',
      price: 10,
      priceUnit: '美元',
    },
  },
  {
    name: '大阪小日經',
    code: 'JNM',
    margin: 231649,
    tick: {
      value: 5,
      valueUnit: '點',
      price: 500,
      priceUnit: '日圓',
    },
  },
  {
    name: '大阪微日經',
    code: 'JNU',
    margin: 23165,
    tick: {
      value: 5,
      valueUnit: '點',
      price: 50,
      priceUnit: '日圓',
    },
  },
  {
    name: '微DAX指數',
    code: 'FDXS',
    margin: 1420,
    tick: {
      value: 1,
      valueUnit: '點',
      price: 1,
      priceUnit: '歐元',
    },
  },
];

export const readContexts = {
  CFD: {
    image: read1Img,
    text: [
      '主管機關開放期貨商承作更多國外期貨交易，並新增多檔美股。',
      '可交易AI相關個股如輝達、超微，及話題性股票如特斯拉，超過百檔。',
      '美股CFD提供雙向交易、槓桿資金效率，且做空可得隔夜利息。',
    ],
  },
  JPA: {
    image: read2Img,
    text: [
      '日本推出永久免稅投資帳戶NISA，提升股市流動性。',
      '波克夏增持日本五大商社，巴菲特投資被視為日本市場的重要信號。',
      '日央行升息及退出負利率政策引發股匯市場波動。',
      'CFD商品提供日圓交易對，且日經225指數交易門檻低至約12美元。',
    ],
  },
  GOLD: {
    image: read3Img,
    text: [
      '美聯儲降息降低持有黃金的機會成本，提升黃金吸引力。',
      '全球經濟放緩，黃金成為對抗市場波動和政策不確定性的首選。',
      '川普連任，中東緊張局勢及俄烏戰爭鞏固黃金避險地位。',
      '黃金CFD具小單位彈性與20倍槓桿，成為2024交易重點商品之一。',
    ],
  },
};

export const infoContexts = {
  whatIsFutures: [
    '期貨是一種金融合約，買賣雙方約定在未來某一特定日期 以預定的價格交割某種資產或商品。',
    '這種合約通常應用於大宗商品（如石油、黃金、農產品）或金融工具（如股指、利率）。',
    '期貨合約的主要用途是用來對沖風險或投機',
    '交易人可以透過期貨市場在不實際持有資產的情況下，可賺取價差或鎖定成本。',
  ],
  whatIsOptions: [
    '選擇權是一種契約所表彰的是一種權利，其買方有權利但沒有義務，在未來的特定日期或之前，以特定的價格購買或出售一定數量的標的物。',
    <>
      選擇權<strong className="font-extrabold">賣方</strong>
      向買方<strong className="font-extrabold">收取權利金</strong>，取得買權CALL
      或賣權PUT，於特定期間內，依特定價格及數量等交易條件買賣現貨之契約；選擇權之
      <strong className="font-extrabold">賣方</strong>
      ，於買方要求履約時，有依選擇權約定
      <strong className="font-extrabold">履行契約之義務</strong>。
    </>,
  ],
  whyFutures: [
    '高槓桿效應：僅需支付少量保證金即可控制大額資金，提高資金利用率。',
    '雙向交易：可買多或賣空，無論市場上漲或下跌都有機會盈利。',
    '流動性強：期貨市場交易活躍，易於快速進出場，不易受到大額資金影響。',
    '避險工具：企業或投資者可利用期貨鎖定未來價格，降低市場波動風險。',
    '透明度高：期貨市場資訊公開，價格波動由市場供需決定，減少操縱風險。',
    '標準化合約：合約條件固定，便於交易和結算，降低交易摩擦。',
    '價格發現功能：期貨市場可反映未來價格預期，為現貨市場提供價格參考。',
  ],
  whyOptions: [
    '有限風險：買方的最大損失僅限於支付的權利金，風險可控。',
    '靈活性高：投資者可以選擇行使或放棄權利，根據市場狀況靈活應對。',
    '多樣化策略：可透過組合不同選擇權合約，設計多種投資策略。',
    '資金需求低：買方只需支付權利金即可參與高價值合約交易。',
    '非線性收益：選擇權價格變動可能帶來非線性回報，提供更大的收益空間。',
    '時間價值：選擇權價格隨著到期日臨近而變動，時間因素成為投資策略一部分',
  ],
};
