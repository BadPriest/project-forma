import React from 'react';
import StyledWrapper, { StyledLabel, StyledPrice } from './styles';

export interface IPropsCartTotalPriceFeedback {
  totalPrice?: number;
}

function CartTotalPriceFeedback({
  totalPrice = 0,
}: IPropsCartTotalPriceFeedback) {
  return (
    <StyledWrapper>
      {!!totalPrice && (
        <>
          <StyledLabel>total</StyledLabel>
          <StyledPrice>{totalPrice} €</StyledPrice>
        </>
      )}
    </StyledWrapper>
  );
}

export default CartTotalPriceFeedback;
