import { useState, useEffect } from 'react';

// Date 객체를 받아 포맷팅된 문자열을 반환하는 헬퍼 함수
const formatFullDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
};

/**
 * 주어진 ISO 타임스탬프로부터 현재까지의 시간을 조건에 따라 포맷팅하는 커스텀 훅.
 */

export const useTimeAgo = (isoTimestamp: string | null | undefined): string => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    // timestamp가 유효하지 않으면 아무것도 하지 않음
    if (!isoTimestamp) return;

    const calculateTimeAgo = () => {
      const now = new Date();
      const past = new Date(isoTimestamp);
      const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

      // 조건 1: 1분 이내 -> n초 전
      if (seconds < 60) {
        setTimeAgo(`${seconds}초 전`);
        return;
      }

      const minutes = Math.floor(seconds / 60);
      // 조건 2: 10분 이내 -> n분 전
      if (minutes < 10) {
        setTimeAgo(`${minutes}분 전`);
        return;
      }
      // 조건 3: 59분 이내 -> n0분 전 (10분 단위로 내림)
      if (minutes < 60) {
        const tensOfMinutes = Math.floor(minutes / 10) * 10;
        setTimeAgo(`${tensOfMinutes}분 전`);
        return;
      }

      const hours = Math.floor(seconds / 3600);
      // 조건 4: 24시간 이내 -> n시간 전
      if (hours < 24) {
        setTimeAgo(`${hours}시간 전`);
        return;
      }

      const days = Math.floor(seconds / 86400);
      // 조건 5: 1일 이상 8일 미만 -> n일 전
      if (days < 8) {
        setTimeAgo(`${days}일 전`);
        return;
      }

      // 조건 6: 8일 이상 -> YYYY. MM. DD. HH:mm
      setTimeAgo(`마지막 접속일 ${formatFullDate(past)}`);
    };

    calculateTimeAgo();
  }, [isoTimestamp]);

  return timeAgo;
};
