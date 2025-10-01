import Link from 'next/link';
import { Search } from 'lucide-react';
import { paths } from '@/shared/config/paths';
import { IconButtonStyle } from '@/shared/ui/component/icon-button';

const SearchIconButton = () => {
  return (
    <Link href={paths.search()} type='button' className={IconButtonStyle()}>
      <Search />
    </Link>
  );
};

export default SearchIconButton;
