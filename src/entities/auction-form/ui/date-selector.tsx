'use client';

import { useState } from 'react';
import { SELECT_END_DATE_OPTION } from '@entities/auction-form/config/constants';
import { ChevronDown } from 'lucide-react';
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
        button: 'bg-gray-50 border-gray-300 cursor-not-allowed',
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('1일 뒤 경매 종료 (셀렉트박스로)');

  const styles = selectStyles({ disabled, isOpen });

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col gap-1.5'>
      <label id='input-title' className='text-body font-bold text-gray-900'>
        마감 시간
      </label>
      <div className='relative'>
        <button
          type='button'
          onClick={handleToggle}
          disabled={disabled}
          className={styles.button()}
        >
          <span className={styles.text()}>{selectedValue}</span>
          <ChevronDown size={20} className={styles.icon()} />
        </button>

        {isOpen && !disabled && (
          <>
            <div className='fixed inset-0 z-10' onClick={() => setIsOpen(false)} />
            <ul className={styles.dropdown()}>
              {SELECT_END_DATE_OPTION.map((option, index) => (
                <li key={index}>
                  <button
                    type='button'
                    onClick={() => handleSelect(option)}
                    className={styles.option({ isSelected: selectedValue === option })}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
