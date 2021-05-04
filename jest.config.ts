export default {
	collectCoverageFrom: ["components/**/*.tsx", "pages/**/*.tsx"],
	coverageDirectory: "../coverage",
	clearMocks: true,
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.jest.json",
		},
	},
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["js", "json", "ts", "tsx"],
	setupFiles: ["<rootDir>/src/tests/setup.ts"],
	transform: {
		"^.+\\.(tsx|ts|jsx|js)$": "ts-jest",
	},
	testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules"],
	testRegex: ".*\\.spec\\.(ts|tsx)$",
	// coverageThreshold: {
	// 	global: {
	// 		branches: 100,
	// 		functions: 100,
	// 		lines: 100,
	// 		statements: 100,
	// 	},
	// },
};
