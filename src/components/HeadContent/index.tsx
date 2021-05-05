interface Props {
	htmlLang?: string;
}

import { Urls } from "config/urls";

export const HeadContent: React.FC<Props> = ({ htmlLang = "en" }) => (
	<>
		<meta name="og:site_name" content="Base Project Front" />
		<meta name="og:url" content={Urls.SITE} />
		<meta name="og:locale" content={htmlLang} />
		<link rel="cannonical" href={Urls.SITE} />
	</>
);
