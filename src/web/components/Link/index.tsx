import LinkNext from "next/link";

import { LinkProps } from "types/interfaces/link";

export const Link: React.FC<LinkProps> = ({
	href,
	blank,
	disabled,
	children,
	rel = "",
	...props
}) => (
	<LinkNext href={href}>
		<a
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			target={blank ? "_blank" : "_self"}
			rel={`noopener noreferrer ${rel}`}
			{...props}
		>
			{children}
		</a>
	</LinkNext>
);
