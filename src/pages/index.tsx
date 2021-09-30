import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomePage } from "web/pages/Home";

import { i18n } from "configs/i18n";

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || i18n.defaultLocale, ["home"])),
		},
	};
};
