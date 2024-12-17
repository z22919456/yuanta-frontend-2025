const Footer = () => {
  return (
    <footer className="relative z-50 w-full bg-[#0E0227] font-light text-white">
      <div className="container">
        <p className="py-5 text-sm">
          期權及槓桿保證金契約各類型交易，皆具高財務槓桿特性，交易人可能承受極大的損失亦或有極大獲利，且需承擔交易上及其他損失之風險（該風險可能極為重大）；又使用電子式交易，仍可能面臨斷線、斷電、網路壅塞等不確定因素，致使買賣指令無法即時傳送或延遲。以上風險甚為簡要，對所有投資風險及影響市場行情之因素無法逐一詳述，交易人應依自身之財務狀況、經驗、目標及其他相關情況，審慎評估此類交易是否合宜，交易人也應確認完全瞭解個別契約、交易及合約權利義務特性及所暴露損失風險的特性及範圍後為之。且本公司將不負責工具或任何交易所產生的任何損失。元大期貨
          許可證照字號：110年金管期總字第 001 號
        </p>
      </div>

      <div className="bg-[#0E0227] py-2 text-center text-sm">
        <div className="container block justify-center space-x-0 lg:flex lg:space-x-5">
          <p>
            客戶服務專線：
            <a href="tel://0223261000">(02)2326-1000</a> /{' '}
            <a href="tel://0800333338">0800-333-338</a>
          </p>
          <p>
            電話：<a href="tel://022717-6000">(02)2717-6000</a>
          </p>
          <p>地址：臺北市中山區南京東路二段77號2樓(部分)、3、4、5樓。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
