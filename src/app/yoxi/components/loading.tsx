'use client';
import Image from '@/lib/image';
import taxiImg from '../assets/taxi.png';
import { useLoading } from '../loading-context';

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[2000] overflow-hidden bg-black/90">
      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 space-y-10">
        <p className="text-center font-title text-2xl text-white md:text-4xl">
          Loading...
        </p>
        <Image
          placeholder="empty"
          src={taxiImg}
          alt="taxi"
          className="ml-auto w-[70%] max-w-[300px] animate-car2"
        />
      </div>
    </div>
  );
};

export default Loading;
