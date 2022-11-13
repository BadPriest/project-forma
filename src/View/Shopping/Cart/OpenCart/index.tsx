import React from 'react';
import CartItemsFeedback from '../CartItemsFeedback';
import { StyledGoToCartButton, StyledWrapper } from './styles';

function OpenCart() {
  return (
    <StyledWrapper>
      <CartItemsFeedback />
      <StyledGoToCartButton>[i]</StyledGoToCartButton>
    </StyledWrapper>
  );
}

export default OpenCart;
