'use client';

import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants/lite';
import { formatNumber, useCountdown } from '../lib/use-countdown';

interface CountdownProps {
  status: 'ACTIVE' | 'CLOSED';
  endTime: string;
}

const CountdownStyle = tv({
  base: 'text-title',
  variants: { active: { true: 'text-negative-900', false: 'text-gray-500' } },
});

const Countdown = ({ status, endTime }: CountdownProps) => {
  const [isClient, setIsClient] = useState(false);
  const { hours, minutes, seconds } = useCountdown(endTime);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p className={`${CountdownStyle()}`}>--:--:--</p>;
  }

  return (
    <p className={`${CountdownStyle({ active: status === 'ACTIVE' })}`}>
      {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
    </p>
  );
};
export default Countdown;
