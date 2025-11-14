'use client';

import { useRouter } from 'next/navigation';
import Button from '@component/button';
import DateSelector from '@entities/auction-form/ui/date-selector';
import ImageUploader from '@entities/auction-form/ui/image-uploader';
import InputDescription from '@entities/auction-form/ui/input-description';
import InputPrice from '@entities/auction-form/ui/input-price';
import InputTitle from '@entities/auction-form/ui/input-title';
import InputUnit from '@entities/auction-form/ui/input-unit';
import { useAuctionForm } from '@features/auction-form/model/hooks';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { useCreateAuction } from '@features/auction-form/model/useCreatAuction';
import { FormProvider } from 'react-hook-form';

interface Props {
  mode: 'create' | 'edit';
  defaultValues?: AuctionFormData;
}

const AuctionForm = ({ mode, defaultValues }: Props) => {
  const buttonName = mode === 'create' ? '등록하기' : '제출하기';
  const methods = useAuctionForm({
    defaultValues,
  });

  const router = useRouter();
  const { submitAuction, loading } = useCreateAuction();

  const onSubmit = methods.handleSubmit(async (data: AuctionFormData) => {
    try {
      await submitAuction(data);
      router.push('/');
    } catch (err) {
      console.error('Auction submission failed:', err);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className='flex flex-col justify-between p-4 flex-1'>
        <div className='flex flex-col gap-4'>
          <InputTitle />
          <InputDescription />
          <ImageUploader />
          <InputPrice />
          <InputUnit />
          <DateSelector disabled={mode === 'edit'} />
        </div>
        <Button type='submit' className='w-full' disabled={loading}>
          {loading ? '등록 중...' : buttonName}
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuctionForm;
