import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginImport from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    plugins: {
      import: pluginImport,
      'jsx-a11y': jsxA11y,
      '@next/next': nextPlugin,
    },
    rules: {
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
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
