const BaseHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <header className={`flex justify-between items-center w-full h-13 px-4 ${className}`}>
      {children}
    </header>
  );
};

export default BaseHeader;
