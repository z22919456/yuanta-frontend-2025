import { cn } from '@/lib/utils';

const CLASS_NAME =
  'opacity-1 duration-500 block h-[3px] w-full rotate-0 origin-right-center transform rounded-full bg-blue-800 transition ease-in-out';

type Props = {
  onClick: () => void;
  open: boolean;
};

const MenuTrigger = ({ onClick, open }: Props) => {
  return (
    <button onClick={onClick}>
      <div
        className={cn(
          'relative z-40 flex h-8 w-7 cursor-pointer flex-col justify-around transition duration-75 ease-in-out'
        )}
      >
        <span className={cn(CLASS_NAME, open && '-rotate-45')}></span>
        <span className={cn(CLASS_NAME, open && 'opacity-0')}></span>
        <span className={cn(CLASS_NAME, open && 'rotate-45')}></span>
      </div>
    </button>
  );
};

export default MenuTrigger;
