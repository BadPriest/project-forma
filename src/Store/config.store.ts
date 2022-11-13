import configureProductStore from './products.store';
import configureCartItemsStore from './cartItems.store';

export const configStores = () => {
  configureProductStore();
  configureCartItemsStore();
};

export default configStores;
