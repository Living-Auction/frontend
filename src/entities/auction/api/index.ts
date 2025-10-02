import { AuctionImage } from '../model/types';

/**
 * @param auctionId 상품의 고유 ID
 * @returns auctionId 객체 배열을 담은 Promise
 */

export const getAuctionImagesById = async (auctionId: string): Promise<AuctionImage[]> => {
  console.log(`Fetching images for auction: ${auctionId}...`);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, url: 'https://picsum.photos/seed/auctionA/500/300' },
        { id: 2, url: 'https://picsum.photos/seed/auctionB/500/300' },
        { id: 3, url: 'https://picsum.photos/seed/auctionC/500/300' },
        { id: 4, url: 'https://picsum.photos/seed/auctionD/500/300' },
        { id: 5, url: 'https://picsum.photos/seed/auctionE/500/300' },
      ]);
    }, 500),
  );
};
