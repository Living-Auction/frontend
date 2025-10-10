import ProductCard from '@entities/product/ui/product-card';
import { PRODUCT_CARD_LIST_DUMMY } from '@widgets/product-list/model/constants';

const LatestProductList = () => {
  return (
    <section aria-labelledby='latest-auction-section' className='w-full flex flex-col gap-2.5'>
      <h2 id='latest-auction-section' className='text-subtitle font-bold'>
        최신 업데이트 경매
      </h2>
      <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar'>
        {PRODUCT_CARD_LIST_DUMMY.map((product) => (
          <div key={product.id} className='snap-start'>
            <ProductCard type='vertical' product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProductList;
