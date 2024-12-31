import BottomButtons from '../../components/bottom-buttons';
import SideButtons from '../../components/side-buttons';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <SideButtons page="leverage" />
      <BottomButtons page="leverage" />
    </>
  );
};

export default Layout;
