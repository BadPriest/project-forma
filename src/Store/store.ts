import { useEffect, useState } from 'react';

let globalState: any = {};
let listeners: any[] = [];
let actions: any = {};

export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    listeners.forEach((listener) => {
      listener(globalState);
    });
  };

  useEffect(() => {
    // Each consumer will get his own instance of setState
    // This will be used to rerender the consumers when the
    // state changes

    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};
