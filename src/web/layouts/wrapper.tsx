import { LayoutsEnum } from "types/enums/layout";

import { DefaultLayout } from "./default";

const getLayout = (layout?: LayoutsEnum) => {
	switch (layout) {
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: React.FC = props => {
	const Layout = getLayout((props.children as any).type.layout);

	return <Layout {...props}>{props.children}</Layout>;
};
