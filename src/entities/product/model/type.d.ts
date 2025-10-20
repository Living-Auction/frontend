export type AuctionStatus = 'PENDING' | 'ACTIVE' | 'CLOSED';

interface ProductCard {
  title: string;
  thumbnail: string;
  endDate: '2025.12.31';
  currentPrice: string;
}

interface Product {
  id: string;
  uuid: string;
  title: string;
  thumbnail: string;
  images: string[];
  startDate: string;
  endDate: string;
  currentPrice: number;
  buyNowPrice: number;
  favorites: number;
  views: number;
  status: AuctionStatus;
  tradeLocation: string;
  desc: string;
}
