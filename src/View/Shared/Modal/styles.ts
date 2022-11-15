import styled from 'styled-components';
import { BaseButton } from '../Button';

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
  position: relative;
  min-width: 40rem;
  min-height: 15rem;
  max-height: 30rem;

  margin-top: -20rem;

  z-index: 111;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.body.surface};

  display: grid;
  grid-template-rows: [header] 4rem [content] auto [footer] 3rem;
`;

export const StyledModalHeader = styled.header`
  margin: 0 2rem;
`;

export const StyledModalContent = styled.main``;

export const StyledModalFooter = styled.footer`
  display: grid;
  grid-template-columns: 3fr 2fr 0.5fr 2fr;
  grid-template-areas: '. cancel . confirm';
  margin: 0 2rem;
  margin-bottom: 2rem;
`;

export const StyledCancelButton = styled(BaseButton)`
  border: none;
  grid-area: cancel;
  text-transform: lowercase;
`;

export const StyledConfirmButton = styled(BaseButton)`
  grid-area: confirm;
`;

export default StyledModal;
