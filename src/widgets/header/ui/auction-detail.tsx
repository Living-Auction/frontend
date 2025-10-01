import GoBackButton from '@/widgets/header/ui/go-back-button';
import PageTitle from '@/widgets/header/ui/page-title';
import Popover from '@/widgets/header/ui/pop-over';
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
