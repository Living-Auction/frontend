import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-sm hover:cursor-pointer flex justify-center items-center gap-1 active:opacity-80',
  variants: {
    color: {
      primary: 'bg-primary-900 !text-background',
      secondary: 'bg-gray-100 !text-gray-300',
      disabled: 'bg-background !text-gray-500 border border-gray-500'
    },
    size: {
      sm: 'text-body font-bold px-3 h-8 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-current',
      md: 'text-subtitle font-medium px-4 h-11 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current',
      lg: 'text-title px-6 h-14 gap-2 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-current'
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

const Button = ({size, color, children, className, ...props}: ButtonProps) => {
  return <button className={button({ size, color, className })} {...props}>{children}</button>;
}

export default Button;