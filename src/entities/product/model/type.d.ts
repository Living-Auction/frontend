export type AuctionStatus = 'PENDING' | 'ACTIVE' | 'CLOSED';

interface Product {
  id: string;
  uuid: string;
  title: string;
  thumbnailUrl: string;
  images: string[];
  startTime: string;
  endTime: string;
  currentPrice: number;
  buyNowPrice: number;
  favorites: number;
  views: number;
  status: AuctionStatus;
  tradeLocation: string;
  desc: string;
}
