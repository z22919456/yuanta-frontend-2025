import { cn } from '@/lib/utils';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border-4 border-y-bo bg-y-card p-3 md:col-span-2',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        '-mx-3 -mt-3 mb-2 border-b-4 border-y-bo bg-y-card-header px-3 py-2 text-2xl text-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
