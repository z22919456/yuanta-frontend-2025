import Fb from '@/assets/fb.svg';
import Line from '@/assets/line.svg';
import Yt from '@/assets/yt.svg';

export const router = [
  { type: 'anchor', href: '#1', label: '排行榜' },
  { type: 'anchor', href: '#2', label: '我的戰績' },
  { type: 'anchor', href: '/seminar', label: '講座報名' },
  // { type: 'anchor', href: '#gift', label: '股期3好禮' },
  // {
  //   type: 'link',
  //   href: 'https://www.yuantafutures.com.tw/StockFutures/',
  //   label: '股期成交量Top20',
  // },
  // { type: 'anchor', href: '#StockFutures', label: '股 V.S. 期' },
  // { type: 'anchor', href: '#dividend', label: '股期除權息知識+' },
  // { type: 'anchor', href: '/', label: '中獎名單' },
];

export const mediaLinks = [
  { icon: Fb, href: 'https://www.facebook.com/yuantafutures.options' },
  {
    icon: Yt,
    href: 'https://www.youtube.com/channel/UCCa0krL9fGAhQHz5PZHQZfw',
  },
  { icon: Line, href: 'https://page.line.me/vpa0174i?openQrModal=true' },
];
