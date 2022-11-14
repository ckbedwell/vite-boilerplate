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
    "^.+\\.svg$": `<rootDir>/mockSvg.ts`,
    "\\.module\\.(css)$": `identity-obj-proxy`,
    "^~/(.*)$": `<rootDir>/src/$1`,
  },
}
