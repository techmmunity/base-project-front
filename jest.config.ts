export default {
	moduleFileExtensions: ["js", "json", "ts", "tsx"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["components/**/*.tsx"],
	setupFiles: ["<rootDir>/tests/setup.ts"],
	coverageDirectory: "../coverage",
	moduleDirectories: ["node_modules", "src"],
	clearMocks: true,
	// coverageThreshold: {
	// 	global: {
	// 		branches: 100,
	// 		functions: 100,
	// 		lines: 100,
	// 		statements: 100,
	// 	},
	// },
};
