import styled from 'styled-components';
import Text from '../../../Shared/Typography';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;

  grid-template-areas: '. . labelText total';
`;

export const StyledLabel = styled(Text)`
  grid-area: labelText;
`;

export const StyledPrice = styled(Text)`
  grid-area: total;
`;

export default StyledWrapper;
