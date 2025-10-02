import Thumbnail from '@component/thumbnail';
import { tv } from 'tailwind-variants';
import { TYPE_TO_SIZE } from '@/entities/product/model/constants';
import ProductThumbnail from '@/entities/product/ui/product-thumbnail';
import FavoriteButton from '@/features/favorite/ui/favorite-button';

const productCard = tv({
  slots: {
    base: 'flex gap-2',
    info: 'flex flex-col gap-1 justify-between',
  },
  variants: {
    type: {
      vertical: {
        base: 'flex-col h-60 w-37',
        info: 'h-full',
      },
      horizontal: {
        base: 'flex-row w-75',
        info: 'w-full',
      },
    },
  },
});

interface Props {
  type: 'vertical' | 'horizontal';
  product: Product;
}

const ProductCard = ({ type, product }: Props) => {
  const thumbnailSize = TYPE_TO_SIZE[type];
  const { base, info } = productCard({ type });
  const { title, thumbnail, endDate, currentPrice } = product;

  return (
    <div className={base()}>
      <ProductThumbnail thumbnailSize={thumbnailSize} thumbnail={thumbnail} />
      <div className={info()}>
        <span className='text-body font-bold line-clamp-2'>{title}</span>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-1 items-center'>
            <span className='text-caption font-bold text-gray-500'>종료일</span>
            <span className='text-caption font-regular text-gray-500'>{endDate}</span>
          </div>
          <span className='text-body font-bold'> 현재가 {currentPrice} 원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
