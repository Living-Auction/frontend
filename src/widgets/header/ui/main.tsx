import MainLocationSelector from '@/features/location/main-selector';
import NotificationIconButton from '@/features/notification/icon-button';
import SearchIconButton from '@/features/search/icon-button';
import BaseHeader from './base';

const MainHeader = () => {
  return (
    <BaseHeader>
      <MainLocationSelector />
      <div className='flex gap-2'>
        <SearchIconButton />
        <NotificationIconButton />
      </div>
    </BaseHeader>
  );
};

export default MainHeader;
