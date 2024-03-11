module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/?(*.)+(test).ts'],
  	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts'],
	collectCoverage: true,
};
