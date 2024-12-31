import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

type Props = {
  list: (string | ReactElement)[];
  className?: string;
};
const ListWithBlock = ({ list, className }: Props) => {
  return (
    <ul
      className={cn(
        'list-none space-y-4 pl-8 text-lg md:space-y-6 md:pl-12 md:text-xl lg:text-2xl',
        className
      )}
    >
      {list.map((item, index) => (
        <li
          className="relative text-left text-gray-800 before:absolute before:-left-8 before:top-1 before:text-base before:text-y-secondary before:content-['█'] md:before:-left-10"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListWithBlock;
