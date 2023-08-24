// ****************************************/
// Global Styles & Resets
// ****************************************/

import { createGlobalStyle } from "styled-components";
import media from "./Media";
import font from "./Font";

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}


	html{
		box-sizing: border-box;
		-webkit-print-color-adjust: exact;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	body,h1,h2,h3,h4,p{
		border: 0;
	}

  body {
    font-weight: 400;
		font-family: ${font.family100};
  }

	html, body{
		font-size:  ${(props) =>
      (props.theme.baseline * 100) / props.theme.viewport}vmax;
		/* font-size: 0.694vmax */
		/* 1440px times 0.694 = 10px base */
	}

	a {
		outline: 0;
		text-decoration: none;
	}


	h1, h2, h3, h4, h5, h6, p, a, li, span, input, label, button, em, figcaption{
		text-rendering: optimizelegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		font-weight: normal;
		font-feature-settings: "kern" 1;
	}

	.totalLaunches {
		position: absolute;
		top: 2rem;
		right: 2rem;
		${media.smallDesktopAndBelow`
			top: 20px;
			right: 20px;
		`}
	}

.totalLaunches p {
  font-size: ${font.small};
	color: white;
}


.pagination {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 4rem 0;
	${media.smallDesktopAndBelow`
		padding: 40px 0;
	`}
}


button:hover{
	background: white;
	cursor: pointer;
}

button+button{
	margin-left: 20px;
}

h1, h2, h3, h4 {
	font-family: ${font.family100};
}

p, small {
	font-family: ${font.family200};
}

a {
	text-decoration: none;
	color: inherit;
}

a:hover {
	cursor: pointer;
}


h1 {
	font-size: ${font.h1};
	line-height: ${font.h1LineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.h1Tablet};
	`}
	${media.tabletPortraitAndBelow`
		font-size: ${font.h1Mobile};
	`}
}

h2 {
	font-size: ${font.h2};
	line-height: ${font.h2LineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.h2Tablet};
	`}
	${media.tabletPortraitAndBelow`
		font-size: ${font.h2Mobile};
	`}
}

	h3 {
	font-size: ${font.h3};
	line-height: ${font.h3LineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.h3Tablet};
	`}
	${media.tabletPortraitAndBelow`
		font-size: ${font.h3Mobile};
	`}
}

h3 {
	font-size: ${font.h3};
	line-height: ${font.h3LineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.h3Tablet};
	`}
	${media.tabletPortraitAndBelow`
		font-size: ${font.h3Mobile};
	`}
}

h4 {
	font-size: ${font.h4};
	line-height: ${font.h4LineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.h4Tablet};
	`}
	${media.tabletPortraitAndBelow`
		font-size: ${font.h4Mobile};
	`}
}

p {
	font-size: ${font.p};
	line-height: ${font.pLineHeight};
	${media.smallDesktopAndBelow`
		font-size: ${font.pMobile};
	`}
}

ul {
	list-style-type: none;
}

small {
	font-family: ${font.family200};
	font-size: ${font.small};
	text-transform: uppercase;
	${media.smallDesktopAndBelow`
		font-size: ${font.smallMobile};
	`}
}

main {
	padding-top: 10.4rem;
	${media.smallDesktopAndBelow`
		padding-top: 104px;
	`}
	${media.tabletLandscapeAndBelow`
		padding-top: 60px;
	`}
}

main > section:nth-child(even) {
	background: ${(props) => props.theme.grey10};
}

button {
	background: transparent;
	border: initial;
}

a.cta:hover {
	text-decoration: underline;
	text-underline-offset: 0.3rem;
	${media.smallDesktopAndBelow`
		text-underline-offset: 3px;
	`}
}


`;

export default GlobalStyles;
