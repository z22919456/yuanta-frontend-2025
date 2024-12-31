'use client';
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
import LoginInForm, { LoginInFormData } from './login-form';

type FormState = 'Login' | 'Register' | 'Completed';

const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST || process.env.NEXT_PUBLIC_BASE_PATH || '';

type Props = {
  children?: React.ReactNode;
};

const LoginDialog = ({ children }: Props) => {
  const [state, setState] = useState<FormState>('Login');

  const handleInitState = (open: boolean) => {
    if (!open) {
      setState('Login');
    }
  };

  // 登入API
  async function handleLogin(values: LoginInFormData) {
    const data = await fetch(`${API_HOST}/api/login`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!data.ok) {
      const errorBody = await data.json();
      throw new Error(errorBody.message);
    }
    const body = await data.json();

    if (body.success == false) {
      throw new Error(body.message);
    }
    setState('Register');
    return;
  }

  return (
    <Dialog onOpenChange={handleInitState}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-lg border-4 border-y-tab-bo bg-y-bg">
        <DialogHeader>
          <DialogTitle className="mb-5 text-center text-3xl !font-normal text-y-tab-t">
            <h1
              className="shadow-number text-3xl [--stroke-width:5px]"
              data-stroke="帳號登入"
            >
              帳號登入
            </h1>
          </DialogTitle>
          <DialogDescription className="text-yuan-blue-800 space-y-6 text-base">
            {/* h-[calc(100vh-108px)] */}
            <ScrollArea className="max-h-[calc(100vh-108px)] overflow-y-auto">
              <div className="text-center md:px-4">
                {state === 'Login' && <LoginInForm onSubmit={handleLogin} />}
              </div>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
