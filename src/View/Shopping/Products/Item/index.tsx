import React from 'react';
import { IProduct } from '../../../../Store/products.store';
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
  return (
    <StyledWrapper>
      <StyledImageWrapper>[img]</StyledImageWrapper>
      <StyledProductName>{name}</StyledProductName>
      <StyledProductDescription>{description}</StyledProductDescription>
      <StyledProductPrice>{price} €</StyledProductPrice>
      <StyledProductAddToCart>
        <BaseButton>Add to cart</BaseButton>
      </StyledProductAddToCart>
    </StyledWrapper>
  );
}

export default ProductItem;
