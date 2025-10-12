import AuctionForm from '@features/auction-form/ui/auction-form';
import AuctionFormHeader from '@widgets/header/ui/auction-form';

const AuctionCreate = () => {
  return (
    <div className='bg-background min-h-screen flex flex-col'>
      <AuctionFormHeader title='경매 등록' />
      <AuctionForm mode='create' />
    </div>
  );
};

export default AuctionCreate;
