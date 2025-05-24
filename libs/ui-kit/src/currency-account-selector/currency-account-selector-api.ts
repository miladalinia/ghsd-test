import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  getCurrencyAccounts: async () => {
    const response = await client.get(`${ebUrl}/currency-account/v3/account-details`);
    return response.data;
  },
};
export default Api;
