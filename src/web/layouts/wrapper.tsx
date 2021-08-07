import { ReactNode } from "react";

import { LayoutsEnum } from "types/enums/layouts";

import { Layout } from "types/interfaces/layout";

import { DefaultLayout } from "./default";
import { NoneLayout } from "./none";

interface Props {
	children: ReactNode & { type: Layout };
}

const getLayout = (layout?: LayoutsEnum) => {
	switch (layout) {
		case LayoutsEnum.NONE:
			return NoneLayout;
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: FC<Props> = ({ children }) => {
	const LayoutComponent = getLayout(children.type.layout);

	return <LayoutComponent>{children}</LayoutComponent>;
};
