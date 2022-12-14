import styled from 'styled-components';
import Text from '../../Shared/Typography';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.surface};
  color: ${({ theme }) => theme.colors.footer.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1em;

  overflow: hidden;
`;

export const StyledInfo = styled(Text)`
  margin: 0;
  color: ${({ theme }) => theme.colors.surface};
`;

export const StyledInfoHero = styled(StyledInfo)`
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  color: ${({ theme }) => theme.colors.surface};
  font-size: 2rem;
`;

export const StyledLink = styled.a`
  text-decoration: inherit;
  color: inherit;
`;

export default StyledFooter;
