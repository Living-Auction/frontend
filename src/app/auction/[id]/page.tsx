import Carousel from '@widgets/carousel/ui/carousel';
import AuctionDetailHeader from '@widgets/header/ui/auction-detail';
import { PRODUCT_DUMMY } from '@/entities/product/model/constants';
import ProductOverview from '@/widgets/product/product-overview';

const AuctionDetail = () => {
  const { title, id, status, views, favorites, startDate, endDate } = PRODUCT_DUMMY;

  return (
    <>
      <AuctionDetailHeader />
      <Carousel auctionId={id} name={title} />
      <article>
        <ProductOverview
          status={status}
          title={title}
          views={views}
          favorites={favorites}
          startDate={startDate}
          endDate={endDate}
        />
        <section>profile card</section>
        <section>detail contents: text & bid-status-table</section>
        <footer>bid-banner</footer>
      </article>
    </>
  );
};

export default AuctionDetail;
