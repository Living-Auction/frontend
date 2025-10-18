import AuctionForm from '@features/auction-form/ui/auction-form';
import AuctionFormHeader from '@widgets/header/ui/auction-form';

const AuctionEdit = () => {
  // TODO: auction-edit page 에서 Id 받아 data-fetching -> data 내려주기
  const mockData = {
    title: '중고 노트북 경매',
    description: '거의 새 제품이에요!',
    images: [],
    endDate: '3일 뒤 경매 종료',
  };

  return (
    <>
      <AuctionFormHeader title='경매 수정' />
      <AuctionForm mode='edit' defaultValues={mockData} />
    </>
  );
};

export default AuctionEdit;
