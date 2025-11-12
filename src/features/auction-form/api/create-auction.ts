import { AuctionFormData } from '@features/auction-form/model/schema';
import client from '@/shared/api/client';

export const createAuction = async (data: AuctionFormData) => {
  const res = await client.post('/auctions', data);
  return res.data;
};
