'use client';

interface CarouselIndicatorsProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const CarouselIndicator = ({ count, currentIndex, onDotClick }: CarouselIndicatorsProps) => {
  if (count <= 1) {
    return null;
  }
  return (
    <div className='absolute bottom-4 flex justify-center space-x-2 z-50'>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            i === currentIndex ? 'w-3 bg-white' : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;
