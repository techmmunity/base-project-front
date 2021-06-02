import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { HeadContent } from "web/components/HeadContent";

import { URLS } from "config/urls";

import { getAttributeValue } from "../helpers/get-attribute-value";

describe("Components > HeadContent", () => {
	it("should find the meta og:name_title with Base Project Front value", () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:site_name",
				namedItem: "content",
			}),
		).toBe("Base Project Front");
	});

	it(`should find the meta og:url with ${URLS.self} value`, () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:url",
				namedItem: "content",
			}),
		).toBe(URLS.self);
	});

	it("should find the meta og:locale with en value", () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:locale",
				namedItem: "content",
			}),
		).toBe("en");
	});

	it(`should find the link cannonical with ${URLS.self} value`, () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "link",
				attribute: "rel",
				attributeValue: "cannonical",
				namedItem: "href",
			}),
		).toBe(URLS.self);
	});
});
