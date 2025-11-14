import { Product } from '@entities/product/model/type';
import { getHot } from '@widgets/product-list/api/get-hot';
import ProductCard from '@/entities/product/ui/product-card';

const HotProductList = async () => {
  const products = (await getHot()).data;

  return (
    <section aria-labelledby='hot-auction-section' className='w-full flex flex-col gap-2.5'>
      <h2 id='hot-auction-section' className='text-subtitle font-bold'>
        우리동네 Hot한 경매
      </h2>
      <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar'>
        {products.map((product: Product) => (
          <div key={product.id} className='snap-start'>
            <ProductCard type='vertical' product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotProductList;
