import BottomButtons from '@/components/bottom-buttons';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import SideButtons from '@/components/side-buttons';
import NextTopLoader from 'nextjs-toploader';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NextTopLoader />
      <Navbar />
      {children}
      <SideButtons />
      <BottomButtons />
      <Footer />
    </>
  );
};

export default Layout;
