// ****************************************/
// Nav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10.4rem;
  background: ${(props) => props.theme.blue};
  z-index: 2;
  padding: 0 ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    height: 104px;
    padding: 0 ${(props) => props.theme.sitePaddingLeftRightDesktop};
  `}
  ${media.tabletLandscapeAndBelow`
    height: 60px;
  `}
  ${media.tabletPortraitAndBelow`
    padding: 0 ${(props) => props.theme.sitePaddingLeftRightMobile};
  `}

  p {
    color: white;
    font-family: ${font.family100};
    font-size: ${font.logo};
    ${media.smallDesktopAndBelow`
      font-size: ${font.logoTablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.logoMobile};
      margin-top: 5px;
    `}
  }

  ul {
    ${media.tabletLandscapeAndBelow`
      display: none;
      user-select: none;
    `}
  }

  li {
    display: inline-block;
    color: white;
  }

  li + li {
    margin-left: 0.7rem;
    ${media.smallDesktopAndBelow`
      margin-left: 7px;
    `}
  }

  li a {
    padding: 0.8rem 1.2rem;
    ${media.smallDesktopAndBelow`
      padding: 8px 12px;
    `}
  }

  ul > li:last-child(1) a {
    padding-right: initial;
  }

  .is-mobile {
    display: none;
    user-select: none;
    ${media.tabletLandscapeAndBelow`
      display: block;
      user-select: initial;
    `}
  }
`;

export default NavStyles;
