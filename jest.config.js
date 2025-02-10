// eslint-disable-next-line tsdoc/syntax
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = { // eslint-disable-line no-undef
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
