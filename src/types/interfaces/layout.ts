import { LayoutsEnum } from "../enums/layout";

export interface FCWithLayout extends React.FC {
	layout?: LayoutsEnum;
}
