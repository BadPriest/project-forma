import React from 'react';
import { actions as cartItemActions } from '../../../../Store/cartItems.store';
import { IProduct } from '../../../../Store/products.store';
import { useStore } from '../../../../Store/store';
import { BaseButton } from '../../../Shared/Button';
import StyledWrapper, {
  StyledImageWrapper,
  StyledProductAddToCart,
  StyledProductDescription,
  StyledProductName,
  StyledProductPrice,
} from './styles';

export interface IPropsProductItem {
  product: IProduct;
}

function ProductItem({ product }: IPropsProductItem) {
  const { name, description, price, id } = product;
  const dispatch = useStore()[1];

  const handleClickedAddToCart = () => {
    dispatch(cartItemActions.ADD_TO_CART, id);
  };

  return (
    <StyledWrapper>
      <StyledImageWrapper>[img]</StyledImageWrapper>
      <StyledProductName>{name}</StyledProductName>
      <StyledProductDescription>{description}</StyledProductDescription>
      <StyledProductPrice>{price} €</StyledProductPrice>
      <StyledProductAddToCart>
        <BaseButton onClick={handleClickedAddToCart}>Add to cart</BaseButton>
      </StyledProductAddToCart>
    </StyledWrapper>
  );
}

export default ProductItem;
