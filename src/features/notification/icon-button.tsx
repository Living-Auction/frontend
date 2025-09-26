import IconButton from '@/shared/ui/component/icon-button';
import { Bell } from 'lucide-react';

const NotificationIconButton = () => {
  return (
    <IconButton type='button'>
      <Bell />
    </IconButton>
  );
};

export default NotificationIconButton;
