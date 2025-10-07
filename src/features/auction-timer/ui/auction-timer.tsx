import { cn } from 'tailwind-variants/lite';
import { TEST_PRODUCT } from '@/entities/product/model/constants';
import { useFormattedDate } from '@/shared/lib/hooks/use-formatted-date';
import Countdown from './countdown';
import PendingTimer from './pending-timer';

const AuctionTimer = () => {
  const { startDate, endDate } = TEST_PRODUCT;
  const formattedEndTime = useFormattedDate(endDate);
  const { year, month, day, hour, minute } = formattedEndTime;

  // Todo: acution status를 어떻게 처리할 건지?
  const isPending = false;

  return (
    <div>
      {isPending && <PendingTimer startTime={startDate} />}
      {!isPending && (
        <div className={cn(`flex justify-between items-center py-2 text-body`)}>
          <p className='text-gray-700'>
            <strong className={cn(`inline-block mr-2 text-gray-500`)}>마감 일시</strong>
            {year}-{month}-{day} {hour}:{minute}
          </p>
          <Countdown status={'ACTIVE'} endTime={endDate} />
        </div>
      )}
    </div>
  );
};

export default AuctionTimer;
