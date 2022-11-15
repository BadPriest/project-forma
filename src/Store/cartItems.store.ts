import { IProduct } from './products.store';
import { initStore } from './store';

export const actions = {
  ADD_TO_CART: 'ADD_TO_CART',
};

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface CartState {
  items: ICartItem[];
  totalItemsCount: number;
  totalPrice: number;
}

const configureStore = () => {
  initStore(
    {
      ADD_TO_CART: (state: any, productId: string) => {
        const cartProductIndex = state.cart.items?.findIndex(
          (item: ICartItem) => item.product.id === productId
        );

        const isNewAdditionProduct =
          !!cartProductIndex && cartProductIndex === -1;

        let newState;
        if (isNewAdditionProduct) {
          newState = addNewProduct(state, productId);
        }

        if (!isNewAdditionProduct) {
          newState = addPreexistingProduct(state, productId, cartProductIndex);
        }

        const { newTotalItemsCount, newTotalPrice } = getUpdatedCounts(
          state,
          newState
        );

        return {
          cart: {
            items: newState,
            totalItemsCount: newTotalItemsCount,
            totalPrice: newTotalPrice,
          } as CartState,
        };
      },
    },
    {
      cart: {
        items: [] as ICartItem[],
        totalItemsCount: 0 as number,
        totalPrice: 0 as number,
      } as CartState,
    }
  );
};

const addNewProduct = (state: any, productId: string) => {
  const product = (state.products as IProduct[])
    .filter((p: IProduct) => p.id === productId)
    .pop();

  const newCartItem = { product, quantity: 1 } as ICartItem;
  const newState = [...state.cart.items, { ...newCartItem }];

  return newState;
};

const addPreexistingProduct = (
  state: any,
  productId: string,
  cartProductIndex: number
) => {
  const currentCartItems = state.cart.items as ICartItem[];
  const existingCarItem = currentCartItems[cartProductIndex];

  const updatedCartItem = {
    product: existingCarItem.product,
    quantity: existingCarItem.quantity + 1,
  } as ICartItem;

  const filteredState = state.cart.items.filter(
    (i: ICartItem) => i.product.id !== productId
  );

  const newState = [...filteredState, { ...updatedCartItem }];
  return newState;
};

const getUpdatedCounts = (globalState: any, cartItemsState: any) => {
  const newTotalItemsCount = globalState.cart.totalItemsCount + 1;
  const newTotalPrice = (cartItemsState as ICartItem[]).reduce(
    (previous, current) => {
      const sum = current.product.price * current.quantity;
      const newTotal = previous + sum;
      return newTotal;
    },
    0
  );

  return { newTotalItemsCount, newTotalPrice };
};

export default configureStore;
