import { z } from 'zod';

export const auctionSchema = z.object({
  title: z.string().min(2, '상품명은 2자 이상 입력해주세요.'),
  description: z.string().min(10, '설명은 10자 이상 입력해주세요.'),
  images: z.array(z.instanceof(File)).min(1, '이미지는 최소 1장 이상 등록해주세요.'),
  endDate: z.string().nonempty('마감 시간을 선택해주세요.'),
});

export type AuctionFormData = z.infer<typeof auctionSchema>;
