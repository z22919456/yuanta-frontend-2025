'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type BounceInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  asChild?: boolean;
  initialSize?: number;
};

const BounceInOnScroll = ({
  children,
  className,
  delay,
  initialSize,
}: BounceInOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px', // 當元素距離底部 50px 時觸發
  });

  const animationProps = {
    ref,
    initial: { opacity: 0, scale: initialSize || 2 },
    animate: isInView
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: initialSize || 2 },
    transition: {
      delay: delay || 0.2,
      type: 'spring',
      stiffness: 100,
      damping: 10,
      mass: 1,
      duration: 1,
    },
    className,
  };

  return <motion.div {...animationProps}>{children}</motion.div>;
};

export default BounceInOnScroll;
