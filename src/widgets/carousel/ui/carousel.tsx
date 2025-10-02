'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAuctionImagesById } from '@/entities/auction/api';
import { AuctionImage } from '@/entities/auction/model/types';
import CarouselIndicator from './indicator';
import { useCarousel } from '../lib/useCarousel';

interface CarouselProps {
  auctionId: string;
}

const Carousel = ({ auctionId }: CarouselProps) => {
  const [images, setImages] = useState<AuctionImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentIndex, goTo, handleSwipeEnd } = useCarousel({ totalItems: images.length });

  useEffect(() => {
    // Todo: 데이터 연결 시 상위에서 호출 후 props를 받는 형식으로 변경
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        setImages(await getAuctionImagesById(auctionId));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [auctionId]);

  return (
    <div className='relative flex w-full max-w-lg flex-col items-center justify-center'>
      <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100'>
        {isLoading ? (
          <div className='flex h-full w-full items-center justify-center'>
            <div className='size-8 animate-spin rounded-full border-4 border-gray-300 border-r-transparent' />
          </div>
        ) : (
          <>
            <motion.div
              className='flex h-full w-full'
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {images.map((image) => (
                <div key={image.id} className='h-full w-full flex-shrink-0'>
                  <img
                    src={image.url}
                    alt={'auction image'}
                    className='h-full w-full object-cover'
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className='absolute inset-0 cursor-grab'
              whileTap={{ cursor: 'grabbing' }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, info) => handleSwipeEnd(info)}
            />
          </>
        )}
      </div>
      {!isLoading && (
        <CarouselIndicator count={images.length} currentIndex={currentIndex} onDotClick={goTo} />
      )}
    </div>
  );
};

export default Carousel;
