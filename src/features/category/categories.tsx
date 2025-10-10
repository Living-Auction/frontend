import { CATEGORIES } from '@/entities/category/model/constants';
import CategoryButton from '@/entities/category/ui/category-button';

const Categories = () => {
  return (
    <section className='w-full flex gap-4 overflow-x-auto no-scrollbar'>
      {CATEGORIES.map(({ type, label, icon: Icon }) => (
        <CategoryButton key={type} icon={<Icon />} label={label} />
      ))}
    </section>
  );
};

export default Categories;
