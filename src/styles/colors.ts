import { css } from "styled-components";

import { COLORS as CORE_COLORS } from "core/assets/colors";

export const COLORS = {
	root: css`
		--primary: ${CORE_COLORS.programming};
		--black: ${CORE_COLORS.black};
		--white: ${CORE_COLORS.white};
		--shadow: #00000050;
		--scrollbar: var(--primary);
	`,
	dark: css`
		--gray: #e1e1e6;
		--gray-dark: #a8a8b3;
		--background: #121212;
		--text: var(--gray);
		--text-dark: var(--gray-dark);
		--outline-color: var(--gray);
		--scrollbar-background: #00000050;
	`,
};
