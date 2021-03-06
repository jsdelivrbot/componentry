'use strict'

module.exports = {
  extends: '../.eslintrc.js',
  // Demo app imports and console logging not part of main project
  rules: {
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0, // demo app import react-router
    'no-console': 0, // demo app uses consoles for demo-ing
  },
}
