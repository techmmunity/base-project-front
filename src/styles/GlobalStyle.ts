import { createGlobalStyle } from "styled-components";

import { Colors } from "assets/colors";

export default createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
  }

  body {
    background: ${Colors.background};
    color: ${Colors.primary};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }
`;
