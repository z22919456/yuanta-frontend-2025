import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
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
      <Footer />
    </>
  );
};

export default Layout;
