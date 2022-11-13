import { initStore } from './store';

export const actions = {
  ADD_TO_CART: 'ADD_TO_CART'
}

const configureStore = () => {
  initStore(
    {
      ADD_TO_CART: (state: any, productId: string) => {
        const newState = [...state.cartItems, productId];
        return { cartItems: newState };
      },
    },
    { cartItems: [] }
  );
};

export default configureStore;
