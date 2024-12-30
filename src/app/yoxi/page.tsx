import FadeInOnScroll from '@/components/animation-container/fade-in-on-scroll';
import YoxiForm from './components/form/yoxi-form';

const Page = () => {
  return (
    <>
      {/* 紅匡 */}
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2">
        {/* 200 */}
        <FadeInOnScroll>
          <div className="rounded-lg border-4 border-taxi-red p-5">
            <h1 className="text-2xl">期貨開戶成功</h1>
            <h1
              className="main-title-secondary text-3xl text-taxi-red [--stroke-color:#fff] [--stroke-shadow-color:#E6001D]"
              data-stroke="送200元&#8203;搭車金"
            >
              送200元&#8203;搭車金
            </h1>
          </div>
        </FadeInOnScroll>
        {/* 200 */}
        <FadeInOnScroll delay={0.3}>
          <div className="rounded-lg border-4 border-taxi-red p-5">
            <h1 className="text-2xl">
              差價契約
              <br className="md:hidden" />
              CFD開戶成功
            </h1>
            <h1
              className="main-title-secondary text-3xl text-taxi-red [--stroke-color:#fff] [--stroke-shadow-color:#E6001D]"
              data-stroke="送200元&#8203;搭車金"
            >
              送200元&#8203;搭車金
            </h1>
          </div>
        </FadeInOnScroll>
      </div>
      {/* 藍背景 */}
      <FadeInOnScroll delay={0.6}>
        <div className="rounded-lg bg-[#EFF2FF] p-5">
          <ul className="space-y-3 pl-6">
            <li className="before:absolute before:-ml-6 before:mr-2 before:text-lg before:text-red-500 before:content-['●']">
              請留下資料，後續由您所選擇地區專人聯繫協助(線上或線下)開戶，如開戶成功，可獲得搭車金！
            </li>
            <li className="before:absolute before:-ml-6 before:mr-2 before:text-lg before:text-red-500 before:content-['●']">
              開戶成功，<span className="underline">1個月內</span>
              將發送搭車序號至您簡訊，請留意訊息！
            </li>
          </ul>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.6}>
        <YoxiForm />
      </FadeInOnScroll>
    </>
  );
};

export default Page;
