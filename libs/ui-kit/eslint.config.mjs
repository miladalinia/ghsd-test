import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
rules: {
  'react/react-in-jsx-scope': 'off', 
  'react/jsx-uses-react': 'off',   
  'react/jsx-uses-vars': 'error',
}
  },
];
