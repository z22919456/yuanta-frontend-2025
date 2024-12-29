'use client';

import ErrorDialog from '@/components/error-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Loading from './components/loading';

const LOCATIONS: [string, ...string[]] = [
  'taipei',
  'hsinchu',
  'taichung',
  'tainan',
  'kaohsiung',
  'isCustomer',
];

const LOCATIONS_LABELS: Record<string, string> = {
  taipei: '台北',
  hsinchu: '新竹',
  taichung: '台中',
  tainan: '台南',
  kaohsiung: '高雄',
  isCustomer: '我有元大證券帳戶，想加開戶',
};

const CONTACTS: [string, ...string[]] = [
  'anytime',
  'morning',
  'afternoon',
  'evening',
];

const CONTACTS_LABELS: Record<string, string> = {
  morning: '平日上午時段 (09:00 - 12:00)',
  afternoon: '平日下午時段 (13:00 - 17:00)',
  evening: '平日晚間時段 (18:00 - 21:00)',
  anytime: '隨時皆可',
};

const WILLING_TYPES: [string, ...string[]] = ['futures', 'leverage'];

// **姓名(真實姓名)：**

// **◤ 電話：**

// **◤ E-mail** **：**

// **◤ 我有意願 …**

// **□ 期貨開戶  □ 槓桿開戶**

// **◤ 請勾選離您最近的地區，將有專人聯繫並協助(線上或線下)開戶**

// **□ 台北 □ 新竹 □ 台中 □ 台南 □ 高雄**

// **□ 我有元大證券帳戶，想加開戶**

// **◤ 方便聯絡時間**

// **□ 隨時皆可**

//    **□ 平日上午時段 (09:00 - 12:00)**

// **□ 平日下午時段 (13:00 - 17:00)**

// **□ 平日晚間時段 (18:00 - 21:00)**

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: '請輸入真實姓名',
    }),
    email: z.string().email({
      message: '請輸入正確的 Email',
    }),
    phone: z.string().regex(/^09[0-9]{8}$/, {
      message: '手機格式錯誤',
    }),
    contactTimes: z.array(z.enum(CONTACTS)).min(1, {
      message: '請選擇方便聯絡時間',
    }),
    willingTypes: z.array(z.enum(WILLING_TYPES)).min(1, {
      message: '請選則開戶意願',
    }),
    location: z.enum(LOCATIONS).optional(),
  })
  .superRefine((data, ctx) => {
    // 如果 willingType 包含 'futures'，location 為必填
    if (data.willingTypes.includes('futures') && !data.location) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '請選擇地區',
        path: ['location'],
      });
    }
  });

const YoxiForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
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

  const router = useRouter();

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
      router.push('/yoxi/thankyou');
    }
  }, [isSuccess, playLoadingCover, router]);

  const onErrorDialogClose = () => {
    setIsError(false);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const submitData = {
      ...values,
    };

    if (!submitData.willingTypes.includes('futures')) {
      submitData.location = undefined;
    }

    console.log(submitData);

    setIsLoading(true);
    setPlayLoadingCover(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/yoxi_customer`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(submitData),
      }
    )
      .then((res) => {
        if (res.ok) {
          setIsSuccess(true);
          form.reset();
        } else return res.json();
      })
      .then((data) => {
        if (data) {
          let message = '';
          Object.keys(data).forEach((key) => {
            message += `${data[key]} `;
          });
          setErrorMessage(message);
          setIsError(true);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {(isLoading || playLoadingCover) && <Loading />}
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
          <FormField
            control={form.control}
            name="willingTypes"
            render={() => (
              <FormItem className="space-y-3">
                <FormLabel>我有意願...</FormLabel>

                <FormField
                  control={form.control}
                  name="willingTypes"
                  render={({ field }) => (
                    <>
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={WILLING_TYPES[0]}
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(WILLING_TYPES[0])}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([
                                    ...field.value,
                                    WILLING_TYPES[0],
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== WILLING_TYPES[0]
                                    )
                                  )
                            }
                          />
                        </FormControl>
                        <FormLabel className="font-medium">期貨開戶</FormLabel>
                      </FormItem>
                      {/* 請勾選離您最近的地區 */}
                      {field.value?.includes(WILLING_TYPES[0]) && (
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem className="ml-8 space-y-3">
                              <FormLabel>
                                請勾選地區，將有專人聯繫並協助(線上或線下)開戶
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  value={field.value}
                                  className="flex flex-wrap space-y-1"
                                >
                                  {LOCATIONS.map((location) => (
                                    <FormItem
                                      className="flex items-center space-x-3 space-y-0"
                                      key={location}
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={location} />
                                      </FormControl>
                                      <FormLabel className="font-medium">
                                        {LOCATIONS_LABELS[location]}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="willingTypes"
                  render={({ field }) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={WILLING_TYPES[1]}
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(WILLING_TYPES[1])}
                          onCheckedChange={(checked) =>
                            checked
                              ? field.onChange([
                                  ...field.value,
                                  WILLING_TYPES[1],
                                ])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== WILLING_TYPES[1]
                                  )
                                )
                          }
                        />
                      </FormControl>
                      <FormLabel className="font-medium">槓桿開戶</FormLabel>
                    </FormItem>
                  )}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 方便聯絡時間 */}
          <FormField
            control={form.control}
            name="contactTimes"
            render={() => (
              <FormItem className="space-y-3">
                <FormLabel>方便聯絡時間</FormLabel>

                {CONTACTS.map((type) => (
                  <FormField
                    key={type}
                    control={form.control}
                    name="contactTimes"
                    render={({ field }) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={type}
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type)}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...field.value, type])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== type
                                    )
                                  )
                            }
                          />
                        </FormControl>
                        <FormLabel className="font-medium">
                          {CONTACTS_LABELS[type]}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
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
