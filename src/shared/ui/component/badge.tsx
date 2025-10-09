import { tv } from 'tailwind-variants/lite';

type BadgeType = 'active' | 'disabled' | 'outline' | 'negative' | 'positive';

interface BadgeProps {
  status: BadgeType;
  children: React.ReactNode;
}

const BadgeStyle = tv({
  base: 'font-medium text-body px-2 pt-1 pb-[2px] rounded-sm cursor-default w-fit',
  variants: {
    type: {
      active: 'bg-primary-900 text-white',
      disabled: 'bg-gray-300 text-gray-900',
      outline: 'bg-background border-1 border-gray-300',
      negative: 'bg-negative-900 text-white',
      positive: 'bg-positive-900 text-white',
    },
  },
});

const Badge = ({ status, children }: BadgeProps) => {
  return <div className={`${BadgeStyle({ type: status })}`}>{children}</div>;
};

export default Badge;
