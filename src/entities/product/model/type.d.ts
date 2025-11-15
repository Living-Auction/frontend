export type AuctionStatus = 'PENDING' | 'ACTIVE' | 'CLOSED';

interface ProductCardDto {
  id: string;
  title: string;
  thumbnailUrl: string;
  endTime: string;
  price: number;
}

interface Product extends ProductCardDto {
  createdAt: string;
  updatedAt: string;
  seller: User;
  auctionType: string;
  description: string;
  startTime: string;
  currentPrice: number;
  buyNowPrice: number;
  category: string;
  views: number;
  status: AuctionStatus;
  location: string;
}
