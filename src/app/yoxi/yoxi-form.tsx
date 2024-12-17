'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';

const LOCATIONS: [string, ...string[]] = [
  'taipei',
  'hsinchu',
  'taichung',
  'tainan',
  'kaohsiung',
  'isCustomer',
];

const CONTACTS: [string, ...string[]] = [
  'morning',
  'afternoon',
  'evening',
  'anytime',
];

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

const formSchema = z.object({
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
    message: '方便聯絡時間',
  }),
  location: z.enum(LOCATIONS),
  willingTypes: z.array(z.enum(WILLING_TYPES)).min(1, {
    message: '請勾選離您最近的地區',
  }),
});

const YoxiForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      contactTimes: [],
      location: '',
      willingTypes: [],
    },
  });

  return (
    <>
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="mb-0 w-auto space-y-8 xl:mx-0"
          id="form"
        ></form>
      </Form>
    </>
  );
};

export default YoxiForm;
