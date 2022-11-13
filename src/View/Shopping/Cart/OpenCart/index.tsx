import React, { useState } from 'react';
import { useStore } from '../../../../Store/store';
import CartItemsFeedback from '../CartItemsFeedback';
import CartItemsList from '../ItemsList';
import { StyledGoToCartButton, StyledWrapper } from './styles';

function OpenCart() {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useStore()[0];

  const handleClicked = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <StyledWrapper>
      {openCart && (
        <CartItemsList onClose={handleClicked} cartItems={cartItems} />
      )}
      <CartItemsFeedback cartItems={cartItems} />
      <StyledGoToCartButton onClick={handleClicked}>[i]</StyledGoToCartButton>
    </StyledWrapper>
  );
}

export default OpenCart;
