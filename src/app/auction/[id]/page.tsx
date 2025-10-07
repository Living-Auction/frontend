import Carousel from '@widgets/carousel/ui/carousel';
import AuctionDetailHeader from '@widgets/header/ui/auction-detail';

const AuctionDetail = () => {
  return (
    <>
      <AuctionDetailHeader />
      <Carousel auctionId={'test-id-121231234'} name={'상품명 내려주기'} />
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
