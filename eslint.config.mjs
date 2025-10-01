/** ESLint Configuration History
 *
 * | Update Date  | Author      | Description
 * |--------------|-------------|-------------------------------------------------
 * | 2025-10-01   | Geumyoung   | `import/order` 규칙을 React/Next.js에 맞게 최적화
 * |              |             |
 *
 */

import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// [수정] 최신 방식에 맞게 prettier 플러그인을 import 합니다.
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
  {
    // [수정] 플러그인을 여기에 등록합니다.
    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
      'jsx-a11y': jsxA11y,
      '@next/next': nextPlugin,
    },
    rules: {
      // [추가] Prettier 규칙을 활성화합니다.
      'prettier/prettier': 'error',
      // Next.js Core Web Vitals 규칙
      '@next/next/no-html-link-for-pages': 'error',
      // React 기본 규칙
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // import 순서 규칙
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,next,next/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/*.s?css',
              group: 'type',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            { target: './src/shared', from: './src/app' },
            { target: './src/shared', from: './src/widgets' },
            { target: './src/shared', from: './src/features' },
            { target: './src/shared', from: './src/entities' },
            { target: './src/entities', from: './src/app' },
            { target: './src/entities', from: './src/widgets' },
            { target: './src/entities', from: './src/features' },
            { target: './src/features', from: './src/app' },
            { target: './src/features', from: './src/widgets' },
          ],
        },
      ],
    },
  },
];
