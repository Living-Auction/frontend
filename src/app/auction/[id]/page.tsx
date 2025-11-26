import getDetail from '@entities/product/api/get-detail';
import { ProfileCard } from '@entities/user/ui/profile-card';
import Carousel from '@widgets/carousel/ui/carousel';
import ProductBidding from '@widgets/footer/ui/product-bidding';
import AuctionDetailHeader from '@widgets/header/ui/auction-detail';
import ProductInfo from '@widgets/product/ui/product-info';
import ProductOverview from '@widgets/product/ui/product-overview';

interface AuctionDetailProps {
  params: Promise<{ id: string }>;
}

const AuctionDetail = async ({ params }: AuctionDetailProps) => {
  const { id } = await params;

  const {
    title,
    views,
    favorites,
    startTime,
    endTime,
    seller,
    images,
    description,
    currentPrice,
    buyNowPrice,
  } = await getDetail(id);

  return (
    <>
      <AuctionDetailHeader title={title} />
      <Carousel images={images} name={title} isLoading={images.length === 0} />
      <article className='mb-40 w-full space-y-1 block bg-gray-100'>
        <ProductOverview
          status='PENDING'
          title={title}
          views={views}
          favorites={favorites}
          startDate={startTime}
          endDate={endTime}
        />
        <ProfileCard seller={seller} />
        <ProductInfo desc={description} />
      </article>
      <ProductBidding currentPrice={currentPrice} buyNowPrice={buyNowPrice} />
    </>
  );
};

export default AuctionDetail;
