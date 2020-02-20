module.exports = {
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  watchPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/front/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'ts'],
  setupFilesAfterEnv: ['<rootDir>/front/src/testUtilities/setupTests.ts'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
