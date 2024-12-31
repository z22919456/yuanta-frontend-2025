'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import ToTop from './to-top';
import { Button } from './ui/button';

const BottomButtons = () => {
  const [{ y }] = useWindowScroll();
  return (
    <>
      <motion.div
        className="sticky bottom-0 left-0 right-0 z-40 md:hidden"
        initial={{ y: 1000 }}
        animate={{ y: y && y > 100 ? 0 : 1000 }}
        transition={{ type: 'spring', mass: 0.1, bounce: 0.1 }}
      >
        <div className="absolute -top-14 right-2 z-40 size-12">
          <ToTop />
        </div>
        <div className="bg-blur-xl w-screen bg-black/40 px-2 py-3 pt-2 backdrop-blur">
          <div className="grid w-full grid-cols-3 gap-2">
            <Button
              size="lg"
              className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
            >
              點我開戶
            </Button>
            <Button
              size="lg"
              className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
            >
              點我開戶
            </Button>
            <Button
              size="lg"
              className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
            >
              點我開戶
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomButtons;
