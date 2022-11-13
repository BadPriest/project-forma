import styled from 'styled-components';
import { CircleButton } from '../../../Shared/Button';

export const StyledWrapper = styled.div`
  height: 100%;
`;

export const StyledGoToCartButton = styled(CircleButton)`
  margin: 1rem;

  color: ${({ theme }) => theme.colors.header.interactive.text};
  background-color: ${({ theme }) => theme.colors.header.interactive.surface};

  &:hover {
    color: ${({ theme }) => theme.colors.header.interactive.textActive};
    background-color: ${({ theme }) =>
      theme.colors.header.interactive.surfaceActive};
  }
`;
