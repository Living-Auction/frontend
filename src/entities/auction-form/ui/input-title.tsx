import { useFormContext } from 'react-hook-form';

const InputTitle = () => {
  const { register, formState } = useFormContext();
  const error = formState.errors.title?.message as string | undefined;

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='title' className='text-body font-bold text-gray-900'>
        상품명
      </label>
      <input
        id='title'
        type='text'
        {...register('title')}
        className='border border-gray-300 rounded-md px-3 py-2 placeholder:text-gray-500 placeholder:font-mediumm placeholder:text-body focus:outline-gray-900 focus:outline-1'
        placeholder='경매 상품 이름을 입력해주세요.'
      />
      {error && <span className='text-negative-900 text-caption'>{error}</span>}
    </div>
  );
};

export default InputTitle;
