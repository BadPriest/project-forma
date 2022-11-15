import React from 'react';
import { ICartItem } from '../../../../Store/cartItems.store';
import { IProduct } from '../../../../Store/products.store';
import {
  StyledCartItemCount,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledThumbnailWrapper,
  StyledWrapper,
} from './styles';

export interface IPropsCartItem {
  item: ICartItem;
}

function CartItem({ item }: IPropsCartItem) {
  const { name, description, price } = item.product as IProduct;
  const { quantity: itemCount } = item;

  return (
    <StyledWrapper>
      <StyledThumbnailWrapper>[tmb]</StyledThumbnailWrapper>
      <StyledCartItemName>{name}</StyledCartItemName>
      <StyledCartItemCount>{itemCount}</StyledCartItemCount>
      <StyledCartItemPrice>{price} €</StyledCartItemPrice>
    </StyledWrapper>
  );
}

export default CartItem;
