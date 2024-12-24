'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type BounceOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

const BounceOnScroll = ({ children, className }: BounceOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px', // 當元素距離底部 50px 時觸發
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
      transition={{
        delay: 0.2,
        type: 'spring',
        stiffness: 100, // 彈簧剛性
        damping: 10, // 阻尼
        mass: 1, // 質量
        duration: 0.8,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default BounceOnScroll;
