'use client';

import { useEffect, useState } from 'react';
import { cn } from 'tailwind-variants/lite';
import { formatNumber, useCountdown } from '../lib/use-countdown';

const style = {
  box: cn(`py-3 bg-gray-100 rounded-sm text-center text-bodytitle text-gray-700`),
  strong: cn(`inline-block mx-1`),
};

const PendingTimer = ({ startTime }: { startTime: string }) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const countdown = useCountdown(startTime);
  const { minutes, seconds } = countdown;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={style.box}>
        <p>
          경매 시작까지
          <strong className={style.strong}>--분 --초</strong>
          남았습니다
        </p>
      </div>
    );
  }

  return (
    <div className={style.box}>
      <p>
        경매 시작까지
        <strong className={`${style.strong} text-primary-900`}>
          {formatNumber(minutes)}분 {formatNumber(seconds)}초
        </strong>
        남았습니다
      </p>
    </div>
  );
};

export default PendingTimer;
