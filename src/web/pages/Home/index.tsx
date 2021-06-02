import { useTranslation } from "next-i18next";

import { FcWithLayout } from "types/interfaces/layout";

export const HomePage: FcWithLayout = () => {
	const { t } = useTranslation();

	return <>{t("message")}</>;
};
