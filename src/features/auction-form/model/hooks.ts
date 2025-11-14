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
      auctionData: {
        title: '',
        description: '',
        endTime: 0,
        startPrice: 0,
        minBidUnit: 100,
        ...(defaultValues?.auctionData ?? {}),
      },
      images: defaultValues?.images ?? [],
    },
  });
};
