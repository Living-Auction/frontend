import React from 'react';
import BidBar from '@/features/place-bid/ui/bid-bar';
import BaseFooter from './base';

const ProductBidding = () => {
  return (
    <BaseFooter>
      <BidBar currentBid={45000} initialFavorite={false} />
    </BaseFooter>
  );
};

export default ProductBidding;
