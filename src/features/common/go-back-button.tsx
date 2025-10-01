'use client';

import { useRouter } from 'next/navigation';
import IconButton from '@component/icon-button';
import { ChevronLeft } from 'lucide-react';

const GoBackButton = () => {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.back()}>
      <ChevronLeft />
    </IconButton>
  );
};

export default GoBackButton;
