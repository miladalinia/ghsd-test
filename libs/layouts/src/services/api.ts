import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  getMenus: async () => {
    const response = await client.get(`${ebUrl}/profile/menu`);
    return response.data;
  },
  getUserPhoto: async () => {
    const response = await client.get(`${ebUrl}/profile/photo`);
    return response.data;
  },
  getUserOrg: async (params?) => {
    const response = await client.get(`${ebUrl}/profile/organizations`, {
      params: params,
    });
    return response.data;
  },
  changeOrg: async (orgId) => {
    const response = await client.patch(`api/organizations/change/${orgId}`);
    return response.data;
  },
  getUserProfile: async () => {
    const response = await client.get(`${ebUrl}/profile`);
    return response.data;
  },
  getPurpose: async () => {
    const response = await client.get(`${ebUrl}/statement-reason-code/search`);
    return response.data;
  },
};
export default Api;
