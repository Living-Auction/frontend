import { CATEGORIES } from '@/entities/category/model/constants';
import CategoryButton from '@/entities/category/ui/category-button';

const Categories = () => {
  return (
    <div className='flex gap-4'>
      {CATEGORIES.map(({ type, label, icon: Icon }) => (
        <CategoryButton key={type} icon={<Icon />} label={label} />
      ))}
    </div>
  );
};

export default Categories;
