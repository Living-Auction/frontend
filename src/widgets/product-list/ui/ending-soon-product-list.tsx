import { PRODUCT_CARD_LIST_DUMMY } from '@widgets/product-list/model/constants';
import ProductCard from '@/entities/product/ui/product-card';

const EndingSoonProductList = () => {
  return (
    <section aria-labelledby='ending-soon-section' className='flex flex-col w-full gap-2.5'>
      <h2 id='ending-soon-section' className='text-subtitle font-bold'>
        마감임박!
      </h2>
      <div className='overflow-x-auto snap-x snap-mandatory scroll-smooth grid grid-flow-col grid-rows-2 gap-4 no-scrollbar'>
        {PRODUCT_CARD_LIST_DUMMY.map((product) => (
          <div key={product.id} className='snap-start'>
            <ProductCard type='horizontal' product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndingSoonProductList;
