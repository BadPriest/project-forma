import { ReactNode } from 'react';
import { initStore } from './store';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string | ReactNode;
}

const configureStore = () => {
  initStore('', {
    products: [
      {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: 'circle',
        description: "Perfect choice when you don't need any corners",
        price: 999,
      } as IProduct,
      {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: 'rectangle',
        description: "For once, it's a great idea to think inside the box",
        price: 899,
      } as IProduct,
      {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: 'triangle',
        description: 'A true classic with three elegant corners',
        price: 1009,
      } as IProduct,
    ],
  });
};

export default configureStore;
