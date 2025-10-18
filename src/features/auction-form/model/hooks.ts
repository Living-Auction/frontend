import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { auctionSchema, AuctionFormData } from './schema';

interface UseAuctionFormOptions {
  defaultValues?: Partial<AuctionFormData>;
}

export const useAuctionForm = ({ defaultValues }: UseAuctionFormOptions = {}) => {
  return useForm<AuctionFormData>({
    resolver: zodResolver(auctionSchema),
    defaultValues: {
      title: '',
      description: '',
      images: [],
      endDate: '',
      ...defaultValues,
    },
  });
};
