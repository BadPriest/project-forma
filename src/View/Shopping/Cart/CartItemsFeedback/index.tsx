import React from 'react';
import { StyledFeedbackCartItemsCount } from './styles';

export interface IPropsCartItemsFeedback {
  cartItemCount: number;
}

function CartItemsFeedback({ cartItemCount }: IPropsCartItemsFeedback) {
  const renderItemCounterFeedback = () => {
    if (!cartItemCount) {
      return <>No items in cart</>;
    }

    if (cartItemCount === 1) {
      return (
        <>
          <strong>1</strong> item in cart
        </>
      );
    }

    return (
      <>
        <strong>{cartItemCount}</strong> items in cart
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
