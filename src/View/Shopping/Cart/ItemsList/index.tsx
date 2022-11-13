import React from 'react';
import ReactDOM from 'react-dom';
import { APP_BACKDROP_ROOT, APP_MODAL_ROOT } from '../../../../Core/App.settings';
import { IProduct } from '../../../../Store/products.store';
import StyledBackdrop from '../../../Shared/Backdrop';
import { BaseButton } from '../../../Shared/Button';
import Text, { H2 } from '../../../Shared/Typography';
import StyledModal, { StyledModalWrapper } from './styles';

export interface IPropsCartItemsModal {
  onClose: () => void;
  cartItems?: IProduct[];
}

function CartItemModal({ onClose, cartItems }: IPropsCartItemsModal) {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <H2>Modal</H2>
        <Text>{JSON.stringify(cartItems)}</Text>
        <BaseButton onClick={onClose}>close</BaseButton>
      </StyledModal>
    </StyledModalWrapper>
  );
}

function CartItemsList({ onClose, cartItems }: IPropsCartItemsModal) {
  const modalRoot = document.getElementById(APP_MODAL_ROOT) as HTMLElement;
  const backdropRoot = document.getElementById(
    APP_BACKDROP_ROOT
  ) as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop />, backdropRoot)}
      {ReactDOM.createPortal(
        <CartItemModal onClose={onClose} cartItems={cartItems} />,
        modalRoot
      )}
    </>
  );
}

export default CartItemsList;
