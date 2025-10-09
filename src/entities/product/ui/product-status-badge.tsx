import Badge from '@/shared/ui/component/badge';
import { AuctionStatus } from '../model/type';

type ProductStatusBadgeProps = {
  status: AuctionStatus;
};

const StatusMap = {
  PENDING: { type: 'disabled', title: '경매 대기' },
  ACTIVE: { type: 'active', title: '경매 중' },
  CLOSED: { type: 'disabled', title: '경매 종료' },
} as const;

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  return <Badge status={StatusMap[status].type}>{StatusMap[status].title}</Badge>;
};

export default ProductStatusBadge;
