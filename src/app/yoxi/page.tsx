import Wall, { WallContent } from '@/components/wall';

const Page = () => {
  return (
    <main className="min-h-screen pt-[64px]">
      <div className="container">
        <Wall title="你好，世界！">
          <WallContent>
            <p>fjksdlfjlk</p>
          </WallContent>
        </Wall>
      </div>
    </main>
  );
};

export default Page;
