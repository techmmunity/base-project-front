import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

import { Head } from "components/Head";

import { LayoutWrapper } from "layouts/wrapper";

import GlobalStyle from "styles/GlobalStyle";

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
