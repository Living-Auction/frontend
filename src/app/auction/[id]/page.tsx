import { PRODUCT_DUMMY } from '@entities/product/model/constants';
import { ProfileCard } from '@entities/user/ui/profile-card';
import Carousel from '@widgets/carousel/ui/carousel';
import ProductBidding from '@widgets/footer/ui/product-bidding';
import AuctionDetailHeader from '@widgets/header/ui/auction-detail';
import ProductInfo from '@widgets/product/ui/product-info';
import ProductOverview from '@widgets/product/ui/product-overview';

const AuctionDetail = () => {
  const { title, id, status, views, favorites, startDate, endDate, uuid, tradeLocation, desc } =
    PRODUCT_DUMMY;

  return (
    <>
      <AuctionDetailHeader />
      <Carousel auctionId={id} name={title} />
      <article className='mb-24 w-full space-y-1 block bg-gray-100'>
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
      </article>
      <ProductBidding />
    </>
  );
};

export default AuctionDetail;
