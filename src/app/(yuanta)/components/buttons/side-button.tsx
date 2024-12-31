import Coin from '@/assets/coin.svg';

type Props = {
  children: React.ReactNode | React.ReactNode[] | string;
};

const SideButton = ({ children }: Props) => {
  return (
    <button className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-y-bo bg-y-card-header px-2 pb-1 pt-3 text-xl text-white transition-all duration-300 ease-in-out hover:scale-105">
      <div className="relative">
        <Coin className="absolute -top-7 left-1/2 -translate-x-1/2" />
        {children}
      </div>
    </button>
  );
};

export default SideButton;
