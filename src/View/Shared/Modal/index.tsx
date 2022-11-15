import React, { ReactNode } from 'react';
import { H2 } from '../Typography';
import StyledModal, {
  StyledCancelButton,
  StyledConfirmButton,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalWrapper,
} from './styles';

export interface IPropsModal {
  title: string;
  children: ReactNode;
  labelCancel: string | ReactNode;
  labelConfirm: string | ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

function Modal({
  title,
  children,
  onConfirm,
  onCancel,
  labelCancel,
  labelConfirm,
}: IPropsModal) {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <H2>{title}</H2>
        </StyledModalHeader>

        <StyledModalContent>{children}</StyledModalContent>

        <StyledModalFooter>
          <StyledCancelButton onClick={onCancel}>
            {labelCancel}
          </StyledCancelButton>
          <StyledConfirmButton onClick={onConfirm}>
            {labelConfirm}
          </StyledConfirmButton>
        </StyledModalFooter>
      </StyledModal>
    </StyledModalWrapper>
  );
}

export default Modal;
