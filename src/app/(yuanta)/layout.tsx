import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import NextTopLoader from 'nextjs-toploader';
import Information from './components/Information';

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
      <Information />
      <Footer />
    </>
  );
};

export default Layout;
