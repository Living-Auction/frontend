import ProductDescription from '@/entities/product/ui/product-description';

interface ProductInfoProps {
  desc: string;
}

const ProductInfo = ({ desc }: ProductInfoProps) => {
  return (
    <div className='bg-background px-4 py-6'>
      <ProductDescription desc={desc} />
      {/* bidding-table 추가 */}
    </div>
  );
};

export default ProductInfo;
