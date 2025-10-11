import { cn } from 'tailwind-variants/lite';
import { useTimeAgo } from '../../lib/hooks/use-time-ago';

interface PresenceProps {
  status: boolean | string | undefined;
}

const UserPresence = ({ status }: PresenceProps) => {
  const timeAgo = useTimeAgo(status as string);

  return (
    <>
      {typeof status !== 'string' ? (
        <div className={cn(`flex items-center text-caption font-medium text-gray-500 gap-1`)}>
          <i className={cn(`block size-2 bg-positive-900 rounded-full`)} />
          <p>접속 중</p>
        </div>
      ) : (
        <p className={cn(`text-caption font-medium text-gray-500`)}>{timeAgo}</p>
      )}
    </>
  );
};
export default UserPresence;
