import { css } from "styled-components";

import { COLORS as CORE_COLORS } from "core/assets/colors";

export const COLORS = {
	root: css`
		--main: ${CORE_COLORS.programming};
		--black: ${CORE_COLORS.black};
		--white: ${CORE_COLORS.white};
		--shadow: #00000050;
		--scrollbar: var(--main);
	`,
	dark: css`
		--primary: #1d1d1d;
		--secondary: #e1e1e6;
		--background: #1616616;
		--scrollbar-background: #00000050;
	`,
};
