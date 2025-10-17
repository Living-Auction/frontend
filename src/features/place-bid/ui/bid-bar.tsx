'use client';

import { useState } from 'react';
import FavoriteButton from '@/features/favorite/ui/favorite-button';
import Button from '@/shared/ui/component/button';

interface BidBarProps {
  currentBid: number;
  initialFavorite: boolean;
}

const BidBar = ({ currentBid, initialFavorite = false }: BidBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenBidForm = () => {
    setIsOpen((prev) => !prev);
    console.log('now status: drawer open');
  };

  return (
    <div className='w-full flex justify-between items-center gap-2'>
      <FavoriteButton initialFavorite={initialFavorite} size='lg' />
      <div className='shrink-1 w-full ml-2'>
        <p className='text-body leading-none mb-1 font-regular text-gray-700'>현재 입찰가</p>
        <p className='text-title font-bold text-primary-900 leading-none'>
          {currentBid.toLocaleString()}
        </p>
      </div>
      <Button
        type={isOpen ? 'submit' : 'button'}
        className='shrink-0 w-30'
        onClick={
          isOpen
            ? () => {
                console.log('connect submit form handler');
                setIsOpen(false);
              }
            : handleOpenBidForm
        }
      >
        입찰하기
      </Button>
    </div>
  );
};

export default BidBar;
