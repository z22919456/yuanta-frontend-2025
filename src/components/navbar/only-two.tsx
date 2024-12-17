import { Badge } from '../ui/badge';

const OnlyTwo = () => {
  return (
    <Badge className="relative mr-3 rounded-sm bg-red-500 py-1 text-sm before:absolute before:-right-3 before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-l-red-500 hover:bg-red-500">
      僅兩場
    </Badge>
  );
};

export default OnlyTwo;
