import Coin from '@/assets/coin.svg';
import roofDesktopImg from '@/assets/roof/roof_desktop.png';
import roofMobileImg from '@/assets/roof/roof_mobile.png';
import roofTabletImg from '@/assets/roof/roof_tablet.png';
import { cn } from '@/lib/utils';

type WallProps = {
  children?: React.ReactNode;
  title?: string;
};

const Wall = ({ children, title }: WallProps) => {
  return (
    <div className="relative px-0 lg:px-5">
      <picture className="relative bottom-[calc(100%-4px)] left-0 z-10 h-32 w-52">
        <source media="(min-width: 1080px)" srcSet={roofDesktopImg.src} />
        <source media="(min-width: 768px)" srcSet={roofTabletImg.src} />
        <img src={roofMobileImg.src} alt="roof" className="w-full scale-110" />
      </picture>
      {/*  */}
      <div className="relative mb-12 rounded-b-xl border-4 border-y-wall-bo bg-y-wall p-3 pt-3 sm:px-4 sm:pt-6 lg:px-5 lg:pt-7 [&_>div:nth-child(2)]:pt-8 md:[&_>div:nth-child(2)]:pt-10 lg:[&_>div:nth-child(2)]:pt-16">
        {/* title */}
        {title && (
          <div className="absolute -top-1 left-1/2 z-10 mx-auto -translate-x-1/2 border-4 border-y-bo bg-gradient-band pt-1 text-center md:w-[30rem]">
            <div className="flex items-center justify-between">
              <Coin className="ml-3 mr-2 w-5 md:ml-5 md:mr-2" />
              <h1
                className="main-title my-[0.125rem] font-title text-lg leading-tight sm:text-2xl md:text-3xl lg:text-4xl lg:leading-normal"
                data-stroke={title}
              >
                {title}
              </h1>
              <Coin className="ml-2 mr-3 w-5 md:mr-5" />
            </div>
            <div className="border-t-4 border-y-bo bg-y-bg pt-1"></div>
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

type WallContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const WallContent = ({ children, className }: WallContentProps) => {
  return (
    <div
      className={cn(
        'rounded-lg border-2 border-y-bo bg-y-bg p-3 pt-10 text-center text-lg md:border-4 md:p-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wall;
