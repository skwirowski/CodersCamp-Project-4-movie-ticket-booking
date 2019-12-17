module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'import/no-extraneous-dependencies':
      [
        'error', {
          'devDependencies': true,
          'optionalDependencies': false,
          'peerDependencies': false
        }
      ]
  },
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/']
      }
    }
  }
};
