import React from 'react';
import ReactDOM from 'react-dom';
import {
  APP_BACKDROP_ROOT,
  APP_MODAL_ROOT,
} from '../../../../Core/App.settings';
import { IProduct } from '../../../../Store/products.store';
import StyledBackdrop from '../../../Shared/Backdrop';
import Modal from '../../../Shared/Modal';
import Text from '../../../Shared/Typography';

export interface IPropsCartItemsModal {
  onClose: () => void;
  cartItems?: IProduct[];
}

function CartItemModal({ onClose, cartItems }: IPropsCartItemsModal) {
  return (
    <Modal
      title="Shopping cart"
      labelCancel="keep shopping"
      labelConfirm="go to checkout"
      onCancel={onClose}
      onConfirm={() => console.log('OK')}
    >
      <Text>{JSON.stringify(cartItems)}</Text>
    </Modal>
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
