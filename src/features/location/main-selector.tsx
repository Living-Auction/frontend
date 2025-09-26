'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { tv } from 'tailwind-variants/lite';
import { MAIN_LOCATIONS } from '@/shared/config/location';
import { Location } from '@/entities/location/model/types';
import { ChevronDown } from 'lucide-react';
import useOnClickOutside from '@/shared/lib/hooks/use-onclick-outside';

const SelectListStyle = tv({
  base: 'text-subtitle w-full',
  variants: { selected: { true: 'text-gray-900 font-bold', false: 'text-gray-400' } },
});

const OpenStyle = tv({
  base: 'z-50 bg-white relative top-1 left-0 shadow-lg w-full p-4 rounded-md flex flex-col gap-3 transition-scale duration-300 delay-50 ease-in-out origin-top-left visibility-hidden',
  variants: {
    open: {
      true: 'opacity-100 scale-100 visibility-visible',
      false: 'opacity-10 scale-0 visibility-hidden',
    },
  },
});

const MainLocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null!);
  const triggerRef = useRef<HTMLButtonElement>(null!);

  useOnClickOutside(selectorRef, () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  });

  useEffect(() => {
    // todo 1. 로딩 스켈레톤 추가
    if (!selectedLocation) {
      const primary = MAIN_LOCATIONS.find((location) => location.isPrimary === true);
      setSelectedLocation(primary);
    } else {
      // todo 2. 저장된 위치가 없는 경우 시스템 기본 위치 설정
      // ex case 1. 비로그인 유저 - GPS 미동의 시
      // ex case 2. 로그인 유저 - 저장 위치가 없는 경우
    }
  }, [selectedLocation]);

  const handleSelectLoction = (location: Location) => {
    setSelectedLocation(location);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className='h-full' ref={selectorRef}>
      <button
        type='button'
        className='flex items-center w-45 h-full text-title cursor-pointer'
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        value={selectedLocation?.id}
        role='location-selector'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        {selectedLocation?.name}

        <ChevronDown
          className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={OpenStyle({ open: isOpen })}
        inert={!isOpen}
        aria-hidden={!isOpen}
        role='listbox'
      >
        {MAIN_LOCATIONS.map((location) => {
          const isSlected = selectedLocation?.id === location.id;
          return (
            <li key={location.id} className={SelectListStyle({ selected: isSlected })}>
              <button
                type='button'
                role='locationItem'
                className='cursor-pointer w-full text-left'
                onClick={() => handleSelectLoction(location)}
              >
                {location.name}
              </button>
            </li>
          );
        })}
        <li className={SelectListStyle()}>
          <Link href={'/'} className='w-full block'>
            내 동네 설정
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainLocationSelector;
