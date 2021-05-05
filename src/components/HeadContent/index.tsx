interface Props {
	htmlLang?: string;
}

import { SITE_LINK } from "config";

export const HeadContent: React.FC<Props> = ({ htmlLang = "en" }) => (
	<>
		<meta name="og:site_name" content="Base Project Front" />
		<meta name="og:url" content={SITE_LINK} />
		<meta name="og:locale" content={htmlLang} />
		<link rel="cannonical" href={SITE_LINK} />
	</>
);
