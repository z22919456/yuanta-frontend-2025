import Captcha from '@/components/captcha';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoaderCircle, Lock, UserCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type LoginInFormData = {
  username: string;
  password: string;
  captcha: string;
};

type Props = {
  onSubmit: (values: LoginInFormData) => Promise<void>;
  type: 'leverage' | 'futures';
};

const LoginInForm = ({ onSubmit, type }: Props) => {
  const [captchaKey, setCaptchaKey] = useState<number>(Date.now()); // 初始的驗證碼key值
  const form = useForm<LoginInFormData>({
    defaultValues: {
      username: '',
      password: '',
      captcha: '',
    },
  });
  const { isSubmitting } = form.formState;

  const handleSubmit = async (value: LoginInFormData) => {
    try {
      await onSubmit(value);
    } catch (error) {
      console.log(error);
      form.setError('root', {
        type: 'server',
        message: (error as Error).message,
      });
    }
    setCaptchaKey(Date.now());
    return;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 text-left"
      >
        <div className="space-y-8 rounded-xl border-2 border-y-tab-bo bg-y-card p-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-full !text-left text-gray-700">
                  {type === 'leverage' ? '槓桿交易帳號' : '身分證字號'}
                </FormLabel>
                <div className="flex items-center space-x-3">
                  <div className="relative w-full">
                    <FormControl>
                      <Input
                        className="peer w-full pl-10"
                        type="text"
                        placeholder={
                          type === 'leverage'
                            ? '請輸入槓桿交易帳號'
                            : '請輸入身分證字號'
                        }
                        {...field}
                      />
                    </FormControl>
                    <UserCircle2 className="absolute left-2 top-3 peer-focus-visible:text-blue-600" />
                  </div>
                </div>
                {/* <FormDescription></FormDescription> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-full bg-white !text-left text-gray-700">
                  {type === 'leverage' ? '槓桿交易密碼' : '網路交易密碼'}
                </FormLabel>
                <div className="flex items-center space-x-3">
                  {/* <FormLabel className="shrink-0">密碼</FormLabel> */}
                  <div className="relative w-full">
                    <FormControl>
                      <Input
                        className="peer w-full bg-white pl-10"
                        placeholder={
                          type === 'leverage'
                            ? '請輸入槓桿交易密碼'
                            : '請輸入網路交易密碼'
                        }
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <Lock className="absolute left-2 top-3 peer-focus-visible:text-blue-600" />
                  </div>
                </div>
                {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="captcha"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-full bg-white !text-left text-gray-700">
                  圖形驗證碼
                </FormLabel>
                <div className="flex items-center justify-start space-x-3">
                  <FormControl>
                    <Input
                      className="w-full max-w-52 bg-white"
                      placeholder="請輸入驗證碼"
                      {...field}
                      type="captcha"
                    />
                  </FormControl>

                  <Captcha captchaKey={captchaKey} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pb-3 text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="relative ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-12 py-6 text-2xl font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
              size="rounded"
            >
              登入
              {isSubmitting && (
                <LoaderCircle className="absolute right-3 top-[calc(50%-12px)] animate-spin" />
              )}
            </Button>
            {form.formState.errors.root && (
              <p className="mt-2 text-red-600">
                {form.formState.errors.root.message}
              </p>
            )}
          </div>
          {type === 'leverage' ? (
            <p className="!mt-3 text-left text-sm md:!mt-8 md:text-base">
              非元大期貨槓桿交易商客戶？立即
              <a
                className="text-blue-500 underline"
                href="https://ltm.yuantafutures.com.tw/member/openaccount"
              >
                <strong className="">槓桿交易線上開戶</strong>
              </a>
            </p>
          ) : (
            <p className="!mt-3 text-left text-sm md:!mt-8 md:text-base">
              非元大期貨客戶？立即
              <a
                className="text-blue-500 underline"
                href="https://www.yuantafutures.com.tw/openaccount_01"
              >
                <strong className="">期貨線上開戶</strong>
              </a>
              <br />
              <span className="text-xs md:text-base">
                若已為【證券客戶】，欲加開期貨戶，請洽所屬營業員
              </span>
              <span className="text-xs md:text-base">
                或請洽元大期貨24小時客服專線0800-333-338
              </span>
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default LoginInForm;
