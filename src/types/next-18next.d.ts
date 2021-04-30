import "next-i18next";

import { Languages } from "./Languages";

declare module "next-i18next" {
	export function useTranslation(): {
		t: (key: Languages) => string;
	};
}
