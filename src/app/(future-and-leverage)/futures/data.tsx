import read2Img from '@/app/(future-and-leverage)/assets/read2.png';
import read3Img from '@/app/(future-and-leverage)/assets/read3.png';
import read4Img from '@/app/(future-and-leverage)/assets/read4.png';

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
];

export const products2 = [
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
  stocks: {
    image: read2Img,
    text: [
      '2024年微小型商品佔國外期權交易量47%，較2020年增9%，顯示投資人偏好微小型合約。',
      '微型合約保證金僅為小型合約的十分之一，適合初學者使用。',
    ],
  },
  review: {
    image: read3Img,
    text: [
      '2024年以巴衝突、美國大選等事件帶動指數期貨成為參與全球市場的熱門工具。',
      '指數期貨占國外期權權交易量70%以上，顯示其高需求。',
      '道瓊、那指等指數商品可掌握美股行情，A50適合政策交易，投資人可靈活布局。',
    ],
  },
  trends: {
    image: read4Img,
    text: [
      '全球事件如戰爭、天災影響原物料與能源商品價格。',
      '商品期貨能避險或靈活交易，應對市場波動。',
      '黃金、原油和匯率商品在動盪市場中仍具重要地位。',
    ],
  },
};
