import styled from 'styled-components';
import Text from '../../Shared/Typography';

export const StyledHeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.header.background};

  display: grid;
  grid-template-columns: auto 2fr 1fr;
  grid-template-areas: 'title info asideMenu';
  align-items: center;
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
