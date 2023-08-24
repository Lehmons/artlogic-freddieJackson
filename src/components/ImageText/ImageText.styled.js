// ****************************************/
// ImageText
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageTextStyles = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    padding: ${(props) => props.theme.sitePaddingLeftRightDesktop};
  `}
  ${media.tabletLandscapeAndBelow`
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
  `}
  ${media.tabletPortraitAndBelow`
    padding: 80px ${(props) => props.theme.sitePaddingLeftRightMobile};
  `}

  figure {
    flex-basis: 64.7rem;
    ${media.smallDesktopAndBelow`
      flex-basis: 647px;
    `}
    ${media.tabletPortraitAndBelow`
      flex-basis: initial;
    `}
  }

  figure a,
  figure img {
    width: 100%;
  }

  .text {
    display: grid;
    row-gap: 4rem;
    flex-basis: 49.6rem;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    padding-left: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
      row-gap: 40px;
      flex-basis: 496px;
      padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletLandscapeAndBelow`
      padding-left: initial;
      flex-basis: initial;
      align-content: flex-start;
      padding-top: 40px;
    `}
  }

  &.is-image-right {
    flex-direction: row-reverse;
    justify-content: space-between;
    ${media.tabletLandscapeAndBelow`
      flex-direction: column;
    `}
  }

  &.is-image-right .text {
    padding-left: initial;
    padding-right: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
      padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }
`;

export default ImageTextStyles;
