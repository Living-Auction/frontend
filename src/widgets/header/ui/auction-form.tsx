import GoBackButton from '@/widgets/header/ui/go-back-button';
import PageTitle from '@/widgets/header/ui/page-title';
import BaseHeader from './base';

const AuctionFormHeader = ({ title }: { title: string }) => {
  return (
    <BaseHeader className='justify-start gap-2'>
      <GoBackButton />
      <PageTitle title={title} />
    </BaseHeader>
  );
};

export default AuctionFormHeader;
