import { useFormContext } from 'react-hook-form';

const InputDescription = () => {
  const { register, formState } = useFormContext();
  const error = formState.errors.description?.message as string | undefined;

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='description' className='text-body font-bold text-gray-900'>
        상품 설명
      </label>
      <textarea
        id='description'
        {...register('description')}
        className='h-30 resize-none border border-gray-300 rounded-md px-3 py-2 placeholder:text-gray-500 placeholder:font-mediumm placeholder:text-body focus:outline-gray-900 focus:outline-1'
        placeholder='경매 상품에 대한 설명을 입력해주세요.'
      />
      {error && <span className='text-negative-900 text-caption'>{error}</span>}
    </div>
  );
};

export default InputDescription;
