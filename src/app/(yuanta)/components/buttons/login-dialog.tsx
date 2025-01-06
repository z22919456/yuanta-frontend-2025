'use client';
import Record from '@/components/record';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
// import LoginInForm, { LoginInFormData } from './login-form';

// const API_HOST =
//   process.env.NEXT_PUBLIC_API_HOST || process.env.NEXT_PUBLIC_BASE_PATH || '';

type Props = {
  children?: React.ReactNode;
  type: 'leverage' | 'futures';
};

type TData = {
  tradeType: 0 | 1;
  name: string;
  accumulatedTransactionPoints: number;
  lotteryDrawCount: number;
  isRedEnvelopeEligible: boolean;
  transactionLevel: number;
  crossCMETradeTypes: number;
  cmeContractCount: number;
};

const LoginDialog = ({ children, type }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<TData | undefined>(undefined);

  // 登入API
  // async function handleLogin(values: LoginInFormData) {
  //   const data = await fetch(`${API_HOST}/api/login/${type}`, {
  //     method: 'POST',
  //     body: JSON.stringify(values),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (!data.ok) {
  //     const errorBody = await data.json();

  //     throw new Error(errorBody.message);
  //   }
  //   const body = await data.json();

  //   if (body.success == false) {
  //     throw new Error(body.message);
  //   }

  //   setData(body);
  //   return;
  // }

  // function handleFakeLogin() {
  //   setData({
  //     tradeType: 0,
  //     name: '王小明',
  //     accumulatedTransactionPoints: 0,
  //     lotteryDrawCount: 0,
  //     isRedEnvelopeEligible: false,
  //     transactionLevel: 0,
  //     crossCMETradeTypes: 0,
  //     cmeContractCount: 0,
  //   });
  // }

  const handleReset = () => {
    setData(undefined);
    setIsOpen(false);
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-lg border-4 border-y-tab-bo bg-y-bg">
        <DialogHeader>
          <DialogTitle
            className="mx-auto mb-5 w-fit text-center text-3xl !font-normal text-y-tab-t"
            asChild
          >
            <div>
              <h1
                className="shadow-number text-3xl [--stroke-width:5px]"
                data-stroke="帳號登入"
              >
                帳號登入
              </h1>
              {/* <button
                className="rounded-md border border-black px-3 py-2 text-base"
                onClick={handleFakeLogin}
              >
                登入測試
              </button> */}
            </div>
          </DialogTitle>
          <DialogDescription className="text-yuan-blue-800 space-y-6 text-base">
            {/* h-[calc(100vh-108px)] */}
            <ScrollArea className="max-h-[calc(100vh-108px)] overflow-y-auto">
              <div className="space-y-3 rounded-xl border-2 border-y-bo bg-y-card p-2 py-5 text-center">
                <p className="text-xl font-bold">活動尚未開始</p>
                <p className="text-xl font-bold">敬請期待</p>
              </div>
              {/* <div className="text-center md:px-4">
                <LoginInForm onSubmit={handleLogin} />
              </div> */}
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        {data && <Record type={type} onClose={handleReset} data={data} />}
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
