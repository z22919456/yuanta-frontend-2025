'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MediaLinks from './media-links';
import MenuTrigger from './menu-trigger';
import OnlyTwo from './only-two';

const sidebar = {
  open: {
    backgroundColor: '#FFFFFF',
    clipPath: `circle(2000px at calc(100% - 53px) 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    backgroundColor: '#FFFFFF',
    clipPath: `circle(20px at calc(100% - 53px) 30px)`,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delay: 0,
    },
  },
};

const Menu = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useEffect(() => {
    x.current = ref.current?.getBoundingClientRect().x || 0;
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={open ? 'open' : 'closed'}
      className="z-[100 relative block lg:hidden"
    >
      <motion.div
        className="fixed inset-0 overflow-hidden bg-white"
        variants={sidebar}
      />
      <div className="z-[100] flex justify-center">
        <MenuTrigger open={open} onClick={() => setOpen((o) => !o)} />
      </div>
      {open && (
        <motion.div
          className="fixed inset-0 h-screen w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: open ? 0.5 : 0 }}
        >
          <aside className="space-y-5 px-5 py-7 pt-12">
            <ul className="w-full text-xl font-bold">
              <li
                className="border-b border-gray-300 p-2 text-gray-900"
                onClick={() => setOpen((o) => !o)}
              >
                <Link href="/futures">外期財門</Link>
              </li>
              <li
                className="border-b border-gray-300 p-2 text-gray-900"
                onClick={() => setOpen((o) => !o)}
              >
                <Link href="/leverage">槓桿財門</Link>
              </li>
              <li
                className="border-b border-gray-300 p-2 text-gray-900"
                onClick={() => setOpen((o) => !o)}
              >
                <OnlyTwo />
                <Link href="/seminar">講座報名</Link>
              </li>
            </ul>
            <ul className="flex justify-center space-x-6 text-blue-900">
              <MediaLinks />
            </ul>
          </aside>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Menu;
