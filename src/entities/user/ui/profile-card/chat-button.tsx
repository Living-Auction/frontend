'use client';

import Button from '@/shared/ui/component/button';

const ChatButton = ({ uuid }: { uuid: string }) => {
  const createChatHandler = (uuid: string) => {
    console.log('create new chat room with', uuid);
  };

  return (
    <Button size={'sm'} className='font-regular shrink-0' onClick={() => createChatHandler(uuid)}>
      문의하기
    </Button>
  );
};

export default ChatButton;
