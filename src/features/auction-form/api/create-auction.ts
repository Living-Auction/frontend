import { AuctionFormData } from '@features/auction-form/model/schema';
import axios from 'axios';
import { API_BASE_URL } from '@/shared/config/env';
import { useTokenStore } from '@/shared/store/token';

export const createAuction = async (data: AuctionFormData) => {
  const token = useTokenStore.getState().token;

  const formData = new FormData();

  formData.append(
    'auctionData',
    new Blob([JSON.stringify(data.auctionData)], { type: 'application/json' }),
  );

  data.images.forEach((file) => {
    formData.append('images', file);
  });

  const res = await axios.post(`${API_BASE_URL}/items/regist`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    withCredentials: true,
  });

  return res.data;
};
