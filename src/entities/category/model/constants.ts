import { Home, Shirt, Car, Sparkles, HousePlug } from 'lucide-react';

// TODO: Category 목록 및 아이콘 이미지 설정

export const CATEGORIES = [
  { type: 'all', label: '전체', icon: Home },
  { type: 'living', label: '생활용품', icon: HousePlug },
  { type: 'fashion', label: '패션/의류', icon: Shirt },
  { type: 'beauty', label: '뷰티', icon: Sparkles },
  { type: 'car', label: '자동차', icon: Car },
  { type: 'living-2', label: '생활용품', icon: HousePlug },
  { type: 'fashion-2', label: '패션/의류', icon: Shirt },
  { type: 'beauty-2', label: '뷰티', icon: Sparkles },
  { type: 'car-2', label: '자동차', icon: Car },
] as const;
