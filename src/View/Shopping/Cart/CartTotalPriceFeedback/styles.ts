import styled from 'styled-components';
import Text, { H3 } from '../../../Shared/Typography';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  grid-template-areas: '. . labelText total';
  align-items: center;
  justify-content: center;
`;

export const StyledLabel = styled(H3)`
  grid-area: labelText;
  text-transform: capitalize;
  font-style: italic;
`;

export const StyledPrice = styled(Text)`
  grid-area: total;
`;

export default StyledWrapper;
