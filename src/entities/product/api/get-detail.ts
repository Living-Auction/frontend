import server from '@shared/api/server';

const getDetail = async (id: string) => {
  const res = await server.get(`/items/${id}`);

  return res.data.data;
};

export default getDetail;
