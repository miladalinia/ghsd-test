import { client, bbpUrl } from '@ghased-portal/client';

const Api = {
  getRequest: async (params) => {
    const { id, ...restParams } = params;

    const response = await client.get(`${bbpUrl}/request/${id}`, restParams);
    return response.data;
  },
};
export default Api;
