import React, { useState } from 'react';
import { CartState } from '../../../../Store/cartItems.store';
import { useStore } from '../../../../Store/store';

import CartItemsFeedback from '../CartItemsFeedback';
import CartItemsView from '../CartItemsView';

import { StyledGoToCartButton, StyledWrapper } from './styles';

function OpenCart() {
  const [openCart, setOpenCart] = useState(false);
  const cartState = useStore()[0].cart as CartState;

  const handleClicked = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <StyledWrapper>
      {openCart && <CartItemsView onClose={handleClicked} cart={cartState} />}
      <CartItemsFeedback cartItemCount={cartState.totalItemsCount} />
      <StyledGoToCartButton onClick={handleClicked}>[i]</StyledGoToCartButton>
    </StyledWrapper>
  );
}

export default OpenCart;
