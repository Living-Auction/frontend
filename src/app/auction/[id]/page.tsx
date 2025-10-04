import AuctionDetailHeader from '@widgets/header/ui/auction-detail';
import Carousel from '@/widgets/carousel/ui/carousel';

const AuctionDetail = () => {
  return (
    <>
      <AuctionDetailHeader />
      <Carousel auctionId={'test-id-121231234'} />
      <article>
        <section>overview</section>
        <section>profile card</section>
        <section>detail contents: text & bid-status-table</section>
        <footer>bid-banner</footer>
      </article>
    </>
  );
};

export default AuctionDetail;
