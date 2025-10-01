/**
 * Todo action
 *  1. itemId : 해당 아이템의 Id
 *  2. path : auction, chat, profile (동작 수행을 할 위치)
 *  3. id값으로 해당 동작 or 이동 만들어 주기
 */

'use client';
import { useState, useRef } from 'react';
import { EllipsisVertical } from 'lucide-react';
import { tv } from 'tailwind-variants/lite';
import useOnClickOutside from '@/shared/lib/hooks/use-onclick-outside';
import IconButton from '@/shared/ui/component/icon-button';

type PopoverItemType = 'edit' | 'delete' | 'report';

const OpenStyle = tv({
  base: 'z-20 flex flex-col gap-1 absolute right-4 mt-2 bg-background p-3 rounded-md shadow-basic transition-scale duration-300 delay-50 ease-in-out origin-top-right visibility-hidden',
  variants: {
    open: {
      true: 'opacity-100 scale-100 visibility-visible',
      false: 'opacity-10 scale-0 visibility-hidden',
    },
  },
});

const PopOver = ({ types }: { types: PopoverItemType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null!);
  const triggerRef = useRef<HTMLButtonElement>(null!);
  // const params = useParams();
  // const pathname = usePathname();
  // const itemId = params.id;
  // const path = pathname.split('/')[1];

  useOnClickOutside(buttonRef, () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  });

  const handleEdit = () => {
    console.log('수정하기 router 연결');
  };
  const handleDelete = () => {
    console.log('삭제하기 api 연결');
  };
  const handleReport = () => {
    console.log('신고하기 router 연결');
  };

  const POPOVER_MENU = {
    edit: { onclick: handleEdit, name: '수정하기' },
    delete: { onclick: handleDelete, name: '삭제하기' },
    report: { onclick: handleReport, name: '신고하기' },
  };

  return (
    <div ref={buttonRef}>
      <IconButton
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        ref={triggerRef}
        value='더보기'
        title='더보기'
        role='more-button'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <EllipsisVertical />
      </IconButton>
      <ul
        className={OpenStyle({ open: isOpen })}
        inert={!isOpen}
        aria-hidden={!isOpen}
        role='listbox'
      >
        {types.map((type) => {
          const menuItem = POPOVER_MENU[type as PopoverItemType];
          if (!menuItem) return null;
          return (
            <li key={type} className={`w-full ${type === 'report' && 'text-negative-900'}`}>
              <button onClick={menuItem.onclick} className='w-full px-4 py-1'>
                {menuItem.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PopOver;
