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
