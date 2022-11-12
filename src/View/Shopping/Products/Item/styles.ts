import styled from 'styled-components';

export const StyledWrapper = styled.article`
  margin: 2rem;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > button {
    margin-left: auto;
  }
`;

export default StyledWrapper;
