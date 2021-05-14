import { useTranslation } from "next-i18next";

import { Container } from "./styles";

export const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return <Container>{t("message")}</Container>;
};
