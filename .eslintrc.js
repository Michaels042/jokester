module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last' : 0,
    'no-multiple-empty-lines' : 0,
    'no-new' : 0,
    'comma-dangle': 0,
    'semi' : 0,
    'arrow-parens' : 0,
    'no-trailing-spaces' : 0,
    'no-restricted-syntax' : 0,
    'guard-for-in' : 0,
    'padded-blocks' : 0,
    'indent': 0,
    'import/extensions' : 0,
    'import/prefer-default-export' : 0
  },
};
