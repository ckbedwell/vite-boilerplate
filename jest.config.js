// https://github.com/aelbore/esbuild-jest
module.exports = {
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: [
    `<rootDir>/setupTests.js`,
  ],
  transform: {
    "^.+\\.jsx?$": [
      `esbuild-jest`,
      {
        sourcemap: true,
        loaders: {
          '.spec.jsx': `jsx`,
        },
      },
    ],
  },
  moduleNameMapper: {
    "^~/(.*)$": `<rootDir>/src/$1`,
    "\\.module\\.(css)$": `identity-obj-proxy`,
  },
}
