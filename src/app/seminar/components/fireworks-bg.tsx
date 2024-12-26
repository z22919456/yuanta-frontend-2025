'use client';

import fireworkBg from '@/assets/firework.png';
import Image from '@/lib/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const FireworksBG = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [750, 3000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [2000, 3000]);

  return (
    <div className="container absolute left-1/2 top-0 h-full -translate-x-1/2">
      <motion.div
        style={{ y, x: '-50%' }}
        viewport={{ once: false }}
        className="absolute w-fit"
      >
        <Image src={fireworkBg} alt="firework bg" className="" />
      </motion.div>
      <motion.div
        style={{ y: y2, x: '50%' }}
        viewport={{ once: false }}
        className="absolute right-0 w-fit"
      >
        <Image src={fireworkBg} alt="firework bg" className="z-50" />
      </motion.div>
    </div>
  );
};

export default FireworksBG;
