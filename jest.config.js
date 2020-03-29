const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, '.js', '.json', '.jsx', '.ts', '.tsx'],
  setupFiles: ['./src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|scss|sass|scss|png|jpg)$': 'identity-obj-proxy',
  },
};
