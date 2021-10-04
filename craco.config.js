const path = require('path');

const resolvePackage = relativePath => path.resolve(__dirname, relativePath);


module.exports = {
  webpack: {
    alias: {
      "~": resolvePackage('./src'),
      "~components": resolvePackage('./src/components'),
      "~constants": resolvePackage('./src/constants'),
      "~containers": resolvePackage('./src/containers'),
      "~services": resolvePackage('./src/services'),
      "~utils": resolvePackage('./src/utils'),
      "~testUtils": resolvePackage('./src/testUtils')
    },
    extensions: ['', '.js', '.jsx']
  },
  // jest: {
  //   configure: {
  //     moduleNameMapper: {
  //       "^@/(.+)": "<rootDir>/src$1",
  //       '^components(.*)$': '<rootDir>/src/components$1',
  //       '^containers(.*)$': '<rootDir>/src/containers$1',
  //       '^constants(.*)$': '<rootDir>/src/constants$1',
  //       '^services(.*)$': '<rootDir>/src/services$1',
  //       '^testUtils(.*)$': '<rootDir>/src/testUtils$1',
  //       '^utils(.*)$': '<rootDir>/src/utils$1',
  //     },
  //   },
  // },
};