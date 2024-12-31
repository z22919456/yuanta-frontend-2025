'use client';

import ErrorDialog from '@/components/error-dialog';
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

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactTimesField from './contact-times-field';
import { useLoading } from './loading-context';
import { formSchema, FormSchema } from './schema';
import WillingTypeField from './willing-type-field';

const YoxiForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      contactTimes: [],
      location: undefined,
      willingTypes: [],
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [playLoadingCover, setPlayLoadingCover] = useState(false);
  const { setIsLoading: setGlobalLoading } = useLoading();

  const router = useRouter();

  useEffect(() => {
    if (playLoadingCover || isLoading) {
      setGlobalLoading(true);
    } else {
      setGlobalLoading(false);
    }
  }, [playLoadingCover, isLoading, setGlobalLoading]);

  useEffect(() => {
    if (playLoadingCover) {
      setTimeout(() => {
        setPlayLoadingCover(false);
      }, 2000);
    }
  }, [playLoadingCover]);

  useEffect(() => {
    if (isSuccess && !playLoadingCover) {
      // 前往成功頁面
      router.push('/yoxi/thankyou', { scroll: false });
    }
  }, [isSuccess, playLoadingCover, router]);

  const onErrorDialogClose = () => {
    setIsError(false);
  };

  const onSubmit = async (values: FormSchema) => {
    const submitData = {
      ...values,
    };

    if (!submitData.willingTypes.includes('futures')) {
      submitData.location = undefined;
    }

    setGlobalLoading(true);
    setIsLoading(true);
    setPlayLoadingCover(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/yoxi_customer`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(submitData),
        }
      );

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await res.json();
        let message = '';
        Object.keys(data).forEach((key) => {
          message += `${data[key]} `;
        });
        setErrorMessage(message);
        setIsError(true);
      }
    } catch (e) {
      console.error(e);
      setErrorMessage('發生錯誤，請稍後再試');
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-lg mb-0 w-auto space-y-5 rounded-lg bg-gray-100 p-5 xl:mx-0"
          id="form"
        >
          {/* 姓名 */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>姓名(真實姓名)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="請輸入真實姓名"
                    type="text"
                    {...field}
                    className="max-w-xs"
                  />
                </FormControl>
                {/* <FormDescription>
                請輸入真實姓名
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 電話 */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電話</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0900000000"
                    type="text"
                    {...field}
                    className="max-w-xs"
                  />
                </FormControl>
                {/* <FormDescription>
                請輸入真實姓名
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* E-Mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="test@testmail.com"
                    type="text"
                    {...field}
                    className="max-w-xs"
                  />
                </FormControl>
                {/* <FormDescription>
                請輸入真實姓名
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 我有意願 */}
          <WillingTypeField control={form.control} />

          {/* 方便聯絡時間 */}
          <ContactTimesField control={form.control} />

          <div className="text-center">
            <Button
              size="lg"
              className="h-auto bg-taxi-red py-2 text-xl hover:!bg-taxi-blue"
            >
              送出
              <span className="">
                {isLoading && <LoaderCircle className="animate-spin" />}
              </span>
            </Button>
          </div>
          {/* 注意事項 */}
          <hr className="border-1" />
          <div className="space-y-2">
            <h3 className="font-default text-lg">
              如有活動問題，週一至週五08:00-17:00 請洽分公司詢問：
            </h3>
            <ul className="list-disc pl-5 leading-relaxed">
              <li>
                經紀部(台北)：<a href="tel:0227176000">(02) 2717-6000</a>
              </li>
              <li>
                新竹分公司：<a href="tel:036662558">(03) 666-2558</a>
              </li>
              <li>
                台中分公司：<a href="tel:0437033368">(04) 3703-3368</a>
              </li>
              <li>
                台南分公司：<a href="tel:062355999">(06) 235-5999</a>
              </li>
              <li>
                高雄分公司：<a href="tel:072157777">(07) 215-7777</a>
              </li>
              <li>
                槓桿交易商：<a href="tel:0225460445">(02) 2546-0445</a>
              </li>
            </ul>
          </div>
        </form>
      </Form>
      <ErrorDialog
        open={isError && !playLoadingCover}
        onOpenChange={onErrorDialogClose}
        message={errorMessage}
      />
    </>
  );
};

export default YoxiForm;
