import { Home, Shirt, Car, Sparkles, HousePlug } from 'lucide-react';

export const CATEGORIES = [
  { type: 'all', label: '전체', icon: Home },
  { type: 'living', label: '생활용품', icon: HousePlug },
  { type: 'fashion', label: '패션/의류', icon: Shirt },
  { type: 'beauty', label: '뷰티', icon: Sparkles },
  { type: 'car', label: '자동차', icon: Car },
] as const;
