import GoBackButton from '@/widgets/header/ui/go-back-button';
import PageTitle from '@/widgets/header/ui/page-title';
import Popover from '@/widgets/header/ui/pop-over';
import BaseHeader from './base';

interface Props {
  title: string;
}

const AuctionDetailHeader = ({ title }: Props) => {
  return (
    <BaseHeader>
      <div className='flex items-center gap-2'>
        <GoBackButton />
        <PageTitle title={title} />
      </div>
      <Popover types={['edit', 'delete', 'report']} />
    </BaseHeader>
  );
};

export default AuctionDetailHeader;
