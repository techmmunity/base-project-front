import "next-i18next";

import { Languages } from "types/Languages";

jest.mock("next-i18next", () => ({
	useTranslation: () => {
		return {
			t: (key: Languages) => key,
		};
	},
}));
