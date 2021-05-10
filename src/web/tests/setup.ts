import "next-i18next";

import { TranslatedTexts } from "types/interfaces/i18n";

jest.mock("next-i18next", () => ({
	useTranslation: () => {
		return {
			t: (key: TranslatedTexts) => key,
		};
	},
}));
