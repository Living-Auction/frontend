'use client';

import { useState } from 'react';
import BidBar from '@features/place-bid/ui/bid-bar';
import BidForm from '@features/place-bid/ui/bid-form';
import { useDrawer } from '@shared/lib/hooks/use-drawer';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from 'tailwind-variants/lite';
import BuyNowButton from '@/features/but-now/ui/buy-now-button';
import BaseFooter from './base';

interface ProductBiddingProps {
  currentPrice: number;
  isBuyNowEnabled?: boolean;
}

const ProductBidding = ({ currentPrice, isBuyNowEnabled = false }: ProductBiddingProps) => {
  const MIN_BID_INCREMENT = 1000;
  const minNextBid = currentPrice + MIN_BID_INCREMENT;

  const [bidAmount, setBidAmount] = useState<string>(String(minNextBid));
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const EASE_OUT_QUINT = [0.33, 1, 0.68, 1] as const;

  const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBidAmount(String(minNextBid));
    openDrawer();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bidAmountNumber = parseInt(bidAmount, 10);

    //Todo: alert -> toast 변경
    if (bidAmountNumber < minNextBid) {
      alert(`🚨 입찰가는 최소 ${minNextBid.toLocaleString()}원 이상이어야 합니다.`);
      return;
    }

    alert(`📢 ${bidAmountNumber.toLocaleString()}원으로 입찰이 제출되었습니다!`);
    closeDrawer();
  };

  const isSubmitDisabled = parseInt(bidAmount, 10) < minNextBid;

  return (
    <>
      <BaseFooter className='w-full flex flex-col justify-end'>
        {isBuyNowEnabled && <BuyNowButton productId='1234' buyNowPrice={90000} />}
        <form onSubmit={handleSubmit} className='w-full flex flex-col'>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='bid-form-wrapper'
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: 'auto',
                  opacity: 1,
                  transition: {
                    height: { duration: 0.45, type: 'spring', ease: EASE_OUT_QUINT },
                    opacity: { duration: 0.2, ease: 'linear' },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.25, ease: EASE_OUT_QUINT },
                    opacity: { duration: 0.15, ease: 'easeOut' },
                  },
                }}
                className='overflow-hidden w-full flex flex-col justify-end items-center gap-2'
              >
                <BidForm
                  currentBid={currentPrice}
                  bidAmount={bidAmount}
                  setBidAmount={setBidAmount}
                />
                <button
                  type='button'
                  onClick={closeDrawer}
                  className={cn(
                    `size-8 absolute top-[-44px] right-3 text-background flex justify-center items-center gap-1 bg-foreground/25 rounded-full backdrop-blur-sm shadow-basic`,
                  )}
                  aria-label='닫기'
                >
                  <X width={22} height={22} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <BidBar
            currentBid={currentPrice}
            initialFavorite={false}
            isFormOpen={isOpen}
            onBidButtonClick={handleOpenForm}
            isDisabled={isSubmitDisabled}
          />
        </form>
      </BaseFooter>
    </>
  );
};

export default ProductBidding;
