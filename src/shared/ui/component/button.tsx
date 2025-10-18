import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-sm hover:cursor-pointer flex justify-center items-center gap-1 active:opacity-80',
  variants: {
    size: {
      sm: '!text-body px-3 h-8 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-current',
      md: '!text-subtitle px-4 h-11 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current',
      lg: '!text-title px-6 h-14 gap-2 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-current',
    },
    style: {
      solid: '',
      outline: 'border',
    },
    color: {
      primary: '',
      secondary: '',
      disabled: 'active:opacity-100 hover:cursor-not-allowed bg-gray-100 text-gray-300',
    },
  },
  compoundVariants: [
    { style: 'solid', color: 'primary', className: 'bg-primary-900 text-background' },
    { style: 'solid', color: 'secondary', className: 'bg-gray-100 text-gray-700' },
    {
      style: 'outline',
      color: 'primary',
      className: 'border-primary-900 bg-primary-100 text-primary-900',
    },
    {
      style: 'outline',
      color: 'secondary',
      className: 'border-gray-700 bg-gray-100 text-gray-700',
    },
  ],
  defaultVariants: {
    style: 'solid',
    size: 'md',
    color: 'primary',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

const Button = ({ size, color, style, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={button({ size, style, color, className })}
      disabled={color === 'disabled' || props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
