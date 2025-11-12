'use client';

import { useRouter } from 'next/navigation';
import Button from '@component/button';
import DateSelector from '@entities/auction-form/ui/date-selector';
import ImageUploader from '@entities/auction-form/ui/image-uploader';
import InputDescription from '@entities/auction-form/ui/input-description';
import InputTitle from '@entities/auction-form/ui/input-title';
import { useAuctionForm } from '@features/auction-form/model/hooks';
import { useCreateAuction } from '@features/auction-form/model/useCreatAuction';
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

  const router = useRouter();
  const { submitAuction, loading } = useCreateAuction();

  const onSubmit = methods.handleSubmit(async (data) => {
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
