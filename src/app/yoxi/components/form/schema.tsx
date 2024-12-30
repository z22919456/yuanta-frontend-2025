import { z } from 'zod';
import { CONTACTS, LOCATIONS, WILLING_TYPES } from './const';

export const formSchema = z
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

export type FormSchema = z.infer<typeof formSchema>;
