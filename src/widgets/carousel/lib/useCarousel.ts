'use client';

import { useState } from 'react';
import type { PanInfo } from 'framer-motion';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

interface UseCarouselProps {
  totalItems: number;
}

export const useCarousel = ({ totalItems }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    if (totalItems <= 1) return;
    const newIndex = (currentIndex + newDirection + totalItems) % totalItems;
    setCurrentIndex(newIndex);
  };

  const goTo = (newIndex: number) => {
    if (totalItems <= 1 || newIndex === currentIndex) return;
    setCurrentIndex(newIndex);
  };

  const handleSwipeEnd = (info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1); // 다음
    } else if (swipe > -swipeConfidenceThreshold) {
      paginate(-1); // 이전
    }
  };

  return {
    currentIndex,
    goTo,
    handleSwipeEnd,
  };
};
