module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    // 'airbnb',
  ],
  globals: {
    window: 'readonly',
    location: 'readonly',
    document: 'readonly',
    describe: true,
    expect: true,
    test: true,
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    indent: [2, 2],

    'no-extra-bind': 'warn',
    'no-fallthrough': 'warn',
    'no-empty': 'warn',
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    'linebreak-style': 'warn',
    'no-trailing-spaces': 'warn',
    'unicode-bom': 'warn',
    'max-len': 'warn',
    'prefer-const': 'warn',
    'arrow-parens': 'error',

    'react/no-multi-comp': 'warn',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: '16.11', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
