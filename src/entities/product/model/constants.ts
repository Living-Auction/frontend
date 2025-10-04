export const TYPE_TO_SIZE = {
  vertical: 'lg',
  horizontal: 'md',
} as const;

export const PRODUCT_DUMMY: Product = {
  title: '이것은 제가 직접 공수해온 겁니다 이 바보들아 내거야 다',
  thumbnail: 'https://picsum.photos/200/200',
  images: [
    'https://picsum.photos/seed/auctionA/500/300',
    'https://picsum.photos/seed/auctionB/500/300',
    'https://picsum.photos/seed/auctionC/500/300',
    'https://picsum.photos/seed/auctionD/500/300',
    'https://picsum.photos/seed/auctionE/500/300',
  ],
  endDate: '2025.12.31',
  currentPrice: '999,999,999',
  favorites: 8,
  view: 63,
};
