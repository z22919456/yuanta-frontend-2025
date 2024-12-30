import SideButton from './buttons/side-button';
import ToTop from './to-top';

const SideButtons = () => {
  return (
    <div className="fixed right-5 top-1/4 z-[100] hidden flex-col space-y-5 opacity-50 hover:opacity-100 md:right-5 md:flex lg:right-10 xl:right-20">
      <SideButton>線上開戶</SideButton>
      <SideButton>外期成績</SideButton>
      <SideButton>講座報名</SideButton>
      <ToTop />
    </div>
  );
};

export default SideButtons;
