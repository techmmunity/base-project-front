import { LayoutsEnum } from "../enums/LayoutsEnum";

export interface FCWithLayout extends React.FC {
	layout?: LayoutsEnum;
}
