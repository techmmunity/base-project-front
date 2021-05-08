export default {
	collectCoverageFrom: [
		"src/web/components/HeadContent/*.(ts|tsx)",
		"src/web/pages/**/*.(ts|tsx)",
	],
	clearMocks: true,
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.jest.json",
		},
	},
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["js", "json", "ts", "tsx"],
	setupFiles: ["<rootDir>/src/web/tests/setup.ts"],
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
