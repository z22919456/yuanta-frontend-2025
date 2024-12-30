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

export type Group = {
  name: string;
  desc: string;
};

export type Product = {
  name: string;
  code: string;
  margin: number;
  desc: string;
  lastPrice?: number;
  lastDate?: string;
};

export type ProductGroup = {
  code: string;
  title: string;
  products: Product[] | Group[];
};

export const products: ProductGroup[] = [
  {
    code: 'forexProducts',
    title: '外匯商品',
    products: [
      {
        name: 'EUR/USD',
        code: '歐元/美元',
        margin: 34.92,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'USD/JPY',
        code: '美元/日幣',
        margin: 33.3,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'GBP/USD',
        code: '英鎊/美元',
        margin: 41.85,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'USD/CHF',
        code: '美元/瑞郎',
        margin: 33.3,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'USD/CAD',
        code: '美元/加幣',
        margin: 33.3,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'AUD/USD',
        code: '澳幣/美元',
        margin: 32.36,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'NZD/USD',
        code: '紐幣/美元',
        margin: 29.17,
        desc: '最小交易手數：0.01手',
      },
    ],
  },
  {
    code: 'commodityProducts',
    title: '大宗商品',
    products: [
      {
        name: 'XAU/USD',
        code: '黃金',
        margin: 131.02,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XAG/USD',
        code: '白銀',
        margin: 151.94,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XTI/USD',
        code: '西德州',
        margin: 68.77,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XBR/USD',
        code: '布蘭特',
        margin: 72.81,
        desc: '最小交易手數：0.01手',
      },
    ],
  },
  {
    code: 'usCfdProducts',
    title: '美股CFD商品',
    products: [
      {
        name: 'US30',
        code: '道瓊',
        margin: 224.3,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'SPX500',
        code: 'S&P500',
        margin: 30.11,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'NAS100',
        code: '那斯達克100指數',
        margin: 104.61,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'DAX30',
        code: '德國DAX指數',
        margin: 1011.69,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'NK225',
        code: '日經225指數',
        margin: 12.55,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'HSI50',
        code: '恆生指數',
        margin: 246.17,
        desc: '最小交易手數：0.1手',
      },
    ],
  },
  {
    code: 'globalIndexProducts',
    title: '國際指數商品',
    products: [
      {
        name: 'Apple',
        code: 'AAPL',
        margin: 29.38,
        desc: '保證金比例：15%',
        lastPrice: 195.89,
        lastDate: '11/26',
      },
      {
        name: 'Ford Motor',
        code: 'F',
        margin: 2.39,
        desc: '保證金比例：20%',
        lastPrice: 11.95,
        lastDate: '11/26',
      },
      {
        name: 'Advanced Micro Devices',
        code: 'AMD',
        margin: 27.78,
        desc: '保證金比例：20%',
        lastPrice: 138.9,
        lastDate: '11/26',
      },
      {
        name: 'NVIDIA',
        code: 'NVDA',
        margin: 100.15,
        desc: '保證金比例：20%',
        lastPrice: 500.77,
        lastDate: '11/26',
      },
      {
        name: 'Tesla, Inc.',
        code: 'TSLA',
        margin: 50.42,
        desc: '保證金比例：20%',
        lastPrice: 252.08,
        lastDate: '11/26',
      },
      {
        name: 'Amazon\t.com',
        code: 'AMZN',
        margin: 23.11,
        desc: '保證金比例：15%',
        lastPrice: 154.07,
        lastDate: '11/26',
      },
    ],
  },
  {
    code: 'tradingProductTypes',
    title: '交易商品類別',
    products: [
      {
        name: '外匯保證金',
        desc: 'EUR/USD、GBP/USD、USD/JPY 等等…\n高達32種貨幣對',
      },
      { name: '大宗商品', desc: '黃金\n白銀\n原油' },
      {
        name: '國際指數',
        desc: '道瓊、那斯達克、標普500、 德國DAX、日經225、恆生50',
      },
      { name: '美股&ETF', desc: '美國個股、ETF' },
    ],
  },
];

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
