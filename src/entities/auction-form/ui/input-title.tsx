import ErrorMessage from '@entities/auction-form/ui/error-message';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { useFormContext } from 'react-hook-form';

const InputTitle = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionFormData>();

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='title' className='text-body font-bold text-gray-900'>
        상품명
      </label>
      <input
        id='title'
        type='text'
        {...register('auctionData.title')}
        className='border border-gray-300 rounded-md px-3 py-2 placeholder:text-gray-500 placeholder:font-mediumm placeholder:text-body focus:outline-gray-900 focus:outline-1'
        placeholder='경매 상품 이름을 입력해주세요.'
      />
      {errors.auctionData?.title && <ErrorMessage error={errors.auctionData?.title?.message} />}
    </div>
  );
};

export default InputTitle;
