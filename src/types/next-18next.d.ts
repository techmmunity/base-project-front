import "next-i18next";

import { TranslatedTexts } from "./interfaces/i18n";

declare module "next-i18next" {
	export function useTranslation(): {
		t: (key: TranslatedTexts) => string;
	};
}
