import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  getUserAccounts: async (params) => {
    const response = await client.get(`${ebUrl}/organization-accounts`, {
      params: params,
    });
    return response.data;
  },
  getRecentAccounts: async (params) => {
    const response = await client.get(
      `${ebUrl}/organization-accounts/recent?serviceName=${params.serviceName}&topOfFavoriteRecords=5&topOfRecentRecords=10`
    );
    return response.data;
  },
  getAccountBalance: async (params) => {
    const response = await client.get(`${ebUrl}/accounts/${params.accountNumber}/balance`);
    return response.data;
  },
  addToFavorite: async (params) => {
    const response = await client.put(`${ebUrl}/organization-accounts/favorite/add`, null, { params: params });
    return response.data;
  },
  deleteFromFavorite: async (params) => {
    const response = await client.put(`${ebUrl}/organization-accounts/favorite/delete`, null, { params: params });
    return response.data;
  },
};
export default Api;
