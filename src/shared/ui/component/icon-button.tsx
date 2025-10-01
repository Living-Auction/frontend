import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButtonStyle = tv({ base: 'px-1 py-2' });

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref} // 전달받은 ref를 button 요소에 연결합니다.
        className={`${IconButtonStyle()} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
