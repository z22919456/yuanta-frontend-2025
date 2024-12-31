import Image from '@/lib/image';
import Link from 'next/link';
import Logo from '../../assets/yoxi_yuanta.png';

const Navbar = () => {
  return (
    <>
      <div className="fixed z-50 w-screen bg-white px-5 py-3 shadow-md md:px-7 md:py-4">
        <nav className="container flex items-center justify-between">
          <h1 className="">
            <Link href="/" className="">
              <Image
                src={Logo}
                className="w-64 cursor-pointer md:w-72"
                alt="Logo"
                placeholder="empty"
                priority
              />
            </Link>
          </h1>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
