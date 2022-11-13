import styled from 'styled-components';

export const StyledFeedbackCartItemsCount = styled.span`
  margin: 1rem;

  color: ${(props) => props.theme.colors.header.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  font-style: italic;
  user-select: none;
`;

export default StyledFeedbackCartItemsCount;
