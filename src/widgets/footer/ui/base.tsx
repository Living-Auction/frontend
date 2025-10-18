const BaseFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <footer
      className={`w-full min-h-22 h-auto fixed bottom-0 left-0 right-0 md:max-w-md rounded-t-2xl pt-2 pb-6 flex px-4 justify-between bg-background shadow-lg items-center z-20 ${className}`}
    >
      {children}
    </footer>
  );
};

export default BaseFooter;
