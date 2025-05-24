import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  searchContacts: async (params) => {
    const response = await client.get(`${ebUrl}/contact/search`, {
      params: params,
    });
    return response.data;
  },
  pinContact: async (uuid) => {
    const response = await client.put(`${ebUrl}/contact/pin/${uuid}`);
    return response.data;
  },
  unpinContact: async (uuid) => {
    const response = await client.delete(`${ebUrl}/contact/unpin/${uuid}`);
    return response.data;
  },
};
export default Api;
