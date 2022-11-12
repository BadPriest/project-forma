import React from 'react';
import { IProduct } from '../../../../Store/products.store';
import { BaseButton } from '../../../Shared/Button';
import Text from '../../../Shared/Text';
import StyledWrapper from './styles';

export interface IPropsProductItem {
  product: IProduct;
}

function ProductItem({ product }: IPropsProductItem) {
  const { name, description, price, id } = product;
  return (
    <StyledWrapper>
      <Text>
        {name}, {price}
      </Text>
      <Text>{description}</Text>
      <BaseButton>Add to cart</BaseButton>
    </StyledWrapper>
  );
}

export default ProductItem;
