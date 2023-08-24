// ****************************************/
// Related
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const RelatedStyles = styled.section`
  padding: 6.4rem ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    padding: 64px ${(props) => props.theme.sitePaddingLeftRightDesktop};
  `}
  ${media.tabletLandscapeAndBelow`
    padding-top: 80px;
    padding-bottom: 80px;
  `}
  ${media.tabletPortraitAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
  `}

  & > small {
    margin-top: 4rem;
    ${media.smallDesktopAndBelow`
      margin-top: 40px;
    `}
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5.2rem;
    row-gap: 6rem;
    margin-top: 4rem;
    ${media.tabletLandscapeAndBelow`
      grid-template-columns: repeat(2, 1fr);
      column-gap: 52px;
      row-gap: 60px;
      margin-top: 40px;
    `}
    ${media.tabletPortraitAndBelow`
      grid-template-columns: repeat(1, 1fr);
    `}
  }

  figure,
  img {
    width: 100%;
  }

  li {
    display: grid;
    row-gap: 1.5rem;
    ${media.smallDesktopAndBelow`
      row-gap: 15px;
    `}
  }
`;

export default RelatedStyles;
