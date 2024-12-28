import Navbar from './components/navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-taxi relative min-h-screen pt-[64px]">
        <div className="container">
          <div className="container rounded-lg border-4 border-[#513510] bg-white p-5" />
        </div>
      </main>
    </>
  );
};

export default Page;
