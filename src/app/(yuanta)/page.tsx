import StarBackground from '@/components/start-background';
import Background from './components/background';
import Banner from './components/banner';
import GiftSwiper from './components/gift-swiper';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen pb-5 pt-[64px]">
      <Background />
      <StarBackground />
      <Banner />
      <section className="container relative z-10">
        <div className="relative rounded-3xl border-2 border-y-wall-bo bg-y-wall p-5 md:border-4">
          <GiftSwiper />
        </div>
      </section>
    </main>
  );
}
