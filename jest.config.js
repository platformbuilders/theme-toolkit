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
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/src/helpers/*.{ts,tsx}',
    '!<rootDir>/src/helpers/index.ts',
    '!<rootDir>/src/theme_types/*.{ts,tsx}',
    '!**/*.d.ts',
  ],
};
