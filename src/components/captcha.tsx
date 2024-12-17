'use client';

import { cn } from '@/lib/utils';
import { RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

const CAPTCHA_API = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/captcha`;

type CaptchaProps = {
  className?: string;
  captchaKey?: number;
};

const Captcha = ({ className, captchaKey: key }: CaptchaProps) => {
  const [captchaKey, setCaptchaKey] = useState<number>(key || Date.now()); // 初始的驗證碼key值

  useEffect(() => {
    setCaptchaKey(Date.now());
  }, [key]);

  // 重新載入驗證碼圖片
  const reloadCaptcha = () => {
    const newCaptchaKey = Date.now();
    setCaptchaKey(newCaptchaKey);
  };

  return (
    <div className={cn('flex shrink-0 items-center space-x-3', className)}>
      <img
        className="reloadImg shrink-0"
        src={`${CAPTCHA_API}?${captchaKey}`}
        alt="reload"
        onClick={reloadCaptcha}
        style={{ cursor: 'pointer' }}
      />
      <RefreshCcw
        className="shrink-0 animate-none hover:animate-spin"
        onClick={reloadCaptcha}
      />
    </div>
  );
};

export default Captcha;
