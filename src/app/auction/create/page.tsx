import AuctionForm from '@features/auction-form/ui/auction-form';
import AuctionFormHeader from '@widgets/header/ui/auction-form';

const AuctionCreate = () => {
  return (
    <>
      <AuctionFormHeader title='경매 등록' />
      <AuctionForm mode='create' />
    </>
  );
};

export default AuctionCreate;
