'use client';

import { useRef } from 'react';
import ErrorMessage from '@entities/auction-form/ui/error-message';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { ImagePlus, X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<AuctionFormData>();

  const images = watch('images');
  const maxImages = 8;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const current = images || [];
    const remainingSlots = maxImages - current.length;

    const validFiles = fileArray
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, remainingSlots);

    setValue('images', [...current, ...validFiles], { shouldValidate: true });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveImage = (index: number) => {
    const updated = [...(images || [])];
    updated.splice(index, 1);
    setValue('images', updated, { shouldValidate: true });
  };

  const handleAddClick = () => fileInputRef.current?.click();

  return (
    <div className='flex flex-col'>
      <label htmlFor='image-uploader' className='text-body font-bold text-gray-900'>
        상품 이미지
      </label>

      <div className='flex gap-2 overflow-x-auto no-scrollbar pt-1.5'>
        <div
          onClick={handleAddClick}
          className='text-gray-300 flex-shrink-0 w-16 h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer'
        >
          <ImagePlus size={24} className='text-gray-300' />
          <span className='text-xs font-medium'>
            {images?.length || 0}/{maxImages}
          </span>
        </div>

        {images?.map((file, idx) => (
          <div key={idx} className='relative flex-shrink-0'>
            <div className='overflow-hidden w-16 h-16 border border-gray-300 rounded-md'>
              <img
                src={URL.createObjectURL(file)}
                alt='preview'
                className='w-full h-full object-cover'
              />
            </div>
            <button
              onClick={() => handleRemoveImage(idx)}
              type='button'
              className='absolute -top-1.5 -right-1.5 size-4 bg-gray-700 bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all'
            >
              <X size={10} />
            </button>
          </div>
        ))}
      </div>

      <input
        {...register('images')}
        id='image-uploader'
        ref={fileInputRef}
        type='file'
        accept='image/*'
        multiple
        onChange={handleFileSelect}
        className='hidden'
      />

      {errors.images && <ErrorMessage error={errors.images.message} />}
    </div>
  );
};

export default ImageUploader;
