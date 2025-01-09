'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import {
  FutureBottomButton,
  FutureSearchBottomButton,
  LeverageBottomButton,
  LeverageSearchBottomButton,
  OpenAccountBottomButton,
} from './buttons/buttons';
import ToTop from './to-top';

type Props = {
  page: 'leverage' | 'future';
};

const BottomButtons = ({ page }: Props) => {
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
            <OpenAccountBottomButton type={page} />
            {page === 'leverage' ? (
              <>
                <LeverageBottomButton />
                <LeverageSearchBottomButton />
              </>
            ) : (
              <>
                <FutureBottomButton />
                <FutureSearchBottomButton />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomButtons;
