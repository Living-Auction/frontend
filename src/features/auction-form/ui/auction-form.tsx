'use client';

import Button from '@component/button';
import DateSelector from '@entities/auction-form/ui/date-selector';
import ImageUploader from '@entities/auction-form/ui/image-uploader';
import InputDescription from '@entities/auction-form/ui/input-description';
import InputTitle from '@entities/auction-form/ui/input-title';
import { useAuctionForm } from '@features/auction-form/model/hooks';
import { FormProvider } from 'react-hook-form';

interface Props {
  mode: 'create' | 'edit';
  defaultValues?: {
    title: string;
    description: string;
    images: File[];
    endDate: string;
  };
}

const AuctionForm = ({ mode, defaultValues }: Props) => {
  const buttonName = mode === 'create' ? '등록하기' : '제출하기';
  const methods = useAuctionForm({
    defaultValues,
  });

  // TODO: api 요청 로직 추가
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className='flex flex-col justify-between p-4 flex-1'>
        <div className='flex flex-col gap-4'>
          <InputTitle />
          <InputDescription />
          <ImageUploader />
          <DateSelector disabled={mode === 'edit'} />
        </div>
        <Button type='submit' className='w-full'>
          {buttonName}
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuctionForm;
