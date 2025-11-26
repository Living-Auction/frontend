'use client';

import Avatar from '@shared/ui/component/avatar';

interface ProfileCardProps {
  seller: User;
}

const ProfileCard = ({ seller }: ProfileCardProps) => {
  // const pathname = usePathname();
  const { nickName, profileImg } = seller;

  // Todo: 쿠키에 저장된 인증된 정보로 비교
  // const isAuthor = uuid === 'user-90190';
  // const isAuction = pathname.includes('auction');

  // const goProfileByUuidHandler = () => {
  //   console.log('connect router for go to /profile/[uuid]', uuid);
  // };

  return (
    <section className='flex w-full bg-background p-4 items-center shadow-sm'>
      <button
        type='button'
        // onClick={goProfileByUuidHandler}
        className='flex items-center gap-3 w-full text-left'
      >
        <Avatar
          size={'basic'}
          img={profileImg ? { url: `${profileImg}`, alt: `${nickName} 프로필` } : null}
        />
        <div>
          <p className='text-body font-bold'>{nickName}</p>
          {/*{!isAuthor && (*/}
          {/*  <UserPresence status={typeof is_online === 'boolean' ? is_online : last_seen_at} />*/}
          {/*)}*/}
        </div>
      </button>
      {/*{isAuction && !isAuthor && <ChatButton uuid={uuid} />}*/}
    </section>
  );
};

export default ProfileCard;
