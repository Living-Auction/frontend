import DateSelector from '@entities/auction-form/ui/date-selector';
import ImageUploader from '@entities/auction-form/ui/image-uploader';
import InputDescription from '@entities/auction-form/ui/input-description';
import InputTitle from '@entities/auction-form/ui/input-title';
import AuctionFormHeader from '@widgets/header/ui/auction-form';

const AuctionCreate = () => {
  return (
    <div className='bg-background h-full'>
      <AuctionFormHeader title='경매 등록' />
      <section className='flex flex-col gap-4 px-4'>
        <InputTitle />
        <InputDescription />
        <ImageUploader />
        <DateSelector disabled />
        <DateSelector />
      </section>
    </div>
  );
};

export default AuctionCreate;
