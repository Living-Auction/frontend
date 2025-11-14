'use client';

import { useState } from 'react';
import { END_DATE_MAP } from '@entities/auction-form/config/constants';
import ErrorMessage from '@entities/auction-form/ui/error-message';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { ChevronDown } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const selectStyles = tv({
  slots: {
    button:
      'w-full px-4 py-3 border rounded-md text-left flex items-center justify-between focus:outline-none transition-colors',
    text: 'text-body',
    icon: 'transition-transform',
    dropdown:
      'absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto',
    option: 'w-full px-4 py-3 text-left transition-colors',
  },
  variants: {
    disabled: {
      true: {
        button: 'bg-gray-100 border-gray-300 cursor-not-allowed',
        text: 'text-gray-300',
        icon: 'text-gray-300',
      },
      false: {
        button: 'bg-white border-gray-300 focus:border-gray-900',
        text: 'text-gray-900',
        icon: 'text-gray-500',
      },
    },
    isOpen: {
      true: {
        icon: 'rotate-180',
      },
    },
    isSelected: {
      true: {
        option: 'bg-primary-100 text-primary-900 font-medium',
      },
      false: {
        option: 'text-gray-900',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    isOpen: false,
  },
});

interface SelectDateProps {
  disabled?: boolean;
}

const DateSelector = ({ disabled = false }: SelectDateProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<AuctionFormData>();

  const selectedValue = watch('auctionData.endTime');
  const [isOpen, setIsOpen] = useState(false);

  const styles = selectStyles({ disabled, isOpen });

  const handleSelect = (label: keyof typeof END_DATE_MAP) => {
    const numericValue = END_DATE_MAP[label];
    setValue('auctionData.endTime', numericValue, { shouldValidate: true });
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-1.5 relative'>
      <label htmlFor='endDate' className='text-body font-bold text-gray-900'>
        마감 시간
      </label>

      <div className='relative'>
        <button
          type='button'
          onClick={handleToggle}
          disabled={disabled}
          className={styles.button()}
        >
          <span className={styles.text()}>{selectedValue || '마감 시간을 선택해주세요'}</span>
          <ChevronDown size={20} className={styles.icon()} />
        </button>

        {isOpen && !disabled && (
          <>
            <div className='fixed inset-0 z-10' onClick={() => setIsOpen(false)} />

            <ul className={styles.dropdown()}>
              {(Object.keys(END_DATE_MAP) as Array<keyof typeof END_DATE_MAP>).map((label) => (
                <li key={label}>
                  <button
                    type='button'
                    onClick={() => handleSelect(label)}
                    className={styles.option({
                      isSelected: selectedValue === END_DATE_MAP[label],
                    })}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      {errors.auctionData?.endTime && <ErrorMessage error={errors.auctionData.endTime.message} />}
    </div>
  );
};

export default DateSelector;
