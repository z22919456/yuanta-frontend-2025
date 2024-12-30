export const LOCATIONS: [string, ...string[]] = [
  'taipei',
  'hsinchu',
  'taichung',
  'tainan',
  'kaohsiung',
  'isCustomer',
];

export const LOCATIONS_LABELS: Record<string, string> = {
  taipei: '台北',
  hsinchu: '新竹',
  taichung: '台中',
  tainan: '台南',
  kaohsiung: '高雄',
  isCustomer: '我有元大證券帳戶，想加開戶',
};

export const CONTACTS: [string, ...string[]] = [
  'anytime',
  'morning',
  'afternoon',
  'evening',
];

export const CONTACTS_LABELS: Record<string, string> = {
  morning: '平日上午時段 (09:00 - 12:00)',
  afternoon: '平日下午時段 (13:00 - 17:00)',
  evening: '平日晚間時段 (18:00 - 21:00)',
  anytime: '隨時皆可',
};

export const WILLING_TYPES: [string, ...string[]] = ['futures', 'leverage'];

export type Location = (typeof LOCATIONS)[number];
export type Contact = (typeof CONTACTS)[number];
export type WillingType = (typeof WILLING_TYPES)[number];
