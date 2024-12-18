import Coin from './coin.svg';
import Roof from './roof.svg';

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
          <div className="absolute -top-1 left-1/2 mx-auto -translate-x-1/2 border-4 border-y-bo bg-gradient-band pt-1 text-center md:w-96">
            <div className="flex items-center justify-between">
              <Coin className="mx-5 w-5" />
              <h1
                className="main-title my-[0.125rem] text-4xl font-extrabold"
                data-stroke={title}
              >
                {title}
              </h1>
              <Coin className="mx-5 w-5" />
            </div>
            <div className="border-t-4 border-y-bo bg-y-bg pt-1"></div>
          </div>
        )}

        {/* Content */}
        <div className="rounded-lg border-4 border-y-bo bg-y-bg p-5 pt-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wall;
