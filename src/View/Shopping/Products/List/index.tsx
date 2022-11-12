import React from 'react';
import { useStore } from '../../../../Store/store';
import ProductItem from '../Item';

function ProductList() {
  const { products } = useStore()[0];

  return (
    <>
      Products!
      {!!products.length &&
        products.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </>
  );
}

export default ProductList;
