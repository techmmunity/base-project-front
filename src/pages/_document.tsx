import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import { HeadContent } from "web/components/HeadContent";

const getHtmlLang = (locale: string) => {
	switch (locale) {
		case "pt-BR":
			return "pt";
		case "en-US":
			return "en";
		default:
			return "en";
	}
};

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		const { locale } = this.props.__NEXT_DATA__;
		const htmlLang = getHtmlLang(locale as string);

		return (
			<Html lang={htmlLang}>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
					<HeadContent htmlLang={htmlLang} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
