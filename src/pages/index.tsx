import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { FCWithLayout } from "types/interfaces/FCWithLayout ";

import { Container } from "styles/pages/Home";

const Home: FCWithLayout = () => {
	const { t } = useTranslation();

	return <Container data-testid="message">{t("message")}</Container>;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
};
