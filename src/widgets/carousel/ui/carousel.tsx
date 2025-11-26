'use client';

import CarouselIndicator from '@widgets/carousel/ui/indicator';
import { motion } from 'framer-motion';
import { useCarousel } from '../lib/useCarousel';

interface CarouselProps {
  images: string[];
  name: string;
  isLoading?: boolean;
}

const Carousel = ({ name, images, isLoading }: CarouselProps) => {
  const { currentIndex, goTo, handleSwipeEnd } = useCarousel({ totalItems: images.length });

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
              {images.map((image, idx) => (
                <div key={idx} className='h-full w-full flex-shrink-0'>
                  <img
                    src={image}
                    alt={`${name}_${idx + 1}`}
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
