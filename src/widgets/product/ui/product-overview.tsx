import ProductEngagement from '@/entities/product/ui/product-engagement';
import ProductStatusBadge from '@/entities/product/ui/product-status-badge';
import { ProductTimer } from '@/features/product-timer';
import { AuctionStatus } from '@/features/product-timer/model/types';
import ShareIconButton from '@/features/share-product/share-icon-button';

interface ProductOverviewProps {
  status: AuctionStatus;
  title: string;
  views: number;
  favorites: number;
  startDate: string;
  endDate: string;
  // tradeLocation: string;
}

const ProductOverview = ({
  status,
  title,
  views,
  favorites,
  startDate,
  endDate,
  // tradeLocation,
}: ProductOverviewProps) => {
  // const SplitedLocation = tradeLocation.split(' ').filter((item, idx) => idx !== 0);
  // const resultLocation = SplitedLocation.join(' ');

  return (
    <section className='bg-background p-4 shadow-sm'>
      <ProductStatusBadge status={status} />
      <h3 className='text-subtitle font-bold text-ellipsis line-clamp-2 my-3'>{title}</h3>
      <div className='flex items-center w-full justify-between mb-6'>
        <div className='flex item-center gap-3'>
          {/*<p className='text-body text-gray-500'>{resultLocation}</p>*/}
          <ProductEngagement type={'views'} counts={views} />
          <ProductEngagement type={'favorites'} counts={favorites} />
        </div>
        <ShareIconButton />
      </div>
      <ProductTimer status={status} startDate={startDate} endDate={endDate} />
    </section>
  );
};

export default ProductOverview;
