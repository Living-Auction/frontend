// TODO: 실제 연동되는 데이터명과 타입 일치 작업 필요
export type AuctionStatus = 'PENDING' | 'ACTIVE' | 'CLOSED';
interface ProductCard {
  title: string;
  thumbnail: string;
  endDate: '2025.12.31';
  currentPrice: string;
}

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  startDate: string;
  endDate: string;
  currentPrice: string;
  favorites: number;
  views: number;
  status: AuctionStatus;
}
