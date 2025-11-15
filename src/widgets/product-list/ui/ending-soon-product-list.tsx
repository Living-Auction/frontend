import { ProductCardDto } from '@entities/product/model/type';
import { getEndingSoon } from '@widgets/product-list/api/get-ending-soon';
import ProductCard from '@/entities/product/ui/product-card';

const EndingSoonProductList = async () => {
  const products = (await getEndingSoon()).data;

  return (
    <section aria-labelledby='ending-soon-section' className='flex flex-col w-full gap-2.5'>
      <h2 id='ending-soon-section' className='text-subtitle font-bold'>
        마감임박!
      </h2>
      <div className='overflow-x-auto snap-x snap-mandatory scroll-smooth grid grid-flow-col grid-rows-2 gap-4 no-scrollbar'>
        {products.map((product: ProductCardDto) => (
          <div key={product.id} className='snap-start'>
            <ProductCard type='horizontal' product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndingSoonProductList;
