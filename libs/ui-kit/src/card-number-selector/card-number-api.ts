import { client, ebUrl } from '@ghased-portal/client';

const Api = {
  getCardsByPan: async (panNo) => {
    const response = await client.get(`${ebUrl}/issue-cards/auto-complete-by-pan`, { params: { panNo } });
    return response.data;
  },
};

export default Api;
