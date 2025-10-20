import { Product } from './type';

export const TYPE_TO_SIZE = {
  vertical: 'lg',
  horizontal: 'md',
} as const;

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
  currentPrice: 123999,
  buyNowPrice: 320000,
  favorites: 8,
  views: 63,
  status: 'CLOSED',
  tradeLocation: '서울특별시 강남구 역삼동',
  desc: '직접 기른 캣닢을 한잎한잎 갈아 만든 캣휠입니다.\n\n저희 집 고양이는 이제 질렸는지 잘 안 쓰네요.\n상태는 아주 좋습니다. (사진 참고)\n\n    - 생활기스 약간 있음\n    - 캣닢향은 아직 진하게 남아있음\n\n입찰 안 하면 손해니까 빨리 하세요',
};
