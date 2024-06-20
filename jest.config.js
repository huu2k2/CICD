// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  