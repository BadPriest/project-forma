import { IProduct } from './products.store';
import { initStore } from './store';

export const actions = {
  ADD_TO_CART: 'ADD_TO_CART',
};

export interface ICartItem {
  product: IProduct;
  itemCount: number;
}

const configureStore = () => {
  initStore(
    {
      ADD_TO_CART: (state: any, productId: string) => {
        const cartProductIndex = state.cartItems?.findIndex(
          (item: ICartItem) => item.product.id === productId
        );

        const isNewAdditionProduct =
          !!cartProductIndex && cartProductIndex === -1;

        const newTotalCount = state.totalItemsCount + 1;

        if (isNewAdditionProduct) {
          const newState = addNewProduct(state, productId);
          return { cartItems: newState, totalItemsCount: newTotalCount };
        }

        const newState = addPreexistingProduct(
          state,
          productId,
          cartProductIndex
        );

        return { cartItems: newState, totalItemsCount: newTotalCount };
      },
    },
    { cartItems: [], totalItemsCount: 0 }
  );
};

const addNewProduct = (state: any, productId: any) => {
  const product = (state.products as IProduct[])
    .filter((p: IProduct) => p.id === productId)
    .pop();

  const newCartItem = { product, itemCount: 1 } as ICartItem;
  const newState = [...state.cartItems, { ...newCartItem }];

  return newState;
};

const addPreexistingProduct = (
  state: any,
  productId: string,
  cartProductIndex: number
) => {
  const currentCartItems = state.cartItems as ICartItem[];
  const existingCarItem = currentCartItems[cartProductIndex];
  const updatedCartItem = {
    product: existingCarItem.product,
    itemCount: existingCarItem.itemCount + 1,
  };

  const filteredState = state.cartItems.filter(
    (i: ICartItem) => i.product.id !== productId
  );

  const newState = [...filteredState, { ...updatedCartItem }];

  return newState;
};

export default configureStore;
