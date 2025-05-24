import axios from 'axios';

import { LocalStorageKey } from '@ghased-portal/types';
import { readFromCookieByKey, storage } from '@ghased-portal/utils';

const baseUrl = '/';

export const ebUrl = process.env['NEXT_PUBLIC_EB_PREFIX'];
export const ebCurrencyUrl = process.env['NEXT_PUBLIC_EB_CURRENCY_PREFIX'];
export const paymentLimit = process.env['NEXT_PUBLIC_EB_LIMIT_PREFIX'];

const client = axios.create({
  baseURL: baseUrl,
  timeout: 220000,
  // maxRedirects: 0,// Disable automatic following of redirect responses
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    // csrf: '',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Request-Method': 'GET/POST/OPTIONS',
  },
  withCredentials: true,
});

// Add a request interceptor
client.interceptors.request.use(async (config) => {
  // Read 'XSRF-TOKEN' from cookies
  const xsrfToken = readFromCookieByKey('X-XSRF-TOKEN');
  const appConfig: any = storage.getItem(LocalStorageKey.CONFIG);

  // console.log('xsrfToken', xsrfToken);

  // Add 'X-XSRF-TOKEN' to headers
  config.headers['X-XSRF-TOKEN'] = xsrfToken;
  config.headers['Accept-Language'] = JSON.parse(appConfig).locale;
  return config;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    // console.info('error axios', originalConfig.url);

    if (originalConfig.url !== '/auth' && error.response) {
      if (error.response.status === 401) {
        if (error.response.data.location) {
          storage.removeItem(LocalStorageKey.USER);
          window.location.href = error.response.data.location;
        }
      }

      if (originalConfig.url.endsWith('/profile') || originalConfig.url.endsWith('/profile/organizations')) {
        if (!window.location.href.endsWith('/server-error')) {
          // console.log('loc', window.location);
          window.location.href = '/server-error';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default client;
