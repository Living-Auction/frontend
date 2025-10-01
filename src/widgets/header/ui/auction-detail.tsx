import PageTitle from '@component/page-title';
import GoBackButton from '@/features/common/go-back-button';
import Popover from '@/features/common/popover';
import BaseHeader from './base';

const AuctionDetailHeader = () => {
  return (
    <BaseHeader>
      <div className='flex items-center gap-2'>
        <GoBackButton />
        <PageTitle title='경매 상세보기' />
      </div>
      <Popover types={['edit', 'delete', 'report']} />
    </BaseHeader>
  );
};

export default AuctionDetailHeader;
