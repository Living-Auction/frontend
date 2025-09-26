import MainHeader from '@/widgets/header/ui/main';
import Navigation from '@/widgets/footer/ui/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='relative bg-background md:max-w-md lg:max-w-xl mx-auto min-h-screen w-full flex flex-col'>
      <MainHeader />
      <main className='flex-1'>{children}</main>
      <Navigation />
    </div>
  );
};

export default MainLayout;
