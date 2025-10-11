import { Eye, Heart } from 'lucide-react';
import { cn } from 'tailwind-variants/lite';

type EngagementType = 'views' | 'favorites';

interface EngagementProps {
  type: EngagementType;
  counts: number;
}

const EngagementMaps = {
  views: { title: '조회수', icon: Eye },
  favorites: { title: '관심', icon: Heart },
};

const ProductEngagement = ({ type, counts }: EngagementProps) => {
  const IconComponent = EngagementMaps[type].icon;

  return (
    <p className={cn(`text-body flex gap-1 items-center text-gray-500`)}>
      <IconComponent className='size-4' />
      <span className='mr-1'>{EngagementMaps[type].title}</span>
      {counts}
    </p>
  );
};

export default ProductEngagement;
