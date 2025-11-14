import server from '@shared/api/server';

export const getLatest = async () => {
  const res = await server.get(`/items/latest`);
  return res.data;
};
