import { z } from 'zod';

export const auctionSchema = z.object({
  auctionData: z.object({
    title: z.string().min(2, '상품명은 2자 이상 입력해주세요.'),
    description: z.string().min(10, '설명은 10자 이상 입력해주세요.'),
    endTime: z.number().int().positive('마감 시간을 선택해주세요.'),
    startPrice: z.number('숫자를 입력해주세요.'),
    minBidUnit: z
      .number('숫자를 입력해주세요.')
      .min(100, '최소 입찰 단위는 최소 100원 이상이어야 합니다.'),
  }),
  images: z.array(z.instanceof(File)).min(1, '이미지는 최소 1장 이상 등록해주세요.'),
});

export type AuctionFormData = z.infer<typeof auctionSchema>;
