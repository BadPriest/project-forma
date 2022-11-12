import styled from 'styled-components';
import Text from '../../Shared/Text';

export const StyledHeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.interactive.surface};

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'title info shoppingCart';
`;

export const StyledHeaderTitle = styled.h2`
  color: ${(props) => props.theme.colors.interactive.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  font-size: 2.5rem;
  margin: 0.3rem 0.5em;
`;

export const StyledHeaderInfo = styled(Text)`
  color: ${(props) => props.theme.colors.interactive.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  margin: 1.1rem;
`;

export const StyledHeaderCart = styled(Text)`
  color: ${(props) => props.theme.colors.interactive.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  margin: 1.1rem;
  margin-left: auto;
`;
