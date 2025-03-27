// @ts-check

import eslint from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import tsdoc from 'eslint-plugin-tsdoc';
import { config, configs } from 'typescript-eslint';

export default config(
  eslint.configs.recommended,
  comments.recommended,
  importPlugin.flatConfigs.recommended,
  prettier,
  ...configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { tsdoc: tsdoc },
    ignores: ['dist/', 'docs/', 'node_modules/'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'no-use-before-define': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      'prettier/prettier': ['error', { singleQuote: true, printWidth: 240, parser: 'typescript' }],
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          named: { enabled: true, types: 'types-last' },
          alphabetize: { order: 'asc' },
        },
      ],
      'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
      'tsdoc/syntax': 'warn',
    },
  },
  {
    files: ['*.js', '*.mjs'],
    extends: [configs.disableTypeChecked],
  },
);
