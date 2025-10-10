import AvatarDefault from '@shared/assets/avatar-default.svg';
import { tv } from 'tailwind-variants/lite';

type AvatarSizeType = 'basic' | 'sm' | 'lg';
type AvatarImagProps = { url: string; alt: string } | null;

interface AvatarProps {
  size: AvatarSizeType;
  img?: AvatarImagProps;
}

const AvatarStyle = tv({
  base: 'aspect-square',
  variants: { size: { basic: 'w-10', sm: 'w-7', lg: 'w-30' } },
});

const Avatar = ({ size, img = null }: AvatarProps) => {
  return (
    <div className={`${AvatarStyle({ size: size })}`}>
      {!img && <AvatarDefault />}
      {img && <img src={img.url} alt={img.url} />}
    </div>
  );
};

export default Avatar;
