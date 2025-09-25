import { tv } from 'tailwind-variants';
import { X } from 'lucide-react';

const toast = tv({
  slots: {
    base: 'rounded-md p-3 pl-4 flex justify-between items-center m-4 shadow-[0_4px_16px_0px_rgba(0,0,0,0.04),_0_-2px_16px_0px_rgba(0,0,0,0.04)]',
    title: 'text-body font-bold',
    description: '!text-caption font-medium text-gray-500',
    close: 'rounded-full ml-2 size-7 flex items-center justify-center cursor-pointer',
  },
  variants: {
    type: {
      success: {
        base: 'bg-background shadow-primary-500/18',
        title: 'text-primary-900',
        close: 'bg-primary-100 [&>svg]:text-primary-900',
      },
      error: {
        base: 'bg-background shadow-negative-500/10',
        title: 'text-negative-500',
        close: 'bg-negative-500/10 [&>svg]:text-negative-500',
      },
      notice: {
        base: 'bg-gray-900 opacity-80 shadow-gray-700/20',
        title: 'text-gray-100/95',
        close: 'hidden',
      },
    },
  },
  defaultVariants: {},
});

interface Props {
  type: 'success' | 'error' | 'notice';
  title: string;
  description?: string;
}

const Toast = ({ type, title, description }: Props) => {
  const { base, title: titleCls, description: descriptionCls, close } = toast({ type });

  return (
    <div className={base()}>
      <div>
        <div className={titleCls()}>{title}</div>
        <div className={descriptionCls()}>{description}</div>
      </div>
      <button className={close()}>
        <X size={14} strokeWidth={4} />
      </button>
    </div>
  );
};

export default Toast;
