import server from '@shared/api/server';

export const getEndingSoon = async () => {
  const res = await server.get(`/items/deadline`);
  return res.data;
};
