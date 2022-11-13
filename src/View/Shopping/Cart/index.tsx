import React from 'react';
import { useStore } from '../../../Store/store';
import {
  StyledFeedbackCartItemsCount,
  StyledGoToCartButton,
  StyledWrapper,
} from './styles';

function ShoppingCart() {
  const { cartItems } = useStore()[0];

  const getItemCounterFeedback = () => {
    if (!cartItems?.length) {
      return <>No items in cart</>;
    }

    if (cartItems?.length === 1) {
      return (
        <>
          <strong>1</strong> item in cart
        </>
      );
    }

    return (
      <>
        <strong>{cartItems.length}</strong> items in cart
      </>
    );
  };

  return (
    <StyledWrapper>
      <StyledFeedbackCartItemsCount>
        {getItemCounterFeedback()}
      </StyledFeedbackCartItemsCount>
      <StyledGoToCartButton>[i]</StyledGoToCartButton>
    </StyledWrapper>
  );
}

export default ShoppingCart;
