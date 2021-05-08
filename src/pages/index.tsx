import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomePage } from "web/pages/Home";

import { FCWithLayout } from "types/interfaces/layout";

const Home: FCWithLayout = () => <HomePage />;

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
};
