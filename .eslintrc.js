module.exports = {
  //  "parser": "@babel/eslint-parser",
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'linebreak-style': 'off',
    ' indent': 'off',
    '@typescript-eslint/indent': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
  },
};
