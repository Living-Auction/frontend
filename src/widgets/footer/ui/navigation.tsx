'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Home, BookHeart, Plus, MessagesSquare, UserRound } from 'lucide-react';
import { cn, tv } from 'tailwind-variants/lite';
import { paths } from '@/shared/config/paths';
import BaseFooter from './base';

const NAV_LINKS = [
  {
    name: '홈',
    href: paths.home(),
    icon: Home,
  },
  {
    name: '관심',
    href: paths.fav(),
    icon: BookHeart,
  },
  {
    name: '경매 등록',
    href: paths.createAuction(),
    icon: Plus,
  },
  {
    name: '채팅',
    href: paths.chat(),
    icon: MessagesSquare,
  },
  {
    name: '프로필',
    href: paths.profile(),
    icon: UserRound,
  },
];

const NavigationLink = tv({
  base: 'flex flex-col items-center text-caption justify-center gap-2 w-[18%] min-w-10 h-14',
  variants: {
    active: {
      true: 'text-primary-900',
      false: 'text-gray-300',
    },
  },
});

const Navigation = () => {
  const pathname = usePathname();

  return (
    <BaseFooter className={`flex justify-between items-center`}>
      {NAV_LINKS.map((link, idx) => {
        const isActive = pathname === link.href;
        const IconComponent = link.icon;
        return (
          <Fragment key={idx}>
            {link.name.includes('등록') ? (
              <Link href={link.href} className={`${NavigationLink()}`}>
                <div
                  className={cn(
                    'size-10 bg-primary-900 flex justify-center items-center text-white rounded-full shadow-basic',
                  )}
                >
                  <IconComponent className='size-5' />
                  <p className='sr-only'>{link.name}</p>
                </div>
              </Link>
            ) : (
              <Link href={link.href} className={`${NavigationLink({ active: isActive })}`}>
                <IconComponent className='size-5' />
                <p>{link.name}</p>
              </Link>
            )}
          </Fragment>
        );
      })}
    </BaseFooter>
  );
};

export default Navigation;
