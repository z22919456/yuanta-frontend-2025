'use client';

import Captcha from '@/components/captcha';
import ErrorDialog from '@/components/error-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useLocalStorage from '@/hooks/use-local-storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import SuccessDialog from './success-dialog';

type LocationValue = 'taipei' | 'hsinchu' | 'taichung' | 'tainan' | 'kaohsiung';

const locations = [
  {
    value: 'taipei',
    label: '台北',
    date: '114/1/8(三) 14:30-16:00',
    location: '犇亞會議中心（2樓201廳）',
    address: '台北市復興北路99號2樓201廳',
  },
  // {
  //   value: 'hsinchu',
  //   label: '新竹',
  //   date: '9/26（四）19:00-20:30',
  //   location: '元大期貨 新竹分公司',
  //   address: '新竹市光復路一段373號B1之1',
  // },
  // {
  //   value: 'taichung',
  //   label: '台中',
  //   date: '10/11（五）14:30-16:00',
  //   location: '台中商旅',
  //   address: '台中市西屯區台灣大道三段593號',
  // },
  // {
  //   value: 'tainan',
  //   label: '台南',
  //   date: '10/7（一）18:30-20:00',
  //   location: '元大期貨 台南分公司',
  //   address: '台南市民生路一段165號5樓會議室',
  // },
  {
    value: 'kaohsiung',
    label: '高雄',
    date: '114/1/10(五) 19:00-20:30',
    location: '思博客商務中心',
    address: '高雄市新興區民生一路56號B1-1',
  },
] as const;

const formSchema = z.object({
  name: z.string().min(2, {
    message: '請輸入真實姓名',
  }),
  phone: z.string().regex(/^09[0-9]{8}$/, {
    message: '手機格式錯誤',
  }),
  email: z.string().email({
    message: '請輸入正確的 Email',
  }),
  // isCustomer: z.enum(['true', 'false'], {
  //   required_error: '請選擇是否為元大期貨客戶',
  // }),
  customerType: z.enum(['NotCustomer', 'GotAccount', 'GotIBAccount'], {
    required_error: '請選擇是否為元大期貨客戶',
  }),
  introducer: z
    .string()
    .max(10, { message: '格式錯誤，不應超過10碼' })
    .optional(),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({
      message: '必須同意此條款同意，才能報名',
    }),
  }),
  locations: z.array(z.enum(['taipei', 'kaohsiung'])).min(1, {
    message: '請選擇報名地區',
  }),
  captcha: z.string({
    required_error: '請輸入驗證碼',
  }),
});

const EventForm = () => {
  const searchParams = useSearchParams();
  const [introducer, setIntroducer] = useLocalStorage(
    'introducer',
    searchParams.get('introducer')
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      locations: [],
      introducer: '',
      customerType: undefined,
      agreeToTerms: undefined,
      captcha: '',
    },
  });

  useEffect(() => {
    if (searchParams.has('introducer')) {
      setIntroducer(searchParams.get('introducer'));
    }
  }, [searchParams, setIntroducer]);

  useEffect(() => {
    if (introducer) {
      form.setValue('introducer', introducer);
    }
  }, [introducer, form]);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaKey, setCaptchaKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);

  const onErrorDialogClose = () => {
    setIsError(false);
    setErrorMessage('');
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const date = {
      ...values,
      locations: values.locations.map((l) => ({
        city: l,
      })),
    };
    setIsLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/event`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(date),
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
        setCaptchaKey(Date.now());
        setIsLoading(false);
      });
  }
  return (
    <div className="p-0 sm:p-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-0 w-auto space-y-8 xl:mx-0"
          id="form"
        >
          {/* <ScrollArea className="h-auto min-h-96 xl:h-[calc(100vh-25rem)]"> */}
          <div className="space-y-8">
            <div className="block space-y-8 lg:flex lg:space-x-10 lg:space-y-0">
              <div className="w-full space-y-4 lg:w-1/2">
                <h3
                  className="main-title-secondary text-2xl md:text-3xl"
                  data-stroke="基本資料"
                >
                  基本資料
                </h3>
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
                        />
                      </FormControl>
                      {/* <FormDescription>
                請輸入真實姓名
              </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 手機 */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>手機號碼</FormLabel>
                      <FormControl>
                        <Input placeholder="0912345678" type="tel" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@yuanta.com.tw"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
                <FormField
                  control={form.control}
                  name="introducer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>介紹人</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="請輸入介紹人（非必填）"
                          type="introducer"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 上課方式 */}
                <div>
                  <h3
                    className="main-title-secondary text-2xl md:text-3xl"
                    data-stroke="上課方式"
                  >
                    上課方式
                  </h3>
                  <div className="mb-1 mt-3 flex items-center space-x-2">
                    <Checkbox checked={true} aria-readonly />
                    <Label className="text-lg font-semibold">
                      實體現場! 名額有限手刀搶下
                    </Label>
                  </div>
                  <p className="text-base text-red-500">
                    *如實體已滿，將有專人聯繫發送線上連結
                  </p>
                  <p className="text-base text-red-500">
                    *如期望<span className="underline">線上參與</span>
                    ，請參考下方注意事項
                  </p>
                </div>
              </div>
              {/* 分欄 */}
              <div className="block space-y-10 lg:w-1/2 xl:flex xl:flex-col">
                {/* 是否為元大期貨客戶 */}
                <FormField
                  control={form.control}
                  name="customerType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <h3
                        className="main-title-secondary text-2xl md:text-3xl"
                        data-stroke="是否為元大&#8203;期貨客戶"
                      >
                        是否為元大&#8203;期貨客戶
                      </h3>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="GotAccount" />
                            </FormControl>
                            <FormLabel className="font-medium">
                              是，我有元大期貨帳戶
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="GotIBAccount" />
                            </FormControl>
                            <FormLabel className="font-medium">
                              是，我有元大證券IB期貨戶
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="NotCustomer" />
                            </FormControl>
                            <FormLabel className="font-medium">
                              否，尚未有元大期貨有帳戶
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 報名地點 */}
                <FormField
                  control={form.control}
                  name="locations"
                  render={({ field }) => {
                    const locationChange =
                      (value: LocationValue) => (checked: boolean) => {
                        if (checked) {
                          field.onChange([...(field.value || []), value]);
                        } else {
                          field.onChange(
                            field.value.filter((v) => v !== value)
                          );
                        }
                      };
                    return (
                      <>
                        <h3
                          className="main-title-secondary text-2xl md:text-3xl"
                          data-stroke="報名地區/時間/地址"
                        >
                          報名地區/時間/地址
                        </h3>
                        <FormControl>
                          <div className="block h-full space-y-3 xl:flex xl:flex-col xl:justify-around xl:space-y-0">
                            {locations.map((location) => (
                              <FormItem
                                key={location.value}
                                className="rounded-lg bg-y-card p-3"
                              >
                                <FormLabel className="w-full">
                                  <div className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          location.value
                                        )}
                                        onCheckedChange={locationChange(
                                          location.value
                                        )}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                      <FormLabel className="cursor-pointer text-y-tab-t">
                                        {location.label}
                                        <span className="">
                                          {' '}
                                          {location.date}
                                        </span>

                                        <FormDescription className="mt-2 font-medium text-y-t-base">
                                          地點：{location.location}
                                          <br />
                                          地址：{location.address}
                                        </FormDescription>
                                      </FormLabel>
                                    </div>
                                  </div>
                                </FormLabel>
                              </FormItem>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </>
                    );
                  }}
                />
              </div>
            </div>
            {/* 隱私權保護聲明及個人資料保護法告知事項 */}
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <div>
                  <h3
                    className="main-title-secondary text-2xl md:text-3xl"
                    data-stroke="隱私權保護聲明及&#8203;個人資料保護法&#8203;告知事項"
                  >
                    隱私權保護聲明及&#8203;個人資料保護法&#8203;告知事項
                  </h3>

                  <p className="mb-4 text-base">
                    您所提供的資料，我們僅會基於您的申請事項之目的及範圍，於業務所需執行期間，在本公司所在地區以合理方式，蒐集、處理、利用您所留下之姓名、電話等個人資料，而在您點選「確認送出」時表示您對前述內容及本公司之隱私權保護聲明及個人資料保護法告知事項已充分瞭解並同意。
                  </p>
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1">
                      <FormLabel>
                        我同意隱私權保護聲明及個人資料保護法告知事項 
                      </FormLabel>
                      <p className="mb-1 text-red-500">*必填</p>
                    </div>
                  </FormItem>
                  <FormMessage />
                </div>
              )}
            />
            {/* 驗證碼 */}
            <FormField
              control={form.control}
              name="captcha"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-wrap space-x-3">
                    <FormControl>
                      <Input
                        placeholder="請輸入驗證碼"
                        type="text"
                        className="mb-3 max-w-xs"
                        {...field}
                      />
                    </FormControl>
                    <Captcha captchaKey={captchaKey} />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* 提交按鈕 */}
            <div className="text-center">
              <Button
                size="rounded"
                className="ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-7 py-6 text-2xl font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
              >
                免費報名 GO
                <span className="">
                  {isLoading && <LoaderCircle className="animate-spin" />}
                </span>
              </Button>
            </div>

            {/* 注意事項 */}
            <hr className="border-2 border-[#F9E1C2]" />
            <div>
              <h3
                className="main-title-secondary mb3 text-2xl md:text-3xl"
                data-stroke="注意事項"
              >
                注意事項
              </h3>
              <ol className="ml-4 list-decimal text-base">
                <li className="text-y-secondary">
                  如有活動問題或期望線上參與，請於週一至週五
                  08:00-17:00，洽該報名地區分公司索取連結
                  <p>
                    * 台北場：<a href="tel:0227176000">(02) 2717-6000</a>
                    <br />* 高雄場：
                    <a href="tel:072157777">(07) 215-7777</a>
                  </p>
                </li>
                <li>主辦單位保留議程變動之權利。</li>
                <li>
                  活動全程免費，因應市場、法令變動或其他不可抗力、不可歸責主辦單位之事由（例如天災、疫情），主辦單位保有修改、終止、延期本活動之權利，並於網頁公告，不另行通知。
                </li>
                <li>
                  於活動兩日前，將有專人聯繫，或發送論壇課程相關內容資訊，至您報名填寫之E-mail信箱，屆時請留意相關訊息，我們期待與您相見。
                </li>
                <li>
                  如實體已滿，於活動前兩日內，有專人聯繫發送線上連結，屆時請留意相關訊息。
                </li>
              </ol>
            </div>
          </div>
          {/* <ScrollBar /> */}
          {/* </ScrollArea> */}
        </form>
      </Form>
      <SuccessDialog
        open={isSuccess}
        onOpenChange={() => setIsSuccess(false)}
      />
      <ErrorDialog
        open={isError}
        onOpenChange={onErrorDialogClose}
        message={errorMessage}
      />
    </div>
  );
};

export default EventForm;
