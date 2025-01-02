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
  desc?: string;
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
        margin: 34.71,
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
        margin: 41.71,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'USD/CHF',
        code: '美元/瑞朗',
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
        margin: 31.1,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'NZD/USD',
        code: '紐幣/美元',
        margin: 28.12,
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
        margin: 131.94,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XAG/USD',
        code: '白銀',
        margin: 150.24,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XTI/USD',
        code: '西德州',
        margin: 69.62,
        desc: '最小交易手數：0.01手',
      },
      {
        name: 'XBR/USD',
        code: '布蘭特',
        margin: 73.26,
        desc: '最小交易手數：0.01手',
      },
    ],
  },

  {
    code: 'globalIndexProducts',
    title: '國際指數商品',
    desc: '註：國際指數作業處理費為成交金額之萬分之一。',
    products: [
      {
        name: 'US30',
        code: '道瓊',
        margin: 216.63,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'SPX500',
        code: 'S&P500',
        margin: 30.19,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'NAS100',
        code: '那斯達克100指數',
        margin: 108.84,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'DAX30',
        code: '德國DAX指數',
        margin: 1034.32,
        desc: '最小交易手數：0.1手',
      },
      {
        name: 'NK225',
        code: '日經225指數',
        margin: 12.52,
        desc: '最小交易手數：1手',
      },
      {
        name: 'HSI50',
        code: '恆生指數',
        margin: 258.74,
        desc: '最小交易手數：0.1手',
      },
    ],
  },
  {
    code: 'usCfdProducts',
    title: '美股CFD商品',
    desc: '註：美股CFD作業處理費為成交金額之千分之一；低收5美元。',
    products: [
      {
        name: 'Apple',
        code: 'AAPL',
        margin: 38.85,
        desc: '保證金比例：15%',
        lastPrice: 259.02,
        lastDate: '12/27',
      },
      {
        name: 'NVIDIA',
        code: 'NVDA',
        margin: 34.98,
        desc: '保證金比例：25%',
        lastPrice: 139.93,
        lastDate: '12/27',
      },
      {
        name: 'Tesla, Inc.',
        code: 'TSLA',
        margin: 90.83,
        desc: '保證金比例：20%',
        lastPrice: 454.13,
        lastDate: '12/27',
      },
      {
        name: 'Amazon\t.com',
        code: 'AMZN',
        margin: 34.06,
        desc: '保證金比例：15%',
        lastPrice: 227.05,
        lastDate: '12/27',
      },
      {
        name: 'Meta platform, Inc',
        code: 'META',
        margin: 90.5,
        desc: '保證金比例：15%',
        lastPrice: 603.35,
        lastDate: '12/27',
      },
      {
        name: 'Netflix, Inc.',
        code: 'NFLX',
        margin: 138.62,
        desc: '保證金比例：15%',
        lastPrice: 924.14,
        lastDate: '12/27',
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
