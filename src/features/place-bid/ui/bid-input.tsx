'use client';

import { X } from 'lucide-react';
import { cn } from 'tailwind-variants/lite';

interface BidInputProps {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  showResetButton: boolean;
}

const BidInput = ({ value, onChange, onClear, showResetButton, ...props }: BidInputProps) => {
  return (
    <>
      <label htmlFor='bid-price' className={cn(`block text-bodytitle font-bold`)}>
        내 희망 입찰가
      </label>
      <div
        className={cn(
          `w-full flex justify-center items-center border border-gray-300 rounded-sm relative`,
        )}
      >
        <input
          type='number'
          id='bid-price'
          value={value}
          onChange={onChange}
          {...props}
          className={cn(`w-full h-10 no-spinner py-1 px-2`)}
        />
        {showResetButton && (
          <button
            type='button'
            onClick={onClear}
            className={cn(
              `shrink-0 size-10 p-2.5 flex justify-center items-center text-gray-500 absolute right-0`,
            )}
            aria-label='희망 입찰가 초기화'
          >
            <X />
          </button>
        )}
      </div>
    </>
  );
};

export default BidInput;
