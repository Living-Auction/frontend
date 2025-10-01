'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { tv } from 'tailwind-variants';

const heartStyle = tv({
  base: '',
  variants: {
    size: {
      sm: 'size-5',
      lg: 'size-8',
    },
    active: {
      on: 'fill-primary-900 stroke-primary-900',
      off: 'stroke-gray-100 fill-gray-100',
    },
  },
  defaultVariants: {
    size: 'sm',
    active: 'off',
  },
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialFavorite: boolean;
  size?: 'sm' | 'lg';
}

const FavoriteButton = ({ initialFavorite, size, ...props }: Props) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <button
      type='button'
      onClick={() => setIsFavorite((prev) => !prev)}
      className='flex items-center justify-center rounded-full size-10'
      {...props}
    >
      <Heart className={heartStyle({ size, active: isFavorite ? 'on' : 'off' })} />
    </button>
  );
};

export default FavoriteButton;
