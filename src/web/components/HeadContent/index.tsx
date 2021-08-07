import { SITE } from "configs/site";

interface Props {
	ogLocale?: string;
}

export const HeadContent = ({ ogLocale = "en_US" }: Props) => (
	<>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content={ogLocale} />
		<link rel="cannonical" href={SITE.url} />
	</>
);
