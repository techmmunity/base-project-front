import { AppProps } from "next/app";

import { Head } from "./components/Head";

import { LayoutWrapper } from "web/layouts/wrapper";

import { GlobalStyle, Main } from "./styles";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<LayoutWrapper {...pageProps}>
			<Main>
				<Component {...pageProps} />
			</Main>
		</LayoutWrapper>
		<GlobalStyle />
	</>
);
