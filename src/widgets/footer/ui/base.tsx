const BaseFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <footer
      className={`w-full h-22 absolute bottom-0 rounded-t-2xl pt-2 pb-6 flex px-4 justify-between bg-white shadow-lg items-center ${className}`}
    >
      {children}
    </footer>
  );
};

export default BaseFooter;
