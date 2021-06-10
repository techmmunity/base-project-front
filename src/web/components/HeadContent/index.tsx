import { URLS } from "config/urls";

interface Props {
	ogLocale?: string;
}

export const HeadContent: React.FC<Props> = ({ ogLocale = "en_US" }) => (
	<>
		<meta name="og:site_name" content="Base Project Front" />
		<meta name="og:url" content={URLS.self} />
		<meta name="og:locale" content={ogLocale} />
		<link rel="cannonical" href={URLS.self} />
	</>
);
