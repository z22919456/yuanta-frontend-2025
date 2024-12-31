'use client';

import click from '@/assets/click.png';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from '@/lib/image';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const CreateAccountDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-lg border-4 border-y-tab-bo bg-y-bg">
        <DialogHeader>
          <DialogTitle className="relative mx-auto mb-5 max-w-64 text-center font-normal">
            <h1
              className="shadow-number text-3xl [--stroke-width:5px]"
              data-stroke="元大期貨開戶"
            >
              元大期貨開戶
            </h1>
          </DialogTitle>
          <DialogDescription className="text-yuan-blue-800 space-y-6 text-base">
            <div className="space-y-3 rounded-xl border-2 border-y-bo bg-y-card p-2 py-5 text-center">
              <Button
                size="rounded"
                className="relative ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-7 py-6 text-2xl font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
              >
                <a
                  href="https://www.yuantafutures.com.tw/openaccount_01"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  由此進入
                  <motion.div
                    className="absolute -bottom-5 -right-5 w-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      repeatType: 'reverse',
                    }}
                  >
                    <Image src={click} alt="click" />
                  </motion.div>
                </a>
              </Button>
              <p className="text-center text-sm">
                *若已為【證券客戶】，欲加開期貨戶，請洽所屬營業員。
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountDialog;
