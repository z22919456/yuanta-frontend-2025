'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const FadeInOnScroll = ({
  children,
  className,
  delay = 0,
}: FadeInOnScrollProps) => {
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
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default FadeInOnScroll;
