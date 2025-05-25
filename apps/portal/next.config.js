//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const base_url = process.env.API_BASE_URL;
const auth_prefix = process.env.NEXT_PUBLIC_AUTH_PREFIX || 'api';
const eb_prefix = process.env.NEXT_PUBLIC_EB_PREFIX || '';

const rewritesConfig = [
  {
    source: `/${auth_prefix}/:path*`,
    destination: `${base_url}/${auth_prefix}/:path*`,
  },
  {
    source: `/${eb_prefix}/:path*`,
    destination: `${base_url}/${eb_prefix}/:path*`,
  },

];

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 180,
  basePath: process.env.NODE_ENV === 'development' ? '' : base_url,
  rewrites: async () => {
    return rewritesConfig;
  },
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  // withPWA,
];

module.exports = composePlugins(...plugins)(nextConfig);
