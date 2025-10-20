'use client';

import { ChevronRight, HandCoins } from 'lucide-react';
import { cn } from 'tailwind-variants/lite';

interface BuyNowButtonProps {
  productId: string;
  buyNowPrice: number;
}
const BuyNowButton = ({ productId, buyNowPrice }: BuyNowButtonProps) => {
  const handleButNow = () => {
    console.log('buy now', productId);
  };

  return (
    <button
      type='button'
      aria-label='즉시 구매'
      onClick={handleButNow}
      className={cn(
        `flex w-full items-center justify-between gap-2 bg-primary-100 py-2 px-3 rounded-sm text-body text-gray-900 [&_svg]:stroke-primary-900 [&_svg]:w-6 text-left font-medium`,
      )}
    >
      <HandCoins />
      <p className={cn(`w-full`)}>
        지금{' '}
        <span className={cn(`text-primary-900 font-bold`)}>{buyNowPrice.toLocaleString()}원</span>에
        즉시구매 하기
      </p>
      <ChevronRight />
    </button>
  );
};

export default BuyNowButton;
