import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ children, href, className }: Props) => {
  return (
    <a
      href={href}
      className={cn(
        'rounded px-2 py-1 transition-all hover:bg-yuan-blue-800 hover:text-white',
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        const anchor = href.slice(1);
        if (anchor && document.getElementById(anchor)) {
          document
            .getElementById(anchor)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      {children}
    </a>
  );
};

export default NavLink;
