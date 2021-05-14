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
    color: ${Colors.white1000};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	a {
		color: ${Colors.white1000};
		text-decoration: none;
	}

	button {
		border: transparent;

		&:not(:disabled) {
			cursor: pointer;
		}
	}

	ul {
		list-style: none;
	}

  ::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background: ${Colors.black1000}50;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: ${Colors.gray300};
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
