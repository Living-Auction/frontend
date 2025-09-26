const BaseHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className='flex justify-between items-center w-full h-13 px-4'>{children}</header>;
};

export default BaseHeader;
