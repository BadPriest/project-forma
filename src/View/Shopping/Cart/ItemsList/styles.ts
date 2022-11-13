import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: grid;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.div`
  min-width: 40rem;
  min-height: 15rem;
  max-height: 30rem;

  margin-top: -20rem;

  z-index: 100;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.body.surface};
`;

export default StyledModal;
