module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/helpers/*.{ts,tsx}',
    '!<rootDir>/src/helpers/index.ts',
    '!<rootDir>/src/theme_types/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
};