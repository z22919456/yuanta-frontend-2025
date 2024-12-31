import FadeInOnScroll from '@/components/animation-container/fade-in-on-scroll';
import Image from '@/lib/image';
import checkImg from '../assets/check.png';

const thankyou = () => {
  return (
    <FadeInOnScroll>
      <div className="mx-auto max-w-lg space-y-2 rounded-lg border-6 border-taxi-red p-5 text-center">
        <Image src={checkImg} alt="送單成功" className="mx-auto" />
        <h1
          className="main-title-secondary text-3xl text-taxi-red [--stroke-color:#fff] [--stroke-shadow-color:#E6001D]"
          data-stroke="送單成功"
        >
          送單成功
        </h1>
        <p>將會有專人與您聯繫，了解更多活動內容請點選下方資訊</p>
      </div>
    </FadeInOnScroll>
  );
};

export default thankyou;
