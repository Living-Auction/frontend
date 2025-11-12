import { useState } from 'react';
import { AuctionFormData } from '@features/auction-form/model/schema';
import { createAuction } from '../api/create-auction';

export const useCreateAuction = () => {
  const [loading, setLoading] = useState(false);

  const submitAuction = async (data: AuctionFormData) => {
    setLoading(true);
    try {
      await createAuction(data);
      // Todo: toast 연결
    } finally {
      setLoading(false);
    }
  };

  return { submitAuction, loading };
};
