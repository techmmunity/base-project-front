import { LayoutsEnum } from "types/enums/layout";

import { DefaultLayout } from "./default";

const getLayout = (layout?: LayoutsEnum): React.FC => {
	switch (layout) {
		case LayoutsEnum.NONE:
			return ({ children }) => <>{children}</>;
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: React.FC = props => {
	const Layout = getLayout((props.children as any).type.layout);

	return (
		<Layout {...props}>
			<main>{props.children}</main>
		</Layout>
	);
};
