'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ToTop = () => {
  const [{ y }, scrollTo] = useWindowScroll();
  if (!y || y < 500) return null;
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => scrollTo({ left: 0, top: 0, behavior: 'smooth' })}
      className="bottom-[4.5rem] right-2 z-[100] mx-auto flex aspect-square w-full max-w-14 items-center justify-center rounded-full bg-black/30 opacity-70 hover:opacity-100 md:bottom-5 md:right-5"
    >
      <ArrowUp className="text-white" size="30" />
    </motion.button>
  );
};

export default ToTop;
