import { Product, ProductCard } from './type';

export const TYPE_TO_SIZE = {
  vertical: 'lg',
  horizontal: 'md',
} as const;

export const PRODUCTCARD_DUMMY: ProductCard = {
  title: '이것은 제가 직접 공수해온 겁니다 이 바보들아 내거야 다',
  thumbnail: 'https://picsum.photos/200/200',
  endDate: '2025.12.31',
  currentPrice: '999,999,999',
};

export const PRODUCT_DUMMY: Product = {
  id: '1234',
  uuid: 'user-1234',
  title: '이것은 제가 직접 공수해온 겁니다 이 바보들아 내거야 다',
  thumbnail: 'https://picsum.photos/200/200',
  images: [
    'https://picsum.photos/seed/auctionE/500/300',
    'https://picsum.photos/seed/auctionF/500/300',
    'https://picsum.photos/seed/auctionG/500/300',
  ],
  startDate: '2025-10-06T16:44:00Z',
  endDate: '2025-10-07T16:00:00Z',
  currentPrice: '123,999',
  favorites: 8,
  views: 63,
  status: 'CLOSED',
};
