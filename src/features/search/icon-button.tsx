import { paths } from '@/shared/config/paths';
import { IconButtonStyle } from '@/shared/ui/component/icon-button';
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
