import React from 'react';
import { useStore } from '../../../../Store/store';
import { StyledFeedbackCartItemsCount } from './styles';

function CartItemsFeedback() {
  const { cartItems } = useStore()[0];

  const renderItemCounterFeedback = () => {
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
    <StyledFeedbackCartItemsCount>
      {renderItemCounterFeedback()}
    </StyledFeedbackCartItemsCount>
  );
}

export default CartItemsFeedback;
