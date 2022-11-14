import styled from 'styled-components';
import Text from '../../Shared/Typography';

export const StyledHeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.header.background};

  position: relative;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  grid-template-areas: 'title info asideMenu';
  align-items: center;

  &::after {
    content: '';
    background-color: ${(props) => props.theme.colors.header.background};

    height: 1.2rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    clip-path: polygon(
      0 0,
      2.5% 100%,
      5% 0,
      7.5% 100%,
      10% 0,
      12.5% 100%,
      15% 0,
      17.5% 100%,
      20% 0,
      22.5% 100%,
      25% 0,
      27.5% 100%,
      30% 0,
      32.5% 100%,
      35% 0,
      37.5% 100%,
      40% 0,
      42.5% 100%,
      45% 0,
      47.5% 100%,
      50% 0,
      52.5% 100%,
      55% 0,
      57.5% 100%,
      60% 0,
      62.5% 100%,
      65% 0,
      67.5% 100%,
      70% 0,
      72.5% 100%,
      75% 0,
      77.5% 100%,
      80% 0,
      82.5% 100%,
      85% 0,
      87.5% 100%,
      90% 0,
      92.5% 100%,
      95% 0,
      97.5% 100%,
      100% 0
    );
  }
`;

export const StyledHeaderTitle = styled.h2`
  grid-area: title;

  color: ${(props) => props.theme.colors.header.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  font-size: 2.5rem;
  margin: 0.3rem 0.5em;
`;

export const StyledHeaderInfo = styled(Text)`
  grid-area: info;

  color: ${(props) => props.theme.colors.header.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  font-style: italic;

  margin: 1.1rem;
`;

export const StyledAsideMenu = styled.div`
  grid-area: asideMenu;

  margin-left: auto;
`;
