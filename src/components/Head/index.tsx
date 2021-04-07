import { GoogleFonts } from "next-google-fonts";
import HeadNext from "next/head";

export const Head = () => (
	<>
		<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" />
		<HeadNext>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Base Project Front</title>
		</HeadNext>
	</>
);
