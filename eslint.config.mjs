import nx from '@nx/eslint-plugin';
import jsoncParser from 'jsonc-eslint-parser';

export default [
  {
    ignores: ['**/*'],
  },
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    plugins: {
      '@nx': nx,
    },
    rules: {
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions'],
        },
      ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: nx.configs['flat/typescript'], // Extends TypeScript-specific configurations
  },
  {
    files: ['*.js', '*.jsx'],
    extends: nx.configs['flat/javascript'], // Extends JavaScript-specific configurations
  },
  {
    files: ['*.json'],
    languageOptions: {
      parser: jsoncParser, // Use JSONC parser for JSON files
    },
    rules: {},
  },
];
