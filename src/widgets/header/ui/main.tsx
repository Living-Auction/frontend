import MainLocationSelector from '@/features/location/mainSelector';
import NotificationIconButton from '@/features/notification/iconButton';
import SearchIconButton from '@/features/search/iconButton';
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
