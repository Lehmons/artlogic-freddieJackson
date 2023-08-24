// ****************************************/
// Hero
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const HeroStyles = styled.section`
  background: ${(props) => props.theme.blue};
  display: flex;
  height: calc(100vh - 10.4rem);
  ${media.smallDesktopAndBelow`
    height: calc(100vh - 104px);
  `}
  ${media.tabletLandscapeAndBelow`
    flex-direction: column-reverse;
    height: auto;
  `}


  h1,
  h2,
  small {
    color: white;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletLandscapeAndBelow`
      padding-top: 80px;
      padding-bottom: 80px;
    `}
    ${media.tabletPortraitAndBelow`
      padding-top: 40px;
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }

  h1 {
    margin-top: 6.8rem;
    ${media.smallDesktopAndBelow`
      margin-top: 68px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-top: 40px;
    `}
  }

  h2 {
    margin-top: 2rem;
    ${media.smallDesktopAndBelow`
      margin-top: 25px;
    `}
  }

  figure {
    flex-basis: 84.6rem;
    height: 100%;
    ${media.smallDesktopAndBelow`
      flex-basis: 846px;
    `}
    ${media.tabletLandscapeAndBelow`
      flex-basis: initial;
      height: 66.67vw;
    `}
  }

  figure section,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;

export default HeroStyles;
