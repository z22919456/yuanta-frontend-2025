import SideButton from '@/app/(yuanta)/components/buttons/side-button';
import { Button } from '@/components/ui/button';
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

export const FuturesSearchSideButton = () => {
  return (
    <a
      href="https://www.yuantafutures.com.tw/margin_02"
      target="_blank"
      rel="noreferrer noopener"
    >
      <SideButton>查詢服務</SideButton>
    </a>
  );
};

export const LeverageSearchSideButton = () => {
  return (
    <a
      href="https://ltm.yuantafutures.com.tw/#marginCalculator"
      target="_blank"
      rel="noreferrer noopener"
    >
      <SideButton>查詢服務</SideButton>
    </a>
  );
};

export const OpenAccountSideButton = ({
  type,
}: {
  type: 'leverage' | 'future';
}) => {
  if (type === 'leverage') {
    return (
      <SideButton>
        <a
          href="https://ltm.yuantafutures.com.tw/member/openaccount"
          target="_blank"
          rel="noreferrer noopener"
        >
          我要開戶
        </a>
      </SideButton>
    );
  }
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

export const FutureSearchBottomButton = () => {
  return (
    <a
      href="https://www.yuantafutures.com.tw/margin_02"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        保證金查詢
      </Button>
    </a>
  );
};

export const LeverageSearchBottomButton = () => {
  return (
    <a
      href="https://ltm.yuantafutures.com.tw/#marginCalculator"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        保證金查詢
      </Button>
    </a>
  );
};

export const OpenAccountBottomButton = ({
  type,
}: {
  type: 'leverage' | 'future';
}) => {
  if (type === 'leverage') {
    return (
      <Button
        size="lg"
        className="h-auto w-full border-2 border-y-tab-bo bg-y-tab-active-bg py-1 text-lg font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
      >
        <a
          href="https://ltm.yuantafutures.com.tw/member/openaccount"
          target="_blank"
          rel="noreferrer noopener"
        >
          我要開戶
        </a>
      </Button>
    );
  }
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
