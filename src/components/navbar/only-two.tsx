import { Badge } from '../ui/badge';

const OnlyTwo = () => {
  return (
    <Badge className="relative mr-3 rounded-sm bg-gray-500 py-1 text-xs before:absolute before:-right-4 before:top-1/2 before:-translate-y-1/2 before:border-[9px] before:border-transparent before:border-l-gray-500 hover:bg-gray-500">
      已結束
    </Badge>
  );
};

export default OnlyTwo;
