import Thumbnail from '@component/thumbnail';
import FavoriteButton from '@/features/favorite/ui/favorite-button';

interface Props {
  thumbnailSize: 'md' | 'lg';
  thumbnail: string;
}

const ProductThumbnail = ({ thumbnailSize, thumbnail }: Props) => {
  return (
    <div className='relative inline-block'>
      <Thumbnail size={thumbnailSize} src={thumbnail} alt='thumbnail' />
      <FavoriteButton initialFavorite={false} className='absolute top-2 right-2' />
    </div>
  );
};

export default ProductThumbnail;
