import React from 'react';
import {
  StyledHeaderWrapper,
  StyledHeaderTitle,
  StyledHeaderInfo,
  StyledHeaderCart,
} from './styles';

function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitle>whee</StyledHeaderTitle>
      <StyledHeaderInfo>
        <i>The most definitive shape store in the world</i>
      </StyledHeaderInfo>
      <StyledHeaderCart>No items in cart [cart-icon-button]</StyledHeaderCart>
    </StyledHeaderWrapper>
  );
}

export default Header;
