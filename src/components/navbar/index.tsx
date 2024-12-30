import Logo from '@/assets/logo.png';
import Image from '@/lib/image';
import Link from 'next/link';
import MediaLinks from './media-links';
import Menu from './menu';
import OnlyTwo from './only-two';

const Navbar = () => {
  // const [active, setActive] = useState('');
  // console.log(active);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         entry.isIntersecting && setActive(entry.target.id);
  //       });
  //     },
  //     {
  //       root: null, // 默認是視窗
  //       rootMargin: '0px',
  //       threshold: 0.1, // 當目標元素 10% 可見時觸發
  //     }
  //   );

  //   ['#gift', '#StockFutures', '#dividend'].forEach((id) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       console.log(element);
  //       observer.observe(element);
  //     }
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <>
      <div className="fixed z-50 w-screen bg-white px-5 py-3 shadow-md md:px-7 md:py-4">
        <nav className="container flex items-center justify-between">
          <h1 className="">
            <Link href="/" className="">
              <Image
                src={Logo}
                className="w-28 cursor-pointer md:w-44"
                alt="Logo"
                placeholder="empty"
                priority
              />
            </Link>
          </h1>
          <ul className="hidden w-full items-center justify-end pr-5 text-lg font-bold text-primary lg:flex">
            <li className="flex justify-center border-gray-300 px-3 last:border-r-0 hover:text-blue-600">
              <OnlyTwo />
              <Link href="/seminar">講座報名</Link>
            </li>
            <li className="border-gray-300 px-3 last:border-r-0 hover:text-blue-600">
              <Link href="/futures">外期財門</Link>
            </li>
            <li className="border-gray-300 px-3 last:border-r-0 hover:text-blue-600">
              <Link href="/leverage">槓桿財門</Link>
            </li>
          </ul>
          <ul className="hidden space-x-3 lg:flex">
            <MediaLinks />
          </ul>
          <Menu />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
