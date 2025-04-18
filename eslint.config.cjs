const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'prettier/prettier': 'error', // 👈 this runs Prettier as a lint rule
    },
  },
];
