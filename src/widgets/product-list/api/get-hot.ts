import server from '@shared/api/server';

export const getHot = async () => {
  const res = await server.get(`/items/like`);
  return res.data;
};
