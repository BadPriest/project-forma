import React from 'react';
import {
  StyledFeedbackCartItemsCount,
  StyledGoToCartButton,
  StyledWrapper,
} from './styles';

function ShoppingCart() {
  return (
    <StyledWrapper>
      <StyledFeedbackCartItemsCount>
        No items in cart
      </StyledFeedbackCartItemsCount>
      <StyledGoToCartButton>[i]</StyledGoToCartButton>
    </StyledWrapper>
  );
}

export default ShoppingCart;
