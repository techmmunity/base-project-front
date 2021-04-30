import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Home from "pages";

it("should get the container id", () => {
	const { getByTestId } = render(<Home />);
	expect(getByTestId("message")).toBeInTheDocument();
});

it("should get the container text", () => {
	const { getByText } = render(<Home />);
	expect(getByText("message")).toBeInTheDocument();
});
