'use client';

import { useState } from 'react';
import BuyNowButton from '@/features/but-now/ui/buy-now-button';
import BidBar from '@/features/place-bid/ui/bid-bar';
import BidForm from '@/features/place-bid/ui/bid-form';
import BaseFooter from './base';

const ProductBidding = () => {
  const CURRENT_BID = 34000;
  const MIN_BID_INCREMENT = 1000;
  const minNextBid = CURRENT_BID + MIN_BID_INCREMENT;

  const [bidAmount, setBidAmount] = useState<string>(String(minNextBid));
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBidAmount(String(minNextBid));
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bidAmountNumber = parseInt(bidAmount, 10);

    //Todo: alert -> toast 변경
    if (bidAmountNumber < minNextBid) {
      alert(`입찰가는 최소 ${minNextBid.toLocaleString()}원 이상이어야 합니다.`);
      return;
    }

    alert(`${bidAmountNumber.toLocaleString()}원으로 입찰이 제출되었습니다!`);
    handleCloseForm(); // 제출 성공 시 Form 닫기
  };

  const isSubmitDisabled = parseInt(bidAmount, 10) < minNextBid;

  return (
    <>
      <BaseFooter className='items-end'>
        <form onSubmit={handleSubmit} className='w-full'>
          <BuyNowButton productId='1234' buyNowPrice={90000} />
          {isFormOpen && (
            <BidForm currentBid={CURRENT_BID} bidAmount={bidAmount} setBidAmount={setBidAmount} />
          )}
          <BidBar
            currentBid={CURRENT_BID}
            initialFavorite={false}
            isFormOpen={isFormOpen}
            onBidButtonClick={handleOpenForm}
            isDisabled={isSubmitDisabled}
          />
        </form>
      </BaseFooter>
    </>
  );
};

export default ProductBidding;
