import BounceOnScroll from '@/components/animation-container/bounce-on-scroll';
import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  primary?: boolean;
  number: number;
  className?: string;
};

const Card = ({ children, primary = false, number, className }: CardProps) => (
  <BounceOnScroll
    delay={number / 10}
    className={cn('mx-auto w-full', className)}
  >
    <div
      className={cn(
        'relative box-border flex aspect-square max-h-[20rem] w-full flex-col items-center justify-center space-y-3 rounded-2xl border-4 border-y-bo bg-[#FFEEDC] p-2 text-center sm:flex-row md:aspect-auto md:flex-col lg:aspect-square',
        primary && 'border-6 border-y-tab-active-bo'
      )}
    >
      <div
        className={cn(
          'absolute -left-1 -top-1 z-10 flex size-[4.5rem] items-center justify-center rounded-tl-2xl bg-gradient-triangle',
          primary && '-left-[0.375rem] -top-[0.375rem]'
        )}
      >
        <h1
          className={cn(
            'shadow-number mb-3 mr-3',
            primary && '!text-5xl !text-y-t-light'
          )}
          data-stroke={number}
        >
          {number}
        </h1>
      </div>
      {children}
    </div>
  </BounceOnScroll>
);

export default Card;
