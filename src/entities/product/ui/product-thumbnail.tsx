'use client';

import { useRouter } from 'next/navigation';
import Thumbnail from '@component/thumbnail';
import FavoriteButton from '@/features/favorite/ui/favorite-button';

interface Props {
  id: string;
  thumbnailSize: 'md' | 'lg';
  thumbnail: string;
}

const ProductThumbnail = ({ id, thumbnailSize, thumbnail }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/auction/${id}`);
  };

  return (
    <div className='relative inline-block'>
      <Thumbnail size={thumbnailSize} src={thumbnail} alt='thumbnail' onClick={handleClick} />
      <FavoriteButton initialFavorite={false} className='absolute top-2 right-2' />
    </div>
  );
};

export default ProductThumbnail;
