'use client';

import FavoriteButton from '@/features/favorite/ui/favorite-button';
import Button from '@/shared/ui/component/button';

interface BidBarProps {
  currentBid: number;
  initialFavorite: boolean;
  isFormOpen: boolean;
  onBidButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
}

const BidBar = ({
  currentBid,
  initialFavorite,
  isFormOpen,
  isDisabled,
  onBidButtonClick,
}: BidBarProps) => {
  return (
    <div className='w-full flex justify-between items-center gap-2 z-50 mt-4 relativ'>
      <FavoriteButton initialFavorite={initialFavorite} size='lg' />
      <div className='shrink-1 w-full ml-2'>
        <p className='text-body leading-none mb-1 font-regular text-gray-700'>현재 입찰가</p>
        <p className='text-title font-bold text-primary-900 leading-none'>
          {currentBid.toLocaleString()}
        </p>
      </div>
      <Button
        type={isFormOpen ? 'submit' : 'button'}
        className='shrink-0 w-30'
        color={isDisabled ? 'disabled' : 'primary'}
        onClick={!isFormOpen ? (e) => onBidButtonClick(e) : undefined}
        disabled={isFormOpen && isDisabled}
      >
        {isFormOpen ? '입찰등록' : '입찰하기'}
      </Button>
    </div>
  );
};

export default BidBar;
