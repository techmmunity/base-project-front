import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomePage } from "web/pages/Home";

// eslint-disable-next-line import/no-default-export
export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
};
