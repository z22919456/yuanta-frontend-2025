import Coin from '@/assets/coin.svg';
import Roof from '@/assets/roof.svg';
import { cn } from '@/lib/utils';

type WallProps = {
  children?: React.ReactNode;
  title?: string;
};

const Wall = ({ children, title }: WallProps) => {
  return (
    <div className="relative px-5">
      <Roof className="absolute bottom-[calc(100%-4px)] left-0 w-full" />
      <div className="relative mb-5 mt-28 rounded-b-xl border-4 border-y-wall-bo bg-y-wall p-5 pt-7">
        {/* title */}
        {title && (
          <div className="absolute -top-1 left-1/2 z-10 mx-auto -translate-x-1/2 border-4 border-y-bo bg-gradient-band pt-1 text-center md:w-[30rem]">
            <div className="flex items-center justify-between">
              <Coin className="ml-5 mr-2 w-5" />
              <h1
                className="main-title my-[0.125rem] font-title text-4xl"
                data-stroke={title}
              >
                {title}
              </h1>
              <Coin className="ml-2 mr-5 w-5" />
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
        'rounded-lg border-4 border-y-bo bg-y-bg p-5 pt-10 text-center text-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wall;
