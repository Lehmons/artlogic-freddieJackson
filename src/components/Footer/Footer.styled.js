// ****************************************/
// Footer
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FooterStyles = styled.footer`
  display: grid;
  row-gap: 9.8rem;
  ${media.smallDesktopAndBelow`
    row-gap: 98px;
  `}
  background: ${(props) => props.theme.black10};
  width: 100%;
  padding: ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    padding: ${(props) => props.theme.sitePaddingLeftRightDesktop};
  `}
  ${media.tabletLandscapeAndBelow`
    padding-top: 80px;
    padding-bottom: 80px;
    row-gap: 80px;
  `}
  ${media.tabletPortraitAndBelow`
    padding: 80px ${(props) => props.theme.sitePaddingLeftRightMobile};
  `}

  li, small, span, a, h4 {
    color: white;
  }

  ul {
    display: flex;
    ${media.tabletPortraitAndBelow`
      flex-direction: column;
    `}
  }

  .address li {
    flex-basis: 18rem;
    ${media.smallDesktopAndBelow`
      flex-basis: 180px;
    `}
    ${media.tabletPortraitAndBelow`
      flex-basis: initial;
    `}
  }

  .address li + li {
    margin-left: 21.8rem;
    ${media.smallDesktopAndBelow`
      margin-left: 218px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-top: 40px;
      margin-left: initial;
    `}
  }

  .address a {
    display: block;
  }

  span {
    display: block;
    font-family: ${font.family100};
    font-size: ${font.footer};
    line-height: ${font.footerLineHeight};
    margin-top: 2.3rem;
    ${media.smallDesktopAndBelow`
      font-size: ${font.footerTablet};
      margin-top: 23px;
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.footerMobile};
    `}
  }

  .credit li + li {
    margin-left: 4.3rem;
    ${media.smallDesktopAndBelow`
      margin-left: 43px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-top: 25px;
      margin-left: initial;
    `}
  }
`;

export default FooterStyles;
