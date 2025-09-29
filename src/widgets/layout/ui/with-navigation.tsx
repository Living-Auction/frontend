import Navigation from '@/widgets/footer/ui/navigation';

interface WithNavigationLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const WithNavigationLayout = ({ children, header }: WithNavigationLayoutProps) => {
  return (
    <div className='relative bg-background md:max-w-md lg:max-w-xl mx-auto min-h-screen w-full flex flex-col'>
      {header && <header>{header}</header>}
      <main className='flex-1'>{children}</main>
      <Navigation />
    </div>
  );
};

export default WithNavigationLayout;
