import React from 'react';
import ReactDOM from 'react-dom';
import {
  APP_BACKDROP_ROOT,
  APP_MODAL_ROOT,
} from '../../../../Core/App.settings';

import { ICartItem } from '../../../../Store/cartItems.store';

import StyledBackdrop from '../../../Shared/Backdrop';
import Modal from '../../../Shared/Modal';
import CartItem from '../CartItem';
import CartTotalPriceFeedback from '../CartTotalPriceFeedback';

import { StyledWrapper } from './styles';

export interface IPropsCartItemsModal {
  onClose: () => void;
  cart?: { items: ICartItem[]; totalItemsCount: number; totalPrice: number };
}

function CartItemModal({ onClose, cart }: IPropsCartItemsModal) {
  return (
    <Modal
      title="Shopping cart"
      labelCancel="keep shopping"
      labelConfirm="go to checkout"
      onCancel={onClose}
      onConfirm={() => console.log('OK')}
    >
      <StyledWrapper>
        {cart &&
          cart.items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        <CartTotalPriceFeedback totalPrice={cart?.totalPrice} />
      </StyledWrapper>
    </Modal>
  );
}

function CartItemsView({ onClose, cart }: IPropsCartItemsModal) {
  const modalRoot = document.getElementById(APP_MODAL_ROOT) as HTMLElement;
  const backdropRoot = document.getElementById(
    APP_BACKDROP_ROOT
  ) as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop />, backdropRoot)}
      {ReactDOM.createPortal(
        <CartItemModal onClose={onClose} cart={cart} />,
        modalRoot
      )}
    </>
  );
}

export default CartItemsView;
