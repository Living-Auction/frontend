import { cn } from 'tailwind-variants/lite';

const PageTitle = ({ title, className }: { title: string; className?: string }) => {
  return <h3 className={cn(`text-title ${className}`)}>{title}</h3>;
};

export default PageTitle;
