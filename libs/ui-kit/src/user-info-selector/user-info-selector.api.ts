import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  getUserInfo: async (userName?) => {
    const response = await client.get(`${ebUrl}/user-activity/user-info`, { params: userName });
    return response.data;
  },
};
export default Api;
