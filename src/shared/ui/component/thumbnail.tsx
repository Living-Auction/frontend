'use client';

import Image from 'next/image';
import { tv } from 'tailwind-variants';
import { THUMBNAIL_SIZE_MAP } from '@/shared/config/image';

const thumbnail = tv({
  base: 'relative overflow-hidden bg-gray-100 rounded-md',
  variants: {
    size: {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-37 h-37',
    },
  },
});

interface Props {
  size: 'sm' | 'md' | 'lg';
  src: string;
  alt: string;
  onClick?: () => void;
}

const Thumbnail = ({ size, src, alt, onClick }: Props) => {
  return (
    <div className={thumbnail({ size })} onClick={onClick}>
      <Image src={src} alt={alt} fill className='object-cover' sizes={THUMBNAIL_SIZE_MAP[size]} />
    </div>
  );
};

export default Thumbnail;
