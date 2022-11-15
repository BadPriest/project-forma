import React from 'react';
import ReactDOM from 'react-dom';
import {
  APP_BACKDROP_ROOT,
  APP_MODAL_ROOT,
} from '../../../../Core/App.settings';
import { ICartItem } from '../../../../Store/cartItems.store';
import { IProduct } from '../../../../Store/products.store';
import { useStore } from '../../../../Store/store';
import StyledBackdrop from '../../../Shared/Backdrop';
import Modal from '../../../Shared/Modal';
import Text from '../../../Shared/Typography';
import CartItem from '../CartItem';
import { StyledWrapper } from './styles';

export interface IPropsCartItemsModal {
  onClose: () => void;
  cartProducts?: ICartItem[];
}

function CartItemModal({ onClose, cartProducts }: IPropsCartItemsModal) {
  return (
    <Modal
      title="Shopping cart"
      labelCancel="keep shopping"
      labelConfirm="go to checkout"
      onCancel={onClose}
      onConfirm={() => console.log('OK')}
    >
      <StyledWrapper>
        {cartProducts &&
          cartProducts.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
      </StyledWrapper>
    </Modal>
  );
}

function CartItemsView({
  onClose,
  cartProducts: cartItems,
}: IPropsCartItemsModal) {
  const modalRoot = document.getElementById(APP_MODAL_ROOT) as HTMLElement;
  const backdropRoot = document.getElementById(
    APP_BACKDROP_ROOT
  ) as HTMLElement;

  // TODO: filter products by id, add item count based on ID repetition
  // const { products } = useStore()[0];

  const cartProducts = cartItems;

  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop />, backdropRoot)}
      {ReactDOM.createPortal(
        // <CartItemModal onClose={onClose} cartItems={cartItems} />,
        <CartItemModal onClose={onClose} cartProducts={cartProducts} />,
        modalRoot
      )}
    </>
  );
}

export default CartItemsView;
