// TODO: 실제 연동되는 데이터명과 타입 일치 작업 필요

interface ProductCard {
  title: string;
  thumbnail: string;
  endDate: '2025.12.31';
  currentPrice: string;
}

interface Product {
  title: string;
  images: string[];
  endDate: string;
  currentPrice: string;
  favorites: number;
  views: number;
}
