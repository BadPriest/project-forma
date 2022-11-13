import styled from 'styled-components';
import Text, { H2, H3 } from '../../../Shared/Typography';

export const StyledWrapper = styled.article`
  margin: 2rem 0;
  display: grid;

  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'photo title . price'
    'photo description . addToCart';
`;

export const StyledImageWrapper = styled.div`
  grid-area: photo;
  align-self: center;
  justify-self: center;

  margin: 1rem;
`;
export const StyledProductInfoWrapper = styled.header``;

export const StyledProductName = styled(H2)`
  grid-area: title;
  text-transform: capitalize;
  font-style: italic;

  margin-bottom: 0;
`;

export const StyledProductDescription = styled(Text)`
  grid-area: description;

  margin: 0;
`;

export const StyledProductPrice = styled(H3)`
  grid-area: price;

  margin-bottom: 0;
  margin-left: auto;
`;

export const StyledProductAddToCart = styled(Text)`
  grid-area: addToCart;
  margin-left: auto;
`;

export default StyledWrapper;
