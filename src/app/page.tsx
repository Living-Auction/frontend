import MainHeader from '@/widgets/header/ui/main';
import Navigation from '@/widgets/footer/ui/navigation';

export default function Home() {
  return (
    <div>
      <MainHeader />
      <section>
        <h2 className='text-title'>메인페이지</h2>
      </section>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
