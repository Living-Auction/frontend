import MainLocationSelector from '@/features/location/main-selector';
import NotificationIconButton from '@/features/notification/icon-button';
import SearchIconButton from '@/features/search/icon-button';
import BaseHeader from './base';

const MainHeader = () => {
  return (
    <BaseHeader className='fixed top-0 left-0 right-0 md:max-w-md mx-auto z-20 bg-background'>
      <MainLocationSelector />
      <div className='flex gap-2'>
        <SearchIconButton />
        <NotificationIconButton />
      </div>
    </BaseHeader>
  );
};

export default MainHeader;
