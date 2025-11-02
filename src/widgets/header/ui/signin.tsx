import GoBackButton from '@/widgets/header/ui/go-back-button';
import PageTitle from '@/widgets/header/ui/page-title';
import BaseHeader from './base';

const SigninHeader = () => {
  return (
    <BaseHeader>
      <div className='flex items-center gap-2'>
        <GoBackButton />
        <PageTitle title='로그인' />
      </div>
    </BaseHeader>
  );
};

export default SigninHeader;
