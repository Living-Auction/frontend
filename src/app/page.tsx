import Carousel from '@widgets/carousel/ui/carousel';
import EndingSoonProductList from '@widgets/product-list/ui/ending-soon-product-list';
import HotProductList from '@widgets/product-list/ui/hot-product-list';
import LatestProductList from '@widgets/product-list/ui/latest-product-list';
import Categories from '@/features/category/categories';
import Navigation from '@/widgets/footer/ui/navigation';
import MainHeader from '@/widgets/header/ui/main';

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className='mt-13 mb-22 gap-6 flex flex-col px-4 py-2 w-full overflow-y-auto overscroll-contain'>
        <Categories />
        <HotProductList />
        <EndingSoonProductList />
        <Carousel name={''} images={[]} />
        <LatestProductList />
      </main>
      <Navigation />
    </>
  );
}
