import Categories from '@/features/category/categories';
import Navigation from '@/widgets/footer/ui/navigation';
import MainHeader from '@/widgets/header/ui/main';

export default function Home() {
  return (
    <div className='relative bg-background md:max-w-md mx-auto min-h-screen w-full flex flex-col'>
      <MainHeader />
      <section className='flex flex-col items-center justify-center gap-4 px-4'>
        <Categories />
        <h2 className='text-title'>메인페이지</h2>
      </section>
      <Navigation />
    </div>
  );
}
