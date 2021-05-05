interface Props {
	htmlLang?: string;
}

export const HeadContent: React.FC<Props> = ({ htmlLang = "en" }) => (
	<>
		<meta name="og:site_name" content="Base Project Front" />
		<meta name="og:url" content="https://example.com" />
		<meta name="og:locale" content={htmlLang} />
		<link rel="cannonical" href="https://example.com" />
	</>
);
