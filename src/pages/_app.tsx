import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

import GlobalStyle from "GlobalStyle";

import { Head } from "web/components/Head";

import { LayoutWrapper } from "web/layouts/wrapper";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<LayoutWrapper {...pageProps}>
			<Component {...pageProps} />
		</LayoutWrapper>
		<GlobalStyle />
	</>
);

export default appWithTranslation(MyApp);
