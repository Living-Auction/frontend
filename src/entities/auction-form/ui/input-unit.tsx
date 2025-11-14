import ErrorMessage from '@entities/auction-form/ui/error-message';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { useFormContext } from 'react-hook-form';

const InputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionFormData>();

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='minBidUnit' className='text-body font-bold text-gray-900'>
        최소 입찰 단위
      </label>
      <input
        id='minBidUnit'
        type='number'
        {...register('auctionData.minBidUnit', { valueAsNumber: true })}
        className='border border-gray-300 rounded-md px-3 py-2 placeholder:text-gray-500 placeholder:font-mediumm placeholder:text-body focus:outline-gray-900 focus:outline-1'
        placeholder='최소 입찰 단위를 입력해주세요.'
      />
      {errors.auctionData?.minBidUnit && (
        <ErrorMessage error={errors.auctionData?.minBidUnit.message} />
      )}
    </div>
  );
};

export default InputUnit;
