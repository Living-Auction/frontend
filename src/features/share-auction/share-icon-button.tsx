'use client';

import { Share2 } from 'lucide-react';
import IconButton from '@/shared/ui/component/icon-button';

const ShareIconButton = () => {
  const onClickHandler = () => {
    const url = window.location.href;

    //Todo: arert를 Toast로 변경
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('URL이 클립보드에 복사되었습니다!');
      })
      .catch((err) => {
        console.error('URL 복사에 실패했습니다.', err);
      });
  };

  return (
    <IconButton
      className='size-9 bg-primary-300 text-primary-900 rounded-full flex justify-center items-center'
      onClick={onClickHandler}
    >
      <Share2 size={'20'} />
    </IconButton>
  );
};

export default ShareIconButton;
