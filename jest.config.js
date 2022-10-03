// https://github.com/aelbore/esbuild-jest
module.exports = {
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: [
    `<rootDir>/setupTests.ts`,
  ],
  transform: {
    "^.+\\.tsx?$": [
      `esbuild-jest`,
      {
        sourcemap: true,
        loaders: {
          '.spec.tsx': `tsx`,
        },
      },
    ],
  },
  moduleNameMapper: {
    "^~/(.*)$": `<rootDir>/src/$1`,
    "\\.module\\.(css)$": `identity-obj-proxy`,
  },
}
