// eslint-disable-next-line tsdoc/syntax
/** @type {import('jest').Config} **/
const config = {
  transform: {
    '^.+\\.tsx?$': ['@jgoz/jest-esbuild', { esbuild: { target: 'es2022' } }],
  },
};

export default config;
