import Carousel from '@widgets/carousel/ui/carousel';
import AuctionDetailHeader from '@widgets/header/ui/auction-detail';
import { PRODUCT_DUMMY } from '@/entities/product/model/constants';
import { ProfileCard } from '@/entities/user/ui/profile-card';
import ProductInfo from '@/widgets/product/ui/product-info';
import ProductOverview from '@/widgets/product/ui/product-overview';

const AuctionDetail = () => {
  const { title, id, status, views, favorites, startDate, endDate, uuid, tradeLocation, desc } =
    PRODUCT_DUMMY;

  return (
    <>
      <AuctionDetailHeader />
      <Carousel auctionId={id} name={title} />
      <article className='space-y-1'>
        <ProductOverview
          status={status}
          title={title}
          views={views}
          favorites={favorites}
          startDate={startDate}
          endDate={endDate}
          tradeLocation={tradeLocation}
        />
        <ProfileCard uuid={uuid} />
        <ProductInfo desc={desc} />
        <footer>bid-banner</footer>
      </article>
    </>
  );
};

export default AuctionDetail;
