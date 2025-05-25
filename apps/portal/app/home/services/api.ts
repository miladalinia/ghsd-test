import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  // getServices: async () => {
  //   const response = await client.get(`${ebUrl}/profile/menu/dashboard`);
  //   return response.data;
  // },
  getTop5: async () => {
    const response = await client.get(`${ebUrl}/board-messages/last-messages`);
    return response.data;
  },
  getPurpose: async () => {
    const response = await client.get(`${ebUrl}/statement-reason-code/search`);
    return response.data;
  },
};
export default Api;
