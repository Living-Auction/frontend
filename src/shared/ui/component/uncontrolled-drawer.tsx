'use client';

import { useState, ComponentProps } from 'react';
import { cn } from 'tailwind-variants/lite';
import Drawer from './drawer';

// 기존 Drawer의 Props에서 isOpen과 onClose를 제외한 타입을 가져옴.
type UncontrolledDrawerProps = Omit<ComponentProps<typeof Drawer>, 'isOpen' | 'onClose'> & {
  defaultOpen?: boolean;
};

/**
 * 스스로 열리고 닫히는 상태를 관리하는 '비제어' 드로어입니다.
 */
const UncontrolledDrawer = ({
  children,
  defaultOpen = true,
  className,
  ...props
}: UncontrolledDrawerProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      {...props}
      className={cn('p-4 rounded-t-lg', className)}
    >
      {children}
    </Drawer>
  );
};

export default UncontrolledDrawer;

/** 적용 예시
 *
      <UncontrolledDrawer defaultOpen={true} withBackdrop={true} withCloseButton={true}>
        <div className='flex flex-col gap-3 p-2'>
          <h2 className='text-xl font-bold text-center'>📢 경매 참여 안내</h2>
          <p className='text-sm'>
            신중한 입찰을 부탁드립니다. 경매 낙찰 후 단순 변심으로 인한 취소는 불가능하며, 패널티가
            부과될 수 있습니다.
          </p>
          <p className='text-sm'>모든 상품의 배송비는 착불을 원칙으로 합니다.</p>
        </div>
      </UncontrolledDrawer>
 *

 */
