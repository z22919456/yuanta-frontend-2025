'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { File } from 'lucide-react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const DownloadDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-lg border-4 border-y-tab-bo bg-y-bg">
        <DialogHeader>
          <DialogTitle className="relative mx-auto mb-5 max-w-64 text-center font-normal">
            <h1
              className="shadow-number text-3xl [--stroke-width:5px]"
              data-stroke="價值連城的研究報告"
            >
              價值連城的研究報告
            </h1>
          </DialogTitle>
          <DialogDescription className="text-yuan-blue-800 space-y-6 text-base">
            <div className="space-y-4 rounded-xl border-2 border-y-bo bg-y-card px-5 py-5 text-center">
              <Link
                href="/2025春節不打烊Salekits_日盤.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center space-x-3 underline hover:font-bold"
              >
                <File />
                <p>2025春節不打烊 Salekits 日盤</p>
              </Link>
              <Link
                href="/2025春節不打烊Salekits_美盤.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center space-x-3 underline hover:font-bold"
              >
                <File />
                <p>2025春節不打烊 Salekits 美盤</p>
              </Link>
              <Link
                href="/2025春節不打烊Salekits_新盤.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center space-x-3 underline hover:font-bold"
              >
                <File />
                <p>2025春節不打烊 Salekits 新盤</p>
              </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
