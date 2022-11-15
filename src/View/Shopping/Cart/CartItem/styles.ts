import styled from 'styled-components';
import Text, { H3 } from '../../../Shared/Typography';

export const StyledWrapper = styled.article`
  margin: 1rem 0;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  grid-template-areas: 'photo title itemCount price';
`;

export const StyledThumbnailWrapper = styled.div`
  grid-area: photo;

  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.muted.text};
  background-color: ${({ theme }) => theme.colors.muted.surface};
`;

export const StyledCartItemName = styled(H3)`
  grid-area: title;
  margin-left: 1rem;
  text-transform: capitalize;
`;

export const StyledCartItemCount = styled(Text)`
  grid-area: itemCount;
`;

export const StyledCartItemPrice = styled(Text)`
  grid-area: price;
`;
