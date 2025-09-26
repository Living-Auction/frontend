import MainLayout from '@/widgets/layout/ui/main';
import MainHeader from '@/widgets/header/ui/main';

export default function Home() {
  return (
    <MainLayout>
      <MainHeader />
      <section>
        <h2 className='text-title'>메인페이지</h2>
      </section>
    </MainLayout>
  );
}
