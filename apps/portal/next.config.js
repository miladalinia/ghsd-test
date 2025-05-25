// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ghased-portal/client': require('path').resolve(__dirname, 'libs/client/src/index.ts'),
      '@ghased-portal/hooks': require('path').resolve(__dirname, 'libs/hooks/src/index.ts'),
      '@ghased-portal/layouts': require('path').resolve(__dirname, 'libs/layouts/src/index.ts'),
      '@ghased-portal/translation': require('path').resolve(__dirname, 'libs/translation/src/index.ts'),
      '@ghased-portal/ui-kit': require('path').resolve(__dirname, 'libs/ui-kit/src/index.ts'),
      '@ghased-portal/utils': require('path').resolve(__dirname, 'libs/utils/src/index.ts'),
      '@ghased-portal/types': require('path').resolve(__dirname, 'libs/types/src/index.ts'),
    };
      config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
