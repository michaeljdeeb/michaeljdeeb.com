module.exports = {
  extends: 'airbnb',
  rules: {
    // 'camelcase': ['off'],
    'import/no-named-as-default': 0,
    'react/forbid-prop-types': [1, { forbid: ['.array', '.object' ], checkContextTypes: true, checkChildContextTypes: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    // document: true,
    // window: true,
  },
};
