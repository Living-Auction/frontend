import { paths } from '@/shared/config/paths';
import { IconButtonStyle } from '@component/button/iconButton';
import { Search } from 'lucide-react';
import Link from 'next/link';

const SearchIconButton = () => {
  return (
    <Link href={paths.search()} type='button' className={IconButtonStyle()}>
      <Search />
    </Link>
  );
};

export default SearchIconButton;
