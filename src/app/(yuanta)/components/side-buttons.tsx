import {
  FutureSideButton,
  LeverageSideButton,
  OpenAccountSideButton,
  SeminarSideButton,
} from './buttons/buttons';
import ToTop from './to-top';

type Props = {
  page: 'leverage' | 'future';
};

const SideButtons = ({ page }: Props) => {
  return (
    <div className="fixed right-5 top-1/4 z-[100] hidden flex-col space-y-5 opacity-70 hover:opacity-100 md:right-5 md:flex lg:right-10 xl:right-20">
      <OpenAccountSideButton />
      {page === 'leverage' ? <LeverageSideButton /> : <FutureSideButton />}
      <SeminarSideButton />
      <ToTop />
    </div>
  );
};

export default SideButtons;
