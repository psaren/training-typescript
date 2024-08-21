/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  clearMocks: true,
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{
      tsconfig: 'tsconfig.json',
      diagnostics: false,
    }],
    "^.+\\.js$": "babel-jest",
  },
  roots: ["<rootDir>/tests"],
  transformIgnorePatterns: ["<rootDir>/src/*.js"]
};