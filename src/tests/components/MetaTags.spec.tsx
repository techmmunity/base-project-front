import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { MetaTags } from "components/MetaTags";

const getMetaValue = (name: string) =>
	document
		.querySelector(`meta[name="${name}"]`)
		?.attributes.getNamedItem("content")?.value;

describe("Components > MetaTags", () => {
	it("should find the meta og:name_title with Base Project Front value", () => {
		render(<MetaTags />);

		expect(getMetaValue("og:site_name")).toBe("Base Project Front");
	});

	it("should find the meta og:url with https://example.com value", () => {
		render(<MetaTags />);

		expect(getMetaValue("og:url")).toBe("https://example.com");
	});

	it("should find the meta og:locale with https://example.com value", () => {
		render(<MetaTags />);

		expect(getMetaValue("og:locale")).toBe("en-us");
	});
});
