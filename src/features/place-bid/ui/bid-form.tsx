'use client';

import Button from '@shared/ui/component/button';
import { cn } from 'tailwind-variants/lite';
import BidInput from './bid-input';

const QUICK_ADD_AMOUNTS = [
  { amount: 50000, label: '5만' },
  { amount: 10000, label: '1만' },
  { amount: 5000, label: '5천원' },
  { amount: 1000, label: '1천원' },
];

interface BidFormProps {
  currentBid: number;
  bidAmount: string;
  setBidAmount: (value: string) => void;
}

const BidForm = ({ currentBid, bidAmount, setBidAmount }: BidFormProps) => {
  const MIN_BID_INCREMENT = 1000;
  const minNextBid = currentBid + MIN_BID_INCREMENT;
  const isModified = bidAmount !== String(minNextBid);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setBidAmount(value);
  };

  const handleReset = () => {
    setBidAmount(String(minNextBid));
  };

  const handleAddAmount = (amountToAdd: number) => {
    const baseAmount = parseInt(bidAmount, 10) || currentBid;
    const newAmount = baseAmount + amountToAdd;
    setBidAmount(String(newAmount));
  };

  return (
    <div className={cn(`block space-y-2 w-full mt-4 mb-3`)}>
      <BidInput
        value={bidAmount}
        showResetButton={isModified}
        onChange={handleChange}
        onClear={handleReset}
      />
      <div className={cn(`w-full flex justify-between gap-2`)}>
        {QUICK_ADD_AMOUNTS.map(({ amount, label }) => {
          return (
            <Button
              type='button'
              key={amount}
              size={'sm'}
              color={'secondary'}
              className='text-gray-900 shrink-1 w-1/4 font-medium'
              onClick={() => handleAddAmount(amount)}
            >
              + {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BidForm;
