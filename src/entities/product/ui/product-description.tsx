import ProductInfoTitle from './product-info-title';

interface ProductDescription {
  desc: string;
}

const ProductDescription = ({ desc }: ProductDescription) => {
  return (
    <section className='flex flex-col gap-2'>
      <ProductInfoTitle>상품 상세</ProductInfoTitle>
      <p className='whitespace-pre-wrap word-break: break-all text-body'>{desc}</p>
    </section>
  );
};

export default ProductDescription;
