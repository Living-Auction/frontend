import ErrorMessage from '@entities/auction-form/ui/error-message';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { useFormContext } from 'react-hook-form';

const InputPrice = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionFormData>();

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='startPrice' className='text-body font-bold text-gray-900'>
        경매 시작가
      </label>
      <input
        id='startPrice'
        type='number'
        {...register('auctionData.startPrice', { valueAsNumber: true })}
        className='border border-gray-300 rounded-md px-3 py-2 placeholder:text-gray-500 placeholder:font-mediumm placeholder:text-body focus:outline-gray-900 focus:outline-1'
        placeholder='경매 시작가를 입력해주세요.'
      />
      {errors.auctionData?.startPrice && (
        <ErrorMessage error={errors.auctionData?.startPrice.message} />
      )}
    </div>
  );
};

export default InputPrice;
