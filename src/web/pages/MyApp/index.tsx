import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import { Head } from "./components/Head";

import { LayoutWrapper } from "web/layouts/wrapper";

import { GlobalStyle } from "./styles";

export const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<ThemeProvider forcedTheme="dark">
		<Head />
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
		<GlobalStyle />
	</ThemeProvider>
);
