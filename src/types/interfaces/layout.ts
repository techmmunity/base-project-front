import { LayoutsEnum } from "../enums/layout";

export interface FcWithLayout extends React.FC {
	layout?: LayoutsEnum;
}
