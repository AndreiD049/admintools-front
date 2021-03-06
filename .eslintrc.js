const os = require('os');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: ['plugin:react/recommended', 'airbnb', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: ['react'],

  rules: {
    'linebreak-style': [0, os.EOL === '\r\n' ? 'windows' : '\n'],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-unused-vars': 'warn',
  },
};
