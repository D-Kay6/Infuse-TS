// @ts-check

import eslint from '@eslint/js';
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  comments.recommended,
  importPlugin.flatConfigs.recommended,
  prettier,
  ...tseslint.configs.recommended,
  {
    plugins: {'tsdoc': tsdoc},
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": true,
        "node": true,
      }
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { "allowWholeFile": true }
      ],
      "@eslint-community/eslint-comments/no-unused-disable": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "never",
          "named": { "enabled": true, "types": "types-last" },
          "alphabetize": { "order": "asc" }
        }
      ],
      "sort-imports": [
        "error",
        { "ignoreDeclarationSort": true, "ignoreCase": true }
      ],
      "tsdoc/syntax": "warn",
    }
  }
);
