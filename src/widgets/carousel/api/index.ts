import { ImageUrlType } from '../model/type';

/**
 * Todo: 데이터 연결 방식에 따라 삭제 가능
 *  @param auctionId 상품의 고유 ID
 * @returns auctionId 객체 배열을 담은 Promise
 */

export const getAuctionImagesById = async (auctionId: string): Promise<ImageUrlType[]> => {
  console.log(`Fetching images for auction: ${auctionId}...`);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        'https://picsum.photos/seed/auctionA/500/300',
        'https://picsum.photos/seed/auctionB/500/300',
        'https://picsum.photos/seed/auctionC/500/300',
        'https://picsum.photos/seed/auctionD/500/300',
        'https://picsum.photos/seed/auctionE/500/300',
      ]);
    }, 500),
  );
};
