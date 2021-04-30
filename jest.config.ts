export default {
	collectCoverageFrom: ["pages/**/*.tsx"],
	coverageDirectory: "../coverage",
	clearMocks: true,
	moduleDirectories: ["node_modules", "src"],
	rootDir: "src",
	setupFiles: ["<rootDir>/tests/setup.ts"],
};
