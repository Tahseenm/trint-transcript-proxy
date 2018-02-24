module.exports = {
  extends: 'airbnb-base',

  env: {
    jest: true,
  },

  rules: {
    semi: [2, 'never'],
    'no-multiple-empty-lines': [2, { max: 3 }],
    'no-multi-spaces': 0,
    'import/prefer-default-export': 0,
  },
}
