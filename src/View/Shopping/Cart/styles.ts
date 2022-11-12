import styled from 'styled-components';
import { CircleButton } from '../../Shared/Button';

export const StyledWrapper = styled.div`
  height: 100%;
  border: 1px solid red;
`;

export const StyledFeedbackCartItemsCount = styled.span`
  margin: 1rem;

  color: ${(props) => props.theme.colors.header.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  font-style: italic;
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
