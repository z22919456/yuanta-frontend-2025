import SideButton from '@/app/(yuanta)/components/buttons/side-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CreateAccountDialog from './create-account-dialog';
import LoginDialog from './login-dialog';

export const LeverageSideButton = () => {
  return (
    <LoginDialog type="leverage">
      <SideButton>槓桿成績</SideButton>
    </LoginDialog>
  );
};

export const FutureSideButton = () => {
  return (
    <LoginDialog type="futures">
      <SideButton>外期成績</SideButton>
    </LoginDialog>
  );
};

export const SeminarSideButton = () => {
  return (
    <Link href="/seminar">
      <SideButton>講座報名</SideButton>
    </Link>
  );
};

export const OpenAccountSideButton = () => {
  return (
    <CreateAccountDialog>
      <SideButton>我要開戶</SideButton>
    </CreateAccountDialog>
  );
};

export const FutureBottomButton = () => {
  return (
    <LoginDialog type="futures">
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        外期成績
      </Button>
    </LoginDialog>
  );
};

export const LeverageBottomButton = () => {
  return (
    <LoginDialog type="leverage">
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        槓桿成績
      </Button>
    </LoginDialog>
  );
};

export const SeminarBottomButton = () => {
  return (
    <Link href="/seminar">
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        講座報名
      </Button>
    </Link>
  );
};

export const OpenAccountBottomButton = () => {
  return (
    <CreateAccountDialog>
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        我要開戶
      </Button>
    </CreateAccountDialog>
  );
};
