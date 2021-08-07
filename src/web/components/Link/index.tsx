import LinkNext from "next/link";

import { LinkProps } from "types/interfaces/link";

export const Link = ({
	href,
	blank,
	disabled,
	children,
	...props
}: LinkProps) => (
	<LinkNext href={href}>
		<a
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			target={blank ? "_blank" : "_self"}
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	</LinkNext>
);
