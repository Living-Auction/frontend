import { cn } from 'tailwind-variants/lite';

const BaseFooter = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <footer
      className={cn(
        `w-full mx-auto md:max-w-md min-h-22 h-auto 
        fixed bottom-0 left-0 right-0 
        rounded-t-lg pt-2 pb-6 px-4 bg-background shadow-drawer z-100
         ${className}`,
      )}
    >
      {children}
    </footer>
  );
};

export default BaseFooter;
