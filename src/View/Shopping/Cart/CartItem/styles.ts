import styled from 'styled-components';
import Text from '../../../Shared/Typography';

export const StyledWrapper = styled.article`
  border: 1px solid red;
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

export const StyledCartItemName = styled(Text)`
  grid-area: title;
`;

export const StyledCartItemCount = styled(Text)`
  grid-area: itemCount;
`;

export const StyledCartItemPrice = styled(Text)`
  grid-area: price;
`;
