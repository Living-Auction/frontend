'use client';

import { useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

const ImageUploader = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxImages = 8;

  // TODO: form 컴포넌트 제작 시 유효성 검사 로직 추가하며 로직 알맞게 변경
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: ImageFile[] = [];
    const remainingSlots = maxImages - images.length;

    for (let i = 0; i < Math.min(files.length, remainingSlots); i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newImages.push({
          id: `${Date.now()}-${i}`,
          file,
          preview: URL.createObjectURL(file),
        });
      }
    }

    setImages((prev) => [...prev, ...newImages]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const imageToRemove = prev.find((img) => img.id === id);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='flex flex-col'>
      <label id='image-uploader' className='text-body font-bold text-gray-900'>
        상품 이미지
      </label>
      <div className='flex gap-2 overflow-x-auto no-scrollbar pt-1.5'>
        <div
          onClick={handleAddClick}
          className='text-gray-300 flex-shrink-0 w-16 h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center'
        >
          <ImagePlus size={24} className='text-gray-300' />
          <span className='text-xs font-medium'>
            {images.length}/{maxImages}
          </span>
        </div>
        {images.map((image) => (
          <div key={image.id} className='relative flex-shrink-0'>
            <div className='overflow-hidden w-16 h-16 border border-gray-300 rounded-md'>
              <img src={image.preview} alt='preview' className='w-full h-full object-cover' />
            </div>
            <button
              onClick={() => handleRemoveImage(image.id)}
              className='absolute -top-1.5 -right-1.5 size-4 bg-gray-700 bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all'
            >
              <X size={10} />
            </button>
          </div>
        ))}
      </div>
      <input
        id='image-uploader'
        ref={fileInputRef}
        type='file'
        accept='image/*'
        multiple
        onChange={handleFileSelect}
        className='hidden'
      />
    </div>
  );
};

export default ImageUploader;
