import { tv } from 'tailwind-variants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButtonStyle = tv({ base: 'px-1 py-2' });

const IconButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${IconButtonStyle()} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
