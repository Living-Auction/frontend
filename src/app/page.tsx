import MainHeader from '@/widgets/header/ui/main';
import WithNavigationLayout from '@/widgets/layout/ui/with-navigation';

export default function Home() {
  return (
    <WithNavigationLayout header={<MainHeader />}>
      <section>
        <h2 className='text-title'>메인페이지</h2>
      </section>
    </WithNavigationLayout>
  );
}
