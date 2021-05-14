import { useTranslation } from "next-i18next";

import { FCWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const Home: FCWithLayout = () => {
	const { t } = useTranslation();

	return <Container>{t("message")}</Container>;
};
